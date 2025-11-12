// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MegaportProviderConfig {
  /**
  * Indicates acceptance of the Megaport API terms, this is required to use the provider. Can also be set using the environment variable MEGAPORT_ACCEPT_PURCHASE_TERMS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#accept_purchase_terms MegaportProvider#accept_purchase_terms}
  */
  readonly acceptPurchaseTerms?: boolean | cdktf.IResolvable;
  /**
  * The API access key. Can also be set using the environment variable MEGAPORT_ACCESS_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#access_key MegaportProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * When true, resources will be marked for cancellation at the end of their billing term rather than immediately. Default is false (immediate cancellation). Please note that this is only applicable to resources that support cancellation at the end of the term, which is currently only the case for Single Ports and LAG Ports. For other resources, this attribute will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#cancel_at_end_of_term MegaportProvider#cancel_at_end_of_term}
  */
  readonly cancelAtEndOfTerm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#environment MegaportProvider#environment}
  */
  readonly environment?: string;
  /**
  * The API secret key. Can also be set using the environment variable MEGAPORT_SECRET_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#secret_key MegaportProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The time to wait in minutes for creating and updating resources in Megaport API. Default value is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#wait_time MegaportProvider#wait_time}
  */
  readonly waitTime?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#alias MegaportProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs megaport}
*/
export class MegaportProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MegaportProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MegaportProvider to import
  * @param importFromId The id of the existing MegaportProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MegaportProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs megaport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MegaportProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MegaportProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'megaport',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6',
        providerVersionConstraint: '1.4.6'
      },
      terraformProviderSource: 'megaport/megaport'
    });
    this._acceptPurchaseTerms = config.acceptPurchaseTerms;
    this._accessKey = config.accessKey;
    this._cancelAtEndOfTerm = config.cancelAtEndOfTerm;
    this._environment = config.environment;
    this._secretKey = config.secretKey;
    this._waitTime = config.waitTime;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_purchase_terms - computed: false, optional: true, required: false
  private _acceptPurchaseTerms?: boolean | cdktf.IResolvable; 
  public get acceptPurchaseTerms() {
    return this._acceptPurchaseTerms;
  }
  public set acceptPurchaseTerms(value: boolean | cdktf.IResolvable | undefined) {
    this._acceptPurchaseTerms = value;
  }
  public resetAcceptPurchaseTerms() {
    this._acceptPurchaseTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptPurchaseTermsInput() {
    return this._acceptPurchaseTerms;
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // cancel_at_end_of_term - computed: false, optional: true, required: false
  private _cancelAtEndOfTerm?: boolean | cdktf.IResolvable; 
  public get cancelAtEndOfTerm() {
    return this._cancelAtEndOfTerm;
  }
  public set cancelAtEndOfTerm(value: boolean | cdktf.IResolvable | undefined) {
    this._cancelAtEndOfTerm = value;
  }
  public resetCancelAtEndOfTerm() {
    this._cancelAtEndOfTerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelAtEndOfTermInput() {
    return this._cancelAtEndOfTerm;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: number; 
  public get waitTime() {
    return this._waitTime;
  }
  public set waitTime(value: number | undefined) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_purchase_terms: cdktf.booleanToTerraform(this._acceptPurchaseTerms),
      access_key: cdktf.stringToTerraform(this._accessKey),
      cancel_at_end_of_term: cdktf.booleanToTerraform(this._cancelAtEndOfTerm),
      environment: cdktf.stringToTerraform(this._environment),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      wait_time: cdktf.numberToTerraform(this._waitTime),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_purchase_terms: {
        value: cdktf.booleanToHclTerraform(this._acceptPurchaseTerms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cancel_at_end_of_term: {
        value: cdktf.booleanToHclTerraform(this._cancelAtEndOfTerm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_time: {
        value: cdktf.numberToHclTerraform(this._waitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
