// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization#authorizable_id DataRootlyAuthorization#authorizable_id}
  */
  readonly authorizableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization#authorizable_type DataRootlyAuthorization#authorizable_type}
  */
  readonly authorizableType?: string;
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization#created_at DataRootlyAuthorization#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization#grantee_id DataRootlyAuthorization#grantee_id}
  */
  readonly granteeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization#grantee_type DataRootlyAuthorization#grantee_type}
  */
  readonly granteeType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization rootly_authorization}
*/
export class DataRootlyAuthorization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyAuthorization to import
  * @param importFromId The id of the existing DataRootlyAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/data-sources/authorization rootly_authorization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyAuthorizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyAuthorizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_authorization',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.13',
        providerVersionConstraint: '4.3.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizableId = config.authorizableId;
    this._authorizableType = config.authorizableType;
    this._createdAt = config.createdAt;
    this._granteeId = config.granteeId;
    this._granteeType = config.granteeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorizable_id - computed: true, optional: true, required: false
  private _authorizableId?: string; 
  public get authorizableId() {
    return this.getStringAttribute('authorizable_id');
  }
  public set authorizableId(value: string) {
    this._authorizableId = value;
  }
  public resetAuthorizableId() {
    this._authorizableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizableIdInput() {
    return this._authorizableId;
  }

  // authorizable_type - computed: true, optional: true, required: false
  private _authorizableType?: string; 
  public get authorizableType() {
    return this.getStringAttribute('authorizable_type');
  }
  public set authorizableType(value: string) {
    this._authorizableType = value;
  }
  public resetAuthorizableType() {
    this._authorizableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizableTypeInput() {
    return this._authorizableType;
  }

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // grantee_id - computed: true, optional: true, required: false
  private _granteeId?: string; 
  public get granteeId() {
    return this.getStringAttribute('grantee_id');
  }
  public set granteeId(value: string) {
    this._granteeId = value;
  }
  public resetGranteeId() {
    this._granteeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeIdInput() {
    return this._granteeId;
  }

  // grantee_type - computed: true, optional: true, required: false
  private _granteeType?: string; 
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }
  public set granteeType(value: string) {
    this._granteeType = value;
  }
  public resetGranteeType() {
    this._granteeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granteeTypeInput() {
    return this._granteeType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizable_id: cdktf.stringToTerraform(this._authorizableId),
      authorizable_type: cdktf.stringToTerraform(this._authorizableType),
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      grantee_id: cdktf.stringToTerraform(this._granteeId),
      grantee_type: cdktf.stringToTerraform(this._granteeType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizable_id: {
        value: cdktf.stringToHclTerraform(this._authorizableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizable_type: {
        value: cdktf.stringToHclTerraform(this._authorizableType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      grantee_id: {
        value: cdktf.stringToHclTerraform(this._granteeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantee_type: {
        value: cdktf.stringToHclTerraform(this._granteeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
