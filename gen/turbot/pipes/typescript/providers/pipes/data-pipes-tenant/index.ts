// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPipesTenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant#created_by DataPipesTenant#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant#handle DataPipesTenant#handle}
  */
  readonly handle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant#id DataPipesTenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant#tenant_id DataPipesTenant#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant#token_min_issued_at DataPipesTenant#token_min_issued_at}
  */
  readonly tokenMinIssuedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant#updated_by DataPipesTenant#updated_by}
  */
  readonly updatedBy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant pipes_tenant}
*/
export class DataPipesTenant extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPipesTenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPipesTenant to import
  * @param importFromId The id of the existing DataPipesTenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPipesTenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/data-sources/tenant pipes_tenant} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPipesTenantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPipesTenantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pipes_tenant',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._handle = config.handle;
    this._id = config.id;
    this._tenantId = config.tenantId;
    this._tokenMinIssuedAt = config.tokenMinIssuedAt;
    this._updatedBy = config.updatedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // handle - computed: false, optional: true, required: false
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  public resetHandle() {
    this._handle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // token_min_issued_at - computed: true, optional: true, required: false
  private _tokenMinIssuedAt?: string; 
  public get tokenMinIssuedAt() {
    return this.getStringAttribute('token_min_issued_at');
  }
  public set tokenMinIssuedAt(value: string) {
    this._tokenMinIssuedAt = value;
  }
  public resetTokenMinIssuedAt() {
    this._tokenMinIssuedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMinIssuedAtInput() {
    return this._tokenMinIssuedAt;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      token_min_issued_at: cdktf.stringToTerraform(this._tokenMinIssuedAt),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_min_issued_at: {
        value: cdktf.stringToHclTerraform(this._tokenMinIssuedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_by: {
        value: cdktf.stringToHclTerraform(this._updatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
