// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDcnmServicePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#attached_fabric DataDcnmServicePolicy#attached_fabric}
  */
  readonly attachedFabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#deploy DataDcnmServicePolicy#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#dest_network DataDcnmServicePolicy#dest_network}
  */
  readonly destNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#dest_port DataDcnmServicePolicy#dest_port}
  */
  readonly destPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#dest_vrf_name DataDcnmServicePolicy#dest_vrf_name}
  */
  readonly destVrfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#fwd_direction DataDcnmServicePolicy#fwd_direction}
  */
  readonly fwdDirection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#id DataDcnmServicePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#next_hop_action DataDcnmServicePolicy#next_hop_action}
  */
  readonly nextHopAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#next_hop_ip DataDcnmServicePolicy#next_hop_ip}
  */
  readonly nextHopIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#peering_name DataDcnmServicePolicy#peering_name}
  */
  readonly peeringName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#policy_name DataDcnmServicePolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#policy_template_name DataDcnmServicePolicy#policy_template_name}
  */
  readonly policyTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#protocol DataDcnmServicePolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#reverse_enabled DataDcnmServicePolicy#reverse_enabled}
  */
  readonly reverseEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#reverse_next_hop_ip DataDcnmServicePolicy#reverse_next_hop_ip}
  */
  readonly reverseNextHopIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#route_map_action DataDcnmServicePolicy#route_map_action}
  */
  readonly routeMapAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#service_fabric DataDcnmServicePolicy#service_fabric}
  */
  readonly serviceFabric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#service_node_name DataDcnmServicePolicy#service_node_name}
  */
  readonly serviceNodeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#service_node_type DataDcnmServicePolicy#service_node_type}
  */
  readonly serviceNodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#source_network DataDcnmServicePolicy#source_network}
  */
  readonly sourceNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#source_vrf_name DataDcnmServicePolicy#source_vrf_name}
  */
  readonly sourceVrfName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#src_port DataDcnmServicePolicy#src_port}
  */
  readonly srcPort?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy dcnm_service_policy}
