// generated from terraform resource schema

import { GcpVpcSiteAdminPassword, 
gcpVpcSiteAdminPasswordToTerraform, 
gcpVpcSiteAdminPasswordToHclTerraform, 
GcpVpcSiteAdminPasswordOutputReference, 
GcpVpcSiteBlockedServices, 
gcpVpcSiteBlockedServicesToTerraform, 
gcpVpcSiteBlockedServicesToHclTerraform, 
GcpVpcSiteBlockedServicesOutputReference, 
GcpVpcSiteCloudCredentials, 
gcpVpcSiteCloudCredentialsToTerraform, 
gcpVpcSiteCloudCredentialsToHclTerraform, 
GcpVpcSiteCloudCredentialsOutputReference, 
GcpVpcSiteCoordinates, 
gcpVpcSiteCoordinatesToTerraform, 
gcpVpcSiteCoordinatesToHclTerraform, 
GcpVpcSiteCoordinatesOutputReference, 
GcpVpcSiteCustomDns, 
gcpVpcSiteCustomDnsToTerraform, 
gcpVpcSiteCustomDnsToHclTerraform, 
GcpVpcSiteCustomDnsOutputReference, 
GcpVpcSiteIngressEgressGw, 
gcpVpcSiteIngressEgressGwToTerraform, 
gcpVpcSiteIngressEgressGwToHclTerraform, 
GcpVpcSiteIngressEgressGwOutputReference, 
GcpVpcSiteIngressGw, 
gcpVpcSiteIngressGwToTerraform, 
gcpVpcSiteIngressGwToHclTerraform, 
GcpVpcSiteIngressGwOutputReference, 
GcpVpcSiteKubernetesUpgradeDrain, 
gcpVpcSiteKubernetesUpgradeDrainToTerraform, 
gcpVpcSiteKubernetesUpgradeDrainToHclTerraform, 
GcpVpcSiteKubernetesUpgradeDrainOutputReference, 
GcpVpcSiteLogReceiver, 
gcpVpcSiteLogReceiverToTerraform, 
gcpVpcSiteLogReceiverToHclTerraform, 
GcpVpcSiteLogReceiverOutputReference, 
GcpVpcSiteOfflineSurvivabilityMode, 
gcpVpcSiteOfflineSurvivabilityModeToTerraform, 
gcpVpcSiteOfflineSurvivabilityModeToHclTerraform, 
GcpVpcSiteOfflineSurvivabilityModeOutputReference, 
GcpVpcSiteOs, 
gcpVpcSiteOsToTerraform, 
gcpVpcSiteOsToHclTerraform, 
GcpVpcSiteOsOutputReference, 
GcpVpcSitePrivateConnectivity, 
gcpVpcSitePrivateConnectivityToTerraform, 
gcpVpcSitePrivateConnectivityToHclTerraform, 
GcpVpcSitePrivateConnectivityOutputReference, 
GcpVpcSiteSw, 
gcpVpcSiteSwToTerraform, 
gcpVpcSiteSwToHclTerraform, 
GcpVpcSiteSwOutputReference, 
GcpVpcSiteVoltstackCluster, 
gcpVpcSiteVoltstackClusterToTerraform, 
gcpVpcSiteVoltstackClusterToHclTerraform, 
GcpVpcSiteVoltstackClusterOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GcpVpcSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#address GcpVpcSite#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#annotations GcpVpcSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#block_all_services GcpVpcSite#block_all_services}
  */
  readonly blockAllServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#default_blocked_services GcpVpcSite#default_blocked_services}
  */
  readonly defaultBlockedServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#description GcpVpcSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#disable GcpVpcSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#disk_size GcpVpcSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#gcp_labels GcpVpcSite#gcp_labels}
  */
  readonly gcpLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#gcp_region GcpVpcSite#gcp_region}
  */
  readonly gcpRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#id GcpVpcSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#instance_type GcpVpcSite#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#labels GcpVpcSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#logs_streaming_disabled GcpVpcSite#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#name GcpVpcSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#namespace GcpVpcSite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#nodes_per_az GcpVpcSite#nodes_per_az}
  */
  readonly nodesPerAz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#private_connect_disabled GcpVpcSite#private_connect_disabled}
  */
  readonly privateConnectDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#ssh_key GcpVpcSite#ssh_key}
  */
  readonly sshKey: string;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#admin_password GcpVpcSite#admin_password}
  */
  readonly adminPassword?: GcpVpcSiteAdminPassword;
  /**
  * blocked_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#blocked_services GcpVpcSite#blocked_services}
  */
  readonly blockedServices?: GcpVpcSiteBlockedServices;
  /**
  * cloud_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#cloud_credentials GcpVpcSite#cloud_credentials}
  */
  readonly cloudCredentials?: GcpVpcSiteCloudCredentials;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#coordinates GcpVpcSite#coordinates}
  */
  readonly coordinates?: GcpVpcSiteCoordinates;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#custom_dns GcpVpcSite#custom_dns}
  */
  readonly customDns?: GcpVpcSiteCustomDns;
  /**
  * ingress_egress_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#ingress_egress_gw GcpVpcSite#ingress_egress_gw}
  */
  readonly ingressEgressGw?: GcpVpcSiteIngressEgressGw;
  /**
  * ingress_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#ingress_gw GcpVpcSite#ingress_gw}
  */
  readonly ingressGw?: GcpVpcSiteIngressGw;
  /**
  * kubernetes_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#kubernetes_upgrade_drain GcpVpcSite#kubernetes_upgrade_drain}
  */
  readonly kubernetesUpgradeDrain?: GcpVpcSiteKubernetesUpgradeDrain;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#log_receiver GcpVpcSite#log_receiver}
  */
  readonly logReceiver?: GcpVpcSiteLogReceiver;
  /**
  * offline_survivability_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#offline_survivability_mode GcpVpcSite#offline_survivability_mode}
  */
  readonly offlineSurvivabilityMode?: GcpVpcSiteOfflineSurvivabilityMode;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#os GcpVpcSite#os}
  */
  readonly os?: GcpVpcSiteOs;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#private_connectivity GcpVpcSite#private_connectivity}
  */
  readonly privateConnectivity?: GcpVpcSitePrivateConnectivity;
  /**
  * sw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#sw GcpVpcSite#sw}
  */
  readonly sw?: GcpVpcSiteSw;
  /**
  * voltstack_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#voltstack_cluster GcpVpcSite#voltstack_cluster}
  */
  readonly voltstackCluster?: GcpVpcSiteVoltstackCluster;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site volterra_gcp_vpc_site}
