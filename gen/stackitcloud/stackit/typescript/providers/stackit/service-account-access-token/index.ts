// https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * STACKIT project ID associated with the service account token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token#project_id ServiceAccountAccessToken#project_id}
  */
  readonly projectId: string;
  /**
  * A map of arbitrary key/value pairs that will force recreation of the token when they change, enabling token rotation based on external conditions such as a rotating timestamp. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token#rotate_when_changed ServiceAccountAccessToken#rotate_when_changed}
  */
  readonly rotateWhenChanged?: { [key: string]: string };
  /**
  * Email address linked to the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token#service_account_email ServiceAccountAccessToken#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * Specifies the token's validity duration in days. If unspecified, defaults to 90 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token#ttl_days ServiceAccountAccessToken#ttl_days}
  */
  readonly ttlDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token stackit_service_account_access_token}
*/
export class ServiceAccountAccessToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_service_account_access_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccountAccessToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccountAccessToken to import
  * @param importFromId The id of the existing ServiceAccountAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccountAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_service_account_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/resources/service_account_access_token stackit_service_account_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_service_account_access_token',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.73.0',
        providerVersionConstraint: '0.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._projectId = config.projectId;
    this._rotateWhenChanged = config.rotateWhenChanged;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._ttlDays = config.ttlDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_id - computed: true, optional: false, required: false
  public get accessTokenId() {
    return this.getStringAttribute('access_token_id');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rotate_when_changed - computed: false, optional: true, required: false
  private _rotateWhenChanged?: { [key: string]: string }; 
  public get rotateWhenChanged() {
    return this.getStringMapAttribute('rotate_when_changed');
  }
  public set rotateWhenChanged(value: { [key: string]: string }) {
    this._rotateWhenChanged = value;
  }
  public resetRotateWhenChanged() {
    this._rotateWhenChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotateWhenChangedInput() {
    return this._rotateWhenChanged;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // ttl_days - computed: true, optional: true, required: false
  private _ttlDays?: number; 
  public get ttlDays() {
    return this.getNumberAttribute('ttl_days');
  }
  public set ttlDays(value: number) {
    this._ttlDays = value;
  }
  public resetTtlDays() {
    this._ttlDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlDaysInput() {
    return this._ttlDays;
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project_id: cdktf.stringToTerraform(this._projectId),
      rotate_when_changed: cdktf.hashMapper(cdktf.stringToTerraform)(this._rotateWhenChanged),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      ttl_days: cdktf.numberToTerraform(this._ttlDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotate_when_changed: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rotateWhenChanged),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl_days: {
        value: cdktf.numberToHclTerraform(this._ttlDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
