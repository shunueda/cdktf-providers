// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PairingKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_keys#id PairingKeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Href of pairing profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_keys#pairing_profile_href PairingKeys#pairing_profile_href}
  */
  readonly pairingProfileHref: string;
  /**
  * Count of token to generate/maintain. It can be accessed in `activation_tokens` On increasing the count, new activation tokens will be generated. On decreasing the count `activation_tokens` list will shrink to that size and extra keys will be discarded. Allowed range is 1 to 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_keys#token_count PairingKeys#token_count}
  */
  readonly tokenCount: number;
}
export interface PairingKeysActivationTokens {
}

export function pairingKeysActivationTokensToTerraform(struct?: PairingKeysActivationTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pairingKeysActivationTokensToHclTerraform(struct?: PairingKeysActivationTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PairingKeysActivationTokensOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PairingKeysActivationTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PairingKeysActivationTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_token - computed: true, optional: false, required: false
  public get activationToken() {
    return this.getStringAttribute('activation_token');
  }

  // nonce - computed: true, optional: false, required: false
  public get nonce() {
    return this.getStringAttribute('nonce');
  }
}

export class PairingKeysActivationTokensList extends cdktf.ComplexList {

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
  public get(index: number): PairingKeysActivationTokensOutputReference {
    return new PairingKeysActivationTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_keys illumio-core_pairing_keys}
*/
export class PairingKeys extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_pairing_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PairingKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PairingKeys to import
  * @param importFromId The id of the existing PairingKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PairingKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_pairing_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/pairing_keys illumio-core_pairing_keys} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PairingKeysConfig
  */
  public constructor(scope: Construct, id: string, config: PairingKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_pairing_keys',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
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
    this._pairingProfileHref = config.pairingProfileHref;
    this._tokenCount = config.tokenCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_tokens - computed: true, optional: false, required: false
  private _activationTokens = new PairingKeysActivationTokensList(this, "activation_tokens", false);
  public get activationTokens() {
    return this._activationTokens;
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

  // pairing_profile_href - computed: false, optional: false, required: true
  private _pairingProfileHref?: string; 
  public get pairingProfileHref() {
    return this.getStringAttribute('pairing_profile_href');
  }
  public set pairingProfileHref(value: string) {
    this._pairingProfileHref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingProfileHrefInput() {
    return this._pairingProfileHref;
  }

  // token_count - computed: false, optional: false, required: true
  private _tokenCount?: number; 
  public get tokenCount() {
    return this.getNumberAttribute('token_count');
  }
  public set tokenCount(value: number) {
    this._tokenCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCountInput() {
    return this._tokenCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pairing_profile_href: cdktf.stringToTerraform(this._pairingProfileHref),
      token_count: cdktf.numberToTerraform(this._tokenCount),
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
      pairing_profile_href: {
        value: cdktf.stringToHclTerraform(this._pairingProfileHref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_count: {
        value: cdktf.numberToHclTerraform(this._tokenCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
