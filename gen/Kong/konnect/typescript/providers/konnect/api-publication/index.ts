// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiPublicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID API identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication#api_id ApiPublication#api_id}
  */
  readonly apiId: string;
  /**
  * The auth strategy the API enforces for applications in the portal.
  * Omitting this property means the portal's default application auth strategy will be used.
  * Setting to null means the API will not require application authentication.
  * DCR support for application registration is currently in development.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication#auth_strategy_ids ApiPublication#auth_strategy_ids}
  */
  readonly authStrategyIds?: string[];
  /**
  * Whether the application registration auto approval on this portal for the api is enabled. If set to false, fallbacks on portal's auto_approve_applications value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication#auto_approve_registrations ApiPublication#auto_approve_registrations}
  */
  readonly autoApproveRegistrations?: boolean | cdktf.IResolvable;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication#portal_id ApiPublication#portal_id}
  */
  readonly portalId: string;
  /**
  * The visibility of the API in the portal.
  * Public API publications do not require authentication to view and retrieve information about them.
  * Private API publications require authentication to retrieve information about them.
  * Default: "private"; must be one of ["public", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication#visibility ApiPublication#visibility}
  */
  readonly visibility?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication konnect_api_publication}
*/
export class ApiPublication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_api_publication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiPublication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiPublication to import
  * @param importFromId The id of the existing ApiPublication that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiPublication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_api_publication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_publication konnect_api_publication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiPublicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiPublicationConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_api_publication',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._authStrategyIds = config.authStrategyIds;
    this._autoApproveRegistrations = config.autoApproveRegistrations;
    this._portalId = config.portalId;
    this._visibility = config.visibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // auth_strategy_ids - computed: false, optional: true, required: false
  private _authStrategyIds?: string[]; 
  public get authStrategyIds() {
    return this.getListAttribute('auth_strategy_ids');
  }
  public set authStrategyIds(value: string[]) {
    this._authStrategyIds = value;
  }
  public resetAuthStrategyIds() {
    this._authStrategyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authStrategyIdsInput() {
    return this._authStrategyIds;
  }

  // auto_approve_registrations - computed: true, optional: true, required: false
  private _autoApproveRegistrations?: boolean | cdktf.IResolvable; 
  public get autoApproveRegistrations() {
    return this.getBooleanAttribute('auto_approve_registrations');
  }
  public set autoApproveRegistrations(value: boolean | cdktf.IResolvable) {
    this._autoApproveRegistrations = value;
  }
  public resetAutoApproveRegistrations() {
    this._autoApproveRegistrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveRegistrationsInput() {
    return this._autoApproveRegistrations;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      auth_strategy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authStrategyIds),
      auto_approve_registrations: cdktf.booleanToTerraform(this._autoApproveRegistrations),
      portal_id: cdktf.stringToTerraform(this._portalId),
      visibility: cdktf.stringToTerraform(this._visibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_strategy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authStrategyIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_approve_registrations: {
        value: cdktf.booleanToHclTerraform(this._autoApproveRegistrations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
