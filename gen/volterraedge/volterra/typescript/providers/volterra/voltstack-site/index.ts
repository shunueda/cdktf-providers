// generated from terraform resource schema

import { VoltstackSiteBlockedServices, 
voltstackSiteBlockedServicesToTerraform, 
voltstackSiteBlockedServicesToHclTerraform, 
VoltstackSiteBlockedServicesOutputReference, 
VoltstackSiteBondDeviceListStruct, 
voltstackSiteBondDeviceListStructToTerraform, 
voltstackSiteBondDeviceListStructToHclTerraform, 
VoltstackSiteBondDeviceListStructOutputReference, 
VoltstackSiteCoordinates, 
voltstackSiteCoordinatesToTerraform, 
voltstackSiteCoordinatesToHclTerraform, 
VoltstackSiteCoordinatesOutputReference, 
VoltstackSiteCustomDns, 
voltstackSiteCustomDnsToTerraform, 
voltstackSiteCustomDnsToHclTerraform, 
VoltstackSiteCustomDnsOutputReference, 
VoltstackSiteCustomNetworkConfig, 
voltstackSiteCustomNetworkConfigToTerraform, 
voltstackSiteCustomNetworkConfigToHclTerraform, 
VoltstackSiteCustomNetworkConfigOutputReference, 
VoltstackSiteCustomStorageConfig, 
voltstackSiteCustomStorageConfigToTerraform, 
voltstackSiteCustomStorageConfigToHclTerraform, 
VoltstackSiteCustomStorageConfigOutputReference, 
VoltstackSiteEnableVgpu, 
voltstackSiteEnableVgpuToTerraform, 
voltstackSiteEnableVgpuToHclTerraform, 
VoltstackSiteEnableVgpuOutputReference, 
VoltstackSiteEnableVm, 
voltstackSiteEnableVmToTerraform, 
voltstackSiteEnableVmToHclTerraform, 
VoltstackSiteEnableVmOutputReference, 
VoltstackSiteK8SCluster, 
voltstackSiteK8SClusterToTerraform, 
voltstackSiteK8SClusterToHclTerraform, 
VoltstackSiteK8SClusterOutputReference, 
VoltstackSiteKubernetesUpgradeDrain, 
voltstackSiteKubernetesUpgradeDrainToTerraform, 
voltstackSiteKubernetesUpgradeDrainToHclTerraform, 
VoltstackSiteKubernetesUpgradeDrainOutputReference, 
VoltstackSiteLocalControlPlane, 
voltstackSiteLocalControlPlaneToTerraform, 
voltstackSiteLocalControlPlaneToHclTerraform, 
VoltstackSiteLocalControlPlaneOutputReference, 
VoltstackSiteLogReceiver, 
voltstackSiteLogReceiverToTerraform, 
voltstackSiteLogReceiverToHclTerraform, 
VoltstackSiteLogReceiverOutputReference, 
VoltstackSiteMasterNodeConfiguration, 
voltstackSiteMasterNodeConfigurationToTerraform, 
voltstackSiteMasterNodeConfigurationToHclTerraform, 
VoltstackSiteMasterNodeConfigurationList, 
VoltstackSiteOfflineSurvivabilityMode, 
voltstackSiteOfflineSurvivabilityModeToTerraform, 
voltstackSiteOfflineSurvivabilityModeToHclTerraform, 
VoltstackSiteOfflineSurvivabilityModeOutputReference, 
VoltstackSiteOs, 
voltstackSiteOsToTerraform, 
voltstackSiteOsToHclTerraform, 
VoltstackSiteOsOutputReference, 
VoltstackSiteSriovInterfaces, 
voltstackSiteSriovInterfacesToTerraform, 
voltstackSiteSriovInterfacesToHclTerraform, 
VoltstackSiteSriovInterfacesOutputReference, 
VoltstackSiteSw, 
voltstackSiteSwToTerraform, 
voltstackSiteSwToHclTerraform, 
VoltstackSiteSwOutputReference, 
VoltstackSiteUsbPolicy, 
voltstackSiteUsbPolicyToTerraform, 
voltstackSiteUsbPolicyToHclTerraform, 
VoltstackSiteUsbPolicyOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VoltstackSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#address VoltstackSite#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#allow_all_usb VoltstackSite#allow_all_usb}
  */
  readonly allowAllUsb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#annotations VoltstackSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_blocked_services VoltstackSite#default_blocked_services}
  */
  readonly defaultBlockedServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_network_config VoltstackSite#default_network_config}
  */
  readonly defaultNetworkConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_sriov_interface VoltstackSite#default_sriov_interface}
  */
  readonly defaultSriovInterface?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#default_storage_config VoltstackSite#default_storage_config}
  */
  readonly defaultStorageConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#deny_all_usb VoltstackSite#deny_all_usb}
  */
  readonly denyAllUsb?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#description VoltstackSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#disable VoltstackSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#disable_gpu VoltstackSite#disable_gpu}
  */
  readonly disableGpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#disable_vm VoltstackSite#disable_vm}
  */
  readonly disableVm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#enable_gpu VoltstackSite#enable_gpu}
  */
  readonly enableGpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#id VoltstackSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#labels VoltstackSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#logs_streaming_disabled VoltstackSite#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#master_nodes VoltstackSite#master_nodes}
  */
  readonly masterNodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#name VoltstackSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#namespace VoltstackSite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_bond_devices VoltstackSite#no_bond_devices}
  */
  readonly noBondDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_k8s_cluster VoltstackSite#no_k8s_cluster}
  */
  readonly noK8SCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#no_local_control_plane VoltstackSite#no_local_control_plane}
  */
  readonly noLocalControlPlane?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#volterra_certified_hw VoltstackSite#volterra_certified_hw}
  */
  readonly volterraCertifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#worker_nodes VoltstackSite#worker_nodes}
  */
  readonly workerNodes?: string[];
  /**
  * blocked_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#blocked_services VoltstackSite#blocked_services}
  */
  readonly blockedServices?: VoltstackSiteBlockedServices;
  /**
  * bond_device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#bond_device_list VoltstackSite#bond_device_list}
  */
  readonly bondDeviceList?: VoltstackSiteBondDeviceListStruct;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#coordinates VoltstackSite#coordinates}
  */
  readonly coordinates?: VoltstackSiteCoordinates;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#custom_dns VoltstackSite#custom_dns}
  */
  readonly customDns?: VoltstackSiteCustomDns;
  /**
  * custom_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#custom_network_config VoltstackSite#custom_network_config}
  */
  readonly customNetworkConfig?: VoltstackSiteCustomNetworkConfig;
  /**
  * custom_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#custom_storage_config VoltstackSite#custom_storage_config}
  */
  readonly customStorageConfig?: VoltstackSiteCustomStorageConfig;
  /**
  * enable_vgpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#enable_vgpu VoltstackSite#enable_vgpu}
  */
  readonly enableVgpu?: VoltstackSiteEnableVgpu;
  /**
  * enable_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#enable_vm VoltstackSite#enable_vm}
  */
  readonly enableVm?: VoltstackSiteEnableVm;
  /**
  * k8s_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#k8s_cluster VoltstackSite#k8s_cluster}
  */
  readonly k8SCluster?: VoltstackSiteK8SCluster;
  /**
  * kubernetes_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#kubernetes_upgrade_drain VoltstackSite#kubernetes_upgrade_drain}
  */
  readonly kubernetesUpgradeDrain?: VoltstackSiteKubernetesUpgradeDrain;
  /**
  * local_control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#local_control_plane VoltstackSite#local_control_plane}
  */
  readonly localControlPlane?: VoltstackSiteLocalControlPlane;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#log_receiver VoltstackSite#log_receiver}
  */
  readonly logReceiver?: VoltstackSiteLogReceiver;
  /**
  * master_node_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#master_node_configuration VoltstackSite#master_node_configuration}
  */
  readonly masterNodeConfiguration: VoltstackSiteMasterNodeConfiguration[] | cdktf.IResolvable;
  /**
  * offline_survivability_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#offline_survivability_mode VoltstackSite#offline_survivability_mode}
  */
  readonly offlineSurvivabilityMode?: VoltstackSiteOfflineSurvivabilityMode;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#os VoltstackSite#os}
  */
  readonly os?: VoltstackSiteOs;
  /**
  * sriov_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#sriov_interfaces VoltstackSite#sriov_interfaces}
  */
  readonly sriovInterfaces?: VoltstackSiteSriovInterfaces;
  /**
  * sw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#sw VoltstackSite#sw}
  */
  readonly sw?: VoltstackSiteSw;
  /**
  * usb_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#usb_policy VoltstackSite#usb_policy}
  */
  readonly usbPolicy?: VoltstackSiteUsbPolicy;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site volterra_voltstack_site}
