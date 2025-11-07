// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultServerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of base DNs under the root DSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#base_dn DefaultServerInstance#base_dn}
  */
  readonly baseDn?: string[];
  /**
  * The name of the cluster to which this Server Instance belongs. Server instances within the same cluster will share the same cluster-wide configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#cluster_name DefaultServerInstance#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The name of the host where this Server Instance is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#hostname DefaultServerInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * The TCP port on which this server is listening for HTTP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#http_port DefaultServerInstance#http_port}
  */
  readonly httpPort?: number;
  /**
  * The TCP port on which this server is listening for HTTPS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#https_port DefaultServerInstance#https_port}
  */
  readonly httpsPort?: number;
  /**
  * The public component of the certificate used by this instance to protect inter-server communication and to perform server-specific encryption. This will generally be managed by the server and should only be altered by administrators under explicit direction from Ping Identity support personnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#inter_server_certificate DefaultServerInstance#inter_server_certificate}
  */
  readonly interServerCertificate?: string;
  /**
  * The TCP port on which this server is listening for JMX connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#jmx_port DefaultServerInstance#jmx_port}
  */
  readonly jmxPort?: number;
  /**
  * The TCP port on which this server is listening for JMX secure connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#jmxs_port DefaultServerInstance#jmxs_port}
  */
  readonly jmxsPort?: number;
  /**
  * The TCP port on which this server is listening for LDAP connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#ldap_port DefaultServerInstance#ldap_port}
  */
  readonly ldapPort?: number;
  /**
  * The TCP port on which this server is listening for LDAP secure connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#ldaps_port DefaultServerInstance#ldaps_port}
  */
  readonly ldapsPort?: number;
  /**
  * The name of the configuration object for a load-balancing algorithm that should include this server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#load_balancing_algorithm_name DefaultServerInstance#load_balancing_algorithm_name}
  */
  readonly loadBalancingAlgorithmName?: string[];
  /**
  * The set of groups of which this server is a member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#member_of_server_group DefaultServerInstance#member_of_server_group}
  */
  readonly memberOfServerGroup?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#name DefaultServerInstance#name}
  */
  readonly name: string;
  /**
  * Specifies the preferred mechanism to use for securing connections to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#preferred_security DefaultServerInstance#preferred_security}
  */
  readonly preferredSecurity?: string;
  /**
  * Specifies a unique identifier for the Directory Server within the replication domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#replication_domain_server_id DefaultServerInstance#replication_domain_server_id}
  */
  readonly replicationDomainServerId?: number[];
  /**
  * The replication TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#replication_port DefaultServerInstance#replication_port}
  */
  readonly replicationPort?: number;
  /**
  * Specifies a unique identifier for the replication server on this server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#replication_server_id DefaultServerInstance#replication_server_id}
  */
  readonly replicationServerId?: number;
  /**
  * The name of the replication set assigned to this Directory Server. Restricted domains are only replicated within instances using the same replication set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#replication_set_name DefaultServerInstance#replication_set_name}
  */
  readonly replicationSetName?: string;
  /**
  * Specifies the location for the Server Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#server_instance_location DefaultServerInstance#server_instance_location}
  */
  readonly serverInstanceLocation?: string;
  /**
  * The name of this Server Instance. The instance name needs to be unique if this server will be part of a topology of servers that are connected to each other. Once set, it may not be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#server_instance_name DefaultServerInstance#server_instance_name}
  */
  readonly serverInstanceName?: string;
  /**
  * Specifies the type of server installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#server_instance_type DefaultServerInstance#server_instance_type}
  */
  readonly serverInstanceType?: string;
  /**
  * The file system path where this Server Instance is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#server_root DefaultServerInstance#server_root}
  */
  readonly serverRoot?: string;
  /**
  * The version of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#server_version DefaultServerInstance#server_version}
  */
  readonly serverVersion?: string;
  /**
  * Indicates whether StartTLS is enabled on this server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#start_tls_enabled DefaultServerInstance#start_tls_enabled}
  */
  readonly startTlsEnabled?: boolean | cdktf.IResolvable;
}
export interface DefaultServerInstanceRequiredActions {
}

