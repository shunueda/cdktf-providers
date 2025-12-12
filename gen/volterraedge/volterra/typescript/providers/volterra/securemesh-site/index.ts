// generated from terraform resource schema

import { SecuremeshSiteBlockedServices, 
securemeshSiteBlockedServicesToTerraform, 
securemeshSiteBlockedServicesToHclTerraform, 
SecuremeshSiteBlockedServicesOutputReference, 
SecuremeshSiteBondDeviceListStruct, 
securemeshSiteBondDeviceListStructToTerraform, 
securemeshSiteBondDeviceListStructToHclTerraform, 
SecuremeshSiteBondDeviceListStructOutputReference, 
SecuremeshSiteCoordinates, 
securemeshSiteCoordinatesToTerraform, 
securemeshSiteCoordinatesToHclTerraform, 
SecuremeshSiteCoordinatesOutputReference, 
SecuremeshSiteCustomNetworkConfig, 
securemeshSiteCustomNetworkConfigToTerraform, 
securemeshSiteCustomNetworkConfigToHclTerraform, 
SecuremeshSiteCustomNetworkConfigOutputReference, 
SecuremeshSiteKubernetesUpgradeDrain, 
securemeshSiteKubernetesUpgradeDrainToTerraform, 
securemeshSiteKubernetesUpgradeDrainToHclTerraform, 
SecuremeshSiteKubernetesUpgradeDrainOutputReference, 
SecuremeshSiteLogReceiver, 
securemeshSiteLogReceiverToTerraform, 
securemeshSiteLogReceiverToHclTerraform, 
SecuremeshSiteLogReceiverOutputReference, 
SecuremeshSiteMasterNodeConfiguration, 
securemeshSiteMasterNodeConfigurationToTerraform, 
securemeshSiteMasterNodeConfigurationToHclTerraform, 
SecuremeshSiteMasterNodeConfigurationList, 
SecuremeshSiteOfflineSurvivabilityMode, 
securemeshSiteOfflineSurvivabilityModeToTerraform, 
securemeshSiteOfflineSurvivabilityModeToHclTerraform, 
SecuremeshSiteOfflineSurvivabilityModeOutputReference, 
SecuremeshSiteOs, 
securemeshSiteOsToTerraform, 
securemeshSiteOsToHclTerraform, 
SecuremeshSiteOsOutputReference, 
SecuremeshSitePerformanceEnhancementMode, 
securemeshSitePerformanceEnhancementModeToTerraform, 
securemeshSitePerformanceEnhancementModeToHclTerraform, 
SecuremeshSitePerformanceEnhancementModeOutputReference, 
SecuremeshSiteSw, 
securemeshSiteSwToTerraform, 
securemeshSiteSwToHclTerraform, 
SecuremeshSiteSwOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecuremeshSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#address SecuremeshSite#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#annotations SecuremeshSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_blocked_services SecuremeshSite#default_blocked_services}
  */
  readonly defaultBlockedServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#default_network_config SecuremeshSite#default_network_config}
  */
  readonly defaultNetworkConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#description SecuremeshSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#disable SecuremeshSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#id SecuremeshSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#labels SecuremeshSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#logs_streaming_disabled SecuremeshSite#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#name SecuremeshSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#namespace SecuremeshSite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#no_bond_devices SecuremeshSite#no_bond_devices}
  */
  readonly noBondDevices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#volterra_certified_hw SecuremeshSite#volterra_certified_hw}
  */
  readonly volterraCertifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#worker_nodes SecuremeshSite#worker_nodes}
  */
  readonly workerNodes?: string[];
  /**
  * blocked_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#blocked_services SecuremeshSite#blocked_services}
  */
  readonly blockedServices?: SecuremeshSiteBlockedServices;
  /**
  * bond_device_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#bond_device_list SecuremeshSite#bond_device_list}
  */
  readonly bondDeviceList?: SecuremeshSiteBondDeviceListStruct;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#coordinates SecuremeshSite#coordinates}
  */
  readonly coordinates?: SecuremeshSiteCoordinates;
  /**
  * custom_network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#custom_network_config SecuremeshSite#custom_network_config}
  */
  readonly customNetworkConfig?: SecuremeshSiteCustomNetworkConfig;
  /**
  * kubernetes_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#kubernetes_upgrade_drain SecuremeshSite#kubernetes_upgrade_drain}
  */
  readonly kubernetesUpgradeDrain?: SecuremeshSiteKubernetesUpgradeDrain;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#log_receiver SecuremeshSite#log_receiver}
  */
  readonly logReceiver?: SecuremeshSiteLogReceiver;
  /**
  * master_node_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#master_node_configuration SecuremeshSite#master_node_configuration}
  */
  readonly masterNodeConfiguration: SecuremeshSiteMasterNodeConfiguration[] | cdktf.IResolvable;
  /**
  * offline_survivability_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#offline_survivability_mode SecuremeshSite#offline_survivability_mode}
  */
  readonly offlineSurvivabilityMode?: SecuremeshSiteOfflineSurvivabilityMode;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#os SecuremeshSite#os}
  */
  readonly os?: SecuremeshSiteOs;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#performance_enhancement_mode SecuremeshSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: SecuremeshSitePerformanceEnhancementMode;
  /**
  * sw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#sw SecuremeshSite#sw}
  */
  readonly sw?: SecuremeshSiteSw;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site volterra_securemesh_site}
