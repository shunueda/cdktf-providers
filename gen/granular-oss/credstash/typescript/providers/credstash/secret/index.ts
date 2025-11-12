// https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * encryption context for the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#context Secret#context}
  */
  readonly context?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#id Secret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#name Secret#name}
  */
  readonly name: string;
  /**
  * name of DynamoDB table where the secrets are stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#table Secret#table}
  */
  readonly table?: string;
  /**
  * The secret contents. Either `value` or `generate` must be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#value Secret#value}
  */
  readonly value?: string;
  /**
  * version of the secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#version Secret#version}
  */
  readonly version?: number;
  /**
  * generate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#generate Secret#generate}
  */
  readonly generate?: SecretGenerate;
}
export interface SecretGenerate {
  /**
  * Define the set of characters to randomly generate a password from. Options are all, alphanumeric, numeric, lowercase, uppercase, letters, symbols and human-readable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#charsets Secret#charsets}
  */
  readonly charsets?: string[];
  /**
  * The length of the secret to generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#length Secret#length}
  */
  readonly length: number;
  /**
  * Ensure that the generated secret contains at least n characters from the given character set. Note that adding constraints reduces the strength of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#min Secret#min}
  */
  readonly min?: { [key: string]: number };
  /**
  * Whether the secret should contain symbols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#use_symbols Secret#use_symbols}
  */
  readonly useSymbols?: boolean | cdktf.IResolvable;
}

export function secretGenerateToTerraform(struct?: SecretGenerateOutputReference | SecretGenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charsets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.charsets),
    length: cdktf.numberToTerraform(struct!.length),
    min: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.min),
    use_symbols: cdktf.booleanToTerraform(struct!.useSymbols),
  }
}


export function secretGenerateToHclTerraform(struct?: SecretGenerateOutputReference | SecretGenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    charsets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.charsets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.min),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    use_symbols: {
      value: cdktf.booleanToHclTerraform(struct!.useSymbols),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecretGenerateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecretGenerate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._charsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.charsets = this._charsets;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    if (this._useSymbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSymbols = this._useSymbols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretGenerate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._charsets = undefined;
      this._length = undefined;
      this._min = undefined;
      this._useSymbols = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._charsets = value.charsets;
      this._length = value.length;
      this._min = value.min;
      this._useSymbols = value.useSymbols;
    }
  }

  // charsets - computed: false, optional: true, required: false
  private _charsets?: string[]; 
  public get charsets() {
    return cdktf.Fn.tolist(this.getListAttribute('charsets'));
  }
  public set charsets(value: string[]) {
    this._charsets = value;
  }
  public resetCharsets() {
    this._charsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charsetsInput() {
    return this._charsets;
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // min - computed: false, optional: true, required: false
  private _min?: { [key: string]: number }; 
  public get min() {
    return this.getNumberMapAttribute('min');
  }
  public set min(value: { [key: string]: number }) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }

  // use_symbols - computed: false, optional: true, required: false
  private _useSymbols?: boolean | cdktf.IResolvable; 
  public get useSymbols() {
    return this.getBooleanAttribute('use_symbols');
  }
  public set useSymbols(value: boolean | cdktf.IResolvable) {
    this._useSymbols = value;
  }
  public resetUseSymbols() {
    this._useSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSymbolsInput() {
    return this._useSymbols;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret credstash_secret}
*/
export class Secret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "credstash_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Secret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Secret to import
  * @param importFromId The id of the existing Secret that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Secret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "credstash_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/credstash/0.7.2/docs/resources/secret credstash_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretConfig
  */
  public constructor(scope: Construct, id: string, config: SecretConfig) {
    super(scope, id, {
      terraformResourceType: 'credstash_secret',
      terraformGeneratorMetadata: {
        providerName: 'credstash',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._id = config.id;
    this._name = config.name;
    this._table = config.table;
    this._value = config.value;
    this._version = config.version;
    this._generate.internalValue = config.generate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: { [key: string]: string }; 
  public get context() {
    return this.getStringMapAttribute('context');
  }
  public set context(value: { [key: string]: string }) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // generate - computed: false, optional: true, required: false
  private _generate = new SecretGenerateOutputReference(this, "generate");
  public get generate() {
    return this._generate;
  }
  public putGenerate(value: SecretGenerate) {
    this._generate.internalValue = value;
  }
  public resetGenerate() {
    this._generate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateInput() {
    return this._generate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.hashMapper(cdktf.stringToTerraform)(this._context),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      table: cdktf.stringToTerraform(this._table),
      value: cdktf.stringToTerraform(this._value),
      version: cdktf.numberToTerraform(this._version),
      generate: secretGenerateToTerraform(this._generate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._context),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generate: {
        value: secretGenerateToHclTerraform(this._generate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecretGenerateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
