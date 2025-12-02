// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrincipalRateLimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default percentage of a given concurrency limit threshold that the owning principal can consume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits#default_concurrency_percentage PrincipalRateLimits#default_concurrency_percentage}
  */
  readonly defaultConcurrencyPercentage?: number;
  /**
  * The default percentage of a given rate limit threshold that the owning principal can consume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits#default_percentage PrincipalRateLimits#default_percentage}
  */
  readonly defaultPercentage?: number;
  /**
  * The unique identifier of the principal. This is the ID of the API token or OAuth 2.0 app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits#principal_id PrincipalRateLimits#principal_id}
  */
  readonly principalId: string;
  /**
  * The type of principal, either an API token or an OAuth 2.0 app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits#principal_type PrincipalRateLimits#principal_type}
  */
  readonly principalType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits okta_principal_rate_limits}
*/
export class PrincipalRateLimits extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_principal_rate_limits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrincipalRateLimits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrincipalRateLimits to import
  * @param importFromId The id of the existing PrincipalRateLimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrincipalRateLimits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_principal_rate_limits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/principal_rate_limits okta_principal_rate_limits} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrincipalRateLimitsConfig
  */
  public constructor(scope: Construct, id: string, config: PrincipalRateLimitsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_principal_rate_limits',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultConcurrencyPercentage = config.defaultConcurrencyPercentage;
    this._defaultPercentage = config.defaultPercentage;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // default_concurrency_percentage - computed: true, optional: true, required: false
  private _defaultConcurrencyPercentage?: number; 
  public get defaultConcurrencyPercentage() {
    return this.getNumberAttribute('default_concurrency_percentage');
  }
  public set defaultConcurrencyPercentage(value: number) {
    this._defaultConcurrencyPercentage = value;
  }
  public resetDefaultConcurrencyPercentage() {
    this._defaultConcurrencyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConcurrencyPercentageInput() {
    return this._defaultConcurrencyPercentage;
  }

  // default_percentage - computed: true, optional: true, required: false
  private _defaultPercentage?: number; 
  public get defaultPercentage() {
    return this.getNumberAttribute('default_percentage');
  }
  public set defaultPercentage(value: number) {
    this._defaultPercentage = value;
  }
  public resetDefaultPercentage() {
    this._defaultPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPercentageInput() {
    return this._defaultPercentage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId?: string; 
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }
  public set principalId(value: string) {
    this._principalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalIdInput() {
    return this._principalId;
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_concurrency_percentage: cdktf.numberToTerraform(this._defaultConcurrencyPercentage),
      default_percentage: cdktf.numberToTerraform(this._defaultPercentage),
      principal_id: cdktf.stringToTerraform(this._principalId),
      principal_type: cdktf.stringToTerraform(this._principalType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_concurrency_percentage: {
        value: cdktf.numberToHclTerraform(this._defaultConcurrencyPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_percentage: {
        value: cdktf.numberToHclTerraform(this._defaultPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      principal_id: {
        value: cdktf.stringToHclTerraform(this._principalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_type: {
        value: cdktf.stringToHclTerraform(this._principalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
