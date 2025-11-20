// generated from terraform resource schema

import { AwsVpcSiteAdminPassword, 
awsVpcSiteAdminPasswordToTerraform, 
awsVpcSiteAdminPasswordToHclTerraform, 
AwsVpcSiteAdminPasswordOutputReference, 
AwsVpcSiteAwsCred, 
awsVpcSiteAwsCredToTerraform, 
awsVpcSiteAwsCredToHclTerraform, 
AwsVpcSiteAwsCredOutputReference, 
AwsVpcSiteBlockedServices, 
awsVpcSiteBlockedServicesToTerraform, 
awsVpcSiteBlockedServicesToHclTerraform, 
AwsVpcSiteBlockedServicesOutputReference, 
AwsVpcSiteCoordinates, 
awsVpcSiteCoordinatesToTerraform, 
awsVpcSiteCoordinatesToHclTerraform, 
AwsVpcSiteCoordinatesOutputReference, 
AwsVpcSiteCustomDns, 
awsVpcSiteCustomDnsToTerraform, 
awsVpcSiteCustomDnsToHclTerraform, 
AwsVpcSiteCustomDnsOutputReference, 
AwsVpcSiteCustomSecurityGroup, 
awsVpcSiteCustomSecurityGroupToTerraform, 
awsVpcSiteCustomSecurityGroupToHclTerraform, 
AwsVpcSiteCustomSecurityGroupOutputReference, 
AwsVpcSiteDirectConnectEnabled, 
awsVpcSiteDirectConnectEnabledToTerraform, 
awsVpcSiteDirectConnectEnabledToHclTerraform, 
AwsVpcSiteDirectConnectEnabledOutputReference, 
AwsVpcSiteEgressNatGw, 
awsVpcSiteEgressNatGwToTerraform, 
awsVpcSiteEgressNatGwToHclTerraform, 
AwsVpcSiteEgressNatGwOutputReference, 
AwsVpcSiteEgressVirtualPrivateGateway, 
awsVpcSiteEgressVirtualPrivateGatewayToTerraform, 
awsVpcSiteEgressVirtualPrivateGatewayToHclTerraform, 
AwsVpcSiteEgressVirtualPrivateGatewayOutputReference, 
AwsVpcSiteIngressEgressGw, 
awsVpcSiteIngressEgressGwToTerraform, 
awsVpcSiteIngressEgressGwToHclTerraform, 
AwsVpcSiteIngressEgressGwOutputReference, 
AwsVpcSiteIngressGw, 
awsVpcSiteIngressGwToTerraform, 
awsVpcSiteIngressGwToHclTerraform, 
AwsVpcSiteIngressGwOutputReference, 
AwsVpcSiteKubernetesUpgradeDrain, 
awsVpcSiteKubernetesUpgradeDrainToTerraform, 
awsVpcSiteKubernetesUpgradeDrainToHclTerraform, 
AwsVpcSiteKubernetesUpgradeDrainOutputReference, 
AwsVpcSiteLogReceiver, 
awsVpcSiteLogReceiverToTerraform, 
awsVpcSiteLogReceiverToHclTerraform, 
AwsVpcSiteLogReceiverOutputReference, 
AwsVpcSiteOfflineSurvivabilityMode, 
awsVpcSiteOfflineSurvivabilityModeToTerraform, 
awsVpcSiteOfflineSurvivabilityModeToHclTerraform, 
AwsVpcSiteOfflineSurvivabilityModeOutputReference, 
AwsVpcSiteOs, 
awsVpcSiteOsToTerraform, 
awsVpcSiteOsToHclTerraform, 
AwsVpcSiteOsOutputReference, 
AwsVpcSitePrivateConnectivity, 
awsVpcSitePrivateConnectivityToTerraform, 
awsVpcSitePrivateConnectivityToHclTerraform, 
AwsVpcSitePrivateConnectivityOutputReference, 
AwsVpcSiteSw, 
awsVpcSiteSwToTerraform, 
awsVpcSiteSwToHclTerraform, 
AwsVpcSiteSwOutputReference, 
AwsVpcSiteVoltstackCluster, 
awsVpcSiteVoltstackClusterToTerraform, 
awsVpcSiteVoltstackClusterToHclTerraform, 
AwsVpcSiteVoltstackClusterOutputReference, 
AwsVpcSiteVpc, 
awsVpcSiteVpcToTerraform, 
awsVpcSiteVpcToHclTerraform, 
AwsVpcSiteVpcOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AwsVpcSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#address AwsVpcSite#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#annotations AwsVpcSite#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#aws_region AwsVpcSite#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#block_all_services AwsVpcSite#block_all_services}
  */
  readonly blockAllServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#default_blocked_services AwsVpcSite#default_blocked_services}
  */
  readonly defaultBlockedServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#description AwsVpcSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#direct_connect_disabled AwsVpcSite#direct_connect_disabled}
  */
  readonly directConnectDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#disable AwsVpcSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#disable_internet_vip AwsVpcSite#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#disk_size AwsVpcSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#egress_gateway_default AwsVpcSite#egress_gateway_default}
  */
  readonly egressGatewayDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#enable_internet_vip AwsVpcSite#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#f5_orchestrated_routing AwsVpcSite#f5_orchestrated_routing}
  */
  readonly f5OrchestratedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#f5xc_security_group AwsVpcSite#f5xc_security_group}
  */
  readonly f5XcSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#id AwsVpcSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#instance_type AwsVpcSite#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#labels AwsVpcSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#logs_streaming_disabled AwsVpcSite#logs_streaming_disabled}
  */
  readonly logsStreamingDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#manual_routing AwsVpcSite#manual_routing}
  */
  readonly manualRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#name AwsVpcSite#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#namespace AwsVpcSite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#no_worker_nodes AwsVpcSite#no_worker_nodes}
  */
  readonly noWorkerNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#nodes_per_az AwsVpcSite#nodes_per_az}
  */
  readonly nodesPerAz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#ssh_key AwsVpcSite#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#tags AwsVpcSite#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#total_nodes AwsVpcSite#total_nodes}
  */
  readonly totalNodes?: number;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#admin_password AwsVpcSite#admin_password}
  */
  readonly adminPassword?: AwsVpcSiteAdminPassword;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#aws_cred AwsVpcSite#aws_cred}
  */
  readonly awsCred?: AwsVpcSiteAwsCred;
  /**
  * blocked_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#blocked_services AwsVpcSite#blocked_services}
  */
  readonly blockedServices?: AwsVpcSiteBlockedServices;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#coordinates AwsVpcSite#coordinates}
  */
  readonly coordinates?: AwsVpcSiteCoordinates;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#custom_dns AwsVpcSite#custom_dns}
  */
  readonly customDns?: AwsVpcSiteCustomDns;
  /**
  * custom_security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#custom_security_group AwsVpcSite#custom_security_group}
  */
  readonly customSecurityGroup?: AwsVpcSiteCustomSecurityGroup;
  /**
  * direct_connect_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#direct_connect_enabled AwsVpcSite#direct_connect_enabled}
  */
  readonly directConnectEnabled?: AwsVpcSiteDirectConnectEnabled;
  /**
  * egress_nat_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#egress_nat_gw AwsVpcSite#egress_nat_gw}
  */
  readonly egressNatGw?: AwsVpcSiteEgressNatGw;
  /**
  * egress_virtual_private_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#egress_virtual_private_gateway AwsVpcSite#egress_virtual_private_gateway}
  */
  readonly egressVirtualPrivateGateway?: AwsVpcSiteEgressVirtualPrivateGateway;
  /**
  * ingress_egress_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#ingress_egress_gw AwsVpcSite#ingress_egress_gw}
  */
  readonly ingressEgressGw?: AwsVpcSiteIngressEgressGw;
  /**
  * ingress_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#ingress_gw AwsVpcSite#ingress_gw}
  */
  readonly ingressGw?: AwsVpcSiteIngressGw;
  /**
  * kubernetes_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#kubernetes_upgrade_drain AwsVpcSite#kubernetes_upgrade_drain}
  */
  readonly kubernetesUpgradeDrain?: AwsVpcSiteKubernetesUpgradeDrain;
  /**
  * log_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#log_receiver AwsVpcSite#log_receiver}
  */
  readonly logReceiver?: AwsVpcSiteLogReceiver;
  /**
  * offline_survivability_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#offline_survivability_mode AwsVpcSite#offline_survivability_mode}
  */
  readonly offlineSurvivabilityMode?: AwsVpcSiteOfflineSurvivabilityMode;
  /**
  * os block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#os AwsVpcSite#os}
  */
  readonly os?: AwsVpcSiteOs;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#private_connectivity AwsVpcSite#private_connectivity}
  */
  readonly privateConnectivity?: AwsVpcSitePrivateConnectivity;
  /**
  * sw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#sw AwsVpcSite#sw}
  */
  readonly sw?: AwsVpcSiteSw;
  /**
  * voltstack_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#voltstack_cluster AwsVpcSite#voltstack_cluster}
  */
  readonly voltstackCluster?: AwsVpcSiteVoltstackCluster;
  /**
  * vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#vpc AwsVpcSite#vpc}
  */
  readonly vpc?: AwsVpcSiteVpc;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site volterra_aws_vpc_site}