*/
export class SecuremeshSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_securemesh_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuremeshSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuremeshSite to import
  * @param importFromId The id of the existing SecuremeshSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuremeshSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_securemesh_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/securemesh_site volterra_securemesh_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuremeshSiteConfig
  */
  public constructor(scope: Construct, id: string, config: SecuremeshSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_securemesh_site',
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
    this._defaultBlockedServices = config.defaultBlockedServices;
    this._defaultNetworkConfig = config.defaultNetworkConfig;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noBondDevices = config.noBondDevices;
    this._volterraCertifiedHw = config.volterraCertifiedHw;
    this._workerNodes = config.workerNodes;
    this._blockedServices.internalValue = config.blockedServices;
    this._bondDeviceList.internalValue = config.bondDeviceList;
    this._coordinates.internalValue = config.coordinates;
    this._customNetworkConfig.internalValue = config.customNetworkConfig;
    this._kubernetesUpgradeDrain.internalValue = config.kubernetesUpgradeDrain;
    this._logReceiver.internalValue = config.logReceiver;
    this._masterNodeConfiguration.internalValue = config.masterNodeConfiguration;
    this._offlineSurvivabilityMode.internalValue = config.offlineSurvivabilityMode;
    this._os.internalValue = config.os;
    this._performanceEnhancementMode.internalValue = config.performanceEnhancementMode;
    this._sw.internalValue = config.sw;
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
  private _blockedServices = new SecuremeshSiteBlockedServicesOutputReference(this, "blocked_services");
  public get blockedServices() {
    return this._blockedServices;
  }
  public putBlockedServices(value: SecuremeshSiteBlockedServices) {
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
  private _bondDeviceList = new SecuremeshSiteBondDeviceListStructOutputReference(this, "bond_device_list");
  public get bondDeviceList() {
    return this._bondDeviceList;
  }
  public putBondDeviceList(value: SecuremeshSiteBondDeviceListStruct) {
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
  private _coordinates = new SecuremeshSiteCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: SecuremeshSiteCoordinates) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // custom_network_config - computed: false, optional: true, required: false
  private _customNetworkConfig = new SecuremeshSiteCustomNetworkConfigOutputReference(this, "custom_network_config");
  public get customNetworkConfig() {
    return this._customNetworkConfig;
  }
  public putCustomNetworkConfig(value: SecuremeshSiteCustomNetworkConfig) {
    this._customNetworkConfig.internalValue = value;
  }
  public resetCustomNetworkConfig() {
    this._customNetworkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNetworkConfigInput() {
    return this._customNetworkConfig.internalValue;
  }

  // kubernetes_upgrade_drain - computed: false, optional: true, required: false
  private _kubernetesUpgradeDrain = new SecuremeshSiteKubernetesUpgradeDrainOutputReference(this, "kubernetes_upgrade_drain");
  public get kubernetesUpgradeDrain() {
    return this._kubernetesUpgradeDrain;
  }
  public putKubernetesUpgradeDrain(value: SecuremeshSiteKubernetesUpgradeDrain) {
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
  private _logReceiver = new SecuremeshSiteLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: SecuremeshSiteLogReceiver) {
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
  private _masterNodeConfiguration = new SecuremeshSiteMasterNodeConfigurationList(this, "master_node_configuration", false);
  public get masterNodeConfiguration() {
    return this._masterNodeConfiguration;
  }
  public putMasterNodeConfiguration(value: SecuremeshSiteMasterNodeConfiguration[] | cdktf.IResolvable) {
    this._masterNodeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeConfigurationInput() {
    return this._masterNodeConfiguration.internalValue;
  }

  // offline_survivability_mode - computed: false, optional: true, required: false
  private _offlineSurvivabilityMode = new SecuremeshSiteOfflineSurvivabilityModeOutputReference(this, "offline_survivability_mode");
  public get offlineSurvivabilityMode() {
    return this._offlineSurvivabilityMode;
  }
  public putOfflineSurvivabilityMode(value: SecuremeshSiteOfflineSurvivabilityMode) {
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
  private _os = new SecuremeshSiteOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: SecuremeshSiteOs) {
    this._os.internalValue = value;
  }
  public resetOs() {
    this._os.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new SecuremeshSitePerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: SecuremeshSitePerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }

  // sw - computed: false, optional: true, required: false
  private _sw = new SecuremeshSiteSwOutputReference(this, "sw");
  public get sw() {
    return this._sw;
  }
  public putSw(value: SecuremeshSiteSw) {
    this._sw.internalValue = value;
  }
  public resetSw() {
    this._sw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swInput() {
    return this._sw.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      default_blocked_services: cdktf.booleanToTerraform(this._defaultBlockedServices),
      default_network_config: cdktf.booleanToTerraform(this._defaultNetworkConfig),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_bond_devices: cdktf.booleanToTerraform(this._noBondDevices),
      volterra_certified_hw: cdktf.stringToTerraform(this._volterraCertifiedHw),
      worker_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workerNodes),
      blocked_services: securemeshSiteBlockedServicesToTerraform(this._blockedServices.internalValue),
      bond_device_list: securemeshSiteBondDeviceListStructToTerraform(this._bondDeviceList.internalValue),
      coordinates: securemeshSiteCoordinatesToTerraform(this._coordinates.internalValue),
      custom_network_config: securemeshSiteCustomNetworkConfigToTerraform(this._customNetworkConfig.internalValue),
      kubernetes_upgrade_drain: securemeshSiteKubernetesUpgradeDrainToTerraform(this._kubernetesUpgradeDrain.internalValue),
      log_receiver: securemeshSiteLogReceiverToTerraform(this._logReceiver.internalValue),
      master_node_configuration: cdktf.listMapper(securemeshSiteMasterNodeConfigurationToTerraform, true)(this._masterNodeConfiguration.internalValue),
      offline_survivability_mode: securemeshSiteOfflineSurvivabilityModeToTerraform(this._offlineSurvivabilityMode.internalValue),
      os: securemeshSiteOsToTerraform(this._os.internalValue),
      performance_enhancement_mode: securemeshSitePerformanceEnhancementModeToTerraform(this._performanceEnhancementMode.internalValue),
      sw: securemeshSiteSwToTerraform(this._sw.internalValue),
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
        value: securemeshSiteBlockedServicesToHclTerraform(this._blockedServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteBlockedServicesList",
      },
      bond_device_list: {
        value: securemeshSiteBondDeviceListStructToHclTerraform(this._bondDeviceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteBondDeviceListStructList",
      },
      coordinates: {
        value: securemeshSiteCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteCoordinatesList",
      },
      custom_network_config: {
        value: securemeshSiteCustomNetworkConfigToHclTerraform(this._customNetworkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteCustomNetworkConfigList",
      },
      kubernetes_upgrade_drain: {
        value: securemeshSiteKubernetesUpgradeDrainToHclTerraform(this._kubernetesUpgradeDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteKubernetesUpgradeDrainList",
      },
      log_receiver: {
        value: securemeshSiteLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteLogReceiverList",
      },
      master_node_configuration: {
        value: cdktf.listMapperHcl(securemeshSiteMasterNodeConfigurationToHclTerraform, true)(this._masterNodeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteMasterNodeConfigurationList",
      },
      offline_survivability_mode: {
        value: securemeshSiteOfflineSurvivabilityModeToHclTerraform(this._offlineSurvivabilityMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteOfflineSurvivabilityModeList",
      },
      os: {
        value: securemeshSiteOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteOsList",
      },
      performance_enhancement_mode: {
        value: securemeshSitePerformanceEnhancementModeToHclTerraform(this._performanceEnhancementMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSitePerformanceEnhancementModeList",
      },
      sw: {
        value: securemeshSiteSwToHclTerraform(this._sw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuremeshSiteSwList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
