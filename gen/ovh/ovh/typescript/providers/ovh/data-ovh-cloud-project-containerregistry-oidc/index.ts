// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhCloudProjectContainerregistryOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#id DataOvhCloudProjectContainerregistryOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_admin_group DataOvhCloudProjectContainerregistryOidc#oidc_admin_group}
  */
  readonly oidcAdminGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_auto_onboard DataOvhCloudProjectContainerregistryOidc#oidc_auto_onboard}
  */
  readonly oidcAutoOnboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_client_id DataOvhCloudProjectContainerregistryOidc#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_endpoint DataOvhCloudProjectContainerregistryOidc#oidc_endpoint}
  */
  readonly oidcEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_groups_claim DataOvhCloudProjectContainerregistryOidc#oidc_groups_claim}
  */
  readonly oidcGroupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_name DataOvhCloudProjectContainerregistryOidc#oidc_name}
  */
  readonly oidcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_scope DataOvhCloudProjectContainerregistryOidc#oidc_scope}
  */
  readonly oidcScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_user_claim DataOvhCloudProjectContainerregistryOidc#oidc_user_claim}
  */
  readonly oidcUserClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#oidc_verify_cert DataOvhCloudProjectContainerregistryOidc#oidc_verify_cert}
  */
  readonly oidcVerifyCert?: boolean | cdktf.IResolvable;
  /**
  * Registry ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#registry_id DataOvhCloudProjectContainerregistryOidc#registry_id}
  */
  readonly registryId: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#service_name DataOvhCloudProjectContainerregistryOidc#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc ovh_cloud_project_containerregistry_oidc}
*/
export class DataOvhCloudProjectContainerregistryOidc extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_containerregistry_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhCloudProjectContainerregistryOidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhCloudProjectContainerregistryOidc to import
  * @param importFromId The id of the existing DataOvhCloudProjectContainerregistryOidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhCloudProjectContainerregistryOidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_containerregistry_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_containerregistry_oidc ovh_cloud_project_containerregistry_oidc} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhCloudProjectContainerregistryOidcConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhCloudProjectContainerregistryOidcConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_containerregistry_oidc',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oidcAdminGroup = config.oidcAdminGroup;
    this._oidcAutoOnboard = config.oidcAutoOnboard;
    this._oidcClientId = config.oidcClientId;
    this._oidcEndpoint = config.oidcEndpoint;
    this._oidcGroupsClaim = config.oidcGroupsClaim;
    this._oidcName = config.oidcName;
    this._oidcScope = config.oidcScope;
    this._oidcUserClaim = config.oidcUserClaim;
    this._oidcVerifyCert = config.oidcVerifyCert;
    this._registryId = config.registryId;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oidc_admin_group - computed: false, optional: true, required: false
  private _oidcAdminGroup?: string; 
  public get oidcAdminGroup() {
    return this.getStringAttribute('oidc_admin_group');
  }
  public set oidcAdminGroup(value: string) {
    this._oidcAdminGroup = value;
  }
  public resetOidcAdminGroup() {
    this._oidcAdminGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAdminGroupInput() {
    return this._oidcAdminGroup;
  }

  // oidc_auto_onboard - computed: false, optional: true, required: false
  private _oidcAutoOnboard?: boolean | cdktf.IResolvable; 
  public get oidcAutoOnboard() {
    return this.getBooleanAttribute('oidc_auto_onboard');
  }
  public set oidcAutoOnboard(value: boolean | cdktf.IResolvable) {
    this._oidcAutoOnboard = value;
  }
  public resetOidcAutoOnboard() {
    this._oidcAutoOnboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAutoOnboardInput() {
    return this._oidcAutoOnboard;
  }

  // oidc_client_id - computed: false, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_endpoint - computed: false, optional: true, required: false
  private _oidcEndpoint?: string; 
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }
  public set oidcEndpoint(value: string) {
    this._oidcEndpoint = value;
  }
  public resetOidcEndpoint() {
    this._oidcEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEndpointInput() {
    return this._oidcEndpoint;
  }

  // oidc_groups_claim - computed: false, optional: true, required: false
  private _oidcGroupsClaim?: string; 
  public get oidcGroupsClaim() {
    return this.getStringAttribute('oidc_groups_claim');
  }
  public set oidcGroupsClaim(value: string) {
    this._oidcGroupsClaim = value;
  }
  public resetOidcGroupsClaim() {
    this._oidcGroupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupsClaimInput() {
    return this._oidcGroupsClaim;
  }

  // oidc_name - computed: false, optional: true, required: false
  private _oidcName?: string; 
  public get oidcName() {
    return this.getStringAttribute('oidc_name');
  }
  public set oidcName(value: string) {
    this._oidcName = value;
  }
  public resetOidcName() {
    this._oidcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcNameInput() {
    return this._oidcName;
  }

  // oidc_scope - computed: false, optional: true, required: false
  private _oidcScope?: string; 
  public get oidcScope() {
    return this.getStringAttribute('oidc_scope');
  }
  public set oidcScope(value: string) {
    this._oidcScope = value;
  }
  public resetOidcScope() {
    this._oidcScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopeInput() {
    return this._oidcScope;
  }

  // oidc_user_claim - computed: false, optional: true, required: false
  private _oidcUserClaim?: string; 
  public get oidcUserClaim() {
    return this.getStringAttribute('oidc_user_claim');
  }
  public set oidcUserClaim(value: string) {
    this._oidcUserClaim = value;
  }
  public resetOidcUserClaim() {
    this._oidcUserClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUserClaimInput() {
    return this._oidcUserClaim;
  }

  // oidc_verify_cert - computed: false, optional: true, required: false
  private _oidcVerifyCert?: boolean | cdktf.IResolvable; 
  public get oidcVerifyCert() {
    return this.getBooleanAttribute('oidc_verify_cert');
  }
  public set oidcVerifyCert(value: boolean | cdktf.IResolvable) {
    this._oidcVerifyCert = value;
  }
  public resetOidcVerifyCert() {
    this._oidcVerifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcVerifyCertInput() {
    return this._oidcVerifyCert;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oidc_admin_group: cdktf.stringToTerraform(this._oidcAdminGroup),
      oidc_auto_onboard: cdktf.booleanToTerraform(this._oidcAutoOnboard),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      oidc_endpoint: cdktf.stringToTerraform(this._oidcEndpoint),
      oidc_groups_claim: cdktf.stringToTerraform(this._oidcGroupsClaim),
      oidc_name: cdktf.stringToTerraform(this._oidcName),
      oidc_scope: cdktf.stringToTerraform(this._oidcScope),
      oidc_user_claim: cdktf.stringToTerraform(this._oidcUserClaim),
      oidc_verify_cert: cdktf.booleanToTerraform(this._oidcVerifyCert),
      registry_id: cdktf.stringToTerraform(this._registryId),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_admin_group: {
        value: cdktf.stringToHclTerraform(this._oidcAdminGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_auto_onboard: {
        value: cdktf.booleanToHclTerraform(this._oidcAutoOnboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_endpoint: {
        value: cdktf.stringToHclTerraform(this._oidcEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_groups_claim: {
        value: cdktf.stringToHclTerraform(this._oidcGroupsClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_name: {
        value: cdktf.stringToHclTerraform(this._oidcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_scope: {
        value: cdktf.stringToHclTerraform(this._oidcScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_user_claim: {
        value: cdktf.stringToHclTerraform(this._oidcUserClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_verify_cert: {
        value: cdktf.booleanToHclTerraform(this._oidcVerifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
