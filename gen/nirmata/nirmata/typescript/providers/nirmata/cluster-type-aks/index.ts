// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterTypeAksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#allow_override_credentials ClusterTypeAks#allow_override_credentials}
  */
  readonly allowOverrideCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#auto_sync_namespaces ClusterTypeAks#auto_sync_namespaces}
  */
  readonly autoSyncNamespaces: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#cluster_field_override ClusterTypeAks#cluster_field_override}
  */
  readonly clusterFieldOverride?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#credentials ClusterTypeAks#credentials}
  */
  readonly credentials: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#dns_service_ip ClusterTypeAks#dns_service_ip}
  */
  readonly dnsServiceIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#docker_bridge_cidr ClusterTypeAks#docker_bridge_cidr}
  */
  readonly dockerBridgeCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#enable_private_cluster ClusterTypeAks#enable_private_cluster}
  */
  readonly enablePrivateCluster: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#https_application_routing ClusterTypeAks#https_application_routing}
  */
  readonly httpsApplicationRouting: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#id ClusterTypeAks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#monitoring ClusterTypeAks#monitoring}
  */
  readonly monitoring: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#name ClusterTypeAks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#network_policy ClusterTypeAks#network_policy}
  */
  readonly networkPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#network_profile ClusterTypeAks#network_profile}
  */
  readonly networkProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#region ClusterTypeAks#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#resource_group ClusterTypeAks#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#service_cidr ClusterTypeAks#service_cidr}
  */
  readonly serviceCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#system_metadata ClusterTypeAks#system_metadata}
  */
  readonly systemMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#version ClusterTypeAks#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#workspace_id ClusterTypeAks#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#timeouts ClusterTypeAks#timeouts}
  */
  readonly timeouts?: ClusterTypeAksTimeouts;
}
export interface ClusterTypeAksTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#create ClusterTypeAks#create}
  */
  readonly create?: string;
}

