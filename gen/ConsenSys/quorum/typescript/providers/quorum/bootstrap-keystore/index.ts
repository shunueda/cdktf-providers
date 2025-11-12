// https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootstrapKeystoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account being created under this keystore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#account BootstrapKeystore#account}
  */
  readonly account?: BootstrapKeystoreAccount[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#id BootstrapKeystore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Directory contains private keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#keystore_dir BootstrapKeystore#keystore_dir}
  */
  readonly keystoreDir: string;
  /**
  * True to lower the memory and CPU requirements of the key store scrypt KDF at the expense of security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#use_light_weight_kdf BootstrapKeystore#use_light_weight_kdf}
  */
  readonly useLightWeightKdf?: boolean | cdktf.IResolvable;
}
export interface BootstrapKeystoreAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#account_url BootstrapKeystore#account_url}
  */
  readonly accountUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#address BootstrapKeystore#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#balance BootstrapKeystore#balance}
  */
  readonly balance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#passphrase BootstrapKeystore#passphrase}
  */
  readonly passphrase?: string;
}

export function bootstrapKeystoreAccountToTerraform(struct?: BootstrapKeystoreAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_url: cdktf.stringToTerraform(struct!.accountUrl),
    address: cdktf.stringToTerraform(struct!.address),
    balance: cdktf.stringToTerraform(struct!.balance),
    passphrase: cdktf.stringToTerraform(struct!.passphrase),
  }
}


export function bootstrapKeystoreAccountToHclTerraform(struct?: BootstrapKeystoreAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_url: {
      value: cdktf.stringToHclTerraform(struct!.accountUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    balance: {
      value: cdktf.stringToHclTerraform(struct!.balance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passphrase: {
      value: cdktf.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BootstrapKeystoreAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BootstrapKeystoreAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountUrl = this._accountUrl;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._balance !== undefined) {
      hasAnyValues = true;
      internalValueResult.balance = this._balance;
    }
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BootstrapKeystoreAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountUrl = undefined;
      this._address = undefined;
      this._balance = undefined;
      this._passphrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountUrl = value.accountUrl;
      this._address = value.address;
      this._balance = value.balance;
      this._passphrase = value.passphrase;
    }
  }

  // account_url - computed: false, optional: true, required: false
  private _accountUrl?: string; 
  public get accountUrl() {
    return this.getStringAttribute('account_url');
  }
  public set accountUrl(value: string) {
    this._accountUrl = value;
  }
  public resetAccountUrl() {
    this._accountUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountUrlInput() {
    return this._accountUrl;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // balance - computed: false, optional: true, required: false
  private _balance?: string; 
  public get balance() {
    return this.getStringAttribute('balance');
  }
  public set balance(value: string) {
    this._balance = value;
  }
  public resetBalance() {
    this._balance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceInput() {
    return this._balance;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }
}

export class BootstrapKeystoreAccountList extends cdktf.ComplexList {
  public internalValue? : BootstrapKeystoreAccount[] | cdktf.IResolvable

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
  public get(index: number): BootstrapKeystoreAccountOutputReference {
    return new BootstrapKeystoreAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore quorum_bootstrap_keystore}
*/
export class BootstrapKeystore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "quorum_bootstrap_keystore";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootstrapKeystore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootstrapKeystore to import
  * @param importFromId The id of the existing BootstrapKeystore that should be imported. Refer to the {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootstrapKeystore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "quorum_bootstrap_keystore", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/bootstrap_keystore quorum_bootstrap_keystore} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootstrapKeystoreConfig
  */
  public constructor(scope: Construct, id: string, config: BootstrapKeystoreConfig) {
    super(scope, id, {
      terraformResourceType: 'quorum_bootstrap_keystore',
      terraformGeneratorMetadata: {
        providerName: 'quorum',
        providerVersion: '0.3.0',
        providerVersionConstraint: '0.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account.internalValue = config.account;
    this._id = config.id;
    this._keystoreDir = config.keystoreDir;
    this._useLightWeightKdf = config.useLightWeightKdf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account = new BootstrapKeystoreAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: BootstrapKeystoreAccount[] | cdktf.IResolvable) {
    this._account.internalValue = value;
  }
  public resetAccount() {
    this._account.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
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

  // keystore_dir - computed: false, optional: false, required: true
  private _keystoreDir?: string; 
  public get keystoreDir() {
    return this.getStringAttribute('keystore_dir');
  }
  public set keystoreDir(value: string) {
    this._keystoreDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreDirInput() {
    return this._keystoreDir;
  }

  // keystore_dir_abs - computed: true, optional: false, required: false
  public get keystoreDirAbs() {
    return this.getStringAttribute('keystore_dir_abs');
  }

  // use_light_weight_kdf - computed: false, optional: true, required: false
  private _useLightWeightKdf?: boolean | cdktf.IResolvable; 
  public get useLightWeightKdf() {
    return this.getBooleanAttribute('use_light_weight_kdf');
  }
  public set useLightWeightKdf(value: boolean | cdktf.IResolvable) {
    this._useLightWeightKdf = value;
  }
  public resetUseLightWeightKdf() {
    this._useLightWeightKdf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLightWeightKdfInput() {
    return this._useLightWeightKdf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.listMapper(bootstrapKeystoreAccountToTerraform, false)(this._account.internalValue),
      id: cdktf.stringToTerraform(this._id),
      keystore_dir: cdktf.stringToTerraform(this._keystoreDir),
      use_light_weight_kdf: cdktf.booleanToTerraform(this._useLightWeightKdf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.listMapperHcl(bootstrapKeystoreAccountToHclTerraform, false)(this._account.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BootstrapKeystoreAccountList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keystore_dir: {
        value: cdktf.stringToHclTerraform(this._keystoreDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_light_weight_kdf: {
        value: cdktf.booleanToHclTerraform(this._useLightWeightKdf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
