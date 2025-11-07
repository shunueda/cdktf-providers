// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcenterReplicationManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#id VcenterReplicationManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The license key of VMware Cloud Director Availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#license_key VcenterReplicationManager#license_key}
  */
  readonly licenseKey: string;
  /**
  * The thumbprint of the vCenter Server Lookup service. It can either be computed from the `vcda_remote_services_thumbprint` data source or provided directly as a SHA-256 fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#lookup_service_thumbprint VcenterReplicationManager#lookup_service_thumbprint}
  */
  readonly lookupServiceThumbprint: string;
  /**
  * The URL of the vCenter Server Lookup service. For example, https://server.domain.com/lookupservice/sdk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#lookup_service_url VcenterReplicationManager#lookup_service_url}
  */
  readonly lookupServiceUrl: string;
  /**
  * The service certificate of the vCenter Replication Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#service_cert VcenterReplicationManager#service_cert}
  */
  readonly serviceCert: string;
  /**
  * The site name of the vCenter Replication Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#site_name VcenterReplicationManager#site_name}
  */
  readonly siteName: string;
  /**
  * The password of the SSO administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#sso_password VcenterReplicationManager#sso_password}
  */
  readonly ssoPassword: string;
  /**
  * The user name of a single sign-on (SSO) administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#sso_user VcenterReplicationManager#sso_user}
  */
  readonly ssoUser: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager vcda_vcenter_replication_manager}
*/
export class VcenterReplicationManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda_vcenter_replication_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcenterReplicationManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcenterReplicationManager to import
  * @param importFromId The id of the existing VcenterReplicationManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcenterReplicationManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda_vcenter_replication_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/vcenter_replication_manager vcda_vcenter_replication_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcenterReplicationManagerConfig
  */
  public constructor(scope: Construct, id: string, config: VcenterReplicationManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'vcda_vcenter_replication_manager',
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
    this._id = config.id;
    this._licenseKey = config.licenseKey;
    this._lookupServiceThumbprint = config.lookupServiceThumbprint;
    this._lookupServiceUrl = config.lookupServiceUrl;
    this._serviceCert = config.serviceCert;
    this._siteName = config.siteName;
    this._ssoPassword = config.ssoPassword;
    this._ssoUser = config.ssoUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getNumberAttribute('expiration_date');
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

  // is_licensed - computed: true, optional: false, required: false
  public get isLicensed() {
    return this.getBooleanAttribute('is_licensed');
  }

  // license_key - computed: false, optional: false, required: true
  private _licenseKey?: string; 
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }
  public set licenseKey(value: string) {
    this._licenseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseKeyInput() {
    return this._licenseKey;
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

  // ls_thumbprint - computed: true, optional: false, required: false
  public get lsThumbprint() {
    return this.getStringAttribute('ls_thumbprint');
  }

  // ls_url - computed: true, optional: false, required: false
  public get lsUrl() {
    return this.getStringAttribute('ls_url');
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

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
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

  // tunnel_certificate - computed: true, optional: false, required: false
  public get tunnelCertificate() {
    return this.getStringAttribute('tunnel_certificate');
  }

  // tunnel_url - computed: true, optional: false, required: false
  public get tunnelUrl() {
    return this.getStringAttribute('tunnel_url');
  }

  // vsphere_plugin_status - computed: true, optional: false, required: false
  public get vspherePluginStatus() {
    return this.getStringAttribute('vsphere_plugin_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      license_key: cdktf.stringToTerraform(this._licenseKey),
      lookup_service_thumbprint: cdktf.stringToTerraform(this._lookupServiceThumbprint),
      lookup_service_url: cdktf.stringToTerraform(this._lookupServiceUrl),
      service_cert: cdktf.stringToTerraform(this._serviceCert),
      site_name: cdktf.stringToTerraform(this._siteName),
      sso_password: cdktf.stringToTerraform(this._ssoPassword),
      sso_user: cdktf.stringToTerraform(this._ssoUser),
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
      license_key: {
        value: cdktf.stringToHclTerraform(this._licenseKey),
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
