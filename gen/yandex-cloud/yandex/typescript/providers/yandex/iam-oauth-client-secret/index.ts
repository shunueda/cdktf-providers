// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamOauthClientSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#description IamOauthClientSecret#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#id IamOauthClientSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the OAuth client to create a secret for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#oauth_client_id IamOauthClientSecret#oauth_client_id}
  */
  readonly oauthClientId: string;
  /**
  * An optional PGP key to encrypt the resulting secret value. May either be a base64-encoded public key or a keybase username in the form `keybase:keybaseusername`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#pgp_key IamOauthClientSecret#pgp_key}
  */
  readonly pgpKey?: string;
  /**
  * output_to_lockbox block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#output_to_lockbox IamOauthClientSecret#output_to_lockbox}
  */
  readonly outputToLockbox?: IamOauthClientSecretOutputToLockbox;
}
export interface IamOauthClientSecretOutputToLockbox {
  /**
  * entry that will store the value of secret_value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#entry_for_secret_value IamOauthClientSecret#entry_for_secret_value}
  */
  readonly entryForSecretValue: string;
  /**
  * ID of the Lockbox secret where to store the sensible values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#secret_id IamOauthClientSecret#secret_id}
  */
  readonly secretId: string;
}

export function iamOauthClientSecretOutputToLockboxToTerraform(struct?: IamOauthClientSecretOutputToLockboxOutputReference | IamOauthClientSecretOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_for_secret_value: cdktf.stringToTerraform(struct!.entryForSecretValue),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function iamOauthClientSecretOutputToLockboxToHclTerraform(struct?: IamOauthClientSecretOutputToLockboxOutputReference | IamOauthClientSecretOutputToLockbox): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_for_secret_value: {
      value: cdktf.stringToHclTerraform(struct!.entryForSecretValue),
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

export class IamOauthClientSecretOutputToLockboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamOauthClientSecretOutputToLockbox | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryForSecretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryForSecretValue = this._entryForSecretValue;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamOauthClientSecretOutputToLockbox | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryForSecretValue = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryForSecretValue = value.entryForSecretValue;
      this._secretId = value.secretId;
    }
  }

  // entry_for_secret_value - computed: false, optional: false, required: true
  private _entryForSecretValue?: string; 
  public get entryForSecretValue() {
    return this.getStringAttribute('entry_for_secret_value');
  }
  public set entryForSecretValue(value: string) {
    this._entryForSecretValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryForSecretValueInput() {
    return this._entryForSecretValue;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret yandex_iam_oauth_client_secret}
*/
export class IamOauthClientSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_iam_oauth_client_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamOauthClientSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamOauthClientSecret to import
  * @param importFromId The id of the existing IamOauthClientSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamOauthClientSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_iam_oauth_client_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/iam_oauth_client_secret yandex_iam_oauth_client_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamOauthClientSecretConfig
  */
  public constructor(scope: Construct, id: string, config: IamOauthClientSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_iam_oauth_client_secret',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
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
    this._oauthClientId = config.oauthClientId;
    this._pgpKey = config.pgpKey;
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

  // encrypted_secret_value - computed: true, optional: false, required: false
  public get encryptedSecretValue() {
    return this.getStringAttribute('encrypted_secret_value');
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

  // masked_secret - computed: true, optional: false, required: false
  public get maskedSecret() {
    return this.getStringAttribute('masked_secret');
  }

  // oauth_client_id - computed: false, optional: false, required: true
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
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

  // secret_value - computed: true, optional: false, required: false
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }

  // output_to_lockbox - computed: false, optional: true, required: false
  private _outputToLockbox = new IamOauthClientSecretOutputToLockboxOutputReference(this, "output_to_lockbox");
  public get outputToLockbox() {
    return this._outputToLockbox;
  }
  public putOutputToLockbox(value: IamOauthClientSecretOutputToLockbox) {
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
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      pgp_key: cdktf.stringToTerraform(this._pgpKey),
      output_to_lockbox: iamOauthClientSecretOutputToLockboxToTerraform(this._outputToLockbox.internalValue),
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
      oauth_client_id: {
        value: cdktf.stringToHclTerraform(this._oauthClientId),
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
      output_to_lockbox: {
        value: iamOauthClientSecretOutputToLockboxToHclTerraform(this._outputToLockbox.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamOauthClientSecretOutputToLockboxList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