*/
export class DataDcnmServicePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_service_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDcnmServicePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDcnmServicePolicy to import
  * @param importFromId The id of the existing DataDcnmServicePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDcnmServicePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_service_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/service_policy dcnm_service_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDcnmServicePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDcnmServicePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_service_policy',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachedFabric = config.attachedFabric;
    this._deploy = config.deploy;
    this._destNetwork = config.destNetwork;
    this._destPort = config.destPort;
    this._destVrfName = config.destVrfName;
    this._fwdDirection = config.fwdDirection;
    this._id = config.id;
    this._nextHopAction = config.nextHopAction;
    this._nextHopIp = config.nextHopIp;
    this._peeringName = config.peeringName;
    this._policyName = config.policyName;
    this._policyTemplateName = config.policyTemplateName;
    this._protocol = config.protocol;
    this._reverseEnabled = config.reverseEnabled;
    this._reverseNextHopIp = config.reverseNextHopIp;
    this._routeMapAction = config.routeMapAction;
    this._serviceFabric = config.serviceFabric;
    this._serviceNodeName = config.serviceNodeName;
    this._serviceNodeType = config.serviceNodeType;
    this._sourceNetwork = config.sourceNetwork;
    this._sourceVrfName = config.sourceVrfName;
    this._srcPort = config.srcPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_fabric - computed: false, optional: false, required: true
  private _attachedFabric?: string; 
  public get attachedFabric() {
    return this.getStringAttribute('attached_fabric');
  }
  public set attachedFabric(value: string) {
    this._attachedFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedFabricInput() {
    return this._attachedFabric;
  }

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // dest_network - computed: true, optional: true, required: false
  private _destNetwork?: string; 
  public get destNetwork() {
    return this.getStringAttribute('dest_network');
  }
  public set destNetwork(value: string) {
    this._destNetwork = value;
  }
  public resetDestNetwork() {
    this._destNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNetworkInput() {
    return this._destNetwork;
  }

  // dest_port - computed: true, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_vrf_name - computed: true, optional: true, required: false
  private _destVrfName?: string; 
  public get destVrfName() {
    return this.getStringAttribute('dest_vrf_name');
  }
  public set destVrfName(value: string) {
    this._destVrfName = value;
  }
  public resetDestVrfName() {
    this._destVrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destVrfNameInput() {
    return this._destVrfName;
  }

  // fwd_direction - computed: true, optional: true, required: false
  private _fwdDirection?: boolean | cdktf.IResolvable; 
  public get fwdDirection() {
    return this.getBooleanAttribute('fwd_direction');
  }
  public set fwdDirection(value: boolean | cdktf.IResolvable) {
    this._fwdDirection = value;
  }
  public resetFwdDirection() {
    this._fwdDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdDirectionInput() {
    return this._fwdDirection;
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

  // next_hop_action - computed: true, optional: true, required: false
  private _nextHopAction?: string; 
  public get nextHopAction() {
    return this.getStringAttribute('next_hop_action');
  }
  public set nextHopAction(value: string) {
    this._nextHopAction = value;
  }
  public resetNextHopAction() {
    this._nextHopAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopActionInput() {
    return this._nextHopAction;
  }

  // next_hop_ip - computed: true, optional: true, required: false
  private _nextHopIp?: string; 
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }
  public set nextHopIp(value: string) {
    this._nextHopIp = value;
  }
  public resetNextHopIp() {
    this._nextHopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpInput() {
    return this._nextHopIp;
  }

  // peering_name - computed: true, optional: true, required: false
  private _peeringName?: string; 
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }
  public set peeringName(value: string) {
    this._peeringName = value;
  }
  public resetPeeringName() {
    this._peeringName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringNameInput() {
    return this._peeringName;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_template_name - computed: true, optional: true, required: false
  private _policyTemplateName?: string; 
  public get policyTemplateName() {
    return this.getStringAttribute('policy_template_name');
  }
  public set policyTemplateName(value: string) {
    this._policyTemplateName = value;
  }
  public resetPolicyTemplateName() {
    this._policyTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTemplateNameInput() {
    return this._policyTemplateName;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // reverse_enabled - computed: true, optional: true, required: false
  private _reverseEnabled?: boolean | cdktf.IResolvable; 
  public get reverseEnabled() {
    return this.getBooleanAttribute('reverse_enabled');
  }
  public set reverseEnabled(value: boolean | cdktf.IResolvable) {
    this._reverseEnabled = value;
  }
  public resetReverseEnabled() {
    this._reverseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseEnabledInput() {
    return this._reverseEnabled;
  }

  // reverse_next_hop_ip - computed: true, optional: true, required: false
  private _reverseNextHopIp?: string; 
  public get reverseNextHopIp() {
    return this.getStringAttribute('reverse_next_hop_ip');
  }
  public set reverseNextHopIp(value: string) {
    this._reverseNextHopIp = value;
  }
  public resetReverseNextHopIp() {
    this._reverseNextHopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseNextHopIpInput() {
    return this._reverseNextHopIp;
  }

  // route_map_action - computed: true, optional: true, required: false
  private _routeMapAction?: string; 
  public get routeMapAction() {
    return this.getStringAttribute('route_map_action');
  }
  public set routeMapAction(value: string) {
    this._routeMapAction = value;
  }
  public resetRouteMapAction() {
    this._routeMapAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapActionInput() {
    return this._routeMapAction;
  }

  // service_fabric - computed: false, optional: false, required: true
  private _serviceFabric?: string; 
  public get serviceFabric() {
    return this.getStringAttribute('service_fabric');
  }
  public set serviceFabric(value: string) {
    this._serviceFabric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceFabricInput() {
    return this._serviceFabric;
  }

  // service_node_name - computed: false, optional: false, required: true
  private _serviceNodeName?: string; 
  public get serviceNodeName() {
    return this.getStringAttribute('service_node_name');
  }
  public set serviceNodeName(value: string) {
    this._serviceNodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeNameInput() {
    return this._serviceNodeName;
  }

  // service_node_type - computed: true, optional: true, required: false
  private _serviceNodeType?: string; 
  public get serviceNodeType() {
    return this.getStringAttribute('service_node_type');
  }
  public set serviceNodeType(value: string) {
    this._serviceNodeType = value;
  }
  public resetServiceNodeType() {
    this._serviceNodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeTypeInput() {
    return this._serviceNodeType;
  }

  // source_network - computed: true, optional: true, required: false
  private _sourceNetwork?: string; 
  public get sourceNetwork() {
    return this.getStringAttribute('source_network');
  }
  public set sourceNetwork(value: string) {
    this._sourceNetwork = value;
  }
  public resetSourceNetwork() {
    this._sourceNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNetworkInput() {
    return this._sourceNetwork;
  }

  // source_vrf_name - computed: true, optional: true, required: false
  private _sourceVrfName?: string; 
  public get sourceVrfName() {
    return this.getStringAttribute('source_vrf_name');
  }
  public set sourceVrfName(value: string) {
    this._sourceVrfName = value;
  }
  public resetSourceVrfName() {
    this._sourceVrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVrfNameInput() {
    return this._sourceVrfName;
  }

  // src_port - computed: true, optional: true, required: false
  private _srcPort?: string; 
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }
  public set srcPort(value: string) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attached_fabric: cdktf.stringToTerraform(this._attachedFabric),
      deploy: cdktf.booleanToTerraform(this._deploy),
      dest_network: cdktf.stringToTerraform(this._destNetwork),
      dest_port: cdktf.stringToTerraform(this._destPort),
      dest_vrf_name: cdktf.stringToTerraform(this._destVrfName),
      fwd_direction: cdktf.booleanToTerraform(this._fwdDirection),
      id: cdktf.stringToTerraform(this._id),
      next_hop_action: cdktf.stringToTerraform(this._nextHopAction),
      next_hop_ip: cdktf.stringToTerraform(this._nextHopIp),
      peering_name: cdktf.stringToTerraform(this._peeringName),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_template_name: cdktf.stringToTerraform(this._policyTemplateName),
      protocol: cdktf.stringToTerraform(this._protocol),
      reverse_enabled: cdktf.booleanToTerraform(this._reverseEnabled),
      reverse_next_hop_ip: cdktf.stringToTerraform(this._reverseNextHopIp),
      route_map_action: cdktf.stringToTerraform(this._routeMapAction),
      service_fabric: cdktf.stringToTerraform(this._serviceFabric),
      service_node_name: cdktf.stringToTerraform(this._serviceNodeName),
      service_node_type: cdktf.stringToTerraform(this._serviceNodeType),
      source_network: cdktf.stringToTerraform(this._sourceNetwork),
      source_vrf_name: cdktf.stringToTerraform(this._sourceVrfName),
      src_port: cdktf.stringToTerraform(this._srcPort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attached_fabric: {
        value: cdktf.stringToHclTerraform(this._attachedFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dest_network: {
        value: cdktf.stringToHclTerraform(this._destNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port: {
        value: cdktf.stringToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_vrf_name: {
        value: cdktf.stringToHclTerraform(this._destVrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwd_direction: {
        value: cdktf.booleanToHclTerraform(this._fwdDirection),
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
      next_hop_action: {
        value: cdktf.stringToHclTerraform(this._nextHopAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_ip: {
        value: cdktf.stringToHclTerraform(this._nextHopIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering_name: {
        value: cdktf.stringToHclTerraform(this._peeringName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_template_name: {
        value: cdktf.stringToHclTerraform(this._policyTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reverse_enabled: {
        value: cdktf.booleanToHclTerraform(this._reverseEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reverse_next_hop_ip: {
        value: cdktf.stringToHclTerraform(this._reverseNextHopIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map_action: {
        value: cdktf.stringToHclTerraform(this._routeMapAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_fabric: {
        value: cdktf.stringToHclTerraform(this._serviceFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_node_name: {
        value: cdktf.stringToHclTerraform(this._serviceNodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_node_type: {
        value: cdktf.stringToHclTerraform(this._serviceNodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_network: {
        value: cdktf.stringToHclTerraform(this._sourceNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vrf_name: {
        value: cdktf.stringToHclTerraform(this._sourceVrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.stringToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
