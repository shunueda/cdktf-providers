// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudDirectorReplicationManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#id CloudDirectorReplicationManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The license key for VMware Cloud Director Availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#license_key CloudDirectorReplicationManager#license_key}
  */
  readonly licenseKey: string;
  /**
  * The thumbprint of the vCenter Server Lookup service. It can either be computed from the `vcda_remote_services_thumbprint` data source or provided directly as a SHA-256 fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#lookup_service_thumbprint CloudDirectorReplicationManager#lookup_service_thumbprint}
  */
  readonly lookupServiceThumbprint: string;
  /**
  * The URL of the vCenter Server Lookup service. For example, https://server.domain.com/lookupservice/sdk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#lookup_service_url CloudDirectorReplicationManager#lookup_service_url}
  */
  readonly lookupServiceUrl: string;
  /**
  * The public API endpoint address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#public_endpoint_address CloudDirectorReplicationManager#public_endpoint_address}
  */
  readonly publicEndpointAddress: string;
  /**
  * The public API endpoint port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#public_endpoint_port CloudDirectorReplicationManager#public_endpoint_port}
  */
  readonly publicEndpointPort: number;
  /**
  * The certificate of the Cloud Director Replication Manager Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#service_cert CloudDirectorReplicationManager#service_cert}
  */
  readonly serviceCert: string;
  /**
  * The site description of the Cloud Director Replication Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#site_description CloudDirectorReplicationManager#site_description}
  */
  readonly siteDescription?: string;
  /**
  * The site name of the Cloud Director Replication Manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#site_name CloudDirectorReplicationManager#site_name}
  */
  readonly siteName: string;
  /**
  * Cloud Director password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#vcd_password CloudDirectorReplicationManager#vcd_password}
  */
  readonly vcdPassword: string;
  /**
  * The thumbprint of the Cloud Director service. It can either be computed from the `vcda_remote_services_thumbprint` data source or provided directly as a SHA-256 fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#vcd_thumbprint CloudDirectorReplicationManager#vcd_thumbprint}
  */
  readonly vcdThumbprint: string;
  /**
  * This is the URL for the Cloud Director API endpoint. For example, https://server.domain.com/api.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#vcd_url CloudDirectorReplicationManager#vcd_url}
  */
  readonly vcdUrl: string;
  /**
  * Cloud Director user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#vcd_username CloudDirectorReplicationManager#vcd_username}
  */
  readonly vcdUsername: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#timeouts CloudDirectorReplicationManager#timeouts}
  */
  readonly timeouts?: CloudDirectorReplicationManagerTimeouts;
}
export interface CloudDirectorReplicationManagerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#create CloudDirectorReplicationManager#create}
  */
  readonly create?: string;
}

