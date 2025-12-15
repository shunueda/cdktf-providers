// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LockboxSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#deletion_protection LockboxSecret#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#description LockboxSecret#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#folder_id LockboxSecret#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#id LockboxSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The KMS key used to encrypt the Yandex Cloud Lockbox secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#kms_key_id LockboxSecret#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#labels LockboxSecret#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#name LockboxSecret#name}
  */
  readonly name?: string;
  /**
  * password_payload_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#password_payload_specification LockboxSecret#password_payload_specification}
  */
  readonly passwordPayloadSpecification?: LockboxSecretPasswordPayloadSpecification;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#timeouts LockboxSecret#timeouts}
  */
  readonly timeouts?: LockboxSecretTimeouts;
}
export interface LockboxSecretPasswordPayloadSpecification {
  /**
  * String of punctuation characters to exclude from the default. Requires `include_punctuation = true`. Default is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#excluded_punctuation LockboxSecret#excluded_punctuation}
  */
  readonly excludedPunctuation?: string;
  /**
  * Use digits in the generated password. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#include_digits LockboxSecret#include_digits}
  */
  readonly includeDigits?: boolean | cdktf.IResolvable;
  /**
  * Use lowercase letters in the generated password. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#include_lowercase LockboxSecret#include_lowercase}
  */
  readonly includeLowercase?: boolean | cdktf.IResolvable;
  /**
  * Use punctuations (`!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~`) in the generated password. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#include_punctuation LockboxSecret#include_punctuation}
  */
  readonly includePunctuation?: boolean | cdktf.IResolvable;
  /**
  * Use capital letters in the generated password. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#include_uppercase LockboxSecret#include_uppercase}
  */
  readonly includeUppercase?: boolean | cdktf.IResolvable;
  /**
  * String of specific punctuation characters to use. Requires `include_punctuation = true`. Default is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#included_punctuation LockboxSecret#included_punctuation}
  */
  readonly includedPunctuation?: string;
  /**
  * Length of generated password. Default is `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#length LockboxSecret#length}
  */
  readonly length?: number;
  /**
  * The key with which the generated password will be placed in the secret version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#password_key LockboxSecret#password_key}
  */
  readonly passwordKey: string;
}

export function lockboxSecretPasswordPayloadSpecificationToTerraform(struct?: LockboxSecretPasswordPayloadSpecificationOutputReference | LockboxSecretPasswordPayloadSpecification): any {
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
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
  }
}


export function lockboxSecretPasswordPayloadSpecificationToHclTerraform(struct?: LockboxSecretPasswordPayloadSpecificationOutputReference | LockboxSecretPasswordPayloadSpecification): any {
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
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LockboxSecretPasswordPayloadSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LockboxSecretPasswordPayloadSpecification | undefined {
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
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LockboxSecretPasswordPayloadSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedPunctuation = undefined;
      this._includeDigits = undefined;
      this._includeLowercase = undefined;
      this._includePunctuation = undefined;
      this._includeUppercase = undefined;
      this._includedPunctuation = undefined;
      this._length = undefined;
      this._passwordKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedPunctuation = value.excludedPunctuation;
      this._includeDigits = value.includeDigits;
      this._includeLowercase = value.includeLowercase;
      this._includePunctuation = value.includePunctuation;
      this._includeUppercase = value.includeUppercase;
      this._includedPunctuation = value.includedPunctuation;
      this._length = value.length;
      this._passwordKey = value.passwordKey;
    }
  }

  // excluded_punctuation - computed: false, optional: true, required: false
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

  // include_digits - computed: false, optional: true, required: false
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

  // include_lowercase - computed: false, optional: true, required: false
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

  // include_punctuation - computed: false, optional: true, required: false
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

  // include_uppercase - computed: false, optional: true, required: false
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

  // included_punctuation - computed: false, optional: true, required: false
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

  // length - computed: false, optional: true, required: false
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

  // password_key - computed: false, optional: false, required: true
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }
}
export interface LockboxSecretTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#create LockboxSecret#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#delete LockboxSecret#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#read LockboxSecret#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#update LockboxSecret#update}
  */
  readonly update?: string;
}

export function lockboxSecretTimeoutsToTerraform(struct?: LockboxSecretTimeouts | cdktf.IResolvable): any {
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


export function lockboxSecretTimeoutsToHclTerraform(struct?: LockboxSecretTimeouts | cdktf.IResolvable): any {
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

export class LockboxSecretTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LockboxSecretTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LockboxSecretTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret yandex_lockbox_secret}
*/
export class LockboxSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_lockbox_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LockboxSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LockboxSecret to import
  * @param importFromId The id of the existing LockboxSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LockboxSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_lockbox_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/lockbox_secret yandex_lockbox_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LockboxSecretConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LockboxSecretConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_lockbox_secret',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._kmsKeyId = config.kmsKeyId;
    this._labels = config.labels;
    this._name = config.name;
    this._passwordPayloadSpecification.internalValue = config.passwordPayloadSpecification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // labels - computed: false, optional: true, required: false
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // password_payload_specification - computed: false, optional: true, required: false
  private _passwordPayloadSpecification = new LockboxSecretPasswordPayloadSpecificationOutputReference(this, "password_payload_specification");
  public get passwordPayloadSpecification() {
    return this._passwordPayloadSpecification;
  }
  public putPasswordPayloadSpecification(value: LockboxSecretPasswordPayloadSpecification) {
    this._passwordPayloadSpecification.internalValue = value;
  }
  public resetPasswordPayloadSpecification() {
    this._passwordPayloadSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPayloadSpecificationInput() {
    return this._passwordPayloadSpecification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LockboxSecretTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LockboxSecretTimeouts) {
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
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      password_payload_specification: lockboxSecretPasswordPayloadSpecificationToTerraform(this._passwordPayloadSpecification.internalValue),
      timeouts: lockboxSecretTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
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
      password_payload_specification: {
        value: lockboxSecretPasswordPayloadSpecificationToHclTerraform(this._passwordPayloadSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LockboxSecretPasswordPayloadSpecificationList",
      },
      timeouts: {
        value: lockboxSecretTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LockboxSecretTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
