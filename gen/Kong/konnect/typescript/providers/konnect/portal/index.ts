// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the portal supports developer authentication. If disabled, developers cannot register for accounts or create applications. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#authentication_enabled Portal#authentication_enabled}
  */
  readonly authenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether requests from applications to register for APIs will be automatically approved, or if they will be set to pending until approved by an admin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#auto_approve_applications Portal#auto_approve_applications}
  */
  readonly autoApproveApplications?: boolean | cdktf.IResolvable;
  /**
  * Whether developer account registrations will be automatically approved, or if they will be set to pending until approved by an admin. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#auto_approve_developers Portal#auto_approve_developers}
  */
  readonly autoApproveDevelopers?: boolean | cdktf.IResolvable;
  /**
  * The default visibility of APIs in the portal. If set to `public`, newly published APIs are visible to unauthenticated developers. If set to `private`, newly published APIs are hidden from unauthenticated developers. must be one of ["public", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#default_api_visibility Portal#default_api_visibility}
  */
  readonly defaultApiVisibility?: string;
  /**
  * The default authentication strategy for APIs published to the portal. Newly published APIs will use this authentication strategy unless overridden during publication. If set to `null`, API publications will not use an authentication strategy unless set during publication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#default_application_auth_strategy_id Portal#default_application_auth_strategy_id}
  */
  readonly defaultApplicationAuthStrategyId?: string;
  /**
  * The default visibility of pages in the portal. If set to `public`, newly created pages are visible to unauthenticated developers. If set to `private`, newly created pages are hidden from unauthenticated developers. must be one of ["public", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#default_page_visibility Portal#default_page_visibility}
  */
  readonly defaultPageVisibility?: string;
  /**
  * A description of the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#description Portal#description}
  */
  readonly description?: string;
  /**
  * The display name of the portal. This value will be the portal's `name` in Portal API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#display_name Portal#display_name}
  */
  readonly displayName?: string;
  /**
  * If set to "true", the portal and all child entities will be deleted when running `terraform destroy`.
  * If set to "false", the portal will not be deleted until all child entities are manually removed.
  * This will IRREVERSIBLY DELETE ALL REGISTERED DEVELOPERS AND THEIR CREDENTIALS. Only set to "true" if you want this behavior.
  * Default: "false"; must be one of ["true", "false"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#force_destroy Portal#force_destroy}
  */
  readonly forceDestroy?: string;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Labels are intended to store **INTERNAL** metadata.
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#labels Portal#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the portal, used to distinguish it from other portals. Name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#name Portal#name}
  */
  readonly name: string;
  /**
  * Whether the portal resources are protected by Role Based Access Control (RBAC). If enabled, developers view or register for APIs until unless assigned to teams with access to view and consume specific APIs. Authentication must be enabled to use RBAC. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#rbac_enabled Portal#rbac_enabled}
  */
  readonly rbacEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal konnect_portal}