*/
export class VoltstackSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_voltstack_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VoltstackSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VoltstackSite to import
  * @param importFromId The id of the existing VoltstackSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VoltstackSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_voltstack_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/voltstack_site volterra_voltstack_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VoltstackSiteConfig
  */
  public constructor(scope: Construct, id: string, config: VoltstackSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_voltstack_site',
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
    this._allowAllUsb = config.allowAllUsb;
    this._annotations = config.annotations;
    this._defaultBlockedServices = config.defaultBlockedServices;
    this._defaultNetworkConfig = config.defaultNetworkConfig;
    this._defaultSriovInterface = config.defaultSriovInterface;
    this._defaultStorageConfig = config.defaultStorageConfig;
    this._denyAllUsb = config.denyAllUsb;
    this._description = config.description;
    this._disable = config.disable;
    this._disableGpu = config.disableGpu;
    this._disableVm = config.disableVm;
    this._enableGpu = config.enableGpu;
    this._id = config.id;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._masterNodes = config.masterNodes;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noBondDevices = config.noBondDevices;
    this._noK8SCluster = config.noK8SCluster;
    this._noLocalControlPlane = config.noLocalControlPlane;
    this._volterraCertifiedHw = config.volterraCertifiedHw;
    this._workerNodes = config.workerNodes;
    this._blockedServices.internalValue = config.blockedServices;
    this._bondDeviceList.internalValue = config.bondDeviceList;
    this._coordinates.internalValue = config.coordinates;
    this._customDns.internalValue = config.customDns;
    this._customNetworkConfig.internalValue = config.customNetworkConfig;
    this._customStorageConfig.internalValue = config.customStorageConfig;
    this._enableVgpu.internalValue = config.enableVgpu;
    this._enableVm.internalValue = config.enableVm;
    this._k8SCluster.internalValue = config.k8SCluster;
    this._kubernetesUpgradeDrain.internalValue = config.kubernetesUpgradeDrain;
    this._localControlPlane.internalValue = config.localControlPlane;
    this._logReceiver.internalValue = config.logReceiver;
    this._masterNodeConfiguration.internalValue = config.masterNodeConfiguration;
    this._offlineSurvivabilityMode.internalValue = config.offlineSurvivabilityMode;
    this._os.internalValue = config.os;
    this._sriovInterfaces.internalValue = config.sriovInterfaces;
    this._sw.internalValue = config.sw;
    this._usbPolicy.internalValue = config.usbPolicy;
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

  // allow_all_usb - computed: false, optional: true, required: false
  private _allowAllUsb?: boolean | cdktf.IResolvable; 
  public get allowAllUsb() {
    return this.getBooleanAttribute('allow_all_usb');
  }
  public set allowAllUsb(value: boolean | cdktf.IResolvable) {
    this._allowAllUsb = value;
  }
  public resetAllowAllUsb() {
    this._allowAllUsb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllUsbInput() {
    return this._allowAllUsb;
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

  // default_network_config - computed: false, optional: true, required: false
  private _defaultNetworkConfig?: boolean | cdktf.IResolvable; 
  public get defaultNetworkConfig() {
    return this.getBooleanAttribute('default_network_config');
  }
  public set defaultNetworkConfig(value: boolean | cdktf.IResolvable) {
    this._defaultNetworkConfig = value;
  }
  public resetDefaultNetworkConfig() {
    this._defaultNetworkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetworkConfigInput() {
    return this._defaultNetworkConfig;
  }

  // default_sriov_interface - computed: false, optional: true, required: false
  private _defaultSriovInterface?: boolean | cdktf.IResolvable; 
  public get defaultSriovInterface() {
    return this.getBooleanAttribute('default_sriov_interface');
  }
  public set defaultSriovInterface(value: boolean | cdktf.IResolvable) {
    this._defaultSriovInterface = value;
  }
  public resetDefaultSriovInterface() {
    this._defaultSriovInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSriovInterfaceInput() {
    return this._defaultSriovInterface;
  }

  // default_storage_config - computed: false, optional: true, required: false
  private _defaultStorageConfig?: boolean | cdktf.IResolvable; 
  public get defaultStorageConfig() {
    return this.getBooleanAttribute('default_storage_config');
  }
  public set defaultStorageConfig(value: boolean | cdktf.IResolvable) {
    this._defaultStorageConfig = value;
  }
  public resetDefaultStorageConfig() {
    this._defaultStorageConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageConfigInput() {
    return this._defaultStorageConfig;
  }

  // deny_all_usb - computed: false, optional: true, required: false
  private _denyAllUsb?: boolean | cdktf.IResolvable; 
  public get denyAllUsb() {
    return this.getBooleanAttribute('deny_all_usb');
  }
  public set denyAllUsb(value: boolean | cdktf.IResolvable) {
    this._denyAllUsb = value;
  }
  public resetDenyAllUsb() {
    this._denyAllUsb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllUsbInput() {
    return this._denyAllUsb;
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

  // disable_gpu - computed: false, optional: true, required: false
  private _disableGpu?: boolean | cdktf.IResolvable; 
  public get disableGpu() {
    return this.getBooleanAttribute('disable_gpu');
  }
  public set disableGpu(value: boolean | cdktf.IResolvable) {
    this._disableGpu = value;
  }
  public resetDisableGpu() {
    this._disableGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGpuInput() {
    return this._disableGpu;
  }

  // disable_vm - computed: false, optional: true, required: false
  private _disableVm?: boolean | cdktf.IResolvable; 
  public get disableVm() {
    return this.getBooleanAttribute('disable_vm');
  }
  public set disableVm(value: boolean | cdktf.IResolvable) {
    this._disableVm = value;
  }
  public resetDisableVm() {
    this._disableVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVmInput() {
    return this._disableVm;
  }

  // enable_gpu - computed: false, optional: true, required: false
  private _enableGpu?: boolean | cdktf.IResolvable; 
  public get enableGpu() {
    return this.getBooleanAttribute('enable_gpu');
  }
  public set enableGpu(value: boolean | cdktf.IResolvable) {
    this._enableGpu = value;
  }
  public resetEnableGpu() {
    this._enableGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGpuInput() {
    return this._enableGpu;
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

  // master_nodes - computed: false, optional: true, required: false
  private _masterNodes?: string[]; 
  public get masterNodes() {
    return this.getListAttribute('master_nodes');
  }
  public set masterNodes(value: string[]) {
    this._masterNodes = value;
  }
  public resetMasterNodes() {
    this._masterNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodesInput() {
    return this._masterNodes;
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

  // no_bond_devices - computed: false, optional: true, required: false
  private _noBondDevices?: boolean | cdktf.IResolvable; 
  public get noBondDevices() {
    return this.getBooleanAttribute('no_bond_devices');
  }
  public set noBondDevices(value: boolean | cdktf.IResolvable) {
    this._noBondDevices = value;
  }
  public resetNoBondDevices() {
    this._noBondDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noBondDevicesInput() {
    return this._noBondDevices;
  }

  // no_k8s_cluster - computed: false, optional: true, required: false
  private _noK8SCluster?: boolean | cdktf.IResolvable; 
  public get noK8SCluster() {
    return this.getBooleanAttribute('no_k8s_cluster');
  }
  public set noK8SCluster(value: boolean | cdktf.IResolvable) {
    this._noK8SCluster = value;
  }
  public resetNoK8SCluster() {
    this._noK8SCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noK8SClusterInput() {
    return this._noK8SCluster;
  }

  // no_local_control_plane - computed: false, optional: true, required: false
  private _noLocalControlPlane?: boolean | cdktf.IResolvable; 
  public get noLocalControlPlane() {
    return this.getBooleanAttribute('no_local_control_plane');
  }
  public set noLocalControlPlane(value: boolean | cdktf.IResolvable) {
    this._noLocalControlPlane = value;
  }
  public resetNoLocalControlPlane() {
    this._noLocalControlPlane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLocalControlPlaneInput() {
    return this._noLocalControlPlane;
  }

  // volterra_certified_hw - computed: false, optional: false, required: true
  private _volterraCertifiedHw?: string; 
  public get volterraCertifiedHw() {
    return this.getStringAttribute('volterra_certified_hw');
  }
  public set volterraCertifiedHw(value: string) {
    this._volterraCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraCertifiedHwInput() {
    return this._volterraCertifiedHw;
  }

  // worker_nodes - computed: false, optional: true, required: false
  private _workerNodes?: string[]; 
  public get workerNodes() {
    return this.getListAttribute('worker_nodes');
  }
  public set workerNodes(value: string[]) {
    this._workerNodes = value;
  }
  public resetWorkerNodes() {
    this._workerNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodesInput() {
    return this._workerNodes;
  }

  // blocked_services - computed: false, optional: true, required: false
  private _blockedServices = new VoltstackSiteBlockedServicesOutputReference(this, "blocked_services");
  public get blockedServices() {
    return this._blockedServices;
  }
  public putBlockedServices(value: VoltstackSiteBlockedServices) {
    this._blockedServices.internalValue = value;
  }
  public resetBlockedServices() {
    this._blockedServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedServicesInput() {
    return this._blockedServices.internalValue;
  }

  // bond_device_list - computed: false, optional: true, required: false
  private _bondDeviceList = new VoltstackSiteBondDeviceListStructOutputReference(this, "bond_device_list");
  public get bondDeviceList() {
    return this._bondDeviceList;
  }
  public putBondDeviceList(value: VoltstackSiteBondDeviceListStruct) {
    this._bondDeviceList.internalValue = value;
  }
  public resetBondDeviceList() {
    this._bondDeviceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondDeviceListInput() {
    return this._bondDeviceList.internalValue;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new VoltstackSiteCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: VoltstackSiteCoordinates) {
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
  private _customDns = new VoltstackSiteCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: VoltstackSiteCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // custom_network_config - computed: false, optional: true, required: false
  private _customNetworkConfig = new VoltstackSiteCustomNetworkConfigOutputReference(this, "custom_network_config");
  public get customNetworkConfig() {
    return this._customNetworkConfig;
  }
  public putCustomNetworkConfig(value: VoltstackSiteCustomNetworkConfig) {
    this._customNetworkConfig.internalValue = value;
  }
  public resetCustomNetworkConfig() {
    this._customNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNetworkConfigInput() {
    return this._customNetworkConfig.internalValue;
  }

  // custom_storage_config - computed: false, optional: true, required: false
  private _customStorageConfig = new VoltstackSiteCustomStorageConfigOutputReference(this, "custom_storage_config");
  public get customStorageConfig() {
    return this._customStorageConfig;
  }
  public putCustomStorageConfig(value: VoltstackSiteCustomStorageConfig) {
    this._customStorageConfig.internalValue = value;
  }
  public resetCustomStorageConfig() {
    this._customStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStorageConfigInput() {
    return this._customStorageConfig.internalValue;
  }

  // enable_vgpu - computed: false, optional: true, required: false
  private _enableVgpu = new VoltstackSiteEnableVgpuOutputReference(this, "enable_vgpu");
  public get enableVgpu() {
    return this._enableVgpu;
  }
  public putEnableVgpu(value: VoltstackSiteEnableVgpu) {
    this._enableVgpu.internalValue = value;
  }
  public resetEnableVgpu() {
    this._enableVgpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVgpuInput() {
    return this._enableVgpu.internalValue;
  }

  // enable_vm - computed: false, optional: true, required: false
  private _enableVm = new VoltstackSiteEnableVmOutputReference(this, "enable_vm");
  public get enableVm() {
    return this._enableVm;
  }
  public putEnableVm(value: VoltstackSiteEnableVm) {
    this._enableVm.internalValue = value;
  }
  public resetEnableVm() {
    this._enableVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVmInput() {
    return this._enableVm.internalValue;
  }

  // k8s_cluster - computed: false, optional: true, required: false
  private _k8SCluster = new VoltstackSiteK8SClusterOutputReference(this, "k8s_cluster");
  public get k8SCluster() {
    return this._k8SCluster;
  }
  public putK8SCluster(value: VoltstackSiteK8SCluster) {
    this._k8SCluster.internalValue = value;
  }
  public resetK8SCluster() {
    this._k8SCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterInput() {
    return this._k8SCluster.internalValue;
  }

  // kubernetes_upgrade_drain - computed: false, optional: true, required: false
  private _kubernetesUpgradeDrain = new VoltstackSiteKubernetesUpgradeDrainOutputReference(this, "kubernetes_upgrade_drain");
  public get kubernetesUpgradeDrain() {
    return this._kubernetesUpgradeDrain;
  }
  public putKubernetesUpgradeDrain(value: VoltstackSiteKubernetesUpgradeDrain) {
    this._kubernetesUpgradeDrain.internalValue = value;
  }
  public resetKubernetesUpgradeDrain() {
    this._kubernetesUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUpgradeDrainInput() {
    return this._kubernetesUpgradeDrain.internalValue;
  }

  // local_control_plane - computed: false, optional: true, required: false
  private _localControlPlane = new VoltstackSiteLocalControlPlaneOutputReference(this, "local_control_plane");
  public get localControlPlane() {
    return this._localControlPlane;
  }
  public putLocalControlPlane(value: VoltstackSiteLocalControlPlane) {
    this._localControlPlane.internalValue = value;
  }
  public resetLocalControlPlane() {
    this._localControlPlane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localControlPlaneInput() {
    return this._localControlPlane.internalValue;
  }

  // log_receiver - computed: false, optional: true, required: false
  private _logReceiver = new VoltstackSiteLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: VoltstackSiteLogReceiver) {
    this._logReceiver.internalValue = value;
  }
  public resetLogReceiver() {
    this._logReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logReceiverInput() {
    return this._logReceiver.internalValue;
  }

  // master_node_configuration - computed: false, optional: false, required: true
  private _masterNodeConfiguration = new VoltstackSiteMasterNodeConfigurationList(this, "master_node_configuration", false);
  public get masterNodeConfiguration() {
    return this._masterNodeConfiguration;
  }
  public putMasterNodeConfiguration(value: VoltstackSiteMasterNodeConfiguration[] | cdktf.IResolvable) {
    this._masterNodeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeConfigurationInput() {
    return this._masterNodeConfiguration.internalValue;
  }

  // offline_survivability_mode - computed: false, optional: true, required: false
  private _offlineSurvivabilityMode = new VoltstackSiteOfflineSurvivabilityModeOutputReference(this, "offline_survivability_mode");
  public get offlineSurvivabilityMode() {
    return this._offlineSurvivabilityMode;
  }
  public putOfflineSurvivabilityMode(value: VoltstackSiteOfflineSurvivabilityMode) {
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
  private _os = new VoltstackSiteOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: VoltstackSiteOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // sriov_interfaces - computed: false, optional: true, required: false
  private _sriovInterfaces = new VoltstackSiteSriovInterfacesOutputReference(this, "sriov_interfaces");
  public get sriovInterfaces() {
    return this._sriovInterfaces;
  }
  public putSriovInterfaces(value: VoltstackSiteSriovInterfaces) {
    this._sriovInterfaces.internalValue = value;
  }
  public resetSriovInterfaces() {
    this._sriovInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sriovInterfacesInput() {
    return this._sriovInterfaces.internalValue;
  }

  // sw - computed: false, optional: true, required: false
  private _sw = new VoltstackSiteSwOutputReference(this, "sw");
  public get sw() {
    return this._sw;
  }
  public putSw(value: VoltstackSiteSw) {
    this._sw.internalValue = value;
  }
  public resetSw() {
    this._sw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swInput() {
    return this._sw.internalValue;
  }

  // usb_policy - computed: false, optional: true, required: false
  private _usbPolicy = new VoltstackSiteUsbPolicyOutputReference(this, "usb_policy");
  public get usbPolicy() {
    return this._usbPolicy;
  }
  public putUsbPolicy(value: VoltstackSiteUsbPolicy) {
    this._usbPolicy.internalValue = value;
  }
  public resetUsbPolicy() {
    this._usbPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usbPolicyInput() {
    return this._usbPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      allow_all_usb: cdktf.booleanToTerraform(this._allowAllUsb),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      default_blocked_services: cdktf.booleanToTerraform(this._defaultBlockedServices),
      default_network_config: cdktf.booleanToTerraform(this._defaultNetworkConfig),
      default_sriov_interface: cdktf.booleanToTerraform(this._defaultSriovInterface),
      default_storage_config: cdktf.booleanToTerraform(this._defaultStorageConfig),
      deny_all_usb: cdktf.booleanToTerraform(this._denyAllUsb),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_gpu: cdktf.booleanToTerraform(this._disableGpu),
      disable_vm: cdktf.booleanToTerraform(this._disableVm),
      enable_gpu: cdktf.booleanToTerraform(this._enableGpu),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      master_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._masterNodes),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_bond_devices: cdktf.booleanToTerraform(this._noBondDevices),
      no_k8s_cluster: cdktf.booleanToTerraform(this._noK8SCluster),
      no_local_control_plane: cdktf.booleanToTerraform(this._noLocalControlPlane),
      volterra_certified_hw: cdktf.stringToTerraform(this._volterraCertifiedHw),
      worker_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerNodes),
      blocked_services: voltstackSiteBlockedServicesToTerraform(this._blockedServices.internalValue),
      bond_device_list: voltstackSiteBondDeviceListStructToTerraform(this._bondDeviceList.internalValue),
      coordinates: voltstackSiteCoordinatesToTerraform(this._coordinates.internalValue),
      custom_dns: voltstackSiteCustomDnsToTerraform(this._customDns.internalValue),
      custom_network_config: voltstackSiteCustomNetworkConfigToTerraform(this._customNetworkConfig.internalValue),
      custom_storage_config: voltstackSiteCustomStorageConfigToTerraform(this._customStorageConfig.internalValue),
      enable_vgpu: voltstackSiteEnableVgpuToTerraform(this._enableVgpu.internalValue),
      enable_vm: voltstackSiteEnableVmToTerraform(this._enableVm.internalValue),
      k8s_cluster: voltstackSiteK8SClusterToTerraform(this._k8SCluster.internalValue),
      kubernetes_upgrade_drain: voltstackSiteKubernetesUpgradeDrainToTerraform(this._kubernetesUpgradeDrain.internalValue),
      local_control_plane: voltstackSiteLocalControlPlaneToTerraform(this._localControlPlane.internalValue),
      log_receiver: voltstackSiteLogReceiverToTerraform(this._logReceiver.internalValue),
      master_node_configuration: cdktf.listMapper(voltstackSiteMasterNodeConfigurationToTerraform, true)(this._masterNodeConfiguration.internalValue),
      offline_survivability_mode: voltstackSiteOfflineSurvivabilityModeToTerraform(this._offlineSurvivabilityMode.internalValue),
      os: voltstackSiteOsToTerraform(this._os.internalValue),
      sriov_interfaces: voltstackSiteSriovInterfacesToTerraform(this._sriovInterfaces.internalValue),
      sw: voltstackSiteSwToTerraform(this._sw.internalValue),
      usb_policy: voltstackSiteUsbPolicyToTerraform(this._usbPolicy.internalValue),
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
      allow_all_usb: {
        value: cdktf.booleanToHclTerraform(this._allowAllUsb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      default_blocked_services: {
        value: cdktf.booleanToHclTerraform(this._defaultBlockedServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_network_config: {
        value: cdktf.booleanToHclTerraform(this._defaultNetworkConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_sriov_interface: {
        value: cdktf.booleanToHclTerraform(this._defaultSriovInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_storage_config: {
        value: cdktf.booleanToHclTerraform(this._defaultStorageConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deny_all_usb: {
        value: cdktf.booleanToHclTerraform(this._denyAllUsb),
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
      disable_gpu: {
        value: cdktf.booleanToHclTerraform(this._disableGpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_vm: {
        value: cdktf.booleanToHclTerraform(this._disableVm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_gpu: {
        value: cdktf.booleanToHclTerraform(this._enableGpu),
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
      master_nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._masterNodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      no_bond_devices: {
        value: cdktf.booleanToHclTerraform(this._noBondDevices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_k8s_cluster: {
        value: cdktf.booleanToHclTerraform(this._noK8SCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_local_control_plane: {
        value: cdktf.booleanToHclTerraform(this._noLocalControlPlane),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volterra_certified_hw: {
        value: cdktf.stringToHclTerraform(this._volterraCertifiedHw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_nodes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workerNodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      blocked_services: {
        value: voltstackSiteBlockedServicesToHclTerraform(this._blockedServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteBlockedServicesList",
      },
      bond_device_list: {
        value: voltstackSiteBondDeviceListStructToHclTerraform(this._bondDeviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteBondDeviceListStructList",
      },
      coordinates: {
        value: voltstackSiteCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteCoordinatesList",
      },
      custom_dns: {
        value: voltstackSiteCustomDnsToHclTerraform(this._customDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteCustomDnsList",
      },
      custom_network_config: {
        value: voltstackSiteCustomNetworkConfigToHclTerraform(this._customNetworkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteCustomNetworkConfigList",
      },
      custom_storage_config: {
        value: voltstackSiteCustomStorageConfigToHclTerraform(this._customStorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteCustomStorageConfigList",
      },
      enable_vgpu: {
        value: voltstackSiteEnableVgpuToHclTerraform(this._enableVgpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteEnableVgpuList",
      },
      enable_vm: {
        value: voltstackSiteEnableVmToHclTerraform(this._enableVm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteEnableVmList",
      },
      k8s_cluster: {
        value: voltstackSiteK8SClusterToHclTerraform(this._k8SCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteK8SClusterList",
      },
      kubernetes_upgrade_drain: {
        value: voltstackSiteKubernetesUpgradeDrainToHclTerraform(this._kubernetesUpgradeDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteKubernetesUpgradeDrainList",
      },
      local_control_plane: {
        value: voltstackSiteLocalControlPlaneToHclTerraform(this._localControlPlane.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteLocalControlPlaneList",
      },
      log_receiver: {
        value: voltstackSiteLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteLogReceiverList",
      },
      master_node_configuration: {
        value: cdktf.listMapperHcl(voltstackSiteMasterNodeConfigurationToHclTerraform, true)(this._masterNodeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteMasterNodeConfigurationList",
      },
      offline_survivability_mode: {
        value: voltstackSiteOfflineSurvivabilityModeToHclTerraform(this._offlineSurvivabilityMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteOfflineSurvivabilityModeList",
      },
      os: {
        value: voltstackSiteOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteOsList",
      },
      sriov_interfaces: {
        value: voltstackSiteSriovInterfacesToHclTerraform(this._sriovInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteSriovInterfacesList",
      },
      sw: {
        value: voltstackSiteSwToHclTerraform(this._sw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteSwList",
      },
      usb_policy: {
        value: voltstackSiteUsbPolicyToHclTerraform(this._usbPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VoltstackSiteUsbPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
