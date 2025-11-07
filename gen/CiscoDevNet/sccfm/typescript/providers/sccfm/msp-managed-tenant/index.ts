// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MspManagedTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * API token for an API-only user with super-admin privileges on the tenant. This should be specified only when adding an existing tenant to the MSP portal, and should not be provided if a new tenant is being created (i.e., the `name` and/or `display_name` attributes are specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant#api_token MspManagedTenant#api_token}
  */
  readonly apiToken?: string;
  /**
  * Display name of the tenant. If no display name is specified, the display name will be set to the tenant name. This should be specified only if a new tenant is being created, and should not be provided if an existing tenant is being added to the MSP protal (i.e., the `api_token` attribute is specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant#display_name MspManagedTenant#display_name}
  */
  readonly displayName?: string;
  /**
  * Name of the tenant. This should be specified only if a new tenant is being created, and should not be provided if an existing tenant is being added to the MSP protal (i.e., the `api_token` attribute is specified).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant#name MspManagedTenant#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant sccfm_msp_managed_tenant}
*/
export class MspManagedTenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_msp_managed_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MspManagedTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MspManagedTenant to import
  * @param importFromId The id of the existing MspManagedTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MspManagedTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_msp_managed_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant sccfm_msp_managed_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MspManagedTenantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MspManagedTenantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sccfm_msp_managed_tenant',
      terraformGeneratorMetadata: {
        providerName: 'sccfm',
        providerVersion: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiToken = config.apiToken;
    this._displayName = config.displayName;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // generated_name - computed: true, optional: false, required: false
  public get generatedName() {
    return this.getStringAttribute('generated_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      display_name: cdktf.stringToTerraform(this._displayName),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
