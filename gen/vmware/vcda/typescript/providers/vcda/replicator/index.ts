// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReplicatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The thumbprint of the Replicator Service API. It can either be computed from the `vcda_remote_services_thumbprint` data source or provided directly as a SHA-256 fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#api_thumbprint Replicator#api_thumbprint}
  */
  readonly apiThumbprint: string;
  /**
  * The URL of the Replicator Service API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#api_url Replicator#api_url}
  */
  readonly apiUrl: string;
  /**
  * The description for the Replicator Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#description Replicator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#id Replicator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The thumbprint of the vCenter Server Lookup service. It can either be computed from the `vcda_remote_services_thumbprint` data source or provided directly as a SHA-256 fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#lookup_service_thumbprint Replicator#lookup_service_thumbprint}
  */
  readonly lookupServiceThumbprint: string;
  /**
  * The URL of the vCenter Server Lookup service. For example, https://server.domain.com/lookupservice/sdk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#lookup_service_url Replicator#lookup_service_url}
  */
  readonly lookupServiceUrl: string;
  /**
  * The owner of the Replicator Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#owner Replicator#owner}
  */
  readonly owner: string;
  /**
  * The **root** user password of the Replicator Appliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#root_password Replicator#root_password}
  */
  readonly rootPassword: string;
  /**
  * The certificate of the Replicator Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#service_cert Replicator#service_cert}
  */
  readonly serviceCert: string;
  /**
  * The site name of the Manager Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#site_name Replicator#site_name}
  */
  readonly siteName: string;
  /**
  * The password of the SSO user for the Replicator Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#sso_password Replicator#sso_password}
  */
  readonly ssoPassword: string;
  /**
  * The single sign-on (SSO) user for the Replicator Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#sso_user Replicator#sso_user}
  */
  readonly ssoUser: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator vcda_replicator}
*/
export class Replicator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda_replicator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Replicator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Replicator to import
  * @param importFromId The id of the existing Replicator that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Replicator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda_replicator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/replicator vcda_replicator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReplicatorConfig
  */
  public constructor(scope: Construct, id: string, config: ReplicatorConfig) {
    super(scope, id, {
      terraformResourceType: 'vcda_replicator',
      terraformGeneratorMetadata: {
        providerName: 'vcda',
        providerVersion: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiThumbprint = config.apiThumbprint;
    this._apiUrl = config.apiUrl;
    this._description = config.description;
    this._id = config.id;
    this._lookupServiceThumbprint = config.lookupServiceThumbprint;
    this._lookupServiceUrl = config.lookupServiceUrl;
    this._owner = config.owner;
    this._rootPassword = config.rootPassword;
    this._serviceCert = config.serviceCert;
    this._siteName = config.siteName;
    this._ssoPassword = config.ssoPassword;
    this._ssoUser = config.ssoUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_thumbprint - computed: false, optional: false, required: true
  private _apiThumbprint?: string; 
  public get apiThumbprint() {
    return this.getStringAttribute('api_thumbprint');
  }
  public set apiThumbprint(value: string) {
    this._apiThumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiThumbprintInput() {
    return this._apiThumbprint;
  }

  // api_url - computed: false, optional: false, required: true
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // build_version - computed: true, optional: false, required: false
  public get buildVersion() {
    return this.getStringAttribute('build_version');
  }

  // data_address - computed: true, optional: false, required: false
  public get dataAddress() {
    return this.getStringAttribute('data_address');
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

  // is_in_maintenance_mode - computed: true, optional: false, required: false
  public get isInMaintenanceMode() {
    return this.getBooleanAttribute('is_in_maintenance_mode');
  }

  // lookup_service_thumbprint - computed: false, optional: false, required: true
  private _lookupServiceThumbprint?: string; 
  public get lookupServiceThumbprint() {
    return this.getStringAttribute('lookup_service_thumbprint');
  }
  public set lookupServiceThumbprint(value: string) {
    this._lookupServiceThumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupServiceThumbprintInput() {
    return this._lookupServiceThumbprint;
  }

  // lookup_service_url - computed: false, optional: false, required: true
  private _lookupServiceUrl?: string; 
  public get lookupServiceUrl() {
    return this.getStringAttribute('lookup_service_url');
  }
  public set lookupServiceUrl(value: string) {
    this._lookupServiceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupServiceUrlInput() {
    return this._lookupServiceUrl;
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // replicator_ls_thumbprint - computed: true, optional: false, required: false
  public get replicatorLsThumbprint() {
    return this.getStringAttribute('replicator_ls_thumbprint');
  }

  // replicator_ls_url - computed: true, optional: false, required: false
  public get replicatorLsUrl() {
    return this.getStringAttribute('replicator_ls_url');
  }

  // root_password - computed: false, optional: false, required: true
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // service_cert - computed: false, optional: false, required: true
  private _serviceCert?: string; 
  public get serviceCert() {
    return this.getStringAttribute('service_cert');
  }
  public set serviceCert(value: string) {
    this._serviceCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCertInput() {
    return this._serviceCert;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // sso_password - computed: false, optional: false, required: true
  private _ssoPassword?: string; 
  public get ssoPassword() {
    return this.getStringAttribute('sso_password');
  }
  public set ssoPassword(value: string) {
    this._ssoPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoPasswordInput() {
    return this._ssoPassword;
  }

  // sso_user - computed: false, optional: false, required: true
  private _ssoUser?: string; 
  public get ssoUser() {
    return this.getStringAttribute('sso_user');
  }
  public set ssoUser(value: string) {
    this._ssoUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUserInput() {
    return this._ssoUser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_thumbprint: cdktf.stringToTerraform(this._apiThumbprint),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lookup_service_thumbprint: cdktf.stringToTerraform(this._lookupServiceThumbprint),
      lookup_service_url: cdktf.stringToTerraform(this._lookupServiceUrl),
      owner: cdktf.stringToTerraform(this._owner),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      service_cert: cdktf.stringToTerraform(this._serviceCert),
      site_name: cdktf.stringToTerraform(this._siteName),
      sso_password: cdktf.stringToTerraform(this._ssoPassword),
      sso_user: cdktf.stringToTerraform(this._ssoUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_thumbprint: {
        value: cdktf.stringToHclTerraform(this._apiThumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_service_thumbprint: {
        value: cdktf.stringToHclTerraform(this._lookupServiceThumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_service_url: {
        value: cdktf.stringToHclTerraform(this._lookupServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_password: {
        value: cdktf.stringToHclTerraform(this._rootPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cert: {
        value: cdktf.stringToHclTerraform(this._serviceCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_password: {
        value: cdktf.stringToHclTerraform(this._ssoPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_user: {
        value: cdktf.stringToHclTerraform(this._ssoUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