*/
export class Portal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Portal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Portal to import
  * @param importFromId The id of the existing Portal that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Portal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal konnect_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalConfig
  */
  public constructor(scope: Construct, id: string, config: PortalConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationEnabled = config.authenticationEnabled;
    this._autoApproveApplications = config.autoApproveApplications;
    this._autoApproveDevelopers = config.autoApproveDevelopers;
    this._defaultApiVisibility = config.defaultApiVisibility;
    this._defaultApplicationAuthStrategyId = config.defaultApplicationAuthStrategyId;
    this._defaultPageVisibility = config.defaultPageVisibility;
    this._description = config.description;
    this._displayName = config.displayName;
    this._forceDestroy = config.forceDestroy;
    this._labels = config.labels;
    this._name = config.name;
    this._rbacEnabled = config.rbacEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_enabled - computed: true, optional: true, required: false
  private _authenticationEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationEnabled() {
    return this.getBooleanAttribute('authentication_enabled');
  }
  public set authenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationEnabled = value;
  }
  public resetAuthenticationEnabled() {
    this._authenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnabledInput() {
    return this._authenticationEnabled;
  }

  // auto_approve_applications - computed: true, optional: true, required: false
  private _autoApproveApplications?: boolean | cdktf.IResolvable; 
  public get autoApproveApplications() {
    return this.getBooleanAttribute('auto_approve_applications');
  }
  public set autoApproveApplications(value: boolean | cdktf.IResolvable) {
    this._autoApproveApplications = value;
  }
  public resetAutoApproveApplications() {
    this._autoApproveApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveApplicationsInput() {
    return this._autoApproveApplications;
  }

  // auto_approve_developers - computed: true, optional: true, required: false
  private _autoApproveDevelopers?: boolean | cdktf.IResolvable; 
  public get autoApproveDevelopers() {
    return this.getBooleanAttribute('auto_approve_developers');
  }
  public set autoApproveDevelopers(value: boolean | cdktf.IResolvable) {
    this._autoApproveDevelopers = value;
  }
  public resetAutoApproveDevelopers() {
    this._autoApproveDevelopers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveDevelopersInput() {
    return this._autoApproveDevelopers;
  }

  // canonical_domain - computed: true, optional: false, required: false
  public get canonicalDomain() {
    return this.getStringAttribute('canonical_domain');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_api_visibility - computed: true, optional: true, required: false
  private _defaultApiVisibility?: string; 
  public get defaultApiVisibility() {
    return this.getStringAttribute('default_api_visibility');
  }
  public set defaultApiVisibility(value: string) {
    this._defaultApiVisibility = value;
  }
  public resetDefaultApiVisibility() {
    this._defaultApiVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApiVisibilityInput() {
    return this._defaultApiVisibility;
  }

  // default_application_auth_strategy_id - computed: false, optional: true, required: false
  private _defaultApplicationAuthStrategyId?: string; 
  public get defaultApplicationAuthStrategyId() {
    return this.getStringAttribute('default_application_auth_strategy_id');
  }
  public set defaultApplicationAuthStrategyId(value: string) {
    this._defaultApplicationAuthStrategyId = value;
  }
  public resetDefaultApplicationAuthStrategyId() {
    this._defaultApplicationAuthStrategyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApplicationAuthStrategyIdInput() {
    return this._defaultApplicationAuthStrategyId;
  }

  // default_domain - computed: true, optional: false, required: false
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }

  // default_page_visibility - computed: true, optional: true, required: false
  private _defaultPageVisibility?: string; 
  public get defaultPageVisibility() {
    return this.getStringAttribute('default_page_visibility');
  }
  public set defaultPageVisibility(value: string) {
    this._defaultPageVisibility = value;
  }
  public resetDefaultPageVisibility() {
    this._defaultPageVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPageVisibilityInput() {
    return this._defaultPageVisibility;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // force_destroy - computed: true, optional: true, required: false
  private _forceDestroy?: string; 
  public get forceDestroy() {
    return this.getStringAttribute('force_destroy');
  }
  public set forceDestroy(value: string) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rbac_enabled - computed: true, optional: true, required: false
  private _rbacEnabled?: boolean | cdktf.IResolvable; 
  public get rbacEnabled() {
    return this.getBooleanAttribute('rbac_enabled');
  }
  public set rbacEnabled(value: boolean | cdktf.IResolvable) {
    this._rbacEnabled = value;
  }
  public resetRbacEnabled() {
    this._rbacEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbacEnabledInput() {
    return this._rbacEnabled;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_enabled: cdktf.booleanToTerraform(this._authenticationEnabled),
      auto_approve_applications: cdktf.booleanToTerraform(this._autoApproveApplications),
      auto_approve_developers: cdktf.booleanToTerraform(this._autoApproveDevelopers),
      default_api_visibility: cdktf.stringToTerraform(this._defaultApiVisibility),
      default_application_auth_strategy_id: cdktf.stringToTerraform(this._defaultApplicationAuthStrategyId),
      default_page_visibility: cdktf.stringToTerraform(this._defaultPageVisibility),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      force_destroy: cdktf.stringToTerraform(this._forceDestroy),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      rbac_enabled: cdktf.booleanToTerraform(this._rbacEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_approve_applications: {
        value: cdktf.booleanToHclTerraform(this._autoApproveApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_approve_developers: {
        value: cdktf.booleanToHclTerraform(this._autoApproveDevelopers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_api_visibility: {
        value: cdktf.stringToHclTerraform(this._defaultApiVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_application_auth_strategy_id: {
        value: cdktf.stringToHclTerraform(this._defaultApplicationAuthStrategyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_page_visibility: {
        value: cdktf.stringToHclTerraform(this._defaultPageVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      force_destroy: {
        value: cdktf.stringToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rbac_enabled: {
        value: cdktf.booleanToHclTerraform(this._rbacEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
