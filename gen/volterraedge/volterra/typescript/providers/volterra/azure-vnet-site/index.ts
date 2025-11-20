// generated from terraform resource schema

import { AzureVnetSiteAdminPassword, 
azureVnetSiteAdminPasswordToTerraform, 
azureVnetSiteAdminPasswordToHclTerraform, 
AzureVnetSiteAdminPasswordOutputReference, 
AzureVnetSiteAzureCred, 
azureVnetSiteAzureCredToTerraform, 
azureVnetSiteAzureCredToHclTerraform, 
AzureVnetSiteAzureCredOutputReference, 
AzureVnetSiteBlockedServices, 
azureVnetSiteBlockedServicesToTerraform, 
azureVnetSiteBlockedServicesToHclTerraform, 
AzureVnetSiteBlockedServicesOutputReference, 
AzureVnetSiteCoordinates, 
azureVnetSiteCoordinatesToTerraform, 
azureVnetSiteCoordinatesToHclTerraform, 
AzureVnetSiteCoordinatesOutputReference, 
AzureVnetSiteCustomDns, 
azureVnetSiteCustomDnsToTerraform, 
azureVnetSiteCustomDnsToHclTerraform, 
AzureVnetSiteCustomDnsOutputReference, 
AzureVnetSiteIngressEgressGw, 
azureVnetSiteIngressEgressGwToTerraform, 
azureVnetSiteIngressEgressGwToHclTerraform, 
AzureVnetSiteIngressEgressGwOutputReference, 
AzureVnetSiteIngressEgressGwAr, 
azureVnetSiteIngressEgressGwArToTerraform, 
azureVnetSiteIngressEgressGwArToHclTerraform, 
AzureVnetSiteIngressEgressGwArOutputReference, 
AzureVnetSiteIngressGw, 
azureVnetSiteIngressGwToTerraform, 
azureVnetSiteIngressGwToHclTerraform, 
AzureVnetSiteIngressGwOutputReference, 
AzureVnetSiteIngressGwAr, 
azureVnetSiteIngressGwArToTerraform, 
azureVnetSiteIngressGwArToHclTerraform, 
AzureVnetSiteIngressGwArOutputReference, 
AzureVnetSiteKubernetesUpgradeDrain, 
azureVnetSiteKubernetesUpgradeDrainToTerraform, 
azureVnetSiteKubernetesUpgradeDrainToHclTerraform, 
AzureVnetSiteKubernetesUpgradeDrainOutputReference, 
AzureVnetSiteLogReceiver, 
azureVnetSiteLogReceiverToTerraform, 
azureVnetSiteLogReceiverToHclTerraform, 
AzureVnetSiteLogReceiverOutputReference, 
AzureVnetSiteOfflineSurvivabilityMode, 
azureVnetSiteOfflineSurvivabilityModeToTerraform, 
azureVnetSiteOfflineSurvivabilityModeToHclTerraform, 
AzureVnetSiteOfflineSurvivabilityModeOutputReference, 
AzureVnetSiteOs, 
azureVnetSiteOsToTerraform, 
azureVnetSiteOsToHclTerraform, 
AzureVnetSiteOsOutputReference, 
AzureVnetSiteSw, 
azureVnetSiteSwToTerraform, 
azureVnetSiteSwToHclTerraform, 
AzureVnetSiteSwOutputReference, 
AzureVnetSiteVnet, 
azureVnetSiteVnetToTerraform, 
azureVnetSiteVnetToHclTerraform, 
AzureVnetSiteVnetOutputReference, 
AzureVnetSiteVoltstackCluster, 
azureVnetSiteVoltstackClusterToTerraform, 
azureVnetSiteVoltstackClusterToHclTerraform, 
AzureVnetSiteVoltstackClusterOutputReference, 
AzureVnetSiteVoltstackClusterAr, 
azureVnetSiteVoltstackClusterArToTerraform, 
azureVnetSiteVoltstackClusterArToHclTerraform, 
AzureVnetSiteVoltstackClusterArOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AzureVnetSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#address AzureVnetSite#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#alternate_region AzureVnetSite#alternate_region}
  */
  readonly alternateRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#annotations AzureVnetSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#azure_region AzureVnetSite#azure_region}
  */
  readonly azureRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#block_all_services AzureVnetSite#block_all_services}
  */
  readonly blockAllServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#default_blocked_services AzureVnetSite#default_blocked_services}
  */
  readonly defaultBlockedServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#description AzureVnetSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#disable AzureVnetSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#disk_size AzureVnetSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#id AzureVnetSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#logs_streaming_disabled AzureVnetSite#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#machine_type AzureVnetSite#machine_type}
  */
  readonly machineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#no_worker_nodes AzureVnetSite#no_worker_nodes}
  */
  readonly noWorkerNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#nodes_per_az AzureVnetSite#nodes_per_az}
  */
  readonly nodesPerAz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#resource_group AzureVnetSite#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#ssh_key AzureVnetSite#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#tags AzureVnetSite#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#total_nodes AzureVnetSite#total_nodes}
  */
  readonly totalNodes?: number;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#admin_password AzureVnetSite#admin_password}
  */
  readonly adminPassword?: AzureVnetSiteAdminPassword;
  /**
  * azure_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#azure_cred AzureVnetSite#azure_cred}
  */
  readonly azureCred?: AzureVnetSiteAzureCred;
  /**
  * blocked_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#blocked_services AzureVnetSite#blocked_services}
  */
  readonly blockedServices?: AzureVnetSiteBlockedServices;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#coordinates AzureVnetSite#coordinates}
  */
  readonly coordinates?: AzureVnetSiteCoordinates;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#custom_dns AzureVnetSite#custom_dns}
  */
  readonly customDns?: AzureVnetSiteCustomDns;
  /**
  * ingress_egress_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#ingress_egress_gw AzureVnetSite#ingress_egress_gw}
  */
  readonly ingressEgressGw?: AzureVnetSiteIngressEgressGw;
  /**
  * ingress_egress_gw_ar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#ingress_egress_gw_ar AzureVnetSite#ingress_egress_gw_ar}
  */
  readonly ingressEgressGwAr?: AzureVnetSiteIngressEgressGwAr;
  /**
  * ingress_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#ingress_gw AzureVnetSite#ingress_gw}
  */
  readonly ingressGw?: AzureVnetSiteIngressGw;
  /**
  * ingress_gw_ar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#ingress_gw_ar AzureVnetSite#ingress_gw_ar}
  */
  readonly ingressGwAr?: AzureVnetSiteIngressGwAr;
  /**
  * kubernetes_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#kubernetes_upgrade_drain AzureVnetSite#kubernetes_upgrade_drain}
  */
  readonly kubernetesUpgradeDrain?: AzureVnetSiteKubernetesUpgradeDrain;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#log_receiver AzureVnetSite#log_receiver}
  */
  readonly logReceiver?: AzureVnetSiteLogReceiver;
  /**
  * offline_survivability_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#offline_survivability_mode AzureVnetSite#offline_survivability_mode}
  */
  readonly offlineSurvivabilityMode?: AzureVnetSiteOfflineSurvivabilityMode;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#os AzureVnetSite#os}
  */
  readonly os?: AzureVnetSiteOs;
  /**
  * sw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#sw AzureVnetSite#sw}
  */
  readonly sw?: AzureVnetSiteSw;
  /**
  * vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#vnet AzureVnetSite#vnet}
  */
  readonly vnet: AzureVnetSiteVnet;
  /**
  * voltstack_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#voltstack_cluster AzureVnetSite#voltstack_cluster}
  */
  readonly voltstackCluster?: AzureVnetSiteVoltstackCluster;
  /**
  * voltstack_cluster_ar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#voltstack_cluster_ar AzureVnetSite#voltstack_cluster_ar}
  */
  readonly voltstackClusterAr?: AzureVnetSiteVoltstackClusterAr;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site volterra_azure_vnet_site}