export function defaultServerInstanceRequiredActionsToTerraform(struct?: DefaultServerInstanceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultServerInstanceRequiredActionsToHclTerraform(struct?: DefaultServerInstanceRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultServerInstanceRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultServerInstanceRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultServerInstanceRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultServerInstanceRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultServerInstanceRequiredActionsOutputReference {
    return new DefaultServerInstanceRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance pingdirectory_default_server_instance}
*/
export class DefaultServerInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_server_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultServerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultServerInstance to import
  * @param importFromId The id of the existing DefaultServerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultServerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_server_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_server_instance pingdirectory_default_server_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultServerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultServerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_server_instance',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDn = config.baseDn;
    this._clusterName = config.clusterName;
    this._hostname = config.hostname;
    this._httpPort = config.httpPort;
    this._httpsPort = config.httpsPort;
    this._interServerCertificate = config.interServerCertificate;
    this._jmxPort = config.jmxPort;
    this._jmxsPort = config.jmxsPort;
    this._ldapPort = config.ldapPort;
    this._ldapsPort = config.ldapsPort;
    this._loadBalancingAlgorithmName = config.loadBalancingAlgorithmName;
    this._memberOfServerGroup = config.memberOfServerGroup;
    this._name = config.name;
    this._preferredSecurity = config.preferredSecurity;
    this._replicationDomainServerId = config.replicationDomainServerId;
    this._replicationPort = config.replicationPort;
    this._replicationServerId = config.replicationServerId;
    this._replicationSetName = config.replicationSetName;
    this._serverInstanceLocation = config.serverInstanceLocation;
    this._serverInstanceName = config.serverInstanceName;
    this._serverInstanceType = config.serverInstanceType;
    this._serverRoot = config.serverRoot;
    this._serverVersion = config.serverVersion;
    this._startTlsEnabled = config.startTlsEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string[]; 
  public get baseDn() {
    return cdktf.Fn.tolist(this.getListAttribute('base_dn'));
  }
  public set baseDn(value: string[]) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // https_port - computed: true, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inter_server_certificate - computed: true, optional: true, required: false
  private _interServerCertificate?: string; 
  public get interServerCertificate() {
    return this.getStringAttribute('inter_server_certificate');
  }
  public set interServerCertificate(value: string) {
    this._interServerCertificate = value;
  }
  public resetInterServerCertificate() {
    this._interServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interServerCertificateInput() {
    return this._interServerCertificate;
  }

  // jmx_port - computed: true, optional: true, required: false
  private _jmxPort?: number; 
  public get jmxPort() {
    return this.getNumberAttribute('jmx_port');
  }
  public set jmxPort(value: number) {
    this._jmxPort = value;
  }
  public resetJmxPort() {
    this._jmxPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxPortInput() {
    return this._jmxPort;
  }

  // jmxs_port - computed: true, optional: true, required: false
  private _jmxsPort?: number; 
  public get jmxsPort() {
    return this.getNumberAttribute('jmxs_port');
  }
  public set jmxsPort(value: number) {
    this._jmxsPort = value;
  }
  public resetJmxsPort() {
    this._jmxsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxsPortInput() {
    return this._jmxsPort;
  }

  // ldap_port - computed: true, optional: true, required: false
  private _ldapPort?: number; 
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }
  public set ldapPort(value: number) {
    this._ldapPort = value;
  }
  public resetLdapPort() {
    this._ldapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPortInput() {
    return this._ldapPort;
  }

  // ldaps_port - computed: true, optional: true, required: false
  private _ldapsPort?: number; 
  public get ldapsPort() {
    return this.getNumberAttribute('ldaps_port');
  }
  public set ldapsPort(value: number) {
    this._ldapsPort = value;
  }
  public resetLdapsPort() {
    this._ldapsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsPortInput() {
    return this._ldapsPort;
  }

  // load_balancing_algorithm_name - computed: true, optional: true, required: false
  private _loadBalancingAlgorithmName?: string[]; 
  public get loadBalancingAlgorithmName() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancing_algorithm_name'));
  }
  public set loadBalancingAlgorithmName(value: string[]) {
    this._loadBalancingAlgorithmName = value;
  }
  public resetLoadBalancingAlgorithmName() {
    this._loadBalancingAlgorithmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingAlgorithmNameInput() {
    return this._loadBalancingAlgorithmName;
  }

  // member_of_server_group - computed: true, optional: true, required: false
  private _memberOfServerGroup?: string[]; 
  public get memberOfServerGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('member_of_server_group'));
  }
  public set memberOfServerGroup(value: string[]) {
    this._memberOfServerGroup = value;
  }
  public resetMemberOfServerGroup() {
    this._memberOfServerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfServerGroupInput() {
    return this._memberOfServerGroup;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // preferred_security - computed: true, optional: true, required: false
  private _preferredSecurity?: string; 
  public get preferredSecurity() {
    return this.getStringAttribute('preferred_security');
  }
  public set preferredSecurity(value: string) {
    this._preferredSecurity = value;
  }
  public resetPreferredSecurity() {
    this._preferredSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSecurityInput() {
    return this._preferredSecurity;
  }

  // replication_domain_server_id - computed: true, optional: true, required: false
  private _replicationDomainServerId?: number[]; 
  public get replicationDomainServerId() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('replication_domain_server_id')));
  }
  public set replicationDomainServerId(value: number[]) {
    this._replicationDomainServerId = value;
  }
  public resetReplicationDomainServerId() {
    this._replicationDomainServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationDomainServerIdInput() {
    return this._replicationDomainServerId;
  }

  // replication_port - computed: true, optional: true, required: false
  private _replicationPort?: number; 
  public get replicationPort() {
    return this.getNumberAttribute('replication_port');
  }
  public set replicationPort(value: number) {
    this._replicationPort = value;
  }
  public resetReplicationPort() {
    this._replicationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationPortInput() {
    return this._replicationPort;
  }

  // replication_server_id - computed: true, optional: true, required: false
  private _replicationServerId?: number; 
  public get replicationServerId() {
    return this.getNumberAttribute('replication_server_id');
  }
  public set replicationServerId(value: number) {
    this._replicationServerId = value;
  }
  public resetReplicationServerId() {
    this._replicationServerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationServerIdInput() {
    return this._replicationServerId;
  }

  // replication_set_name - computed: true, optional: true, required: false
  private _replicationSetName?: string; 
  public get replicationSetName() {
    return this.getStringAttribute('replication_set_name');
  }
  public set replicationSetName(value: string) {
    this._replicationSetName = value;
  }
  public resetReplicationSetName() {
    this._replicationSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSetNameInput() {
    return this._replicationSetName;
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultServerInstanceRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // server_instance_location - computed: true, optional: true, required: false
  private _serverInstanceLocation?: string; 
  public get serverInstanceLocation() {
    return this.getStringAttribute('server_instance_location');
  }
  public set serverInstanceLocation(value: string) {
    this._serverInstanceLocation = value;
  }
  public resetServerInstanceLocation() {
    this._serverInstanceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceLocationInput() {
    return this._serverInstanceLocation;
  }

  // server_instance_name - computed: true, optional: true, required: false
  private _serverInstanceName?: string; 
  public get serverInstanceName() {
    return this.getStringAttribute('server_instance_name');
  }
  public set serverInstanceName(value: string) {
    this._serverInstanceName = value;
  }
  public resetServerInstanceName() {
    this._serverInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceNameInput() {
    return this._serverInstanceName;
  }

  // server_instance_type - computed: true, optional: true, required: false
  private _serverInstanceType?: string; 
  public get serverInstanceType() {
    return this.getStringAttribute('server_instance_type');
  }
  public set serverInstanceType(value: string) {
    this._serverInstanceType = value;
  }
  public resetServerInstanceType() {
    this._serverInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInstanceTypeInput() {
    return this._serverInstanceType;
  }

  // server_root - computed: true, optional: true, required: false
  private _serverRoot?: string; 
  public get serverRoot() {
    return this.getStringAttribute('server_root');
  }
  public set serverRoot(value: string) {
    this._serverRoot = value;
  }
  public resetServerRoot() {
    this._serverRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRootInput() {
    return this._serverRoot;
  }

  // server_version - computed: true, optional: true, required: false
  private _serverVersion?: string; 
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }
  public set serverVersion(value: string) {
    this._serverVersion = value;
  }
  public resetServerVersion() {
    this._serverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVersionInput() {
    return this._serverVersion;
  }

  // start_tls_enabled - computed: true, optional: true, required: false
  private _startTlsEnabled?: boolean | cdktf.IResolvable; 
  public get startTlsEnabled() {
    return this.getBooleanAttribute('start_tls_enabled');
  }
  public set startTlsEnabled(value: boolean | cdktf.IResolvable) {
    this._startTlsEnabled = value;
  }
  public resetStartTlsEnabled() {
    this._startTlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsEnabledInput() {
    return this._startTlsEnabled;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_dn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseDn),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      hostname: cdktf.stringToTerraform(this._hostname),
      http_port: cdktf.numberToTerraform(this._httpPort),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      inter_server_certificate: cdktf.stringToTerraform(this._interServerCertificate),
      jmx_port: cdktf.numberToTerraform(this._jmxPort),
      jmxs_port: cdktf.numberToTerraform(this._jmxsPort),
      ldap_port: cdktf.numberToTerraform(this._ldapPort),
      ldaps_port: cdktf.numberToTerraform(this._ldapsPort),
      load_balancing_algorithm_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancingAlgorithmName),
      member_of_server_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberOfServerGroup),
      name: cdktf.stringToTerraform(this._name),
      preferred_security: cdktf.stringToTerraform(this._preferredSecurity),
      replication_domain_server_id: cdktf.listMapper(cdktf.numberToTerraform, false)(this._replicationDomainServerId),
      replication_port: cdktf.numberToTerraform(this._replicationPort),
      replication_server_id: cdktf.numberToTerraform(this._replicationServerId),
      replication_set_name: cdktf.stringToTerraform(this._replicationSetName),
      server_instance_location: cdktf.stringToTerraform(this._serverInstanceLocation),
      server_instance_name: cdktf.stringToTerraform(this._serverInstanceName),
      server_instance_type: cdktf.stringToTerraform(this._serverInstanceType),
      server_root: cdktf.stringToTerraform(this._serverRoot),
      server_version: cdktf.stringToTerraform(this._serverVersion),
      start_tls_enabled: cdktf.booleanToTerraform(this._startTlsEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_dn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseDn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inter_server_certificate: {
        value: cdktf.stringToHclTerraform(this._interServerCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jmx_port: {
        value: cdktf.numberToHclTerraform(this._jmxPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jmxs_port: {
        value: cdktf.numberToHclTerraform(this._jmxsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_port: {
        value: cdktf.numberToHclTerraform(this._ldapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldaps_port: {
        value: cdktf.numberToHclTerraform(this._ldapsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      load_balancing_algorithm_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancingAlgorithmName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      member_of_server_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberOfServerGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_security: {
        value: cdktf.stringToHclTerraform(this._preferredSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_domain_server_id: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._replicationDomainServerId),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      replication_port: {
        value: cdktf.numberToHclTerraform(this._replicationPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_server_id: {
        value: cdktf.numberToHclTerraform(this._replicationServerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_set_name: {
        value: cdktf.stringToHclTerraform(this._replicationSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_location: {
        value: cdktf.stringToHclTerraform(this._serverInstanceLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_name: {
        value: cdktf.stringToHclTerraform(this._serverInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_instance_type: {
        value: cdktf.stringToHclTerraform(this._serverInstanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_root: {
        value: cdktf.stringToHclTerraform(this._serverRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_version: {
        value: cdktf.stringToHclTerraform(this._serverVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_tls_enabled: {
        value: cdktf.booleanToHclTerraform(this._startTlsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
