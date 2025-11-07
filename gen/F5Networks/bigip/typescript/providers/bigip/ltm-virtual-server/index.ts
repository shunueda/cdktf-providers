// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#client_profiles LtmVirtualServer#client_profiles}
  */
  readonly clientProfiles?: string[];
  /**
  * Specifies the maximum number of connections allowed for the virtual server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#connection_limit LtmVirtualServer#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#default_persistence_profile LtmVirtualServer#default_persistence_profile}
  */
  readonly defaultPersistenceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#description LtmVirtualServer#description}
  */
  readonly description?: string;
  /**
  * Specifies destination IP address information to which the virtual server sends traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#destination LtmVirtualServer#destination}
  */
  readonly destination?: string;
  /**
  * Fallback persistence profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#fallback_persistence_profile LtmVirtualServer#fallback_persistence_profile}
  */
  readonly fallbackPersistenceProfile?: string;
  /**
  * Applies the specified AFM policy to the virtual in an enforcing way,when creating a new virtual, if this parameter is not specified, the enforced is disabled.this should be in full path ex: `/Common/afm-test-policy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#firewall_enforced_policy LtmVirtualServer#firewall_enforced_policy}
  */
  readonly firewallEnforcedPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#id LtmVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies a network protocol name you want the system to use to direct traffic on this virtual server. The default is TCP. The Protocol setting is not available when you select Performance (HTTP) as the Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#ip_protocol LtmVirtualServer#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#irules LtmVirtualServer#irules}
  */
  readonly irules?: string[];
  /**
  * subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#mask LtmVirtualServer#mask}
  */
  readonly mask?: string;
  /**
  * Name of the virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#name LtmVirtualServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#per_flow_request_access_policy LtmVirtualServer#per_flow_request_access_policy}
  */
  readonly perFlowRequestAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#persistence_profiles LtmVirtualServer#persistence_profiles}
  */
  readonly persistenceProfiles?: string[];
  /**
  * Specifies the policies for the virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#policies LtmVirtualServer#policies}
  */
  readonly policies?: string[];
  /**
  * Default pool for this virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#pool LtmVirtualServer#pool}
  */
  readonly pool?: string;
  /**
  * Listen port for the virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#port LtmVirtualServer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#profiles LtmVirtualServer#profiles}
  */
  readonly profiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#security_log_profiles LtmVirtualServer#security_log_profiles}
  */
  readonly securityLogProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#server_profiles LtmVirtualServer#server_profiles}
  */
  readonly serverProfiles?: string[];
  /**
  * Name of the snatpool to use. Requires source_address_translation to be set to 'snat'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#snatpool LtmVirtualServer#snatpool}
  */
  readonly snatpool?: string;
  /**
  * Source IP and mask for the virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#source LtmVirtualServer#source}
  */
  readonly source?: string;
  /**
  * none, automap, snat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#source_address_translation LtmVirtualServer#source_address_translation}
  */
  readonly sourceAddressTranslation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#source_port LtmVirtualServer#source_port}
  */
  readonly sourcePort?: string;
  /**
  * Specifies whether the virtual server and its resources are available for load balancing. The default is Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#state LtmVirtualServer#state}
  */
  readonly state?: string;
  /**
  * Specifies destination traffic matching information to which the virtual server sends traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#trafficmatching_criteria LtmVirtualServer#trafficmatching_criteria}
  */
  readonly trafficmatchingCriteria?: string;
  /**
  * Specifies, when checked (enabled), that the system translates the address of the virtual server. When cleared (disabled), specifies that the system uses the address without translation. This option is useful when the system is load balancing devices that have the same IP address. The default is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#translate_address LtmVirtualServer#translate_address}
  */
  readonly translateAddress?: string;
  /**
  * Specifies, when checked (enabled), that the system translates the port of the virtual server. When cleared (disabled), specifies that the system uses the port without translation. Turning off port translation for a virtual server is useful if you want to use the virtual server to load balance connections to any service. The default is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#translate_port LtmVirtualServer#translate_port}
  */
  readonly translatePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#vlans LtmVirtualServer#vlans}
  */
  readonly vlans?: string[];
  /**
  * Enables the virtual server on the VLANs specified by the VLANs option. By default it is set to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#vlans_enabled LtmVirtualServer#vlans_enabled}
  */
  readonly vlansEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server bigip_ltm_virtual_server}
