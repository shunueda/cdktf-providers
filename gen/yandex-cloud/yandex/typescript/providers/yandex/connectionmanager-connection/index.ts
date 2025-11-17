// https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionmanagerConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection_service.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#connection_id ConnectionmanagerConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#description ConnectionmanagerConnection#description}
  */
  readonly description?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#folder_id ConnectionmanagerConnection#folder_id}
  */
  readonly folderId?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection_service.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#id ConnectionmanagerConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#labels ConnectionmanagerConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#name ConnectionmanagerConnection#name}
  */
  readonly name?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#params ConnectionmanagerConnection#params}
  */
  readonly params?: ConnectionmanagerConnectionParams;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#timeouts ConnectionmanagerConnection#timeouts}
  */
  readonly timeouts?: ConnectionmanagerConnectionTimeouts;
}
export interface ConnectionmanagerConnectionLockboxSecret {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#id ConnectionmanagerConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function connectionmanagerConnectionLockboxSecretToTerraform(struct?: ConnectionmanagerConnectionLockboxSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function connectionmanagerConnectionLockboxSecretToHclTerraform(struct?: ConnectionmanagerConnectionLockboxSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionLockboxSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionLockboxSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionLockboxSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
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

  // newest_version - computed: true, optional: false, required: false
  public get newestVersion() {
    return this.getStringAttribute('newest_version');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsClickhouseAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsClickhouseAuthUserPassword;
}

export function connectionmanagerConnectionParamsClickhouseAuthToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsClickhouseAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsClickhouseAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsClickhouseAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsClickhouseAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsClickhouseAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#http_port ConnectionmanagerConnection#http_port}
  */
  readonly httpPort?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#shard_name ConnectionmanagerConnection#shard_name}
  */
  readonly shardName?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tcp_port ConnectionmanagerConnection#tcp_port}
  */
  readonly tcpPort?: number;
}

export function connectionmanagerConnectionParamsClickhouseClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    shard_name: cdktf.stringToTerraform(struct!.shardName),
    tcp_port: cdktf.numberToTerraform(struct!.tcpPort),
  }
}


export function connectionmanagerConnectionParamsClickhouseClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_name: {
      value: cdktf.stringToHclTerraform(struct!.shardName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._shardName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardName = this._shardName;
    }
    if (this._tcpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPort = this._tcpPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._httpPort = undefined;
      this._shardName = undefined;
      this._tcpPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._httpPort = value.httpPort;
      this._shardName = value.shardName;
      this._tcpPort = value.tcpPort;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // shard_name - computed: true, optional: true, required: false
  private _shardName?: string; 
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
  public set shardName(value: string) {
    this._shardName = value;
  }
  public resetShardName() {
    this._shardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNameInput() {
    return this._shardName;
  }

  // tcp_port - computed: true, optional: true, required: false
  private _tcpPort?: number; 
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
  public set tcpPort(value: number) {
    this._tcpPort = value;
  }
  public resetTcpPort() {
    this._tcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortInput() {
    return this._tcpPort;
  }
}

export class ConnectionmanagerConnectionParamsClickhouseClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsClickhouseClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsClickhouseClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsClickhouseClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseClusterShardGroups {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#name ConnectionmanagerConnection#name}
  */
  readonly name?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#shard_names ConnectionmanagerConnection#shard_names}
  */
  readonly shardNames?: string[];
}

export function connectionmanagerConnectionParamsClickhouseClusterShardGroupsToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterShardGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    shard_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shardNames),
  }
}