export function clusterTypeAksTimeoutsToTerraform(struct?: ClusterTypeAksTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function clusterTypeAksTimeoutsToHclTerraform(struct?: ClusterTypeAksTimeouts | cdktf.IResolvable): any {
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

export class ClusterTypeAksTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTypeAksTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTypeAksTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks nirmata_cluster_type_aks}
*/
export class ClusterTypeAks extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_cluster_type_aks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterTypeAks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterTypeAks to import
  * @param importFromId The id of the existing ClusterTypeAks that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterTypeAks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_cluster_type_aks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_aks nirmata_cluster_type_aks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterTypeAksConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterTypeAksConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_cluster_type_aks',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOverrideCredentials = config.allowOverrideCredentials;
    this._autoSyncNamespaces = config.autoSyncNamespaces;
    this._clusterFieldOverride = config.clusterFieldOverride;
    this._credentials = config.credentials;
    this._dnsServiceIp = config.dnsServiceIp;
    this._dockerBridgeCidr = config.dockerBridgeCidr;
    this._enablePrivateCluster = config.enablePrivateCluster;
    this._httpsApplicationRouting = config.httpsApplicationRouting;
    this._id = config.id;
    this._monitoring = config.monitoring;
    this._name = config.name;
    this._networkPolicy = config.networkPolicy;
    this._networkProfile = config.networkProfile;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._serviceCidr = config.serviceCidr;
    this._systemMetadata = config.systemMetadata;
    this._version = config.version;
    this._workspaceId = config.workspaceId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_override_credentials - computed: false, optional: true, required: false
  private _allowOverrideCredentials?: boolean | cdktf.IResolvable; 
  public get allowOverrideCredentials() {
    return this.getBooleanAttribute('allow_override_credentials');
  }
  public set allowOverrideCredentials(value: boolean | cdktf.IResolvable) {
    this._allowOverrideCredentials = value;
  }
  public resetAllowOverrideCredentials() {
    this._allowOverrideCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverrideCredentialsInput() {
    return this._allowOverrideCredentials;
  }

  // auto_sync_namespaces - computed: false, optional: false, required: true
  private _autoSyncNamespaces?: boolean | cdktf.IResolvable; 
  public get autoSyncNamespaces() {
    return this.getBooleanAttribute('auto_sync_namespaces');
  }
  public set autoSyncNamespaces(value: boolean | cdktf.IResolvable) {
    this._autoSyncNamespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncNamespacesInput() {
    return this._autoSyncNamespaces;
  }

  // cluster_field_override - computed: false, optional: true, required: false
  private _clusterFieldOverride?: { [key: string]: string }; 
  public get clusterFieldOverride() {
    return this.getStringMapAttribute('cluster_field_override');
  }
  public set clusterFieldOverride(value: { [key: string]: string }) {
    this._clusterFieldOverride = value;
  }
  public resetClusterFieldOverride() {
    this._clusterFieldOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFieldOverrideInput() {
    return this._clusterFieldOverride;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // dns_service_ip - computed: false, optional: false, required: true
  private _dnsServiceIp?: string; 
  public get dnsServiceIp() {
    return this.getStringAttribute('dns_service_ip');
  }
  public set dnsServiceIp(value: string) {
    this._dnsServiceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceIpInput() {
    return this._dnsServiceIp;
  }

  // docker_bridge_cidr - computed: false, optional: false, required: true
  private _dockerBridgeCidr?: string; 
  public get dockerBridgeCidr() {
    return this.getStringAttribute('docker_bridge_cidr');
  }
  public set dockerBridgeCidr(value: string) {
    this._dockerBridgeCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerBridgeCidrInput() {
    return this._dockerBridgeCidr;
  }

  // enable_private_cluster - computed: false, optional: false, required: true
  private _enablePrivateCluster?: boolean | cdktf.IResolvable; 
  public get enablePrivateCluster() {
    return this.getBooleanAttribute('enable_private_cluster');
  }
  public set enablePrivateCluster(value: boolean | cdktf.IResolvable) {
    this._enablePrivateCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateClusterInput() {
    return this._enablePrivateCluster;
  }

  // https_application_routing - computed: false, optional: false, required: true
  private _httpsApplicationRouting?: boolean | cdktf.IResolvable; 
  public get httpsApplicationRouting() {
    return this.getBooleanAttribute('https_application_routing');
  }
  public set httpsApplicationRouting(value: boolean | cdktf.IResolvable) {
    this._httpsApplicationRouting = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsApplicationRoutingInput() {
    return this._httpsApplicationRouting;
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

  // monitoring - computed: false, optional: false, required: true
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
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

  // network_policy - computed: false, optional: false, required: true
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // network_profile - computed: false, optional: false, required: true
  private _networkProfile?: string; 
  public get networkProfile() {
    return this.getStringAttribute('network_profile');
  }
  public set networkProfile(value: string) {
    this._networkProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProfileInput() {
    return this._networkProfile;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // service_cidr - computed: false, optional: false, required: true
  private _serviceCidr?: string; 
  public get serviceCidr() {
    return this.getStringAttribute('service_cidr');
  }
  public set serviceCidr(value: string) {
    this._serviceCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCidrInput() {
    return this._serviceCidr;
  }

  // system_metadata - computed: false, optional: true, required: false
  private _systemMetadata?: { [key: string]: string }; 
  public get systemMetadata() {
    return this.getStringMapAttribute('system_metadata');
  }
  public set systemMetadata(value: { [key: string]: string }) {
    this._systemMetadata = value;
  }
  public resetSystemMetadata() {
    this._systemMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMetadataInput() {
    return this._systemMetadata;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTypeAksTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTypeAksTimeouts) {
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
      allow_override_credentials: cdktf.booleanToTerraform(this._allowOverrideCredentials),
      auto_sync_namespaces: cdktf.booleanToTerraform(this._autoSyncNamespaces),
      cluster_field_override: cdktf.hashMapper(cdktf.stringToTerraform)(this._clusterFieldOverride),
      credentials: cdktf.stringToTerraform(this._credentials),
      dns_service_ip: cdktf.stringToTerraform(this._dnsServiceIp),
      docker_bridge_cidr: cdktf.stringToTerraform(this._dockerBridgeCidr),
      enable_private_cluster: cdktf.booleanToTerraform(this._enablePrivateCluster),
      https_application_routing: cdktf.booleanToTerraform(this._httpsApplicationRouting),
      id: cdktf.stringToTerraform(this._id),
      monitoring: cdktf.booleanToTerraform(this._monitoring),
      name: cdktf.stringToTerraform(this._name),
      network_policy: cdktf.stringToTerraform(this._networkPolicy),
      network_profile: cdktf.stringToTerraform(this._networkProfile),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      service_cidr: cdktf.stringToTerraform(this._serviceCidr),
      system_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemMetadata),
      version: cdktf.stringToTerraform(this._version),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      timeouts: clusterTypeAksTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_override_credentials: {
        value: cdktf.booleanToHclTerraform(this._allowOverrideCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_sync_namespaces: {
        value: cdktf.booleanToHclTerraform(this._autoSyncNamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_field_override: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clusterFieldOverride),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_service_ip: {
        value: cdktf.stringToHclTerraform(this._dnsServiceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_bridge_cidr: {
        value: cdktf.stringToHclTerraform(this._dockerBridgeCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_private_cluster: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      https_application_routing: {
        value: cdktf.booleanToHclTerraform(this._httpsApplicationRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring: {
        value: cdktf.booleanToHclTerraform(this._monitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_policy: {
        value: cdktf.stringToHclTerraform(this._networkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_profile: {
        value: cdktf.stringToHclTerraform(this._networkProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_cidr: {
        value: cdktf.stringToHclTerraform(this._serviceCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: clusterTypeAksTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTypeAksTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