*/
export class LtmVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmVirtualServer to import
  * @param importFromId The id of the existing LtmVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_server bigip_ltm_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: LtmVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientProfiles = config.clientProfiles;
    this._connectionLimit = config.connectionLimit;
    this._defaultPersistenceProfile = config.defaultPersistenceProfile;
    this._description = config.description;
    this._destination = config.destination;
    this._fallbackPersistenceProfile = config.fallbackPersistenceProfile;
    this._firewallEnforcedPolicy = config.firewallEnforcedPolicy;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._irules = config.irules;
    this._mask = config.mask;
    this._name = config.name;
    this._perFlowRequestAccessPolicy = config.perFlowRequestAccessPolicy;
    this._persistenceProfiles = config.persistenceProfiles;
    this._policies = config.policies;
    this._pool = config.pool;
    this._port = config.port;
    this._profiles = config.profiles;
    this._securityLogProfiles = config.securityLogProfiles;
    this._serverProfiles = config.serverProfiles;
    this._snatpool = config.snatpool;
    this._source = config.source;
    this._sourceAddressTranslation = config.sourceAddressTranslation;
    this._sourcePort = config.sourcePort;
    this._state = config.state;
    this._trafficmatchingCriteria = config.trafficmatchingCriteria;
    this._translateAddress = config.translateAddress;
    this._translatePort = config.translatePort;
    this._vlans = config.vlans;
    this._vlansEnabled = config.vlansEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_profiles - computed: false, optional: true, required: false
  private _clientProfiles?: string[]; 
  public get clientProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('client_profiles'));
  }
  public set clientProfiles(value: string[]) {
    this._clientProfiles = value;
  }
  public resetClientProfiles() {
    this._clientProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProfilesInput() {
    return this._clientProfiles;
  }

  // connection_limit - computed: true, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // default_persistence_profile - computed: true, optional: true, required: false
  private _defaultPersistenceProfile?: string; 
  public get defaultPersistenceProfile() {
    return this.getStringAttribute('default_persistence_profile');
  }
  public set defaultPersistenceProfile(value: string) {
    this._defaultPersistenceProfile = value;
  }
  public resetDefaultPersistenceProfile() {
    this._defaultPersistenceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPersistenceProfileInput() {
    return this._defaultPersistenceProfile;
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

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // fallback_persistence_profile - computed: true, optional: true, required: false
  private _fallbackPersistenceProfile?: string; 
  public get fallbackPersistenceProfile() {
    return this.getStringAttribute('fallback_persistence_profile');
  }
  public set fallbackPersistenceProfile(value: string) {
    this._fallbackPersistenceProfile = value;
  }
  public resetFallbackPersistenceProfile() {
    this._fallbackPersistenceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPersistenceProfileInput() {
    return this._fallbackPersistenceProfile;
  }

  // firewall_enforced_policy - computed: true, optional: true, required: false
  private _firewallEnforcedPolicy?: string; 
  public get firewallEnforcedPolicy() {
    return this.getStringAttribute('firewall_enforced_policy');
  }
  public set firewallEnforcedPolicy(value: string) {
    this._firewallEnforcedPolicy = value;
  }
  public resetFirewallEnforcedPolicy() {
    this._firewallEnforcedPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallEnforcedPolicyInput() {
    return this._firewallEnforcedPolicy;
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

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // irules - computed: false, optional: true, required: false
  private _irules?: string[]; 
  public get irules() {
    return this.getListAttribute('irules');
  }
  public set irules(value: string[]) {
    this._irules = value;
  }
  public resetIrules() {
    this._irules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get irulesInput() {
    return this._irules;
  }

  // mask - computed: true, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
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

  // per_flow_request_access_policy - computed: true, optional: true, required: false
  private _perFlowRequestAccessPolicy?: string; 
  public get perFlowRequestAccessPolicy() {
    return this.getStringAttribute('per_flow_request_access_policy');
  }
  public set perFlowRequestAccessPolicy(value: string) {
    this._perFlowRequestAccessPolicy = value;
  }
  public resetPerFlowRequestAccessPolicy() {
    this._perFlowRequestAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perFlowRequestAccessPolicyInput() {
    return this._perFlowRequestAccessPolicy;
  }

  // persistence_profiles - computed: false, optional: true, required: false
  private _persistenceProfiles?: string[]; 
  public get persistenceProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('persistence_profiles'));
  }
  public set persistenceProfiles(value: string[]) {
    this._persistenceProfiles = value;
  }
  public resetPersistenceProfiles() {
    this._persistenceProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfilesInput() {
    return this._persistenceProfiles;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // profiles - computed: true, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return cdktf.Fn.tolist(this.getListAttribute('profiles'));
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // security_log_profiles - computed: false, optional: true, required: false
  private _securityLogProfiles?: string[]; 
  public get securityLogProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('security_log_profiles'));
  }
  public set securityLogProfiles(value: string[]) {
    this._securityLogProfiles = value;
  }
  public resetSecurityLogProfiles() {
    this._securityLogProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityLogProfilesInput() {
    return this._securityLogProfiles;
  }

  // server_profiles - computed: false, optional: true, required: false
  private _serverProfiles?: string[]; 
  public get serverProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('server_profiles'));
  }
  public set serverProfiles(value: string[]) {
    this._serverProfiles = value;
  }
  public resetServerProfiles() {
    this._serverProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProfilesInput() {
    return this._serverProfiles;
  }

  // snatpool - computed: true, optional: true, required: false
  private _snatpool?: string; 
  public get snatpool() {
    return this.getStringAttribute('snatpool');
  }
  public set snatpool(value: string) {
    this._snatpool = value;
  }
  public resetSnatpool() {
    this._snatpool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatpoolInput() {
    return this._snatpool;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_address_translation - computed: true, optional: true, required: false
  private _sourceAddressTranslation?: string; 
  public get sourceAddressTranslation() {
    return this.getStringAttribute('source_address_translation');
  }
  public set sourceAddressTranslation(value: string) {
    this._sourceAddressTranslation = value;
  }
  public resetSourceAddressTranslation() {
    this._sourceAddressTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressTranslationInput() {
    return this._sourceAddressTranslation;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // trafficmatching_criteria - computed: true, optional: true, required: false
  private _trafficmatchingCriteria?: string; 
  public get trafficmatchingCriteria() {
    return this.getStringAttribute('trafficmatching_criteria');
  }
  public set trafficmatchingCriteria(value: string) {
    this._trafficmatchingCriteria = value;
  }
  public resetTrafficmatchingCriteria() {
    this._trafficmatchingCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficmatchingCriteriaInput() {
    return this._trafficmatchingCriteria;
  }

  // translate_address - computed: false, optional: true, required: false
  private _translateAddress?: string; 
  public get translateAddress() {
    return this.getStringAttribute('translate_address');
  }
  public set translateAddress(value: string) {
    this._translateAddress = value;
  }
  public resetTranslateAddress() {
    this._translateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateAddressInput() {
    return this._translateAddress;
  }

  // translate_port - computed: false, optional: true, required: false
  private _translatePort?: string; 
  public get translatePort() {
    return this.getStringAttribute('translate_port');
  }
  public set translatePort(value: string) {
    this._translatePort = value;
  }
  public resetTranslatePort() {
    this._translatePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatePortInput() {
    return this._translatePort;
  }

  // vlans - computed: false, optional: true, required: false
  private _vlans?: string[]; 
  public get vlans() {
    return cdktf.Fn.tolist(this.getListAttribute('vlans'));
  }
  public set vlans(value: string[]) {
    this._vlans = value;
  }
  public resetVlans() {
    this._vlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans;
  }

  // vlans_enabled - computed: false, optional: true, required: false
  private _vlansEnabled?: boolean | cdktf.IResolvable; 
  public get vlansEnabled() {
    return this.getBooleanAttribute('vlans_enabled');
  }
  public set vlansEnabled(value: boolean | cdktf.IResolvable) {
    this._vlansEnabled = value;
  }
  public resetVlansEnabled() {
    this._vlansEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansEnabledInput() {
    return this._vlansEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientProfiles),
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      default_persistence_profile: cdktf.stringToTerraform(this._defaultPersistenceProfile),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.stringToTerraform(this._destination),
      fallback_persistence_profile: cdktf.stringToTerraform(this._fallbackPersistenceProfile),
      firewall_enforced_policy: cdktf.stringToTerraform(this._firewallEnforcedPolicy),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      irules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._irules),
      mask: cdktf.stringToTerraform(this._mask),
      name: cdktf.stringToTerraform(this._name),
      per_flow_request_access_policy: cdktf.stringToTerraform(this._perFlowRequestAccessPolicy),
      persistence_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._persistenceProfiles),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      pool: cdktf.stringToTerraform(this._pool),
      port: cdktf.numberToTerraform(this._port),
      profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profiles),
      security_log_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityLogProfiles),
      server_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverProfiles),
      snatpool: cdktf.stringToTerraform(this._snatpool),
      source: cdktf.stringToTerraform(this._source),
      source_address_translation: cdktf.stringToTerraform(this._sourceAddressTranslation),
      source_port: cdktf.stringToTerraform(this._sourcePort),
      state: cdktf.stringToTerraform(this._state),
      trafficmatching_criteria: cdktf.stringToTerraform(this._trafficmatchingCriteria),
      translate_address: cdktf.stringToTerraform(this._translateAddress),
      translate_port: cdktf.stringToTerraform(this._translatePort),
      vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlans),
      vlans_enabled: cdktf.booleanToTerraform(this._vlansEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_limit: {
        value: cdktf.numberToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_persistence_profile: {
        value: cdktf.stringToHclTerraform(this._defaultPersistenceProfile),
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
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_persistence_profile: {
        value: cdktf.stringToHclTerraform(this._fallbackPersistenceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_enforced_policy: {
        value: cdktf.stringToHclTerraform(this._firewallEnforcedPolicy),
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
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      irules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._irules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mask: {
        value: cdktf.stringToHclTerraform(this._mask),
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
      per_flow_request_access_policy: {
        value: cdktf.stringToHclTerraform(this._perFlowRequestAccessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._persistenceProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_log_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityLogProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      snatpool: {
        value: cdktf.stringToHclTerraform(this._snatpool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_address_translation: {
        value: cdktf.stringToHclTerraform(this._sourceAddressTranslation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trafficmatching_criteria: {
        value: cdktf.stringToHclTerraform(this._trafficmatchingCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translate_address: {
        value: cdktf.stringToHclTerraform(this._translateAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translate_port: {
        value: cdktf.stringToHclTerraform(this._translatePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlans_enabled: {
        value: cdktf.booleanToHclTerraform(this._vlansEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
