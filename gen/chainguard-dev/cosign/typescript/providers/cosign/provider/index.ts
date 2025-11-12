// https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosignProviderConfig {
  /**
  * Default Rekor entry type to use for attestations. Valid values are 'intoto' (default) or 'dsse'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs#default_attestation_entry_type CosignProvider#default_attestation_entry_type}
  */
  readonly defaultAttestationEntryType?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs#alias CosignProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs cosign}
*/
export class CosignProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosignProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosignProvider to import
  * @param importFromId The id of the existing CosignProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosignProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs cosign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosignProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CosignProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cosign',
      terraformGeneratorMetadata: {
        providerName: 'cosign',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      terraformProviderSource: 'chainguard-dev/cosign'
    });
    this._defaultAttestationEntryType = config.defaultAttestationEntryType;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_attestation_entry_type - computed: false, optional: true, required: false
  private _defaultAttestationEntryType?: string; 
  public get defaultAttestationEntryType() {
    return this._defaultAttestationEntryType;
  }
  public set defaultAttestationEntryType(value: string | undefined) {
    this._defaultAttestationEntryType = value;
  }
  public resetDefaultAttestationEntryType() {
    this._defaultAttestationEntryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAttestationEntryTypeInput() {
    return this._defaultAttestationEntryType;
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
      default_attestation_entry_type: cdktf.stringToTerraform(this._defaultAttestationEntryType),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_attestation_entry_type: {
        value: cdktf.stringToHclTerraform(this._defaultAttestationEntryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