*/
export class GcpVpcSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_gcp_vpc_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpVpcSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpVpcSite to import
  * @param importFromId The id of the existing GcpVpcSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpVpcSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_gcp_vpc_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/gcp_vpc_site volterra_gcp_vpc_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpVpcSiteConfig
  */
  public constructor(scope: Construct, id: string, config: GcpVpcSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_gcp_vpc_site',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._annotations = config.annotations;
    this._blockAllServices = config.blockAllServices;
    this._defaultBlockedServices = config.defaultBlockedServices;
    this._description = config.description;
    this._disable = config.disable;
    this._diskSize = config.diskSize;
    this._gcpLabels = config.gcpLabels;
    this._gcpRegion = config.gcpRegion;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._name = config.name;
    this._namespace = config.namespace;
    this._nodesPerAz = config.nodesPerAz;
    this._privateConnectDisabled = config.privateConnectDisabled;
    this._sshKey = config.sshKey;
    this._adminPassword.internalValue = config.adminPassword;
    this._blockedServices.internalValue = config.blockedServices;
    this._cloudCredentials.internalValue = config.cloudCredentials;
    this._coordinates.internalValue = config.coordinates;
    this._customDns.internalValue = config.customDns;
    this._ingressEgressGw.internalValue = config.ingressEgressGw;
    this._ingressGw.internalValue = config.ingressGw;
    this._kubernetesUpgradeDrain.internalValue = config.kubernetesUpgradeDrain;
    this._logReceiver.internalValue = config.logReceiver;
    this._offlineSurvivabilityMode.internalValue = config.offlineSurvivabilityMode;
    this._os.internalValue = config.os;
    this._privateConnectivity.internalValue = config.privateConnectivity;
    this._sw.internalValue = config.sw;
    this._voltstackCluster.internalValue = config.voltstackCluster;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // block_all_services - computed: false, optional: true, required: false
  private _blockAllServices?: boolean | cdktf.IResolvable; 
  public get blockAllServices() {
    return this.getBooleanAttribute('block_all_services');
  }
  public set blockAllServices(value: boolean | cdktf.IResolvable) {
    this._blockAllServices = value;
  }
  public resetBlockAllServices() {
    this._blockAllServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAllServicesInput() {
    return this._blockAllServices;
  }

  // default_blocked_services - computed: false, optional: true, required: false
  private _defaultBlockedServices?: boolean | cdktf.IResolvable; 
  public get defaultBlockedServices() {
    return this.getBooleanAttribute('default_blocked_services');
  }
  public set defaultBlockedServices(value: boolean | cdktf.IResolvable) {
    this._defaultBlockedServices = value;
  }
  public resetDefaultBlockedServices() {
    this._defaultBlockedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBlockedServicesInput() {
    return this._defaultBlockedServices;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // gcp_labels - computed: false, optional: true, required: false
  private _gcpLabels?: { [key: string]: string }; 
  public get gcpLabels() {
    return this.getStringMapAttribute('gcp_labels');
  }
  public set gcpLabels(value: { [key: string]: string }) {
    this._gcpLabels = value;
  }
  public resetGcpLabels() {
    this._gcpLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpLabelsInput() {
    return this._gcpLabels;
  }

  // gcp_region - computed: false, optional: false, required: true
  private _gcpRegion?: string; 
  public get gcpRegion() {
    return this.getStringAttribute('gcp_region');
  }
  public set gcpRegion(value: string) {
    this._gcpRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpRegionInput() {
    return this._gcpRegion;
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // labels - computed: false, optional: true, required: false
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

  // logs_streaming_disabled - computed: false, optional: true, required: false
  private _logsStreamingDisabled?: boolean | cdktf.IResolvable; 
  public get logsStreamingDisabled() {
    return this.getBooleanAttribute('logs_streaming_disabled');
  }
  public set logsStreamingDisabled(value: boolean | cdktf.IResolvable) {
    this._logsStreamingDisabled = value;
  }
  public resetLogsStreamingDisabled() {
    this._logsStreamingDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsStreamingDisabledInput() {
    return this._logsStreamingDisabled;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // nodes_per_az - computed: false, optional: true, required: false
  private _nodesPerAz?: number; 
  public get nodesPerAz() {
    return this.getNumberAttribute('nodes_per_az');
  }
  public set nodesPerAz(value: number) {
    this._nodesPerAz = value;
  }
  public resetNodesPerAz() {
    this._nodesPerAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesPerAzInput() {
    return this._nodesPerAz;
  }

  // private_connect_disabled - computed: false, optional: true, required: false
  private _privateConnectDisabled?: boolean | cdktf.IResolvable; 
  public get privateConnectDisabled() {
    return this.getBooleanAttribute('private_connect_disabled');
  }
  public set privateConnectDisabled(value: boolean | cdktf.IResolvable) {
    this._privateConnectDisabled = value;
  }
  public resetPrivateConnectDisabled() {
    this._privateConnectDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectDisabledInput() {
    return this._privateConnectDisabled;
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword = new GcpVpcSiteAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: GcpVpcSiteAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  public resetAdminPassword() {
    this._adminPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // blocked_services - computed: false, optional: true, required: false
  private _blockedServices = new GcpVpcSiteBlockedServicesOutputReference(this, "blocked_services");
  public get blockedServices() {
    return this._blockedServices;
  }
  public putBlockedServices(value: GcpVpcSiteBlockedServices) {
    this._blockedServices.internalValue = value;
  }
  public resetBlockedServices() {
    this._blockedServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesInput() {
    return this._blockedServices.internalValue;
  }

  // cloud_credentials - computed: false, optional: true, required: false
  private _cloudCredentials = new GcpVpcSiteCloudCredentialsOutputReference(this, "cloud_credentials");
  public get cloudCredentials() {
    return this._cloudCredentials;
  }
  public putCloudCredentials(value: GcpVpcSiteCloudCredentials) {
    this._cloudCredentials.internalValue = value;
  }
  public resetCloudCredentials() {
    this._cloudCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialsInput() {
    return this._cloudCredentials.internalValue;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new GcpVpcSiteCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: GcpVpcSiteCoordinates) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // custom_dns - computed: false, optional: true, required: false
  private _customDns = new GcpVpcSiteCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: GcpVpcSiteCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // ingress_egress_gw - computed: false, optional: true, required: false
  private _ingressEgressGw = new GcpVpcSiteIngressEgressGwOutputReference(this, "ingress_egress_gw");
  public get ingressEgressGw() {
    return this._ingressEgressGw;
  }
  public putIngressEgressGw(value: GcpVpcSiteIngressEgressGw) {
    this._ingressEgressGw.internalValue = value;
  }
  public resetIngressEgressGw() {
    this._ingressEgressGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressEgressGwInput() {
    return this._ingressEgressGw.internalValue;
  }

  // ingress_gw - computed: false, optional: true, required: false
  private _ingressGw = new GcpVpcSiteIngressGwOutputReference(this, "ingress_gw");
  public get ingressGw() {
    return this._ingressGw;
  }
  public putIngressGw(value: GcpVpcSiteIngressGw) {
    this._ingressGw.internalValue = value;
  }
  public resetIngressGw() {
    this._ingressGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGwInput() {
    return this._ingressGw.internalValue;
  }

  // kubernetes_upgrade_drain - computed: false, optional: true, required: false
  private _kubernetesUpgradeDrain = new GcpVpcSiteKubernetesUpgradeDrainOutputReference(this, "kubernetes_upgrade_drain");
  public get kubernetesUpgradeDrain() {
    return this._kubernetesUpgradeDrain;
  }
  public putKubernetesUpgradeDrain(value: GcpVpcSiteKubernetesUpgradeDrain) {
    this._kubernetesUpgradeDrain.internalValue = value;
  }
  public resetKubernetesUpgradeDrain() {
    this._kubernetesUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUpgradeDrainInput() {
    return this._kubernetesUpgradeDrain.internalValue;
  }

  // log_receiver - computed: false, optional: true, required: false
  private _logReceiver = new GcpVpcSiteLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: GcpVpcSiteLogReceiver) {
    this._logReceiver.internalValue = value;
  }
  public resetLogReceiver() {
    this._logReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReceiverInput() {
    return this._logReceiver.internalValue;
  }

  // offline_survivability_mode - computed: false, optional: true, required: false
  private _offlineSurvivabilityMode = new GcpVpcSiteOfflineSurvivabilityModeOutputReference(this, "offline_survivability_mode");
  public get offlineSurvivabilityMode() {
    return this._offlineSurvivabilityMode;
  }
  public putOfflineSurvivabilityMode(value: GcpVpcSiteOfflineSurvivabilityMode) {
    this._offlineSurvivabilityMode.internalValue = value;
  }
  public resetOfflineSurvivabilityMode() {
    this._offlineSurvivabilityMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineSurvivabilityModeInput() {
    return this._offlineSurvivabilityMode.internalValue;
  }

  // os - computed: false, optional: true, required: false
  private _os = new GcpVpcSiteOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: GcpVpcSiteOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new GcpVpcSitePrivateConnectivityOutputReference(this, "private_connectivity");
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: GcpVpcSitePrivateConnectivity) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // sw - computed: false, optional: true, required: false
  private _sw = new GcpVpcSiteSwOutputReference(this, "sw");
  public get sw() {
    return this._sw;
  }
  public putSw(value: GcpVpcSiteSw) {
    this._sw.internalValue = value;
  }
  public resetSw() {
    this._sw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swInput() {
    return this._sw.internalValue;
  }

  // voltstack_cluster - computed: false, optional: true, required: false
  private _voltstackCluster = new GcpVpcSiteVoltstackClusterOutputReference(this, "voltstack_cluster");
  public get voltstackCluster() {
    return this._voltstackCluster;
  }
  public putVoltstackCluster(value: GcpVpcSiteVoltstackCluster) {
    this._voltstackCluster.internalValue = value;
  }
  public resetVoltstackCluster() {
    this._voltstackCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltstackClusterInput() {
    return this._voltstackCluster.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      block_all_services: cdktf.booleanToTerraform(this._blockAllServices),
      default_blocked_services: cdktf.booleanToTerraform(this._defaultBlockedServices),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      gcp_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._gcpLabels),
      gcp_region: cdktf.stringToTerraform(this._gcpRegion),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      nodes_per_az: cdktf.numberToTerraform(this._nodesPerAz),
      private_connect_disabled: cdktf.booleanToTerraform(this._privateConnectDisabled),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      admin_password: gcpVpcSiteAdminPasswordToTerraform(this._adminPassword.internalValue),
      blocked_services: gcpVpcSiteBlockedServicesToTerraform(this._blockedServices.internalValue),
      cloud_credentials: gcpVpcSiteCloudCredentialsToTerraform(this._cloudCredentials.internalValue),
      coordinates: gcpVpcSiteCoordinatesToTerraform(this._coordinates.internalValue),
      custom_dns: gcpVpcSiteCustomDnsToTerraform(this._customDns.internalValue),
      ingress_egress_gw: gcpVpcSiteIngressEgressGwToTerraform(this._ingressEgressGw.internalValue),
      ingress_gw: gcpVpcSiteIngressGwToTerraform(this._ingressGw.internalValue),
      kubernetes_upgrade_drain: gcpVpcSiteKubernetesUpgradeDrainToTerraform(this._kubernetesUpgradeDrain.internalValue),
      log_receiver: gcpVpcSiteLogReceiverToTerraform(this._logReceiver.internalValue),
      offline_survivability_mode: gcpVpcSiteOfflineSurvivabilityModeToTerraform(this._offlineSurvivabilityMode.internalValue),
      os: gcpVpcSiteOsToTerraform(this._os.internalValue),
      private_connectivity: gcpVpcSitePrivateConnectivityToTerraform(this._privateConnectivity.internalValue),
      sw: gcpVpcSiteSwToTerraform(this._sw.internalValue),
      voltstack_cluster: gcpVpcSiteVoltstackClusterToTerraform(this._voltstackCluster.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      block_all_services: {
        value: cdktf.booleanToHclTerraform(this._blockAllServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_blocked_services: {
        value: cdktf.booleanToHclTerraform(this._defaultBlockedServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gcp_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._gcpLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gcp_region: {
        value: cdktf.stringToHclTerraform(this._gcpRegion),
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
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
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
      logs_streaming_disabled: {
        value: cdktf.booleanToHclTerraform(this._logsStreamingDisabled),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes_per_az: {
        value: cdktf.numberToHclTerraform(this._nodesPerAz),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_connect_disabled: {
        value: cdktf.booleanToHclTerraform(this._privateConnectDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: gcpVpcSiteAdminPasswordToHclTerraform(this._adminPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteAdminPasswordList",
      },
      blocked_services: {
        value: gcpVpcSiteBlockedServicesToHclTerraform(this._blockedServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteBlockedServicesList",
      },
      cloud_credentials: {
        value: gcpVpcSiteCloudCredentialsToHclTerraform(this._cloudCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteCloudCredentialsList",
      },
      coordinates: {
        value: gcpVpcSiteCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteCoordinatesList",
      },
      custom_dns: {
        value: gcpVpcSiteCustomDnsToHclTerraform(this._customDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteCustomDnsList",
      },
      ingress_egress_gw: {
        value: gcpVpcSiteIngressEgressGwToHclTerraform(this._ingressEgressGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteIngressEgressGwList",
      },
      ingress_gw: {
        value: gcpVpcSiteIngressGwToHclTerraform(this._ingressGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteIngressGwList",
      },
      kubernetes_upgrade_drain: {
        value: gcpVpcSiteKubernetesUpgradeDrainToHclTerraform(this._kubernetesUpgradeDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteKubernetesUpgradeDrainList",
      },
      log_receiver: {
        value: gcpVpcSiteLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteLogReceiverList",
      },
      offline_survivability_mode: {
        value: gcpVpcSiteOfflineSurvivabilityModeToHclTerraform(this._offlineSurvivabilityMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteOfflineSurvivabilityModeList",
      },
      os: {
        value: gcpVpcSiteOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteOsList",
      },
      private_connectivity: {
        value: gcpVpcSitePrivateConnectivityToHclTerraform(this._privateConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSitePrivateConnectivityList",
      },
      sw: {
        value: gcpVpcSiteSwToHclTerraform(this._sw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteSwList",
      },
      voltstack_cluster: {
        value: gcpVpcSiteVoltstackClusterToHclTerraform(this._voltstackCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GcpVpcSiteVoltstackClusterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
