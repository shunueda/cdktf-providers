// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalClassicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the requests from applications to register for products will be automatically approved, or if they will be set to pending until approved by an admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#auto_approve_applications PortalClassic#auto_approve_applications}
  */
  readonly autoApproveApplications?: boolean | cdktf.IResolvable;
  /**
  * Whether the developer account registrations will be automatically approved, or if they will be set to pending until approved by an admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#auto_approve_developers PortalClassic#auto_approve_developers}
  */
  readonly autoApproveDevelopers?: boolean | cdktf.IResolvable;
  /**
  * The custom domain to access a self-hosted customized developer portal client. If this is set, the Konnect-hosted portal will no longer be available.  `custom_domain` must be also set for this value to be set. See https://github.com/Kong/konnect-portal for information on how to get started deploying and customizing your own Konnect portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#custom_client_domain PortalClassic#custom_client_domain}
  */
  readonly customClientDomain?: string;
  /**
  * The custom domain to access the developer portal. A CNAME for the portal's default domain must be able to be set for the custom domain for it to be valid. After setting a valid CNAME, an SSL/TLS certificate will be automatically manged for the custom domain, and traffic will be able to use the custom domain to route to the portal's web client and API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#custom_domain PortalClassic#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Default strategy ID applied on applications for the portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#default_application_auth_strategy_id PortalClassic#default_application_auth_strategy_id}
  */
  readonly defaultApplicationAuthStrategyId?: string;
  /**
  * The description of the portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#description PortalClassic#description}
  */
  readonly description?: string;
  /**
  * The display name of the portal. This value will be the portal's `name` in Portal API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#display_name PortalClassic#display_name}
  */
  readonly displayName?: string;
  /**
  * If true, delete specified portal and all related entities, even if there are developers registered to portal or if there are portal product versions with application registration enabled. If false, do not allow deletion if there are developers registered to portal or if there are portal product versions with application registration enabled. Default: "false"; must be one of ["true", "false"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#force PortalClassic#force}
  */
  readonly force?: string;
  /**
  * Whether the portal catalog can be accessed publicly without any developer authentication. Developer accounts and applications cannot be created if the portal is public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#is_public PortalClassic#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#labels PortalClassic#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the portal, used to distinguish it from other portals. Name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#name PortalClassic#name}
  */
  readonly name: string;
  /**
  * Whether the portal resources are protected by Role Based Access Control (RBAC). If enabled, developers view or register for products until unless assigned to teams with access to view and consume specific products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#rbac_enabled PortalClassic#rbac_enabled}
  */
  readonly rbacEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic konnect_portal_classic}
*/
export class PortalClassic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_classic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalClassic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalClassic to import
  * @param importFromId The id of the existing PortalClassic that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalClassic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_classic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_classic konnect_portal_classic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalClassicConfig
  */
  public constructor(scope: Construct, id: string, config: PortalClassicConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_classic',
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
    this._autoApproveApplications = config.autoApproveApplications;
    this._autoApproveDevelopers = config.autoApproveDevelopers;
    this._customClientDomain = config.customClientDomain;
    this._customDomain = config.customDomain;
    this._defaultApplicationAuthStrategyId = config.defaultApplicationAuthStrategyId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._force = config.force;
    this._isPublic = config.isPublic;
    this._labels = config.labels;
    this._name = config.name;
    this._rbacEnabled = config.rbacEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_count - computed: true, optional: false, required: false
  public get applicationCount() {
    return this.getNumberAttribute('application_count');
  }

  // auto_approve_applications - computed: false, optional: true, required: false
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

  // auto_approve_developers - computed: false, optional: true, required: false
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_client_domain - computed: false, optional: true, required: false
  private _customClientDomain?: string; 
  public get customClientDomain() {
    return this.getStringAttribute('custom_client_domain');
  }
  public set customClientDomain(value: string) {
    this._customClientDomain = value;
  }
  public resetCustomClientDomain() {
    this._customClientDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClientDomainInput() {
    return this._customClientDomain;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // default_application_auth_strategy_id - computed: true, optional: true, required: false
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

  // developer_count - computed: true, optional: false, required: false
  public get developerCount() {
    return this.getNumberAttribute('developer_count');
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

  // force - computed: true, optional: true, required: false
  private _force?: string; 
  public get force() {
    return this.getStringAttribute('force');
  }
  public set force(value: string) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
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

  // published_product_count - computed: true, optional: false, required: false
  public get publishedProductCount() {
    return this.getNumberAttribute('published_product_count');
  }

  // rbac_enabled - computed: false, optional: true, required: false
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
      auto_approve_applications: cdktf.booleanToTerraform(this._autoApproveApplications),
      auto_approve_developers: cdktf.booleanToTerraform(this._autoApproveDevelopers),
      custom_client_domain: cdktf.stringToTerraform(this._customClientDomain),
      custom_domain: cdktf.stringToTerraform(this._customDomain),
      default_application_auth_strategy_id: cdktf.stringToTerraform(this._defaultApplicationAuthStrategyId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      force: cdktf.stringToTerraform(this._force),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      rbac_enabled: cdktf.booleanToTerraform(this._rbacEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      custom_client_domain: {
        value: cdktf.stringToHclTerraform(this._customClientDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domain: {
        value: cdktf.stringToHclTerraform(this._customDomain),
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
      force: {
        value: cdktf.stringToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