export function connectionmanagerConnectionParamsClickhouseClusterShardGroupsToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterShardGroups | cdktf.IResolvable): any {
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
    shard_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shardNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseClusterShardGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseClusterShardGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shardNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardNames = this._shardNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseClusterShardGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._shardNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._shardNames = value.shardNames;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // shard_names - computed: true, optional: true, required: false
  private _shardNames?: string[]; 
  public get shardNames() {
    return this.getListAttribute('shard_names');
  }
  public set shardNames(value: string[]) {
    this._shardNames = value;
  }
  public resetShardNames() {
    this._shardNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNamesInput() {
    return this._shardNames;
  }
}

export class ConnectionmanagerConnectionParamsClickhouseClusterShardGroupsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsClickhouseClusterShardGroups[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsClickhouseClusterShardGroupsOutputReference {
    return new ConnectionmanagerConnectionParamsClickhouseClusterShardGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsClickhouseClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsClickhouseClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouseCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsClickhouseClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#shard_groups ConnectionmanagerConnection#shard_groups}
  */
  readonly shardGroups?: ConnectionmanagerConnectionParamsClickhouseClusterShardGroups[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsClickhouseClusterTlsParams;
}

export function connectionmanagerConnectionParamsClickhouseClusterToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsClickhouseClusterHostsToTerraform, false)(struct!.hosts),
    shard_groups: cdktf.listMapper(connectionmanagerConnectionParamsClickhouseClusterShardGroupsToTerraform, false)(struct!.shardGroups),
    tls_params: connectionmanagerConnectionParamsClickhouseClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsClickhouseClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouseCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsClickhouseClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseClusterHostsList",
    },
    shard_groups: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsClickhouseClusterShardGroupsToHclTerraform, false)(struct!.shardGroups),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseClusterShardGroupsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsClickhouseClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouseCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._shardGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardGroups = this._shardGroups?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouseCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._shardGroups.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._shardGroups.internalValue = value.shardGroups;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsClickhouseClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsClickhouseClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // shard_groups - computed: true, optional: true, required: false
  private _shardGroups = new ConnectionmanagerConnectionParamsClickhouseClusterShardGroupsList(this, "shard_groups", false);
  public get shardGroups() {
    return this._shardGroups;
  }
  public putShardGroups(value: ConnectionmanagerConnectionParamsClickhouseClusterShardGroups[] | cdktf.IResolvable) {
    this._shardGroups.internalValue = value;
  }
  public resetShardGroups() {
    this._shardGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardGroupsInput() {
    return this._shardGroups.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsClickhouseClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsClickhouseClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsClickhouse {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsClickhouseAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsClickhouseCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/clickhouse.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: string[];
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsClickhouseToTerraform(struct?: ConnectionmanagerConnectionParamsClickhouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsClickhouseAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsClickhouseClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsClickhouseToHclTerraform(struct?: ConnectionmanagerConnectionParamsClickhouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsClickhouseAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsClickhouseClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouseCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsClickhouse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsClickhouse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsClickhouseAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsClickhouseAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsClickhouseClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsClickhouseCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsGreenplumAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsGreenplumAuthUserPassword;
}

export function connectionmanagerConnectionParamsGreenplumAuthToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsGreenplumAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsGreenplumAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsGreenplumAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsGreenplumAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsGreenplumAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#role ConnectionmanagerConnection#role}
  */
  readonly role?: string;
}

export function connectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function connectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._role = value.role;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsOutputReference {
    return new ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsGreenplumClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsGreenplumClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplumCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#coordinator_hosts ConnectionmanagerConnection#coordinator_hosts}
  */
  readonly coordinatorHosts?: ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsGreenplumClusterTlsParams;
}

export function connectionmanagerConnectionParamsGreenplumClusterToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinator_hosts: cdktf.listMapper(connectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsToTerraform, false)(struct!.coordinatorHosts),
    tls_params: connectionmanagerConnectionParamsGreenplumClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsGreenplumClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplumCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinator_hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsToHclTerraform, false)(struct!.coordinatorHosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsGreenplumClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplumCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinatorHosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinatorHosts = this._coordinatorHosts?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplumCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coordinatorHosts.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coordinatorHosts.internalValue = value.coordinatorHosts;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // coordinator_hosts - computed: true, optional: true, required: false
  private _coordinatorHosts = new ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHostsList(this, "coordinator_hosts", false);
  public get coordinatorHosts() {
    return this._coordinatorHosts;
  }
  public putCoordinatorHosts(value: ConnectionmanagerConnectionParamsGreenplumClusterCoordinatorHosts[] | cdktf.IResolvable) {
    this._coordinatorHosts.internalValue = value;
  }
  public resetCoordinatorHosts() {
    this._coordinatorHosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorHostsInput() {
    return this._coordinatorHosts.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsGreenplumClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsGreenplumClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsGreenplum {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsGreenplumAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsGreenplumCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/greenplum.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: string[];
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsGreenplumToTerraform(struct?: ConnectionmanagerConnectionParamsGreenplum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsGreenplumAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsGreenplumClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsGreenplumToHclTerraform(struct?: ConnectionmanagerConnectionParamsGreenplum | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsGreenplumAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsGreenplumClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplumCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsGreenplumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsGreenplum | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsGreenplum | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsGreenplumAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsGreenplumAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsGreenplumClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsGreenplumCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaAuthDisabled {
}

export function connectionmanagerConnectionParamsKafkaAuthDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsKafkaAuthDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsKafkaAuthDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaAuthDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaAuthDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaAuthSaslPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsKafkaAuthSaslPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSaslPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsKafkaAuthSaslPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSaslPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaAuthSaslPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaAuthSaslPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaAuthSasl {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsKafkaAuthSaslPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#supported_mechanisms ConnectionmanagerConnection#supported_mechanisms}
  */
  readonly supportedMechanisms?: string[];
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsKafkaAuthSaslToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsKafkaAuthSaslPasswordToTerraform(struct!.password),
    supported_mechanisms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedMechanisms),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsKafkaAuthSaslToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuthSasl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsKafkaAuthSaslPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaAuthSaslPassword",
    },
    supported_mechanisms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedMechanisms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaAuthSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaAuthSasl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._supportedMechanisms !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedMechanisms = this._supportedMechanisms;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaAuthSasl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._supportedMechanisms = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._supportedMechanisms = value.supportedMechanisms;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsKafkaAuthSaslPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsKafkaAuthSaslPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // supported_mechanisms - computed: true, optional: true, required: false
  private _supportedMechanisms?: string[]; 
  public get supportedMechanisms() {
    return this.getListAttribute('supported_mechanisms');
  }
  public set supportedMechanisms(value: string[]) {
    this._supportedMechanisms = value;
  }
  public resetSupportedMechanisms() {
    this._supportedMechanisms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedMechanismsInput() {
    return this._supportedMechanisms;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsKafkaAuthDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#sasl ConnectionmanagerConnection#sasl}
  */
  readonly sasl?: ConnectionmanagerConnectionParamsKafkaAuthSasl;
}

export function connectionmanagerConnectionParamsKafkaAuthToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsKafkaAuthDisabledToTerraform(struct!.disabled),
    sasl: connectionmanagerConnectionParamsKafkaAuthSaslToTerraform(struct!.sasl),
  }
}


export function connectionmanagerConnectionParamsKafkaAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsKafkaAuthDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaAuthDisabled",
    },
    sasl: {
      value: connectionmanagerConnectionParamsKafkaAuthSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaAuthSasl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._sasl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._sasl.internalValue = value.sasl;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsKafkaAuthDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsKafkaAuthDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // sasl - computed: true, optional: true, required: false
  private _sasl = new ConnectionmanagerConnectionParamsKafkaAuthSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: ConnectionmanagerConnectionParamsKafkaAuthSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
}

export function connectionmanagerConnectionParamsKafkaClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function connectionmanagerConnectionParamsKafkaClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class ConnectionmanagerConnectionParamsKafkaClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsKafkaClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsKafkaClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsKafkaClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsKafkaClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsKafkaClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsKafkaClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsKafkaClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsKafkaClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsKafkaClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsKafkaClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsKafkaCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsKafkaClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsKafkaClusterTlsParams;
}

export function connectionmanagerConnectionParamsKafkaClusterToTerraform(struct?: ConnectionmanagerConnectionParamsKafkaCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsKafkaClusterHostsToTerraform, false)(struct!.hosts),
    tls_params: connectionmanagerConnectionParamsKafkaClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsKafkaClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafkaCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsKafkaClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaClusterHostsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsKafkaClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafkaCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafkaCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsKafkaClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsKafkaClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsKafkaClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsKafkaClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsKafka {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/kafka.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsKafkaAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsKafkaCluster;
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsKafkaToTerraform(struct?: ConnectionmanagerConnectionParamsKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsKafkaAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsKafkaClusterToTerraform(struct!.cluster),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsKafkaToHclTerraform(struct?: ConnectionmanagerConnectionParamsKafka | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsKafkaAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsKafkaClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafkaCluster",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsKafkaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsKafka | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsKafka | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsKafkaAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsKafkaAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsKafkaClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsKafkaCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsMongodbAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsMongodbAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsMongodbAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth_source ConnectionmanagerConnection#auth_source}
  */
  readonly authSource?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsMongodbAuthUserPassword;
}

export function connectionmanagerConnectionParamsMongodbAuthToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    user_password: connectionmanagerConnectionParamsMongodbAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsMongodbAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_source: {
      value: cdktf.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_password: {
      value: connectionmanagerConnectionParamsMongodbAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authSource = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authSource = value.authSource;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsMongodbAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsMongodbAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#role ConnectionmanagerConnection#role}
  */
  readonly role?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#type ConnectionmanagerConnection#type}
  */
  readonly type?: string;
}

export function connectionmanagerConnectionParamsMongodbClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectionmanagerConnectionParamsMongodbClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class ConnectionmanagerConnectionParamsMongodbClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._role = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._role = value.role;
      this._type = value.type;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
}

export class ConnectionmanagerConnectionParamsMongodbClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsMongodbClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsMongodbClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsMongodbClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsMongodbClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsMongodbClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsMongodbClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsMongodbClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsMongodbClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsMongodbClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsMongodbClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMongodbCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsMongodbClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsMongodbClusterTlsParams;
}

export function connectionmanagerConnectionParamsMongodbClusterToTerraform(struct?: ConnectionmanagerConnectionParamsMongodbCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsMongodbClusterHostsToTerraform, false)(struct!.hosts),
    tls_params: connectionmanagerConnectionParamsMongodbClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsMongodbClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodbCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsMongodbClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbClusterHostsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsMongodbClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodbCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodbCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsMongodbClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsMongodbClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsMongodbClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsMongodbClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMongodb {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsMongodbAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsMongodbCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mongodb.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: string[];
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsMongodbToTerraform(struct?: ConnectionmanagerConnectionParamsMongodb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsMongodbAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsMongodbClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsMongodbToHclTerraform(struct?: ConnectionmanagerConnectionParamsMongodb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsMongodbAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsMongodbClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodbCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMongodbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMongodb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMongodb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsMongodbAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsMongodbAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsMongodbClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsMongodbCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsMysqlAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsMysqlAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsMysqlAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsMysqlAuthUserPassword;
}

export function connectionmanagerConnectionParamsMysqlAuthToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsMysqlAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsMysqlAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsMysqlAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsMysqlAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsMysqlAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#role ConnectionmanagerConnection#role}
  */
  readonly role?: string;
}

export function connectionmanagerConnectionParamsMysqlClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function connectionmanagerConnectionParamsMysqlClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._role = value.role;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class ConnectionmanagerConnectionParamsMysqlClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsMysqlClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsMysqlClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsMysqlClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsMysqlClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsMysqlClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsMysqlClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsMysqlClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsMysqlClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsMysqlClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsMysqlClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMysqlCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsMysqlClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsMysqlClusterTlsParams;
}

export function connectionmanagerConnectionParamsMysqlClusterToTerraform(struct?: ConnectionmanagerConnectionParamsMysqlCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsMysqlClusterHostsToTerraform, false)(struct!.hosts),
    tls_params: connectionmanagerConnectionParamsMysqlClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsMysqlClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysqlCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsMysqlClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlClusterHostsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsMysqlClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysqlCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysqlCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsMysqlClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsMysqlClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsMysqlClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsMysqlClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsMysql {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsMysqlAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsMysqlCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/mysql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: string[];
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsMysqlToTerraform(struct?: ConnectionmanagerConnectionParamsMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsMysqlAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsMysqlClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsMysqlToHclTerraform(struct?: ConnectionmanagerConnectionParamsMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsMysqlAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsMysqlClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysqlCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsMysqlAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsMysqlAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsMysqlClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsMysqlCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsOpensearchAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsOpensearchAuthUserPassword;
}

export function connectionmanagerConnectionParamsOpensearchAuthToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsOpensearchAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsOpensearchAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsOpensearchAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsOpensearchAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsOpensearchAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#roles ConnectionmanagerConnection#roles}
  */
  readonly roles?: string[];
}

export function connectionmanagerConnectionParamsOpensearchClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function connectionmanagerConnectionParamsOpensearchClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._roles = value.roles;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class ConnectionmanagerConnectionParamsOpensearchClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsOpensearchClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsOpensearchClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsOpensearchClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsOpensearchClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsOpensearchClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearchCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsOpensearchClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsOpensearchClusterTlsParams;
}

export function connectionmanagerConnectionParamsOpensearchClusterToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsOpensearchClusterHostsToTerraform, false)(struct!.hosts),
    tls_params: connectionmanagerConnectionParamsOpensearchClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsOpensearchClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearchCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsOpensearchClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchClusterHostsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsOpensearchClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearchCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearchCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsOpensearchClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsOpensearchClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsOpensearchClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsOpensearchClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsOpensearch {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/opensearch.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsOpensearchAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsOpensearchCluster;
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsOpensearchToTerraform(struct?: ConnectionmanagerConnectionParamsOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsOpensearchAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsOpensearchClusterToTerraform(struct!.cluster),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsOpensearchToHclTerraform(struct?: ConnectionmanagerConnectionParamsOpensearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsOpensearchAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsOpensearchClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearchCluster",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsOpensearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsOpensearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsOpensearchAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsOpensearchAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsOpensearchClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsOpensearchCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsPostgresqlAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword;
}

export function connectionmanagerConnectionParamsPostgresqlAuthToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsPostgresqlAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsPostgresqlAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsPostgresqlAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsPostgresqlAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#replica_type ConnectionmanagerConnection#replica_type}
  */
  readonly replicaType?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#role ConnectionmanagerConnection#role}
  */
  readonly role?: string;
}

export function connectionmanagerConnectionParamsPostgresqlClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    replica_type: cdktf.stringToTerraform(struct!.replicaType),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function connectionmanagerConnectionParamsPostgresqlClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_type: {
      value: cdktf.stringToHclTerraform(struct!.replicaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replicaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaType = this._replicaType;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._replicaType = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._replicaType = value.replicaType;
      this._role = value.role;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // replica_type - computed: true, optional: true, required: false
  private _replicaType?: string; 
  public get replicaType() {
    return this.getStringAttribute('replica_type');
  }
  public set replicaType(value: string) {
    this._replicaType = value;
  }
  public resetReplicaType() {
    this._replicaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaTypeInput() {
    return this._replicaType;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class ConnectionmanagerConnectionParamsPostgresqlClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsPostgresqlClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsPostgresqlClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsPostgresqlClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsPostgresqlClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsPostgresqlClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresqlCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsPostgresqlClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams;
}

export function connectionmanagerConnectionParamsPostgresqlClusterToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsPostgresqlClusterHostsToTerraform, false)(struct!.hosts),
    tls_params: connectionmanagerConnectionParamsPostgresqlClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsPostgresqlClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresqlCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsPostgresqlClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlClusterHostsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsPostgresqlClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresqlCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresqlCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsPostgresqlClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsPostgresqlClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsPostgresqlClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsPostgresqlClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsPostgresql {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsPostgresqlAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsPostgresqlCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/postgresql.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: string[];
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsPostgresqlToTerraform(struct?: ConnectionmanagerConnectionParamsPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsPostgresqlAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsPostgresqlClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsPostgresqlToHclTerraform(struct?: ConnectionmanagerConnectionParamsPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsPostgresqlAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsPostgresqlClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresqlCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsPostgresql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsPostgresql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsPostgresqlAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsPostgresqlAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsPostgresqlClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsPostgresqlCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsRedisAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsRedisAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsRedisAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsRedisAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsRedisAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsRedisAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsRedisAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsRedisAuthUserPassword;
}

export function connectionmanagerConnectionParamsRedisAuthToTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsRedisAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsRedisAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsRedisAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsRedisAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsRedisAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsRedisClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#role ConnectionmanagerConnection#role}
  */
  readonly role?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#shard_name ConnectionmanagerConnection#shard_name}
  */
  readonly shardName?: string;
}

export function connectionmanagerConnectionParamsRedisClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    shard_name: cdktf.stringToTerraform(struct!.shardName),
  }
}


export function connectionmanagerConnectionParamsRedisClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard_name: {
      value: cdktf.stringToHclTerraform(struct!.shardName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsRedisClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._shardName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardName = this._shardName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._role = undefined;
      this._shardName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._role = value.role;
      this._shardName = value.shardName;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // shard_name - computed: true, optional: true, required: false
  private _shardName?: string; 
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
  public set shardName(value: string) {
    this._shardName = value;
  }
  public resetShardName() {
    this._shardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNameInput() {
    return this._shardName;
  }
}

export class ConnectionmanagerConnectionParamsRedisClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsRedisClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsRedisClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsRedisClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsRedisClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsRedisClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsRedisClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsRedisClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsRedisClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsRedisClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsRedisClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsRedisClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsRedisClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsRedisClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsRedisClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsRedisClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsRedisClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsRedisClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsRedisCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsRedisClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#sentinel_port ConnectionmanagerConnection#sentinel_port}
  */
  readonly sentinelPort?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsRedisClusterTlsParams;
}

export function connectionmanagerConnectionParamsRedisClusterToTerraform(struct?: ConnectionmanagerConnectionParamsRedisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsRedisClusterHostsToTerraform, false)(struct!.hosts),
    sentinel_port: cdktf.numberToTerraform(struct!.sentinelPort),
    tls_params: connectionmanagerConnectionParamsRedisClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsRedisClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedisCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsRedisClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsRedisClusterHostsList",
    },
    sentinel_port: {
      value: cdktf.numberToHclTerraform(struct!.sentinelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsRedisClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedisCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._sentinelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelPort = this._sentinelPort;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedisCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._sentinelPort = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._sentinelPort = value.sentinelPort;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsRedisClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsRedisClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // sentinel_port - computed: true, optional: true, required: false
  private _sentinelPort?: number; 
  public get sentinelPort() {
    return this.getNumberAttribute('sentinel_port');
  }
  public set sentinelPort(value: number) {
    this._sentinelPort = value;
  }
  public resetSentinelPort() {
    this._sentinelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelPortInput() {
    return this._sentinelPort;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsRedisClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsRedisClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsRedis {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsRedisAuth;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsRedisCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/redis.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: number[];
}

export function connectionmanagerConnectionParamsRedisToTerraform(struct?: ConnectionmanagerConnectionParamsRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsRedisAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsRedisClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.databases),
  }
}


export function connectionmanagerConnectionParamsRedisToHclTerraform(struct?: ConnectionmanagerConnectionParamsRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsRedisAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsRedisClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedisCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsRedisAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsRedisAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsRedisClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsRedisCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: number[]; 
  public get databases() {
    return this.getNumberListAttribute('databases');
  }
  public set databases(value: number[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsStoredocAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsStoredocAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsStoredocAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth_source ConnectionmanagerConnection#auth_source}
  */
  readonly authSource?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsStoredocAuthUserPassword;
}

export function connectionmanagerConnectionParamsStoredocAuthToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    user_password: connectionmanagerConnectionParamsStoredocAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsStoredocAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_source: {
      value: cdktf.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_password: {
      value: connectionmanagerConnectionParamsStoredocAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authSource = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authSource = value.authSource;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsStoredocAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsStoredocAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#role ConnectionmanagerConnection#role}
  */
  readonly role?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#type ConnectionmanagerConnection#type}
  */
  readonly type?: string;
}

export function connectionmanagerConnectionParamsStoredocClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectionmanagerConnectionParamsStoredocClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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

export class ConnectionmanagerConnectionParamsStoredocClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._role = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._role = value.role;
      this._type = value.type;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
}

export class ConnectionmanagerConnectionParamsStoredocClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsStoredocClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsStoredocClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsStoredocClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsStoredocClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsStoredocClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsStoredocClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsStoredocClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsStoredocClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsStoredocClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsStoredocClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsStoredocCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsStoredocClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsStoredocClusterTlsParams;
}

export function connectionmanagerConnectionParamsStoredocClusterToTerraform(struct?: ConnectionmanagerConnectionParamsStoredocCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsStoredocClusterHostsToTerraform, false)(struct!.hosts),
    tls_params: connectionmanagerConnectionParamsStoredocClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsStoredocClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredocCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsStoredocClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocClusterHostsList",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsStoredocClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredocCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredocCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsStoredocClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsStoredocClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsStoredocClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsStoredocClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsStoredoc {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsStoredocAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsStoredocCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/storedoc.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: string[];
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is mutually
  *  exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsStoredocToTerraform(struct?: ConnectionmanagerConnectionParamsStoredoc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsStoredocAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsStoredocClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsStoredocToHclTerraform(struct?: ConnectionmanagerConnectionParamsStoredoc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsStoredocAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsStoredocClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredocCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsStoredocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsStoredoc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsStoredoc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsStoredocAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsStoredocAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsStoredocClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsStoredocCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsTrinoAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsTrinoAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsTrinoAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/trino.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsTrinoAuthUserPassword;
}

export function connectionmanagerConnectionParamsTrinoAuthToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsTrinoAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsTrinoAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsTrinoAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsTrinoAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsTrinoAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoClusterCoordinator {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/trino.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/trino.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
}

export function connectionmanagerConnectionParamsTrinoClusterCoordinatorToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterCoordinator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function connectionmanagerConnectionParamsTrinoClusterCoordinatorToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterCoordinator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoClusterCoordinatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoClusterCoordinator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoClusterCoordinator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsTrinoClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsTrinoClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsTrinoClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsTrinoClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsTrinoClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsTrinoClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsTrinoClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsTrinoCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/trino.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#coordinator ConnectionmanagerConnection#coordinator}
  */
  readonly coordinator?: ConnectionmanagerConnectionParamsTrinoClusterCoordinator;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/trino.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsTrinoClusterTlsParams;
}

export function connectionmanagerConnectionParamsTrinoClusterToTerraform(struct?: ConnectionmanagerConnectionParamsTrinoCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    coordinator: connectionmanagerConnectionParamsTrinoClusterCoordinatorToTerraform(struct!.coordinator),
    tls_params: connectionmanagerConnectionParamsTrinoClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsTrinoClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrinoCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    coordinator: {
      value: connectionmanagerConnectionParamsTrinoClusterCoordinatorToHclTerraform(struct!.coordinator),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoClusterCoordinator",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsTrinoClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrinoCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coordinator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinator = this._coordinator?.internalValue;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrinoCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coordinator.internalValue = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coordinator.internalValue = value.coordinator;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // coordinator - computed: true, optional: true, required: false
  private _coordinator = new ConnectionmanagerConnectionParamsTrinoClusterCoordinatorOutputReference(this, "coordinator");
  public get coordinator() {
    return this._coordinator;
  }
  public putCoordinator(value: ConnectionmanagerConnectionParamsTrinoClusterCoordinator) {
    this._coordinator.internalValue = value;
  }
  public resetCoordinator() {
    this._coordinator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatorInput() {
    return this._coordinator.internalValue;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsTrinoClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsTrinoClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsTrino {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/trino.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsTrinoAuth;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/trino.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsTrinoCluster;
}

export function connectionmanagerConnectionParamsTrinoToTerraform(struct?: ConnectionmanagerConnectionParamsTrino | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsTrinoAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsTrinoClusterToTerraform(struct!.cluster),
  }
}


export function connectionmanagerConnectionParamsTrinoToHclTerraform(struct?: ConnectionmanagerConnectionParamsTrino | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsTrinoAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsTrinoClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrinoCluster",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsTrinoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsTrino | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsTrino | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsTrinoAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsTrinoAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsTrinoClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsTrinoCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions {
  /**
  * a string of punctuation characters to exclude from the default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#excluded_punctuation ConnectionmanagerConnection#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * whether at least one 0..9 character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_digits ConnectionmanagerConnection#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * whether at least one a..z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_lowercase ConnectionmanagerConnection#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * whether at least one punctuation character is included in the password, true by default
  *  punctuation characters by default: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  *  to customize the punctuation characters, see included_punctuation and excluded_punctuation below
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_punctuation ConnectionmanagerConnection#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * whether at least one A..Z character is included in the password, true by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#include_uppercase ConnectionmanagerConnection#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * If include_punctuation is true, one of these two fields (not both) may be used optionally to customize the punctuation:
  *  a string of specific punctuation characters to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#included_punctuation ConnectionmanagerConnection#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * password length; by default, a reasonable length will be decided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#length ConnectionmanagerConnection#length}
  */
  readonly length?: number;
}

export function connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_punctuation: cdktf.stringToTerraform(struct!.excludedPunctuation),
    include_digits: cdktf.booleanToTerraform(struct!.includeDigits),
    include_lowercase: cdktf.booleanToTerraform(struct!.includeLowercase),
    include_punctuation: cdktf.booleanToTerraform(struct!.includePunctuation),
    include_uppercase: cdktf.booleanToTerraform(struct!.includeUppercase),
    included_punctuation: cdktf.stringToTerraform(struct!.includedPunctuation),
    length: cdktf.numberToTerraform(struct!.length),
  }
}


export function connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    excluded_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.excludedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_digits: {
      value: cdktf.booleanToHclTerraform(struct!.includeDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_lowercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_punctuation: {
      value: cdktf.booleanToHclTerraform(struct!.includePunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uppercase: {
      value: cdktf.booleanToHclTerraform(struct!.includeUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    included_punctuation: {
      value: cdktf.stringToHclTerraform(struct!.includedPunctuation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPunctuation = this._excludedPunctuation;
    }
    if (this._includeDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDigits = this._includeDigits;
    }
    if (this._includeLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeLowercase = this._includeLowercase;
    }
    if (this._includePunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePunctuation = this._includePunctuation;
    }
    if (this._includeUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUppercase = this._includeUppercase;
    }
    if (this._includedPunctuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPunctuation = this._includedPunctuation;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
    }
  }

  // excluded_punctuation - computed: true, optional: true, required: false
  private _excludedPunctuation?: string; 
  public get excludedPunctuation() {
    return this.getStringAttribute('excluded_punctuation');
  }
  public set excludedPunctuation(value: string) {
    this._excludedPunctuation = value;
  }
  public resetExcludedPunctuation() {
    this._excludedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPunctuationInput() {
    return this._excludedPunctuation;
  }

  // include_digits - computed: true, optional: true, required: false
  private _includeDigits?: boolean | cdktf.IResolvable; 
  public get includeDigits() {
    return this.getBooleanAttribute('include_digits');
  }
  public set includeDigits(value: boolean | cdktf.IResolvable) {
    this._includeDigits = value;
  }
  public resetIncludeDigits() {
    this._includeDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDigitsInput() {
    return this._includeDigits;
  }

  // include_lowercase - computed: true, optional: true, required: false
  private _includeLowercase?: boolean | cdktf.IResolvable; 
  public get includeLowercase() {
    return this.getBooleanAttribute('include_lowercase');
  }
  public set includeLowercase(value: boolean | cdktf.IResolvable) {
    this._includeLowercase = value;
  }
  public resetIncludeLowercase() {
    this._includeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLowercaseInput() {
    return this._includeLowercase;
  }

  // include_punctuation - computed: true, optional: true, required: false
  private _includePunctuation?: boolean | cdktf.IResolvable; 
  public get includePunctuation() {
    return this.getBooleanAttribute('include_punctuation');
  }
  public set includePunctuation(value: boolean | cdktf.IResolvable) {
    this._includePunctuation = value;
  }
  public resetIncludePunctuation() {
    this._includePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePunctuationInput() {
    return this._includePunctuation;
  }

  // include_uppercase - computed: true, optional: true, required: false
  private _includeUppercase?: boolean | cdktf.IResolvable; 
  public get includeUppercase() {
    return this.getBooleanAttribute('include_uppercase');
  }
  public set includeUppercase(value: boolean | cdktf.IResolvable) {
    this._includeUppercase = value;
  }
  public resetIncludeUppercase() {
    this._includeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUppercaseInput() {
    return this._includeUppercase;
  }

  // included_punctuation - computed: true, optional: true, required: false
  private _includedPunctuation?: string; 
  public get includedPunctuation() {
    return this.getStringAttribute('included_punctuation');
  }
  public set includedPunctuation(value: string) {
    this._includedPunctuation = value;
  }
  public resetIncludedPunctuation() {
    this._includedPunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPunctuationInput() {
    return this._includedPunctuation;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions {
  /**
  * Cookie is an arbitrary non-sensitive string that is saved with the
  *  password. When updating PasswordGenerationOptions, if the cookie passed
  *  in the update request differs from the cookie in the current
  *  PasswordGenerationOptions, the password will be re-generated. If the
  *  same cookie is passed, the password will not change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cookie ConnectionmanagerConnection#cookie}
  */
  readonly cookie?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_password_generation_options ConnectionmanagerConnection#lockbox_password_generation_options}
  */
  readonly lockboxPasswordGenerationOptions?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions;
}

export function connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie: cdktf.stringToTerraform(struct!.cookie),
    lockbox_password_generation_options: connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToTerraform(struct!.lockboxPasswordGenerationOptions),
  }
}


export function connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie: {
      value: cdktf.stringToHclTerraform(struct!.cookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lockbox_password_generation_options: {
      value: connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsToHclTerraform(struct!.lockboxPasswordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie;
    }
    if (this._lockboxPasswordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxPasswordGenerationOptions = this._lockboxPasswordGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookie = undefined;
      this._lockboxPasswordGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookie = value.cookie;
      this._lockboxPasswordGenerationOptions.internalValue = value.lockboxPasswordGenerationOptions;
    }
  }

  // cookie - computed: true, optional: true, required: false
  private _cookie?: string; 
  public get cookie() {
    return this.getStringAttribute('cookie');
  }
  public set cookie(value: string) {
    this._cookie = value;
  }
  public resetCookie() {
    this._cookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie;
  }

  // lockbox_password_generation_options - computed: true, optional: true, required: false
  private _lockboxPasswordGenerationOptions = new ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptionsOutputReference(this, "lockbox_password_generation_options");
  public get lockboxPasswordGenerationOptions() {
    return this._lockboxPasswordGenerationOptions;
  }
  public putLockboxPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsLockboxPasswordGenerationOptions) {
    this._lockboxPasswordGenerationOptions.internalValue = value;
  }
  public resetLockboxPasswordGenerationOptions() {
    this._lockboxPasswordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxPasswordGenerationOptionsInput() {
    return this._lockboxPasswordGenerationOptions.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword {
  /**
  * Read-only. Do not fill this field in create/update requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#lockbox_secret_key ConnectionmanagerConnection#lockbox_secret_key}
  */
  readonly lockboxSecretKey?: string;
  /**
  * When creating/updating Password, the field "password_generation_options"
  *  is mutually exclusive with "raw". In order to switch to the
  *  "password_generation_options" you have to explicitly clear the "raw"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password_generation_options ConnectionmanagerConnection#password_generation_options}
  */
  readonly passwordGenerationOptions?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions;
  /**
  * When creating/updating Password, the field "raw" is mutually exclusive
  *  with "password_generation_options". In order to switch to the "raw"
  *  password you have to explicitly clear the "password_generation_options"
  *  field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#raw ConnectionmanagerConnection#raw}
  */
  readonly raw?: string;
}

export function connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockbox_secret_key: cdktf.stringToTerraform(struct!.lockboxSecretKey),
    password_generation_options: connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsToTerraform(struct!.passwordGenerationOptions),
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockbox_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.lockboxSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_generation_options: {
      value: connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsToHclTerraform(struct!.passwordGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions",
    },
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockboxSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockboxSecretKey = this._lockboxSecretKey;
    }
    if (this._passwordGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordGenerationOptions = this._passwordGenerationOptions?.internalValue;
    }
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = undefined;
      this._passwordGenerationOptions.internalValue = undefined;
      this._raw = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lockboxSecretKey = value.lockboxSecretKey;
      this._passwordGenerationOptions.internalValue = value.passwordGenerationOptions;
      this._raw = value.raw;
    }
  }

  // lockbox_secret_key - computed: true, optional: true, required: false
  private _lockboxSecretKey?: string; 
  public get lockboxSecretKey() {
    return this.getStringAttribute('lockbox_secret_key');
  }
  public set lockboxSecretKey(value: string) {
    this._lockboxSecretKey = value;
  }
  public resetLockboxSecretKey() {
    this._lockboxSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockboxSecretKeyInput() {
    return this._lockboxSecretKey;
  }

  // password_generation_options - computed: true, optional: true, required: false
  private _passwordGenerationOptions = new ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptionsOutputReference(this, "password_generation_options");
  public get passwordGenerationOptions() {
    return this._passwordGenerationOptions;
  }
  public putPasswordGenerationOptions(value: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordPasswordGenerationOptions) {
    this._passwordGenerationOptions.internalValue = value;
  }
  public resetPasswordGenerationOptions() {
    this._passwordGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordGenerationOptionsInput() {
    return this._passwordGenerationOptions.internalValue;
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyAuthUserPassword {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#password ConnectionmanagerConnection#password}
  */
  readonly password?: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user ConnectionmanagerConnection#user}
  */
  readonly user?: string;
}

export function connectionmanagerConnectionParamsValkeyAuthUserPasswordToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function connectionmanagerConnectionParamsValkeyAuthUserPasswordToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuthUserPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: connectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyAuthUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyAuthUserPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyAuthUserPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._user = value.user;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password = new ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionmanagerConnectionParamsValkeyAuthUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyAuth {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#user_password ConnectionmanagerConnection#user_password}
  */
  readonly userPassword?: ConnectionmanagerConnectionParamsValkeyAuthUserPassword;
}

export function connectionmanagerConnectionParamsValkeyAuthToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_password: connectionmanagerConnectionParamsValkeyAuthUserPasswordToTerraform(struct!.userPassword),
  }
}


export function connectionmanagerConnectionParamsValkeyAuthToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_password: {
      value: connectionmanagerConnectionParamsValkeyAuthUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyAuthUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // user_password - computed: true, optional: true, required: false
  private _userPassword = new ConnectionmanagerConnectionParamsValkeyAuthUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: ConnectionmanagerConnectionParamsValkeyAuthUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyClusterHosts {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#health ConnectionmanagerConnection#health}
  */
  readonly health?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#host ConnectionmanagerConnection#host}
  */
  readonly host?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#port ConnectionmanagerConnection#port}
  */
  readonly port?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#role ConnectionmanagerConnection#role}
  */
  readonly role?: string;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#shard_name ConnectionmanagerConnection#shard_name}
  */
  readonly shardName?: string;
}

export function connectionmanagerConnectionParamsValkeyClusterHostsToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health: cdktf.stringToTerraform(struct!.health),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    role: cdktf.stringToTerraform(struct!.role),
    shard_name: cdktf.stringToTerraform(struct!.shardName),
  }
}


export function connectionmanagerConnectionParamsValkeyClusterHostsToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterHosts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health: {
      value: cdktf.stringToHclTerraform(struct!.health),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard_name: {
      value: cdktf.stringToHclTerraform(struct!.shardName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyClusterHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyClusterHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._shardName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardName = this._shardName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyClusterHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._health = undefined;
      this._host = undefined;
      this._port = undefined;
      this._role = undefined;
      this._shardName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._health = value.health;
      this._host = value.host;
      this._port = value.port;
      this._role = value.role;
      this._shardName = value.shardName;
    }
  }

  // health - computed: true, optional: true, required: false
  private _health?: string; 
  public get health() {
    return this.getStringAttribute('health');
  }
  public set health(value: string) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // shard_name - computed: true, optional: true, required: false
  private _shardName?: string; 
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
  public set shardName(value: string) {
    this._shardName = value;
  }
  public resetShardName() {
    this._shardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNameInput() {
    return this._shardName;
  }
}

export class ConnectionmanagerConnectionParamsValkeyClusterHostsList extends cdktf.ComplexList {
  public internalValue? : ConnectionmanagerConnectionParamsValkeyClusterHosts[] | cdktf.IResolvable

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
  public get(index: number): ConnectionmanagerConnectionParamsValkeyClusterHostsOutputReference {
    return new ConnectionmanagerConnectionParamsValkeyClusterHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled {
}

export function connectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function connectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#ca_certificate ConnectionmanagerConnection#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function connectionmanagerConnectionParamsValkeyClusterTlsParamsTlsToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function connectionmanagerConnectionParamsValkeyClusterTlsParamsTlsToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyClusterTlsParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#disabled ConnectionmanagerConnection#disabled}
  */
  readonly disabled?: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/common.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls ConnectionmanagerConnection#tls}
  */
  readonly tls?: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls;
}

export function connectionmanagerConnectionParamsValkeyClusterTlsParamsToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: connectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledToTerraform(struct!.disabled),
    tls: connectionmanagerConnectionParamsValkeyClusterTlsParamsTlsToTerraform(struct!.tls),
  }
}


export function connectionmanagerConnectionParamsValkeyClusterTlsParamsToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyClusterTlsParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: connectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled",
    },
    tls: {
      value: connectionmanagerConnectionParamsValkeyClusterTlsParamsTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyClusterTlsParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyClusterTlsParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyClusterTlsParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled.internalValue = value.disabled;
      this._tls.internalValue = value.tls;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled = new ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // tls - computed: true, optional: true, required: false
  private _tls = new ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: ConnectionmanagerConnectionParamsValkeyClusterTlsParamsTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsValkeyCluster {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#hosts ConnectionmanagerConnection#hosts}
  */
  readonly hosts?: ConnectionmanagerConnectionParamsValkeyClusterHosts[] | cdktf.IResolvable;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#sentinel_port ConnectionmanagerConnection#sentinel_port}
  */
  readonly sentinelPort?: number;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#tls_params ConnectionmanagerConnection#tls_params}
  */
  readonly tlsParams?: ConnectionmanagerConnectionParamsValkeyClusterTlsParams;
}

export function connectionmanagerConnectionParamsValkeyClusterToTerraform(struct?: ConnectionmanagerConnectionParamsValkeyCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(connectionmanagerConnectionParamsValkeyClusterHostsToTerraform, false)(struct!.hosts),
    sentinel_port: cdktf.numberToTerraform(struct!.sentinelPort),
    tls_params: connectionmanagerConnectionParamsValkeyClusterTlsParamsToTerraform(struct!.tlsParams),
  }
}


export function connectionmanagerConnectionParamsValkeyClusterToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkeyCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(connectionmanagerConnectionParamsValkeyClusterHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyClusterHostsList",
    },
    sentinel_port: {
      value: cdktf.numberToHclTerraform(struct!.sentinelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_params: {
      value: connectionmanagerConnectionParamsValkeyClusterTlsParamsToHclTerraform(struct!.tlsParams),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyClusterTlsParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkeyCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._sentinelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelPort = this._sentinelPort;
    }
    if (this._tlsParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsParams = this._tlsParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkeyCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts.internalValue = undefined;
      this._sentinelPort = undefined;
      this._tlsParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts.internalValue = value.hosts;
      this._sentinelPort = value.sentinelPort;
      this._tlsParams.internalValue = value.tlsParams;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts = new ConnectionmanagerConnectionParamsValkeyClusterHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: ConnectionmanagerConnectionParamsValkeyClusterHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  public resetHosts() {
    this._hosts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // sentinel_port - computed: true, optional: true, required: false
  private _sentinelPort?: number; 
  public get sentinelPort() {
    return this.getNumberAttribute('sentinel_port');
  }
  public set sentinelPort(value: number) {
    this._sentinelPort = value;
  }
  public resetSentinelPort() {
    this._sentinelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelPortInput() {
    return this._sentinelPort;
  }

  // tls_params - computed: true, optional: true, required: false
  private _tlsParams = new ConnectionmanagerConnectionParamsValkeyClusterTlsParamsOutputReference(this, "tls_params");
  public get tlsParams() {
    return this._tlsParams;
  }
  public putTlsParams(value: ConnectionmanagerConnectionParamsValkeyClusterTlsParams) {
    this._tlsParams.internalValue = value;
  }
  public resetTlsParams() {
    this._tlsParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParamsInput() {
    return this._tlsParams.internalValue;
  }
}
export interface ConnectionmanagerConnectionParamsValkey {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#auth ConnectionmanagerConnection#auth}
  */
  readonly auth?: ConnectionmanagerConnectionParamsValkeyAuth;
  /**
  * When creating/updating Connection, the field "cluster" is mutually
  *  exclusive with "managed_cluster_id".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#cluster ConnectionmanagerConnection#cluster}
  */
  readonly cluster?: ConnectionmanagerConnectionParamsValkeyCluster;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/valkey.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#databases ConnectionmanagerConnection#databases}
  */
  readonly databases?: number[];
  /**
  * When creating/updating Connection, the field "managed_cluster_id" is
  *  mutually exclusive with "cluster".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#managed_cluster_id ConnectionmanagerConnection#managed_cluster_id}
  */
  readonly managedClusterId?: string;
}

export function connectionmanagerConnectionParamsValkeyToTerraform(struct?: ConnectionmanagerConnectionParamsValkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: connectionmanagerConnectionParamsValkeyAuthToTerraform(struct!.auth),
    cluster: connectionmanagerConnectionParamsValkeyClusterToTerraform(struct!.cluster),
    databases: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.databases),
    managed_cluster_id: cdktf.stringToTerraform(struct!.managedClusterId),
  }
}


export function connectionmanagerConnectionParamsValkeyToHclTerraform(struct?: ConnectionmanagerConnectionParamsValkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: connectionmanagerConnectionParamsValkeyAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyAuth",
    },
    cluster: {
      value: connectionmanagerConnectionParamsValkeyClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkeyCluster",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    managed_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.managedClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsValkeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParamsValkey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._managedClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedClusterId = this._managedClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParamsValkey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._cluster.internalValue = undefined;
      this._databases = undefined;
      this._managedClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._cluster.internalValue = value.cluster;
      this._databases = value.databases;
      this._managedClusterId = value.managedClusterId;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new ConnectionmanagerConnectionParamsValkeyAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: ConnectionmanagerConnectionParamsValkeyAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // cluster - computed: true, optional: true, required: false
  private _cluster = new ConnectionmanagerConnectionParamsValkeyClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ConnectionmanagerConnectionParamsValkeyCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // databases - computed: true, optional: true, required: false
  private _databases?: number[]; 
  public get databases() {
    return this.getNumberListAttribute('databases');
  }
  public set databases(value: number[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // managed_cluster_id - computed: true, optional: true, required: false
  private _managedClusterId?: string; 
  public get managedClusterId() {
    return this.getStringAttribute('managed_cluster_id');
  }
  public set managedClusterId(value: string) {
    this._managedClusterId = value;
  }
  public resetManagedClusterId() {
    this._managedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedClusterIdInput() {
    return this._managedClusterId;
  }
}
export interface ConnectionmanagerConnectionParams {
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#clickhouse ConnectionmanagerConnection#clickhouse}
  */
  readonly clickhouse?: ConnectionmanagerConnectionParamsClickhouse;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#greenplum ConnectionmanagerConnection#greenplum}
  */
  readonly greenplum?: ConnectionmanagerConnectionParamsGreenplum;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#kafka ConnectionmanagerConnection#kafka}
  */
  readonly kafka?: ConnectionmanagerConnectionParamsKafka;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#mongodb ConnectionmanagerConnection#mongodb}
  */
  readonly mongodb?: ConnectionmanagerConnectionParamsMongodb;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#mysql ConnectionmanagerConnection#mysql}
  */
  readonly mysql?: ConnectionmanagerConnectionParamsMysql;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#opensearch ConnectionmanagerConnection#opensearch}
  */
  readonly opensearch?: ConnectionmanagerConnectionParamsOpensearch;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#postgresql ConnectionmanagerConnection#postgresql}
  */
  readonly postgresql?: ConnectionmanagerConnectionParamsPostgresql;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#redis ConnectionmanagerConnection#redis}
  */
  readonly redis?: ConnectionmanagerConnectionParamsRedis;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#storedoc ConnectionmanagerConnection#storedoc}
  */
  readonly storedoc?: ConnectionmanagerConnectionParamsStoredoc;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#trino ConnectionmanagerConnection#trino}
  */
  readonly trino?: ConnectionmanagerConnectionParamsTrino;
  /**
  * package: yandex.cloud.connectionmanager.v1
  * filename: yandex/cloud/connectionmanager/v1/connection.proto
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#valkey ConnectionmanagerConnection#valkey}
  */
  readonly valkey?: ConnectionmanagerConnectionParamsValkey;
}

export function connectionmanagerConnectionParamsToTerraform(struct?: ConnectionmanagerConnectionParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse: connectionmanagerConnectionParamsClickhouseToTerraform(struct!.clickhouse),
    greenplum: connectionmanagerConnectionParamsGreenplumToTerraform(struct!.greenplum),
    kafka: connectionmanagerConnectionParamsKafkaToTerraform(struct!.kafka),
    mongodb: connectionmanagerConnectionParamsMongodbToTerraform(struct!.mongodb),
    mysql: connectionmanagerConnectionParamsMysqlToTerraform(struct!.mysql),
    opensearch: connectionmanagerConnectionParamsOpensearchToTerraform(struct!.opensearch),
    postgresql: connectionmanagerConnectionParamsPostgresqlToTerraform(struct!.postgresql),
    redis: connectionmanagerConnectionParamsRedisToTerraform(struct!.redis),
    storedoc: connectionmanagerConnectionParamsStoredocToTerraform(struct!.storedoc),
    trino: connectionmanagerConnectionParamsTrinoToTerraform(struct!.trino),
    valkey: connectionmanagerConnectionParamsValkeyToTerraform(struct!.valkey),
  }
}


export function connectionmanagerConnectionParamsToHclTerraform(struct?: ConnectionmanagerConnectionParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clickhouse: {
      value: connectionmanagerConnectionParamsClickhouseToHclTerraform(struct!.clickhouse),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsClickhouse",
    },
    greenplum: {
      value: connectionmanagerConnectionParamsGreenplumToHclTerraform(struct!.greenplum),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsGreenplum",
    },
    kafka: {
      value: connectionmanagerConnectionParamsKafkaToHclTerraform(struct!.kafka),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsKafka",
    },
    mongodb: {
      value: connectionmanagerConnectionParamsMongodbToHclTerraform(struct!.mongodb),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMongodb",
    },
    mysql: {
      value: connectionmanagerConnectionParamsMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsMysql",
    },
    opensearch: {
      value: connectionmanagerConnectionParamsOpensearchToHclTerraform(struct!.opensearch),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsOpensearch",
    },
    postgresql: {
      value: connectionmanagerConnectionParamsPostgresqlToHclTerraform(struct!.postgresql),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsPostgresql",
    },
    redis: {
      value: connectionmanagerConnectionParamsRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsRedis",
    },
    storedoc: {
      value: connectionmanagerConnectionParamsStoredocToHclTerraform(struct!.storedoc),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsStoredoc",
    },
    trino: {
      value: connectionmanagerConnectionParamsTrinoToHclTerraform(struct!.trino),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsTrino",
    },
    valkey: {
      value: connectionmanagerConnectionParamsValkeyToHclTerraform(struct!.valkey),
      isBlock: true,
      type: "struct",
      storageClassType: "ConnectionmanagerConnectionParamsValkey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionmanagerConnectionParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouse = this._clickhouse?.internalValue;
    }
    if (this._greenplum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.greenplum = this._greenplum?.internalValue;
    }
    if (this._kafka?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka?.internalValue;
    }
    if (this._mongodb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongodb = this._mongodb?.internalValue;
    }
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    if (this._postgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresql = this._postgresql?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._storedoc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedoc = this._storedoc?.internalValue;
    }
    if (this._trino?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trino = this._trino?.internalValue;
    }
    if (this._valkey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valkey = this._valkey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clickhouse.internalValue = undefined;
      this._greenplum.internalValue = undefined;
      this._kafka.internalValue = undefined;
      this._mongodb.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._opensearch.internalValue = undefined;
      this._postgresql.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._storedoc.internalValue = undefined;
      this._trino.internalValue = undefined;
      this._valkey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clickhouse.internalValue = value.clickhouse;
      this._greenplum.internalValue = value.greenplum;
      this._kafka.internalValue = value.kafka;
      this._mongodb.internalValue = value.mongodb;
      this._mysql.internalValue = value.mysql;
      this._opensearch.internalValue = value.opensearch;
      this._postgresql.internalValue = value.postgresql;
      this._redis.internalValue = value.redis;
      this._storedoc.internalValue = value.storedoc;
      this._trino.internalValue = value.trino;
      this._valkey.internalValue = value.valkey;
    }
  }

  // clickhouse - computed: true, optional: true, required: false
  private _clickhouse = new ConnectionmanagerConnectionParamsClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }
  public putClickhouse(value: ConnectionmanagerConnectionParamsClickhouse) {
    this._clickhouse.internalValue = value;
  }
  public resetClickhouse() {
    this._clickhouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse.internalValue;
  }

  // greenplum - computed: true, optional: true, required: false
  private _greenplum = new ConnectionmanagerConnectionParamsGreenplumOutputReference(this, "greenplum");
  public get greenplum() {
    return this._greenplum;
  }
  public putGreenplum(value: ConnectionmanagerConnectionParamsGreenplum) {
    this._greenplum.internalValue = value;
  }
  public resetGreenplum() {
    this._greenplum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenplumInput() {
    return this._greenplum.internalValue;
  }

  // kafka - computed: true, optional: true, required: false
  private _kafka = new ConnectionmanagerConnectionParamsKafkaOutputReference(this, "kafka");
  public get kafka() {
    return this._kafka;
  }
  public putKafka(value: ConnectionmanagerConnectionParamsKafka) {
    this._kafka.internalValue = value;
  }
  public resetKafka() {
    this._kafka.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka.internalValue;
  }

  // mongodb - computed: true, optional: true, required: false
  private _mongodb = new ConnectionmanagerConnectionParamsMongodbOutputReference(this, "mongodb");
  public get mongodb() {
    return this._mongodb;
  }
  public putMongodb(value: ConnectionmanagerConnectionParamsMongodb) {
    this._mongodb.internalValue = value;
  }
  public resetMongodb() {
    this._mongodb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbInput() {
    return this._mongodb.internalValue;
  }

  // mysql - computed: true, optional: true, required: false
  private _mysql = new ConnectionmanagerConnectionParamsMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: ConnectionmanagerConnectionParamsMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // opensearch - computed: true, optional: true, required: false
  private _opensearch = new ConnectionmanagerConnectionParamsOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: ConnectionmanagerConnectionParamsOpensearch) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // postgresql - computed: true, optional: true, required: false
  private _postgresql = new ConnectionmanagerConnectionParamsPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: ConnectionmanagerConnectionParamsPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new ConnectionmanagerConnectionParamsRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: ConnectionmanagerConnectionParamsRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // storedoc - computed: true, optional: true, required: false
  private _storedoc = new ConnectionmanagerConnectionParamsStoredocOutputReference(this, "storedoc");
  public get storedoc() {
    return this._storedoc;
  }
  public putStoredoc(value: ConnectionmanagerConnectionParamsStoredoc) {
    this._storedoc.internalValue = value;
  }
  public resetStoredoc() {
    this._storedoc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedocInput() {
    return this._storedoc.internalValue;
  }

  // trino - computed: true, optional: true, required: false
  private _trino = new ConnectionmanagerConnectionParamsTrinoOutputReference(this, "trino");
  public get trino() {
    return this._trino;
  }
  public putTrino(value: ConnectionmanagerConnectionParamsTrino) {
    this._trino.internalValue = value;
  }
  public resetTrino() {
    this._trino.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trinoInput() {
    return this._trino.internalValue;
  }

  // valkey - computed: true, optional: true, required: false
  private _valkey = new ConnectionmanagerConnectionParamsValkeyOutputReference(this, "valkey");
  public get valkey() {
    return this._valkey;
  }
  public putValkey(value: ConnectionmanagerConnectionParamsValkey) {
    this._valkey.internalValue = value;
  }
  public resetValkey() {
    this._valkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valkeyInput() {
    return this._valkey.internalValue;
  }
}
export interface ConnectionmanagerConnectionTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#create ConnectionmanagerConnection#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#delete ConnectionmanagerConnection#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#read ConnectionmanagerConnection#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#update ConnectionmanagerConnection#update}
  */
  readonly update?: string;
}

export function connectionmanagerConnectionTimeoutsToTerraform(struct?: ConnectionmanagerConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function connectionmanagerConnectionTimeoutsToHclTerraform(struct?: ConnectionmanagerConnectionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ConnectionmanagerConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectionmanagerConnectionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionmanagerConnectionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection yandex_connectionmanager_connection}
*/
export class ConnectionmanagerConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_connectionmanager_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionmanagerConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionmanagerConnection to import
  * @param importFromId The id of the existing ConnectionmanagerConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionmanagerConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_connectionmanager_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.171.0/docs/resources/connectionmanager_connection yandex_connectionmanager_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionmanagerConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConnectionmanagerConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_connectionmanager_connection',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.171.0',
        providerVersionConstraint: '0.171.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._params.internalValue = config.params;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_use - computed: true, optional: false, required: false
  public get canUse() {
    return this.getBooleanAttribute('can_use');
  }

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: true, required: false
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // is_managed - computed: true, optional: false, required: false
  public get isManaged() {
    return this.getBooleanAttribute('is_managed');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // lockbox_secret - computed: true, optional: false, required: false
  private _lockboxSecret = new ConnectionmanagerConnectionLockboxSecretOutputReference(this, "lockbox_secret");
  public get lockboxSecret() {
    return this._lockboxSecret;
  }

  // name - computed: true, optional: true, required: false
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

  // params - computed: true, optional: true, required: false
  private _params = new ConnectionmanagerConnectionParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: ConnectionmanagerConnectionParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConnectionmanagerConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConnectionmanagerConnectionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      params: connectionmanagerConnectionParamsToTerraform(this._params.internalValue),
      timeouts: connectionmanagerConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: connectionmanagerConnectionParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionmanagerConnectionParams",
      },
      timeouts: {
        value: connectionmanagerConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectionmanagerConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
