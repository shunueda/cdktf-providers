// https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_user_api_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MspManagedTenantUserApiTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Universally unique identifier of the tenant in which the API token for the user should be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_user_api_token#tenant_uid MspManagedTenantUserApiToken#tenant_uid}
  */
  readonly tenantUid: string;
  /**
  * Universally unique identifier of the user for whom the API token should be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_user_api_token#user_uid MspManagedTenantUserApiToken#user_uid}
  */
  readonly userUid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_user_api_token sccfm_msp_managed_tenant_user_api_token}
*/
export class MspManagedTenantUserApiToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sccfm_msp_managed_tenant_user_api_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MspManagedTenantUserApiToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MspManagedTenantUserApiToken to import
  * @param importFromId The id of the existing MspManagedTenantUserApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_user_api_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MspManagedTenantUserApiToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sccfm_msp_managed_tenant_user_api_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sccfm/0.2.5/docs/resources/msp_managed_tenant_user_api_token sccfm_msp_managed_tenant_user_api_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MspManagedTenantUserApiTokenConfig
  */
  public constructor(scope: Construct, id: string, config: MspManagedTenantUserApiTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'sccfm_msp_managed_tenant_user_api_token',
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
    this._tenantUid = config.tenantUid;
    this._userUid = config.userUid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: true, optional: false, required: false
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }

  // tenant_uid - computed: false, optional: false, required: true
  private _tenantUid?: string; 
  public get tenantUid() {
    return this.getStringAttribute('tenant_uid');
  }
  public set tenantUid(value: string) {
    this._tenantUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantUidInput() {
    return this._tenantUid;
  }

  // user_uid - computed: false, optional: false, required: true
  private _userUid?: string; 
  public get userUid() {
    return this.getStringAttribute('user_uid');
  }
  public set userUid(value: string) {
    this._userUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userUidInput() {
    return this._userUid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tenant_uid: cdktf.stringToTerraform(this._tenantUid),
      user_uid: cdktf.stringToTerraform(this._userUid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tenant_uid: {
        value: cdktf.stringToHclTerraform(this._tenantUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_uid: {
        value: cdktf.stringToHclTerraform(this._userUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
