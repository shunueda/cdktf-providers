// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamServiceAccountApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#description IamServiceAccountApiKey#description}
  */
  readonly description?: string;
  /**
  * The key will be no longer valid after expiration timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#expires_at IamServiceAccountApiKey#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#id IamServiceAccountApiKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An optional PGP key to encrypt the resulting secret key material. May either be a base64-encoded public key or a keybase username in the form `keybase:keybaseusername`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#pgp_key IamServiceAccountApiKey#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * The scope of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#scope IamServiceAccountApiKey#scope}
  */
  readonly scope?: string;
  /**
  * The list of scopes of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#scopes IamServiceAccountApiKey#scopes}
  */
  readonly scopes?: string[];
  /**
  * ID of the service account to an API key for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#service_account_id IamServiceAccountApiKey#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * output_to_lockbox block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#output_to_lockbox IamServiceAccountApiKey#output_to_lockbox}
  */
  readonly outputToLockbox?: IamServiceAccountApiKeyOutputToLockbox;
}
export interface IamServiceAccountApiKeyOutputToLockbox {
  /**
  * entry that will store the value of secret_key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#entry_for_secret_key IamServiceAccountApiKey#entry_for_secret_key}
  */
  readonly entryForSecretKey: string;
  /**
  * ID of the Lockbox secret where to store the sensible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#secret_id IamServiceAccountApiKey#secret_id}
  */
  readonly secretId: string;
}

export function iamServiceAccountApiKeyOutputToLockboxToTerraform(struct?: IamServiceAccountApiKeyOutputToLockboxOutputReference | IamServiceAccountApiKeyOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_for_secret_key: cdktf.stringToTerraform(struct!.entryForSecretKey),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function iamServiceAccountApiKeyOutputToLockboxToHclTerraform(struct?: IamServiceAccountApiKeyOutputToLockboxOutputReference | IamServiceAccountApiKeyOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IamServiceAccountApiKeyOutputToLockboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamServiceAccountApiKeyOutputToLockbox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: IamServiceAccountApiKeyOutputToLockbox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryForSecretKey = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryForSecretKey = value.entryForSecretKey;
      this._secretId = value.secretId;
    }
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key yandex_iam_service_account_api_key}
*/
export class IamServiceAccountApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_service_account_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamServiceAccountApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamServiceAccountApiKey to import
  * @param importFromId The id of the existing IamServiceAccountApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamServiceAccountApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_iam_service_account_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/iam_service_account_api_key yandex_iam_service_account_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamServiceAccountApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: IamServiceAccountApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_service_account_api_key',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
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
    this._expiresAt = config.expiresAt;
    this._id = config.id;
    this._pgpKey = config.pgpKey;
    this._scope = config.scope;
    this._scopes = config.scopes;
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

  // encrypted_secret_key - computed: true, optional: false, required: false
  public get encryptedSecretKey() {
    return this.getStringAttribute('encrypted_secret_key');
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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
  private _outputToLockbox = new IamServiceAccountApiKeyOutputToLockboxOutputReference(this, "output_to_lockbox");
  public get outputToLockbox() {
    return this._outputToLockbox;
  }
  public putOutputToLockbox(value: IamServiceAccountApiKeyOutputToLockbox) {
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
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      id: cdktf.stringToTerraform(this._id),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      scope: cdktf.stringToTerraform(this._scope),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      output_to_lockbox: iamServiceAccountApiKeyOutputToLockboxToTerraform(this._outputToLockbox.internalValue),
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
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_to_lockbox: {
        value: iamServiceAccountApiKeyOutputToLockboxToHclTerraform(this._outputToLockbox.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamServiceAccountApiKeyOutputToLockboxList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
