// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamServiceAccountKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#description IamServiceAccountKey#description}
  */
  readonly description?: string;
  /**
  * The output format of the keys. `PEM_FILE` is the default format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#format IamServiceAccountKey#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#id IamServiceAccountKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The algorithm used to generate the key. `RSA_2048` is the default algorithm. Valid values are listed in the [API reference](https://yandex.cloud/docs/iam/api-ref/Key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#key_algorithm IamServiceAccountKey#key_algorithm}
  */
  readonly keyAlgorithm?: string;
  /**
  * An optional PGP key to encrypt the resulting private key material. May either be a base64-encoded public key or a keybase username in the form `keybase:keybaseusername`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#pgp_key IamServiceAccountKey#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * ID of the service account to create a pair for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#service_account_id IamServiceAccountKey#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * output_to_lockbox block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#output_to_lockbox IamServiceAccountKey#output_to_lockbox}
  */
  readonly outputToLockbox?: IamServiceAccountKeyOutputToLockbox;
}
export interface IamServiceAccountKeyOutputToLockbox {
  /**
  * entry that will store the value of private_key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#entry_for_private_key IamServiceAccountKey#entry_for_private_key}
  */
  readonly entryForPrivateKey: string;
  /**
  * ID of the Lockbox secret where to store the sensible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#secret_id IamServiceAccountKey#secret_id}
  */
  readonly secretId: string;
}

export function iamServiceAccountKeyOutputToLockboxToTerraform(struct?: IamServiceAccountKeyOutputToLockboxOutputReference | IamServiceAccountKeyOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_for_private_key: cdktf.stringToTerraform(struct!.entryForPrivateKey),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function iamServiceAccountKeyOutputToLockboxToHclTerraform(struct?: IamServiceAccountKeyOutputToLockboxOutputReference | IamServiceAccountKeyOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_for_private_key: {
      value: cdktf.stringToHclTerraform(struct!.entryForPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamServiceAccountKeyOutputToLockboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamServiceAccountKeyOutputToLockbox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryForPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryForPrivateKey = this._entryForPrivateKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamServiceAccountKeyOutputToLockbox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryForPrivateKey = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryForPrivateKey = value.entryForPrivateKey;
      this._secretId = value.secretId;
    }
  }

  // entry_for_private_key - computed: false, optional: false, required: true
  private _entryForPrivateKey?: string; 
  public get entryForPrivateKey() {
    return this.getStringAttribute('entry_for_private_key');
  }
  public set entryForPrivateKey(value: string) {
    this._entryForPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryForPrivateKeyInput() {
    return this._entryForPrivateKey;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key yandex_iam_service_account_key}
*/
export class IamServiceAccountKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_service_account_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamServiceAccountKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamServiceAccountKey to import
  * @param importFromId The id of the existing IamServiceAccountKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamServiceAccountKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_iam_service_account_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/iam_service_account_key yandex_iam_service_account_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamServiceAccountKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IamServiceAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_service_account_key',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0',
        providerVersionConstraint: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._keyAlgorithm = config.keyAlgorithm;
    this._pgpKey = config.pgpKey;
    this._serviceAccountId = config.serviceAccountId;
    this._outputToLockbox.internalValue = config.outputToLockbox;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // encrypted_private_key - computed: true, optional: false, required: false
  public get encryptedPrivateKey() {
    return this.getStringAttribute('encrypted_private_key');
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // key_algorithm - computed: false, optional: true, required: false
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  public resetKeyAlgorithm() {
    this._keyAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm;
  }

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // output_to_lockbox_version_id - computed: true, optional: false, required: false
  public get outputToLockboxVersionId() {
    return this.getStringAttribute('output_to_lockbox_version_id');
  }

  // pgp_key - computed: false, optional: true, required: false
  private _pgpKey?: string; 
  public get pgpKey() {
    return this.getStringAttribute('pgp_key');
  }
  public set pgpKey(value: string) {
    this._pgpKey = value;
  }
  public resetPgpKey() {
    this._pgpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgpKeyInput() {
    return this._pgpKey;
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // output_to_lockbox - computed: false, optional: true, required: false
  private _outputToLockbox = new IamServiceAccountKeyOutputToLockboxOutputReference(this, "output_to_lockbox");
  public get outputToLockbox() {
    return this._outputToLockbox;
  }
  public putOutputToLockbox(value: IamServiceAccountKeyOutputToLockbox) {
    this._outputToLockbox.internalValue = value;
  }
  public resetOutputToLockbox() {
    this._outputToLockbox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputToLockboxInput() {
    return this._outputToLockbox.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      key_algorithm: cdktf.stringToTerraform(this._keyAlgorithm),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      output_to_lockbox: iamServiceAccountKeyOutputToLockboxToTerraform(this._outputToLockbox.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      key_algorithm: {
        value: cdktf.stringToHclTerraform(this._keyAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgp_key: {
        value: cdktf.stringToHclTerraform(this._pgpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_to_lockbox: {
        value: iamServiceAccountKeyOutputToLockboxToHclTerraform(this._outputToLockbox.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamServiceAccountKeyOutputToLockboxList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