*/
export class AzureVnetSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_azure_vnet_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureVnetSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureVnetSite to import
  * @param importFromId The id of the existing AzureVnetSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureVnetSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_azure_vnet_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/azure_vnet_site volterra_azure_vnet_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureVnetSiteConfig
  */
  public constructor(scope: Construct, id: string, config: AzureVnetSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_azure_vnet_site',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._alternateRegion = config.alternateRegion;
    this._annotations = config.annotations;
    this._azureRegion = config.azureRegion;
    this._blockAllServices = config.blockAllServices;
    this._defaultBlockedServices = config.defaultBlockedServices;
    this._description = config.description;
    this._disable = config.disable;
    this._diskSize = config.diskSize;
    this._id = config.id;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._machineType = config.machineType;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noWorkerNodes = config.noWorkerNodes;
    this._nodesPerAz = config.nodesPerAz;
    this._resourceGroup = config.resourceGroup;
    this._sshKey = config.sshKey;
    this._tags = config.tags;
    this._totalNodes = config.totalNodes;
    this._adminPassword.internalValue = config.adminPassword;
    this._azureCred.internalValue = config.azureCred;
    this._blockedServices.internalValue = config.blockedServices;
    this._coordinates.internalValue = config.coordinates;
    this._customDns.internalValue = config.customDns;
    this._ingressEgressGw.internalValue = config.ingressEgressGw;
    this._ingressEgressGwAr.internalValue = config.ingressEgressGwAr;
    this._ingressGw.internalValue = config.ingressGw;
    this._ingressGwAr.internalValue = config.ingressGwAr;
    this._kubernetesUpgradeDrain.internalValue = config.kubernetesUpgradeDrain;
    this._logReceiver.internalValue = config.logReceiver;
    this._offlineSurvivabilityMode.internalValue = config.offlineSurvivabilityMode;
    this._os.internalValue = config.os;
    this._sw.internalValue = config.sw;
    this._vnet.internalValue = config.vnet;
    this._voltstackCluster.internalValue = config.voltstackCluster;
    this._voltstackClusterAr.internalValue = config.voltstackClusterAr;
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

  // alternate_region - computed: false, optional: true, required: false
  private _alternateRegion?: string; 
  public get alternateRegion() {
    return this.getStringAttribute('alternate_region');
  }
  public set alternateRegion(value: string) {
    this._alternateRegion = value;
  }
  public resetAlternateRegion() {
    this._alternateRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateRegionInput() {
    return this._alternateRegion;
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

  // azure_region - computed: false, optional: true, required: false
  private _azureRegion?: string; 
  public get azureRegion() {
    return this.getStringAttribute('azure_region');
  }
  public set azureRegion(value: string) {
    this._azureRegion = value;
  }
  public resetAzureRegion() {
    this._azureRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // no_worker_nodes - computed: false, optional: true, required: false
  private _noWorkerNodes?: boolean | cdktf.IResolvable; 
  public get noWorkerNodes() {
    return this.getBooleanAttribute('no_worker_nodes');
  }
  public set noWorkerNodes(value: boolean | cdktf.IResolvable) {
    this._noWorkerNodes = value;
  }
  public resetNoWorkerNodes() {
    this._noWorkerNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWorkerNodesInput() {
    return this._noWorkerNodes;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // total_nodes - computed: false, optional: true, required: false
  private _totalNodes?: number; 
  public get totalNodes() {
    return this.getNumberAttribute('total_nodes');
  }
  public set totalNodes(value: number) {
    this._totalNodes = value;
  }
  public resetTotalNodes() {
    this._totalNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNodesInput() {
    return this._totalNodes;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword = new AzureVnetSiteAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: AzureVnetSiteAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  public resetAdminPassword() {
    this._adminPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // azure_cred - computed: false, optional: true, required: false
  private _azureCred = new AzureVnetSiteAzureCredOutputReference(this, "azure_cred");
  public get azureCred() {
    return this._azureCred;
  }
  public putAzureCred(value: AzureVnetSiteAzureCred) {
    this._azureCred.internalValue = value;
  }
  public resetAzureCred() {
    this._azureCred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCredInput() {
    return this._azureCred.internalValue;
  }

  // blocked_services - computed: false, optional: true, required: false
  private _blockedServices = new AzureVnetSiteBlockedServicesOutputReference(this, "blocked_services");
  public get blockedServices() {
    return this._blockedServices;
  }
  public putBlockedServices(value: AzureVnetSiteBlockedServices) {
    this._blockedServices.internalValue = value;
  }
  public resetBlockedServices() {
    this._blockedServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesInput() {
    return this._blockedServices.internalValue;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new AzureVnetSiteCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: AzureVnetSiteCoordinates) {
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
  private _customDns = new AzureVnetSiteCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: AzureVnetSiteCustomDns) {
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
  private _ingressEgressGw = new AzureVnetSiteIngressEgressGwOutputReference(this, "ingress_egress_gw");
  public get ingressEgressGw() {
    return this._ingressEgressGw;
  }
  public putIngressEgressGw(value: AzureVnetSiteIngressEgressGw) {
    this._ingressEgressGw.internalValue = value;
  }
  public resetIngressEgressGw() {
    this._ingressEgressGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressEgressGwInput() {
    return this._ingressEgressGw.internalValue;
  }

  // ingress_egress_gw_ar - computed: false, optional: true, required: false
  private _ingressEgressGwAr = new AzureVnetSiteIngressEgressGwArOutputReference(this, "ingress_egress_gw_ar");
  public get ingressEgressGwAr() {
    return this._ingressEgressGwAr;
  }
  public putIngressEgressGwAr(value: AzureVnetSiteIngressEgressGwAr) {
    this._ingressEgressGwAr.internalValue = value;
  }
  public resetIngressEgressGwAr() {
    this._ingressEgressGwAr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressEgressGwArInput() {
    return this._ingressEgressGwAr.internalValue;
  }

  // ingress_gw - computed: false, optional: true, required: false
  private _ingressGw = new AzureVnetSiteIngressGwOutputReference(this, "ingress_gw");
  public get ingressGw() {
    return this._ingressGw;
  }
  public putIngressGw(value: AzureVnetSiteIngressGw) {
    this._ingressGw.internalValue = value;
  }
  public resetIngressGw() {
    this._ingressGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGwInput() {
    return this._ingressGw.internalValue;
  }

  // ingress_gw_ar - computed: false, optional: true, required: false
  private _ingressGwAr = new AzureVnetSiteIngressGwArOutputReference(this, "ingress_gw_ar");
  public get ingressGwAr() {
    return this._ingressGwAr;
  }
  public putIngressGwAr(value: AzureVnetSiteIngressGwAr) {
    this._ingressGwAr.internalValue = value;
  }
  public resetIngressGwAr() {
    this._ingressGwAr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGwArInput() {
    return this._ingressGwAr.internalValue;
  }

  // kubernetes_upgrade_drain - computed: false, optional: true, required: false
  private _kubernetesUpgradeDrain = new AzureVnetSiteKubernetesUpgradeDrainOutputReference(this, "kubernetes_upgrade_drain");
  public get kubernetesUpgradeDrain() {
    return this._kubernetesUpgradeDrain;
  }
  public putKubernetesUpgradeDrain(value: AzureVnetSiteKubernetesUpgradeDrain) {
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
  private _logReceiver = new AzureVnetSiteLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: AzureVnetSiteLogReceiver) {
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
  private _offlineSurvivabilityMode = new AzureVnetSiteOfflineSurvivabilityModeOutputReference(this, "offline_survivability_mode");
  public get offlineSurvivabilityMode() {
    return this._offlineSurvivabilityMode;
  }
  public putOfflineSurvivabilityMode(value: AzureVnetSiteOfflineSurvivabilityMode) {
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
  private _os = new AzureVnetSiteOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: AzureVnetSiteOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // sw - computed: false, optional: true, required: false
  private _sw = new AzureVnetSiteSwOutputReference(this, "sw");
  public get sw() {
    return this._sw;
  }
  public putSw(value: AzureVnetSiteSw) {
    this._sw.internalValue = value;
  }
  public resetSw() {
    this._sw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swInput() {
    return this._sw.internalValue;
  }

  // vnet - computed: false, optional: false, required: true
  private _vnet = new AzureVnetSiteVnetOutputReference(this, "vnet");
  public get vnet() {
    return this._vnet;
  }
  public putVnet(value: AzureVnetSiteVnet) {
    this._vnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet.internalValue;
  }

  // voltstack_cluster - computed: false, optional: true, required: false
  private _voltstackCluster = new AzureVnetSiteVoltstackClusterOutputReference(this, "voltstack_cluster");
  public get voltstackCluster() {
    return this._voltstackCluster;
  }
  public putVoltstackCluster(value: AzureVnetSiteVoltstackCluster) {
    this._voltstackCluster.internalValue = value;
  }
  public resetVoltstackCluster() {
    this._voltstackCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltstackClusterInput() {
    return this._voltstackCluster.internalValue;
  }

  // voltstack_cluster_ar - computed: false, optional: true, required: false
  private _voltstackClusterAr = new AzureVnetSiteVoltstackClusterArOutputReference(this, "voltstack_cluster_ar");
  public get voltstackClusterAr() {
    return this._voltstackClusterAr;
  }
  public putVoltstackClusterAr(value: AzureVnetSiteVoltstackClusterAr) {
    this._voltstackClusterAr.internalValue = value;
  }
  public resetVoltstackClusterAr() {
    this._voltstackClusterAr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltstackClusterArInput() {
    return this._voltstackClusterAr.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      alternate_region: cdktf.stringToTerraform(this._alternateRegion),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      azure_region: cdktf.stringToTerraform(this._azureRegion),
      block_all_services: cdktf.booleanToTerraform(this._blockAllServices),
      default_blocked_services: cdktf.booleanToTerraform(this._defaultBlockedServices),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      machine_type: cdktf.stringToTerraform(this._machineType),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_worker_nodes: cdktf.booleanToTerraform(this._noWorkerNodes),
      nodes_per_az: cdktf.numberToTerraform(this._nodesPerAz),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      total_nodes: cdktf.numberToTerraform(this._totalNodes),
      admin_password: azureVnetSiteAdminPasswordToTerraform(this._adminPassword.internalValue),
      azure_cred: azureVnetSiteAzureCredToTerraform(this._azureCred.internalValue),
      blocked_services: azureVnetSiteBlockedServicesToTerraform(this._blockedServices.internalValue),
      coordinates: azureVnetSiteCoordinatesToTerraform(this._coordinates.internalValue),
      custom_dns: azureVnetSiteCustomDnsToTerraform(this._customDns.internalValue),
      ingress_egress_gw: azureVnetSiteIngressEgressGwToTerraform(this._ingressEgressGw.internalValue),
      ingress_egress_gw_ar: azureVnetSiteIngressEgressGwArToTerraform(this._ingressEgressGwAr.internalValue),
      ingress_gw: azureVnetSiteIngressGwToTerraform(this._ingressGw.internalValue),
      ingress_gw_ar: azureVnetSiteIngressGwArToTerraform(this._ingressGwAr.internalValue),
      kubernetes_upgrade_drain: azureVnetSiteKubernetesUpgradeDrainToTerraform(this._kubernetesUpgradeDrain.internalValue),
      log_receiver: azureVnetSiteLogReceiverToTerraform(this._logReceiver.internalValue),
      offline_survivability_mode: azureVnetSiteOfflineSurvivabilityModeToTerraform(this._offlineSurvivabilityMode.internalValue),
      os: azureVnetSiteOsToTerraform(this._os.internalValue),
      sw: azureVnetSiteSwToTerraform(this._sw.internalValue),
      vnet: azureVnetSiteVnetToTerraform(this._vnet.internalValue),
      voltstack_cluster: azureVnetSiteVoltstackClusterToTerraform(this._voltstackCluster.internalValue),
      voltstack_cluster_ar: azureVnetSiteVoltstackClusterArToTerraform(this._voltstackClusterAr.internalValue),
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
      alternate_region: {
        value: cdktf.stringToHclTerraform(this._alternateRegion),
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
      azure_region: {
        value: cdktf.stringToHclTerraform(this._azureRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_worker_nodes: {
        value: cdktf.booleanToHclTerraform(this._noWorkerNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodes_per_az: {
        value: cdktf.numberToHclTerraform(this._nodesPerAz),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      total_nodes: {
        value: cdktf.numberToHclTerraform(this._totalNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_password: {
        value: azureVnetSiteAdminPasswordToHclTerraform(this._adminPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteAdminPasswordList",
      },
      azure_cred: {
        value: azureVnetSiteAzureCredToHclTerraform(this._azureCred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteAzureCredList",
      },
      blocked_services: {
        value: azureVnetSiteBlockedServicesToHclTerraform(this._blockedServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteBlockedServicesList",
      },
      coordinates: {
        value: azureVnetSiteCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteCoordinatesList",
      },
      custom_dns: {
        value: azureVnetSiteCustomDnsToHclTerraform(this._customDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteCustomDnsList",
      },
      ingress_egress_gw: {
        value: azureVnetSiteIngressEgressGwToHclTerraform(this._ingressEgressGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteIngressEgressGwList",
      },
      ingress_egress_gw_ar: {
        value: azureVnetSiteIngressEgressGwArToHclTerraform(this._ingressEgressGwAr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteIngressEgressGwArList",
      },
      ingress_gw: {
        value: azureVnetSiteIngressGwToHclTerraform(this._ingressGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteIngressGwList",
      },
      ingress_gw_ar: {
        value: azureVnetSiteIngressGwArToHclTerraform(this._ingressGwAr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteIngressGwArList",
      },
      kubernetes_upgrade_drain: {
        value: azureVnetSiteKubernetesUpgradeDrainToHclTerraform(this._kubernetesUpgradeDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteKubernetesUpgradeDrainList",
      },
      log_receiver: {
        value: azureVnetSiteLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteLogReceiverList",
      },
      offline_survivability_mode: {
        value: azureVnetSiteOfflineSurvivabilityModeToHclTerraform(this._offlineSurvivabilityMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteOfflineSurvivabilityModeList",
      },
      os: {
        value: azureVnetSiteOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteOsList",
      },
      sw: {
        value: azureVnetSiteSwToHclTerraform(this._sw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteSwList",
      },
      vnet: {
        value: azureVnetSiteVnetToHclTerraform(this._vnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteVnetList",
      },
      voltstack_cluster: {
        value: azureVnetSiteVoltstackClusterToHclTerraform(this._voltstackCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteVoltstackClusterList",
      },
      voltstack_cluster_ar: {
        value: azureVnetSiteVoltstackClusterArToHclTerraform(this._voltstackClusterAr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureVnetSiteVoltstackClusterArList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