export function cloudDirectorReplicationManagerTimeoutsToTerraform(struct?: CloudDirectorReplicationManagerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function cloudDirectorReplicationManagerTimeoutsToHclTerraform(struct?: CloudDirectorReplicationManagerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDirectorReplicationManagerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDirectorReplicationManagerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDirectorReplicationManagerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager vcda_cloud_director_replication_manager}
*/
export class CloudDirectorReplicationManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda_cloud_director_replication_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudDirectorReplicationManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudDirectorReplicationManager to import
  * @param importFromId The id of the existing CloudDirectorReplicationManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudDirectorReplicationManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda_cloud_director_replication_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs/resources/cloud_director_replication_manager vcda_cloud_director_replication_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudDirectorReplicationManagerConfig
  */
  public constructor(scope: Construct, id: string, config: CloudDirectorReplicationManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'vcda_cloud_director_replication_manager',
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
    this._publicEndpointAddress = config.publicEndpointAddress;
    this._publicEndpointPort = config.publicEndpointPort;
    this._serviceCert = config.serviceCert;
    this._siteDescription = config.siteDescription;
    this._siteName = config.siteName;
    this._vcdPassword = config.vcdPassword;
    this._vcdThumbprint = config.vcdThumbprint;
    this._vcdUrl = config.vcdUrl;
    this._vcdUsername = config.vcdUsername;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_address - computed: true, optional: false, required: false
  public get apiAddress() {
    return this.getStringAttribute('api_address');
  }

  // api_port - computed: true, optional: false, required: false
  public get apiPort() {
    return this.getNumberAttribute('api_port');
  }

  // api_public_address - computed: true, optional: false, required: false
  public get apiPublicAddress() {
    return this.getStringAttribute('api_public_address');
  }

  // api_public_port - computed: true, optional: false, required: false
  public get apiPublicPort() {
    return this.getNumberAttribute('api_public_port');
  }

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

  // is_combined - computed: true, optional: false, required: false
  public get isCombined() {
    return this.getBooleanAttribute('is_combined');
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

  // local_site - computed: true, optional: false, required: false
  public get localSite() {
    return this.getStringAttribute('local_site');
  }

  // local_site_description - computed: true, optional: false, required: false
  public get localSiteDescription() {
    return this.getStringAttribute('local_site_description');
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

  // mgmt_address - computed: true, optional: false, required: false
  public get mgmtAddress() {
    return this.getStringAttribute('mgmt_address');
  }

  // mgmt_port - computed: true, optional: false, required: false
  public get mgmtPort() {
    return this.getNumberAttribute('mgmt_port');
  }

  // mgmt_public_address - computed: true, optional: false, required: false
  public get mgmtPublicAddress() {
    return this.getStringAttribute('mgmt_public_address');
  }

  // mgmt_public_port - computed: true, optional: false, required: false
  public get mgmtPublicPort() {
    return this.getNumberAttribute('mgmt_public_port');
  }

  // public_endpoint_address - computed: false, optional: false, required: true
  private _publicEndpointAddress?: string; 
  public get publicEndpointAddress() {
    return this.getStringAttribute('public_endpoint_address');
  }
  public set publicEndpointAddress(value: string) {
    this._publicEndpointAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointAddressInput() {
    return this._publicEndpointAddress;
  }

  // public_endpoint_port - computed: false, optional: false, required: true
  private _publicEndpointPort?: number; 
  public get publicEndpointPort() {
    return this.getNumberAttribute('public_endpoint_port');
  }
  public set publicEndpointPort(value: number) {
    this._publicEndpointPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicEndpointPortInput() {
    return this._publicEndpointPort;
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

  // site_description - computed: false, optional: true, required: false
  private _siteDescription?: string; 
  public get siteDescription() {
    return this.getStringAttribute('site_description');
  }
  public set siteDescription(value: string) {
    this._siteDescription = value;
  }
  public resetSiteDescription() {
    this._siteDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteDescriptionInput() {
    return this._siteDescription;
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

  // tunnel_certificate - computed: true, optional: false, required: false
  public get tunnelCertificate() {
    return this.getStringAttribute('tunnel_certificate');
  }

  // tunnel_url - computed: true, optional: false, required: false
  public get tunnelUrl() {
    return this.getStringAttribute('tunnel_url');
  }

  // vcd_password - computed: false, optional: false, required: true
  private _vcdPassword?: string; 
  public get vcdPassword() {
    return this.getStringAttribute('vcd_password');
  }
  public set vcdPassword(value: string) {
    this._vcdPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdPasswordInput() {
    return this._vcdPassword;
  }

  // vcd_thumbprint - computed: false, optional: false, required: true
  private _vcdThumbprint?: string; 
  public get vcdThumbprint() {
    return this.getStringAttribute('vcd_thumbprint');
  }
  public set vcdThumbprint(value: string) {
    this._vcdThumbprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdThumbprintInput() {
    return this._vcdThumbprint;
  }

  // vcd_url - computed: false, optional: false, required: true
  private _vcdUrl?: string; 
  public get vcdUrl() {
    return this.getStringAttribute('vcd_url');
  }
  public set vcdUrl(value: string) {
    this._vcdUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdUrlInput() {
    return this._vcdUrl;
  }

  // vcd_username - computed: false, optional: false, required: true
  private _vcdUsername?: string; 
  public get vcdUsername() {
    return this.getStringAttribute('vcd_username');
  }
  public set vcdUsername(value: string) {
    this._vcdUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdUsernameInput() {
    return this._vcdUsername;
  }

  // vcloud_thumbprint - computed: true, optional: false, required: false
  public get vcloudThumbprint() {
    return this.getStringAttribute('vcloud_thumbprint');
  }

  // vcloud_url - computed: true, optional: false, required: false
  public get vcloudUrl() {
    return this.getStringAttribute('vcloud_url');
  }

  // vcloud_username - computed: true, optional: false, required: false
  public get vcloudUsername() {
    return this.getStringAttribute('vcloud_username');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudDirectorReplicationManagerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudDirectorReplicationManagerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      public_endpoint_address: cdktf.stringToTerraform(this._publicEndpointAddress),
      public_endpoint_port: cdktf.numberToTerraform(this._publicEndpointPort),
      service_cert: cdktf.stringToTerraform(this._serviceCert),
      site_description: cdktf.stringToTerraform(this._siteDescription),
      site_name: cdktf.stringToTerraform(this._siteName),
      vcd_password: cdktf.stringToTerraform(this._vcdPassword),
      vcd_thumbprint: cdktf.stringToTerraform(this._vcdThumbprint),
      vcd_url: cdktf.stringToTerraform(this._vcdUrl),
      vcd_username: cdktf.stringToTerraform(this._vcdUsername),
      timeouts: cloudDirectorReplicationManagerTimeoutsToTerraform(this._timeouts.internalValue),
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
      public_endpoint_address: {
        value: cdktf.stringToHclTerraform(this._publicEndpointAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_endpoint_port: {
        value: cdktf.numberToHclTerraform(this._publicEndpointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_cert: {
        value: cdktf.stringToHclTerraform(this._serviceCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_description: {
        value: cdktf.stringToHclTerraform(this._siteDescription),
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
      vcd_password: {
        value: cdktf.stringToHclTerraform(this._vcdPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcd_thumbprint: {
        value: cdktf.stringToHclTerraform(this._vcdThumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcd_url: {
        value: cdktf.stringToHclTerraform(this._vcdUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcd_username: {
        value: cdktf.stringToHclTerraform(this._vcdUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudDirectorReplicationManagerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDirectorReplicationManagerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
