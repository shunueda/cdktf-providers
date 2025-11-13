// https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamServiceAccountStaticAccessKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#description IamServiceAccountStaticAccessKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#id IamServiceAccountStaticAccessKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional PGP key to encrypt the resulting secret key material. May either be a base64-encoded public key or a keybase username in the form `keybase:keybaseusername`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#pgp_key IamServiceAccountStaticAccessKey#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * ID of the service account which is used to get a static key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#service_account_id IamServiceAccountStaticAccessKey#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * output_to_lockbox block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#output_to_lockbox IamServiceAccountStaticAccessKey#output_to_lockbox}
  */
  readonly outputToLockbox?: IamServiceAccountStaticAccessKeyOutputToLockbox;
}
export interface IamServiceAccountStaticAccessKeyOutputToLockbox {
  /**
  * entry that will store the value of access_key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#entry_for_access_key IamServiceAccountStaticAccessKey#entry_for_access_key}
  */
  readonly entryForAccessKey: string;
  /**
  * entry that will store the value of secret_key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#entry_for_secret_key IamServiceAccountStaticAccessKey#entry_for_secret_key}
  */
  readonly entryForSecretKey: string;
  /**
  * ID of the Lockbox secret where to store the sensible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#secret_id IamServiceAccountStaticAccessKey#secret_id}
  */
  readonly secretId: string;
}

export function iamServiceAccountStaticAccessKeyOutputToLockboxToTerraform(struct?: IamServiceAccountStaticAccessKeyOutputToLockboxOutputReference | IamServiceAccountStaticAccessKeyOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_for_access_key: cdktf.stringToTerraform(struct!.entryForAccessKey),
    entry_for_secret_key: cdktf.stringToTerraform(struct!.entryForSecretKey),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function iamServiceAccountStaticAccessKeyOutputToLockboxToHclTerraform(struct?: IamServiceAccountStaticAccessKeyOutputToLockboxOutputReference | IamServiceAccountStaticAccessKeyOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_for_access_key: {
      value: cdktf.stringToHclTerraform(struct!.entryForAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_for_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.entryForSecretKey),
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

export class IamServiceAccountStaticAccessKeyOutputToLockboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamServiceAccountStaticAccessKeyOutputToLockbox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryForAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryForAccessKey = this._entryForAccessKey;
    }
    if (this._entryForSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryForSecretKey = this._entryForSecretKey;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamServiceAccountStaticAccessKeyOutputToLockbox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryForAccessKey = undefined;
      this._entryForSecretKey = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryForAccessKey = value.entryForAccessKey;
      this._entryForSecretKey = value.entryForSecretKey;
      this._secretId = value.secretId;
    }
  }

  // entry_for_access_key - computed: false, optional: false, required: true
  private _entryForAccessKey?: string; 
  public get entryForAccessKey() {
    return this.getStringAttribute('entry_for_access_key');
  }
  public set entryForAccessKey(value: string) {
    this._entryForAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryForAccessKeyInput() {
    return this._entryForAccessKey;
  }

  // entry_for_secret_key - computed: false, optional: false, required: true
  private _entryForSecretKey?: string; 
  public get entryForSecretKey() {
    return this.getStringAttribute('entry_for_secret_key');
  }
  public set entryForSecretKey(value: string) {
    this._entryForSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryForSecretKeyInput() {
    return this._entryForSecretKey;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key yandex_iam_service_account_static_access_key}
*/
export class IamServiceAccountStaticAccessKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_service_account_static_access_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamServiceAccountStaticAccessKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamServiceAccountStaticAccessKey to import
  * @param importFromId The id of the existing IamServiceAccountStaticAccessKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamServiceAccountStaticAccessKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_iam_service_account_static_access_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/iam_service_account_static_access_key yandex_iam_service_account_static_access_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamServiceAccountStaticAccessKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IamServiceAccountStaticAccessKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_service_account_static_access_key',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.170.0',
        providerVersionConstraint: '0.170.0'
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
    this._id = config.id;
    this._pgpKey = config.pgpKey;
    this._serviceAccountId = config.serviceAccountId;
    this._outputToLockbox.internalValue = config.outputToLockbox;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: true, optional: false, required: false
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }

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

  // encrypted_secret_key - computed: true, optional: false, required: false
  public get encryptedSecretKey() {
    return this.getStringAttribute('encrypted_secret_key');
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

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
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
  private _outputToLockbox = new IamServiceAccountStaticAccessKeyOutputToLockboxOutputReference(this, "output_to_lockbox");
  public get outputToLockbox() {
    return this._outputToLockbox;
  }
  public putOutputToLockbox(value: IamServiceAccountStaticAccessKeyOutputToLockbox) {
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
      id: cdktf.stringToTerraform(this._id),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      output_to_lockbox: iamServiceAccountStaticAccessKeyOutputToLockboxToTerraform(this._outputToLockbox.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
        value: iamServiceAccountStaticAccessKeyOutputToLockboxToHclTerraform(this._outputToLockbox.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamServiceAccountStaticAccessKeyOutputToLockboxList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
