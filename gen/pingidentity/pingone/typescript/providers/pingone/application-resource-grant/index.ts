// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationResourceGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the application to create the resource grant for.  The value for `application_id` may come from the `id` attribute of the `pingone_application` or `pingone_system_application` resources or data sources.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant#application_id ApplicationResourceGrant#application_id}
  */
  readonly applicationId: string;
  /**
  * A string that specifies the ID of the custom resource to be granted to the application.  Must be a valid PingOne resource ID.  Required if `resource_type` is set to `CUSTOM`, but cannot be set if `resource_type` is set to `OPENID_CONNECT` or `PINGONE_API`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant#custom_resource_id ApplicationResourceGrant#custom_resource_id}
  */
  readonly customResourceId?: string;
  /**
  * The ID of the environment to create the application resource grant in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant#environment_id ApplicationResourceGrant#environment_id}
  */
  readonly environmentId: string;
  /**
  * The type of the resource to configure the grant for. When the value is set to `CUSTOM`, `custom_resource_id` must be specified.  Options are `CUSTOM`, `OPENID_CONNECT`, `PINGONE_API`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant#resource_type ApplicationResourceGrant#resource_type}
  */
  readonly resourceType: string;
  /**
  * A list of IDs of the scopes associated with this grant.  Values must be valid PingOne resource IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant#scopes ApplicationResourceGrant#scopes}
  */
  readonly scopes: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant pingone_application_resource_grant}
*/
export class ApplicationResourceGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_application_resource_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationResourceGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationResourceGrant to import
  * @param importFromId The id of the existing ApplicationResourceGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationResourceGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_application_resource_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application_resource_grant pingone_application_resource_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationResourceGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationResourceGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_application_resource_grant',
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
    this._applicationId = config.applicationId;
    this._customResourceId = config.customResourceId;
    this._environmentId = config.environmentId;
    this._resourceType = config.resourceType;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

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

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
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

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      custom_resource_id: cdktf.stringToTerraform(this._customResourceId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
