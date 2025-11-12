// https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransactionManagerKeypairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#id TransactionManagerKeypair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A password to protect the keypair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#password TransactionManagerKeypair#password}
  */
  readonly password?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#config TransactionManagerKeypair#config}
  */
  readonly config?: TransactionManagerKeypairConfigA;
}
export interface TransactionManagerKeypairConfigA {
  /**
  * Number of iterations to cycle through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#iterations TransactionManagerKeypair#iterations}
  */
  readonly iterations?: number;
  /**
  * Memory limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#memory TransactionManagerKeypair#memory}
  */
  readonly memory?: number;
  /**
  * Number of threads to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#parallelism TransactionManagerKeypair#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Algorithm to use when hashing. Allowed values are `id` or `i`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#variant TransactionManagerKeypair#variant}
  */
  readonly variant?: string;
}

export function transactionManagerKeypairConfigAToTerraform(struct?: TransactionManagerKeypairConfigAOutputReference | TransactionManagerKeypairConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iterations: cdktf.numberToTerraform(struct!.iterations),
    memory: cdktf.numberToTerraform(struct!.memory),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    variant: cdktf.stringToTerraform(struct!.variant),
  }
}


export function transactionManagerKeypairConfigAToHclTerraform(struct?: TransactionManagerKeypairConfigAOutputReference | TransactionManagerKeypairConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iterations: {
      value: cdktf.numberToHclTerraform(struct!.iterations),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    variant: {
      value: cdktf.stringToHclTerraform(struct!.variant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransactionManagerKeypairConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransactionManagerKeypairConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iterations !== undefined) {
      hasAnyValues = true;
      internalValueResult.iterations = this._iterations;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransactionManagerKeypairConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iterations = undefined;
      this._memory = undefined;
      this._parallelism = undefined;
      this._variant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iterations = value.iterations;
      this._memory = value.memory;
      this._parallelism = value.parallelism;
      this._variant = value.variant;
    }
  }

  // iterations - computed: false, optional: true, required: false
  private _iterations?: number; 
  public get iterations() {
    return this.getNumberAttribute('iterations');
  }
  public set iterations(value: number) {
    this._iterations = value;
  }
  public resetIterations() {
    this._iterations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iterationsInput() {
    return this._iterations;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // variant - computed: false, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair quorum_transaction_manager_keypair}
*/
export class TransactionManagerKeypair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "quorum_transaction_manager_keypair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransactionManagerKeypair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransactionManagerKeypair to import
  * @param importFromId The id of the existing TransactionManagerKeypair that should be imported. Refer to the {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransactionManagerKeypair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "quorum_transaction_manager_keypair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/consensys/quorum/0.3.0/docs/resources/transaction_manager_keypair quorum_transaction_manager_keypair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransactionManagerKeypairConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TransactionManagerKeypairConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'quorum_transaction_manager_keypair',
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
    this._id = config.id;
    this._password = config.password;
    this._config.internalValue = config.config;
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

  // key_data - computed: true, optional: false, required: false
  public get keyData() {
    return this.getStringAttribute('key_data');
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

  // private_key_json - computed: true, optional: false, required: false
  public get privateKeyJson() {
    return this.getStringAttribute('private_key_json');
  }

  // public_key_b64 - computed: true, optional: false, required: false
  public get publicKeyB64() {
    return this.getStringAttribute('public_key_b64');
  }

  // config - computed: false, optional: true, required: false
  private _config = new TransactionManagerKeypairConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: TransactionManagerKeypairConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      config: transactionManagerKeypairConfigAToTerraform(this._config.internalValue),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: transactionManagerKeypairConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransactionManagerKeypairConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