*/
export class AwsVpcSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_aws_vpc_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsVpcSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsVpcSite to import
  * @param importFromId The id of the existing AwsVpcSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsVpcSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_aws_vpc_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/aws_vpc_site volterra_aws_vpc_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsVpcSiteConfig
  */
  public constructor(scope: Construct, id: string, config: AwsVpcSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_aws_vpc_site',
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
    this._annotations = config.annotations;
    this._awsRegion = config.awsRegion;
    this._blockAllServices = config.blockAllServices;
    this._defaultBlockedServices = config.defaultBlockedServices;
    this._description = config.description;
    this._directConnectDisabled = config.directConnectDisabled;
    this._disable = config.disable;
    this._disableInternetVip = config.disableInternetVip;
    this._diskSize = config.diskSize;
    this._egressGatewayDefault = config.egressGatewayDefault;
    this._enableInternetVip = config.enableInternetVip;
    this._f5OrchestratedRouting = config.f5OrchestratedRouting;
    this._f5XcSecurityGroup = config.f5XcSecurityGroup;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._labels = config.labels;
    this._logsStreamingDisabled = config.logsStreamingDisabled;
    this._manualRouting = config.manualRouting;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noWorkerNodes = config.noWorkerNodes;
    this._nodesPerAz = config.nodesPerAz;
    this._sshKey = config.sshKey;
    this._tags = config.tags;
    this._totalNodes = config.totalNodes;
    this._adminPassword.internalValue = config.adminPassword;
    this._awsCred.internalValue = config.awsCred;
    this._blockedServices.internalValue = config.blockedServices;
    this._coordinates.internalValue = config.coordinates;
    this._customDns.internalValue = config.customDns;
    this._customSecurityGroup.internalValue = config.customSecurityGroup;
    this._directConnectEnabled.internalValue = config.directConnectEnabled;
    this._egressNatGw.internalValue = config.egressNatGw;
    this._egressVirtualPrivateGateway.internalValue = config.egressVirtualPrivateGateway;
    this._ingressEgressGw.internalValue = config.ingressEgressGw;
    this._ingressGw.internalValue = config.ingressGw;
    this._kubernetesUpgradeDrain.internalValue = config.kubernetesUpgradeDrain;
    this._logReceiver.internalValue = config.logReceiver;
    this._offlineSurvivabilityMode.internalValue = config.offlineSurvivabilityMode;
    this._os.internalValue = config.os;
    this._privateConnectivity.internalValue = config.privateConnectivity;
    this._sw.internalValue = config.sw;
    this._voltstackCluster.internalValue = config.voltstackCluster;
    this._vpc.internalValue = config.vpc;
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

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
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

  // direct_connect_disabled - computed: false, optional: true, required: false
  private _directConnectDisabled?: boolean | cdktf.IResolvable; 
  public get directConnectDisabled() {
    return this.getBooleanAttribute('direct_connect_disabled');
  }
  public set directConnectDisabled(value: boolean | cdktf.IResolvable) {
    this._directConnectDisabled = value;
  }
  public resetDirectConnectDisabled() {
    this._directConnectDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectDisabledInput() {
    return this._directConnectDisabled;
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

  // disable_internet_vip - computed: false, optional: true, required: false
  private _disableInternetVip?: boolean | cdktf.IResolvable; 
  public get disableInternetVip() {
    return this.getBooleanAttribute('disable_internet_vip');
  }
  public set disableInternetVip(value: boolean | cdktf.IResolvable) {
    this._disableInternetVip = value;
  }
  public resetDisableInternetVip() {
    this._disableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetVipInput() {
    return this._disableInternetVip;
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

  // egress_gateway_default - computed: false, optional: true, required: false
  private _egressGatewayDefault?: boolean | cdktf.IResolvable; 
  public get egressGatewayDefault() {
    return this.getBooleanAttribute('egress_gateway_default');
  }
  public set egressGatewayDefault(value: boolean | cdktf.IResolvable) {
    this._egressGatewayDefault = value;
  }
  public resetEgressGatewayDefault() {
    this._egressGatewayDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGatewayDefaultInput() {
    return this._egressGatewayDefault;
  }

  // enable_internet_vip - computed: false, optional: true, required: false
  private _enableInternetVip?: boolean | cdktf.IResolvable; 
  public get enableInternetVip() {
    return this.getBooleanAttribute('enable_internet_vip');
  }
  public set enableInternetVip(value: boolean | cdktf.IResolvable) {
    this._enableInternetVip = value;
  }
  public resetEnableInternetVip() {
    this._enableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetVipInput() {
    return this._enableInternetVip;
  }

  // f5_orchestrated_routing - computed: false, optional: true, required: false
  private _f5OrchestratedRouting?: boolean | cdktf.IResolvable; 
  public get f5OrchestratedRouting() {
    return this.getBooleanAttribute('f5_orchestrated_routing');
  }
  public set f5OrchestratedRouting(value: boolean | cdktf.IResolvable) {
    this._f5OrchestratedRouting = value;
  }
  public resetF5OrchestratedRouting() {
    this._f5OrchestratedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5OrchestratedRoutingInput() {
    return this._f5OrchestratedRouting;
  }

  // f5xc_security_group - computed: false, optional: true, required: false
  private _f5XcSecurityGroup?: boolean | cdktf.IResolvable; 
  public get f5XcSecurityGroup() {
    return this.getBooleanAttribute('f5xc_security_group');
  }
  public set f5XcSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._f5XcSecurityGroup = value;
  }
  public resetF5XcSecurityGroup() {
    this._f5XcSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5XcSecurityGroupInput() {
    return this._f5XcSecurityGroup;
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

  // manual_routing - computed: false, optional: true, required: false
  private _manualRouting?: boolean | cdktf.IResolvable; 
  public get manualRouting() {
    return this.getBooleanAttribute('manual_routing');
  }
  public set manualRouting(value: boolean | cdktf.IResolvable) {
    this._manualRouting = value;
  }
  public resetManualRouting() {
    this._manualRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRoutingInput() {
    return this._manualRouting;
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
  private _adminPassword = new AwsVpcSiteAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: AwsVpcSiteAdminPassword) {
    this._adminPassword.internalValue = value;
  }
  public resetAdminPassword() {
    this._adminPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword.internalValue;
  }

  // aws_cred - computed: false, optional: true, required: false
  private _awsCred = new AwsVpcSiteAwsCredOutputReference(this, "aws_cred");
  public get awsCred() {
    return this._awsCred;
  }
  public putAwsCred(value: AwsVpcSiteAwsCred) {
    this._awsCred.internalValue = value;
  }
  public resetAwsCred() {
    this._awsCred.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredInput() {
    return this._awsCred.internalValue;
  }

  // blocked_services - computed: false, optional: true, required: false
  private _blockedServices = new AwsVpcSiteBlockedServicesOutputReference(this, "blocked_services");
  public get blockedServices() {
    return this._blockedServices;
  }
  public putBlockedServices(value: AwsVpcSiteBlockedServices) {
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
  private _coordinates = new AwsVpcSiteCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: AwsVpcSiteCoordinates) {
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
  private _customDns = new AwsVpcSiteCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: AwsVpcSiteCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // custom_security_group - computed: false, optional: true, required: false
  private _customSecurityGroup = new AwsVpcSiteCustomSecurityGroupOutputReference(this, "custom_security_group");
  public get customSecurityGroup() {
    return this._customSecurityGroup;
  }
  public putCustomSecurityGroup(value: AwsVpcSiteCustomSecurityGroup) {
    this._customSecurityGroup.internalValue = value;
  }
  public resetCustomSecurityGroup() {
    this._customSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupInput() {
    return this._customSecurityGroup.internalValue;
  }

  // direct_connect_enabled - computed: false, optional: true, required: false
  private _directConnectEnabled = new AwsVpcSiteDirectConnectEnabledOutputReference(this, "direct_connect_enabled");
  public get directConnectEnabled() {
    return this._directConnectEnabled;
  }
  public putDirectConnectEnabled(value: AwsVpcSiteDirectConnectEnabled) {
    this._directConnectEnabled.internalValue = value;
  }
  public resetDirectConnectEnabled() {
    this._directConnectEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectEnabledInput() {
    return this._directConnectEnabled.internalValue;
  }

  // egress_nat_gw - computed: false, optional: true, required: false
  private _egressNatGw = new AwsVpcSiteEgressNatGwOutputReference(this, "egress_nat_gw");
  public get egressNatGw() {
    return this._egressNatGw;
  }
  public putEgressNatGw(value: AwsVpcSiteEgressNatGw) {
    this._egressNatGw.internalValue = value;
  }
  public resetEgressNatGw() {
    this._egressNatGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNatGwInput() {
    return this._egressNatGw.internalValue;
  }

  // egress_virtual_private_gateway - computed: false, optional: true, required: false
  private _egressVirtualPrivateGateway = new AwsVpcSiteEgressVirtualPrivateGatewayOutputReference(this, "egress_virtual_private_gateway");
  public get egressVirtualPrivateGateway() {
    return this._egressVirtualPrivateGateway;
  }
  public putEgressVirtualPrivateGateway(value: AwsVpcSiteEgressVirtualPrivateGateway) {
    this._egressVirtualPrivateGateway.internalValue = value;
  }
  public resetEgressVirtualPrivateGateway() {
    this._egressVirtualPrivateGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressVirtualPrivateGatewayInput() {
    return this._egressVirtualPrivateGateway.internalValue;
  }

  // ingress_egress_gw - computed: false, optional: true, required: false
  private _ingressEgressGw = new AwsVpcSiteIngressEgressGwOutputReference(this, "ingress_egress_gw");
  public get ingressEgressGw() {
    return this._ingressEgressGw;
  }
  public putIngressEgressGw(value: AwsVpcSiteIngressEgressGw) {
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
  private _ingressGw = new AwsVpcSiteIngressGwOutputReference(this, "ingress_gw");
  public get ingressGw() {
    return this._ingressGw;
  }
  public putIngressGw(value: AwsVpcSiteIngressGw) {
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
  private _kubernetesUpgradeDrain = new AwsVpcSiteKubernetesUpgradeDrainOutputReference(this, "kubernetes_upgrade_drain");
  public get kubernetesUpgradeDrain() {
    return this._kubernetesUpgradeDrain;
  }
  public putKubernetesUpgradeDrain(value: AwsVpcSiteKubernetesUpgradeDrain) {
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
  private _logReceiver = new AwsVpcSiteLogReceiverOutputReference(this, "log_receiver");
  public get logReceiver() {
    return this._logReceiver;
  }
  public putLogReceiver(value: AwsVpcSiteLogReceiver) {
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
  private _offlineSurvivabilityMode = new AwsVpcSiteOfflineSurvivabilityModeOutputReference(this, "offline_survivability_mode");
  public get offlineSurvivabilityMode() {
    return this._offlineSurvivabilityMode;
  }
  public putOfflineSurvivabilityMode(value: AwsVpcSiteOfflineSurvivabilityMode) {
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
  private _os = new AwsVpcSiteOsOutputReference(this, "os");
  public get os() {
    return this._os;
  }
  public putOs(value: AwsVpcSiteOs) {
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
  private _privateConnectivity = new AwsVpcSitePrivateConnectivityOutputReference(this, "private_connectivity");
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: AwsVpcSitePrivateConnectivity) {
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
  private _sw = new AwsVpcSiteSwOutputReference(this, "sw");
  public get sw() {
    return this._sw;
  }
  public putSw(value: AwsVpcSiteSw) {
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
  private _voltstackCluster = new AwsVpcSiteVoltstackClusterOutputReference(this, "voltstack_cluster");
  public get voltstackCluster() {
    return this._voltstackCluster;
  }
  public putVoltstackCluster(value: AwsVpcSiteVoltstackCluster) {
    this._voltstackCluster.internalValue = value;
  }
  public resetVoltstackCluster() {
    this._voltstackCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voltstackClusterInput() {
    return this._voltstackCluster.internalValue;
  }

  // vpc - computed: false, optional: true, required: false
  private _vpc = new AwsVpcSiteVpcOutputReference(this, "vpc");
  public get vpc() {
    return this._vpc;
  }
  public putVpc(value: AwsVpcSiteVpc) {
    this._vpc.internalValue = value;
  }
  public resetVpc() {
    this._vpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      block_all_services: cdktf.booleanToTerraform(this._blockAllServices),
      default_blocked_services: cdktf.booleanToTerraform(this._defaultBlockedServices),
      description: cdktf.stringToTerraform(this._description),
      direct_connect_disabled: cdktf.booleanToTerraform(this._directConnectDisabled),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_internet_vip: cdktf.booleanToTerraform(this._disableInternetVip),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      egress_gateway_default: cdktf.booleanToTerraform(this._egressGatewayDefault),
      enable_internet_vip: cdktf.booleanToTerraform(this._enableInternetVip),
      f5_orchestrated_routing: cdktf.booleanToTerraform(this._f5OrchestratedRouting),
      f5xc_security_group: cdktf.booleanToTerraform(this._f5XcSecurityGroup),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      logs_streaming_disabled: cdktf.booleanToTerraform(this._logsStreamingDisabled),
      manual_routing: cdktf.booleanToTerraform(this._manualRouting),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_worker_nodes: cdktf.booleanToTerraform(this._noWorkerNodes),
      nodes_per_az: cdktf.numberToTerraform(this._nodesPerAz),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      total_nodes: cdktf.numberToTerraform(this._totalNodes),
      admin_password: awsVpcSiteAdminPasswordToTerraform(this._adminPassword.internalValue),
      aws_cred: awsVpcSiteAwsCredToTerraform(this._awsCred.internalValue),
      blocked_services: awsVpcSiteBlockedServicesToTerraform(this._blockedServices.internalValue),
      coordinates: awsVpcSiteCoordinatesToTerraform(this._coordinates.internalValue),
      custom_dns: awsVpcSiteCustomDnsToTerraform(this._customDns.internalValue),
      custom_security_group: awsVpcSiteCustomSecurityGroupToTerraform(this._customSecurityGroup.internalValue),
      direct_connect_enabled: awsVpcSiteDirectConnectEnabledToTerraform(this._directConnectEnabled.internalValue),
      egress_nat_gw: awsVpcSiteEgressNatGwToTerraform(this._egressNatGw.internalValue),
      egress_virtual_private_gateway: awsVpcSiteEgressVirtualPrivateGatewayToTerraform(this._egressVirtualPrivateGateway.internalValue),
      ingress_egress_gw: awsVpcSiteIngressEgressGwToTerraform(this._ingressEgressGw.internalValue),
      ingress_gw: awsVpcSiteIngressGwToTerraform(this._ingressGw.internalValue),
      kubernetes_upgrade_drain: awsVpcSiteKubernetesUpgradeDrainToTerraform(this._kubernetesUpgradeDrain.internalValue),
      log_receiver: awsVpcSiteLogReceiverToTerraform(this._logReceiver.internalValue),
      offline_survivability_mode: awsVpcSiteOfflineSurvivabilityModeToTerraform(this._offlineSurvivabilityMode.internalValue),
      os: awsVpcSiteOsToTerraform(this._os.internalValue),
      private_connectivity: awsVpcSitePrivateConnectivityToTerraform(this._privateConnectivity.internalValue),
      sw: awsVpcSiteSwToTerraform(this._sw.internalValue),
      voltstack_cluster: awsVpcSiteVoltstackClusterToTerraform(this._voltstackCluster.internalValue),
      vpc: awsVpcSiteVpcToTerraform(this._vpc.internalValue),
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
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
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
      direct_connect_disabled: {
        value: cdktf.booleanToHclTerraform(this._directConnectDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_internet_vip: {
        value: cdktf.booleanToHclTerraform(this._disableInternetVip),
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
      egress_gateway_default: {
        value: cdktf.booleanToHclTerraform(this._egressGatewayDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_internet_vip: {
        value: cdktf.booleanToHclTerraform(this._enableInternetVip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      f5_orchestrated_routing: {
        value: cdktf.booleanToHclTerraform(this._f5OrchestratedRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      f5xc_security_group: {
        value: cdktf.booleanToHclTerraform(this._f5XcSecurityGroup),
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
      manual_routing: {
        value: cdktf.booleanToHclTerraform(this._manualRouting),
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
        value: awsVpcSiteAdminPasswordToHclTerraform(this._adminPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteAdminPasswordList",
      },
      aws_cred: {
        value: awsVpcSiteAwsCredToHclTerraform(this._awsCred.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteAwsCredList",
      },
      blocked_services: {
        value: awsVpcSiteBlockedServicesToHclTerraform(this._blockedServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteBlockedServicesList",
      },
      coordinates: {
        value: awsVpcSiteCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteCoordinatesList",
      },
      custom_dns: {
        value: awsVpcSiteCustomDnsToHclTerraform(this._customDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteCustomDnsList",
      },
      custom_security_group: {
        value: awsVpcSiteCustomSecurityGroupToHclTerraform(this._customSecurityGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteCustomSecurityGroupList",
      },
      direct_connect_enabled: {
        value: awsVpcSiteDirectConnectEnabledToHclTerraform(this._directConnectEnabled.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteDirectConnectEnabledList",
      },
      egress_nat_gw: {
        value: awsVpcSiteEgressNatGwToHclTerraform(this._egressNatGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteEgressNatGwList",
      },
      egress_virtual_private_gateway: {
        value: awsVpcSiteEgressVirtualPrivateGatewayToHclTerraform(this._egressVirtualPrivateGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteEgressVirtualPrivateGatewayList",
      },
      ingress_egress_gw: {
        value: awsVpcSiteIngressEgressGwToHclTerraform(this._ingressEgressGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteIngressEgressGwList",
      },
      ingress_gw: {
        value: awsVpcSiteIngressGwToHclTerraform(this._ingressGw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteIngressGwList",
      },
      kubernetes_upgrade_drain: {
        value: awsVpcSiteKubernetesUpgradeDrainToHclTerraform(this._kubernetesUpgradeDrain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteKubernetesUpgradeDrainList",
      },
      log_receiver: {
        value: awsVpcSiteLogReceiverToHclTerraform(this._logReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteLogReceiverList",
      },
      offline_survivability_mode: {
        value: awsVpcSiteOfflineSurvivabilityModeToHclTerraform(this._offlineSurvivabilityMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteOfflineSurvivabilityModeList",
      },
      os: {
        value: awsVpcSiteOsToHclTerraform(this._os.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteOsList",
      },
      private_connectivity: {
        value: awsVpcSitePrivateConnectivityToHclTerraform(this._privateConnectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSitePrivateConnectivityList",
      },
      sw: {
        value: awsVpcSiteSwToHclTerraform(this._sw.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteSwList",
      },
      voltstack_cluster: {
        value: awsVpcSiteVoltstackClusterToHclTerraform(this._voltstackCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteVoltstackClusterList",
      },
      vpc: {
        value: awsVpcSiteVpcToHclTerraform(this._vpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsVpcSiteVpcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
