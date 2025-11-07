// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneResourceScopeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies the ID of the custom resource to select.  Must be a valid PingOne resource ID.  Required if `resource_type` is set to `CUSTOM`, but cannot be set if `resource_type` is set to `OPENID_CONNECT` or `PINGONE_API`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope#custom_resource_id DataPingoneResourceScope#custom_resource_id}
  */
  readonly customResourceId?: string;
  /**
  * The ID of the environment that is configured with the resource scope.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope#environment_id DataPingoneResourceScope#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name of the resource scope.  Exactly one of the following must be defined: `resource_scope_id`, `name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope#name DataPingoneResourceScope#name}
  */
  readonly name?: string;
  /**
  * The ID of the resource scope.  Exactly one of the following must be defined: `resource_scope_id`, `name`.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope#resource_scope_id DataPingoneResourceScope#resource_scope_id}
  */
  readonly resourceScopeId?: string;
  /**
  * The type of the resource to select.  When the value is set to `CUSTOM`, `custom_resource_id` must be specified.  Options are `CUSTOM`, `OPENID_CONNECT`, `PINGONE_API`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope#resource_type DataPingoneResourceScope#resource_type}
  */
  readonly resourceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope pingone_resource_scope}
*/
export class DataPingoneResourceScope extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_resource_scope";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneResourceScope resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneResourceScope to import
  * @param importFromId The id of the existing DataPingoneResourceScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneResourceScope to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_resource_scope", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/resource_scope pingone_resource_scope} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneResourceScopeConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneResourceScopeConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_resource_scope',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customResourceId = config.customResourceId;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._resourceScopeId = config.resourceScopeId;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_resource_id - computed: false, optional: true, required: false
  private _customResourceId?: string; 
  public get customResourceId() {
    return this.getStringAttribute('custom_resource_id');
  }
  public set customResourceId(value: string) {
    this._customResourceId = value;
  }
  public resetCustomResourceId() {
    this._customResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResourceIdInput() {
    return this._customResourceId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mapped_claims - computed: true, optional: false, required: false
  public get mappedClaims() {
    return cdktf.Fn.tolist(this.getListAttribute('mapped_claims'));
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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_scope_id - computed: true, optional: true, required: false
  private _resourceScopeId?: string; 
  public get resourceScopeId() {
    return this.getStringAttribute('resource_scope_id');
  }
  public set resourceScopeId(value: string) {
    this._resourceScopeId = value;
  }
  public resetResourceScopeId() {
    this._resourceScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceScopeIdInput() {
    return this._resourceScopeId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // schema_attributes - computed: true, optional: false, required: false
  public get schemaAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('schema_attributes'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_resource_id: cdktf.stringToTerraform(this._customResourceId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      resource_scope_id: cdktf.stringToTerraform(this._resourceScopeId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_resource_id: {
        value: cdktf.stringToHclTerraform(this._customResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      resource_scope_id: {
        value: cdktf.stringToHclTerraform(this._resourceScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
