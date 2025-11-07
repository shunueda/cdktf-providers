// https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsProviderConfig {
  /**
  * Configure provider with the context of the capability's id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs#capability_id NsProvider#capability_id}
  */
  readonly capabilityId?: number;
  /**
  * Configure provider with the context of the capability's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs#capability_name NsProvider#capability_name}
  */
  readonly capabilityName?: string;
  /**
  * Configure provider with this organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs#organization NsProvider#organization}
  */
  readonly organization?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs#alias NsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs ns}
*/
export class NsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsProvider to import
  * @param importFromId The id of the existing NsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nullstone-io/ns/0.8.0/docs ns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ns',
      terraformGeneratorMetadata: {
        providerName: 'ns',
        providerVersion: '0.8.0'
      },
      terraformProviderSource: 'nullstone-io/ns'
    });
    this._capabilityId = config.capabilityId;
    this._capabilityName = config.capabilityName;
    this._organization = config.organization;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capability_id - computed: false, optional: true, required: false
  private _capabilityId?: number; 
  public get capabilityId() {
    return this._capabilityId;
  }
  public set capabilityId(value: number | undefined) {
    this._capabilityId = value;
  }
  public resetCapabilityId() {
    this._capabilityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityIdInput() {
    return this._capabilityId;
  }

  // capability_name - computed: false, optional: true, required: false
  private _capabilityName?: string; 
  public get capabilityName() {
    return this._capabilityName;
  }
  public set capabilityName(value: string | undefined) {
    this._capabilityName = value;
  }
  public resetCapabilityName() {
    this._capabilityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityNameInput() {
    return this._capabilityName;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
      capability_id: cdktf.numberToTerraform(this._capabilityId),
      capability_name: cdktf.stringToTerraform(this._capabilityName),
      organization: cdktf.stringToTerraform(this._organization),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capability_id: {
        value: cdktf.numberToHclTerraform(this._capabilityId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capability_name: {
        value: cdktf.stringToHclTerraform(this._capabilityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
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
