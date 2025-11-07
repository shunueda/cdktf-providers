// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdsproviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocates an ID for an unmapped Active Directory (ADS) group. ADS groups without GIDs can be proactively assigned a GID by the ID mapper. If the ID mapper option is disabled, GIDs are not proactively assigned, and when a primary group for a user does not include a GID, the system may allocate one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#allocate_gids Adsprovider#allocate_gids}
  */
  readonly allocateGids?: boolean | cdktf.IResolvable;
  /**
  * Allocates a user ID for an unmapped Active Directory (ADS) user. ADS users without UIDs can be proactively assigned a UID by the ID mapper. IF the ID mapper option is disabled, UIDs are not proactively assigned, and when an identify for a user does not include a UID, the system may allocate one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#allocate_uids Adsprovider#allocate_uids}
  */
  readonly allocateUids?: boolean | cdktf.IResolvable;
  /**
  * Enables lookup of unqualified user names in the primary domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#assume_default_domain Adsprovider#assume_default_domain}
  */
  readonly assumeDefaultDomain?: boolean | cdktf.IResolvable;
  /**
  * Enables authentication and identity management through the authentication provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#authentication Adsprovider#authentication}
  */
  readonly authentication?: boolean | cdktf.IResolvable;
  /**
  * Check for duplicate SPNs registered in Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#check_duplicates Adsprovider#check_duplicates}
  */
  readonly checkDuplicates?: boolean | cdktf.IResolvable;
  /**
  * Specifies the time in seconds between provider online checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#check_online_interval Adsprovider#check_online_interval}
  */
  readonly checkOnlineInterval?: number;
  /**
  * Specifies the current time for the domain controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#controller_time Adsprovider#controller_time}
  */
  readonly controllerTime?: number;
  /**
  * Automatically creates a home directory on the first login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#create_home_directory Adsprovider#create_home_directory}
  */
  readonly createHomeDirectory?: boolean | cdktf.IResolvable;
  /**
  * Specifies the DNS search domain. Set this parameter if the DNS search domain has a unique name or address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#dns_domain Adsprovider#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Specifies the domain controller to which the authentication service should send requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#domain_controller Adsprovider#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Sends an alert if the domain goes offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#domain_offline_alerts Adsprovider#domain_offline_alerts}
  */
  readonly domainOfflineAlerts?: boolean | cdktf.IResolvable;
  /**
  * List of additional SPNs to expect beyond what automatic checking routines might find
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#extra_expected_spns Adsprovider#extra_expected_spns}
  */
  readonly extraExpectedSpns?: string[];
  /**
  * Sets list of groups that can be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#findable_groups Adsprovider#findable_groups}
  */
  readonly findableGroups?: string[];
  /**
  * Sets list of users that can be resolved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#findable_users Adsprovider#findable_users}
  */
  readonly findableUsers?: string[];
  /**
  * Groupnet identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#groupnet Adsprovider#groupnet}
  */
  readonly groupnet?: string;
  /**
  * Specifies the path to the home directory template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#home_directory_template Adsprovider#home_directory_template}
  */
  readonly homeDirectoryTemplate?: string;
  /**
  * Specifies the ID of the Active Directory provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#id Adsprovider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If set to true, ignores all trusted domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#ignore_all_trusts Adsprovider#ignore_all_trusts}
  */
  readonly ignoreAllTrusts?: boolean | cdktf.IResolvable;
  /**
  * Includes trusted domains when 'ignore_all_trusts' is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#ignored_trusted_domains Adsprovider#ignored_trusted_domains}
  */
  readonly ignoredTrustedDomains?: string[];
  /**
  * Includes trusted domains when 'ignore_all_trusts' is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#include_trusted_domains Adsprovider#include_trusted_domains}
  */
  readonly includeTrustedDomains?: string[];
  /**
  * Specifies Active Directory provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#instance Adsprovider#instance}
  */
  readonly instance?: string;
  /**
  * Determines if connecting through HDFS with Kerberos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#kerberos_hdfs_spn Adsprovider#kerberos_hdfs_spn}
  */
  readonly kerberosHdfsSpn?: boolean | cdktf.IResolvable;
  /**
  * Determines if connecting through NFS with Kerberos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#kerberos_nfs_spn Adsprovider#kerberos_nfs_spn}
  */
  readonly kerberosNfsSpn?: boolean | cdktf.IResolvable;
  /**
  * Enables encryption and signing on LDAP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#ldap_sign_and_seal Adsprovider#ldap_sign_and_seal}
  */
  readonly ldapSignAndSeal?: boolean | cdktf.IResolvable;
  /**
  * Specifies the login shell path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#login_shell Adsprovider#login_shell}
  */
  readonly loginShell?: string;
  /**
  * Limits user and group lookups to the specified domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#lookup_domains Adsprovider#lookup_domains}
  */
  readonly lookupDomains?: string[];
  /**
  * Looks up AD groups in other providers before allocating a group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#lookup_groups Adsprovider#lookup_groups}
  */
  readonly lookupGroups?: boolean | cdktf.IResolvable;
  /**
  * Normalizes AD group names to lowercase before look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#lookup_normalize_groups Adsprovider#lookup_normalize_groups}
  */
  readonly lookupNormalizeGroups?: boolean | cdktf.IResolvable;
  /**
  * Normalize AD user names to lowercase before look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#lookup_normalize_users Adsprovider#lookup_normalize_users}
  */
  readonly lookupNormalizeUsers?: boolean | cdktf.IResolvable;
  /**
  * Looks up AD users in other providers before allocating a user ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#lookup_users Adsprovider#lookup_users}
  */
  readonly lookupUsers?: boolean | cdktf.IResolvable;
  /**
  * Specifies the machine account name when creating a SAM account with Active Directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#machine_account Adsprovider#machine_account}
  */
  readonly machineAccount?: string;
  /**
  * Enables periodic changes of the machine password for security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#machine_password_changes Adsprovider#machine_password_changes}
  */
  readonly machinePasswordChanges?: boolean | cdktf.IResolvable;
  /**
  * Sets maximum age of a password in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#machine_password_lifespan Adsprovider#machine_password_lifespan}
  */
  readonly machinePasswordLifespan?: number;
  /**
  * Specifies the Active Directory provider name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#name Adsprovider#name}
  */
  readonly name: string;
  /**
  * Specifies the domain controller for which the node has affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#node_dc_affinity Adsprovider#node_dc_affinity}
  */
  readonly nodeDcAffinity?: string;
  /**
  * Specifies the timeout for the domain controller for which the local node has affinity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#node_dc_affinity_timeout Adsprovider#node_dc_affinity_timeout}
  */
  readonly nodeDcAffinityTimeout?: number;
  /**
  * Enables the Active Directory provider to respond to 'getpwent' and 'getgrent' requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#nss_enumeration Adsprovider#nss_enumeration}
  */
  readonly nssEnumeration?: boolean | cdktf.IResolvable;
  /**
  * Specifies the organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#organizational_unit Adsprovider#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Specifies the password used during domain join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#password Adsprovider#password}
  */
  readonly password: string;
  /**
  * Resets the secure channel to the primary domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#reset_schannel Adsprovider#reset_schannel}
  */
  readonly resetSchannel?: boolean | cdktf.IResolvable;
  /**
  * Check the provider for filtered lists of findable and unfindable users and groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#restrict_findable Adsprovider#restrict_findable}
  */
  readonly restrictFindable?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of time (in seconds) an RPC call to Active Directory is allowed to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#rpc_call_timeout Adsprovider#rpc_call_timeout}
  */
  readonly rpcCallTimeout?: number;
  /**
  * When specified as 'effective', or not specified, all fields are returned. When specified as 'user', only fields with non-default values are shown. When specified as 'default', the original values are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#scope Adsprovider#scope}
  */
  readonly scope?: string;
  /**
  * The number of retries attempted when a call to Active Directory fails due to network error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#server_retry_limit Adsprovider#server_retry_limit}
  */
  readonly serverRetryLimit?: number;
  /**
  * Specifies whether to support RFC 2307 attributes on ADS domain controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#sfu_support Adsprovider#sfu_support}
  */
  readonly sfuSupport?: string;
  /**
  * Currently configured SPNs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#spns Adsprovider#spns}
  */
  readonly spns?: string[];
  /**
  * Stores SFU mappings permanently in the ID mapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#store_sfu_mappings Adsprovider#store_sfu_mappings}
  */
  readonly storeSfuMappings?: boolean | cdktf.IResolvable;
  /**
  * Specifies groups that cannot be resolved by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#unfindable_groups Adsprovider#unfindable_groups}
  */
  readonly unfindableGroups?: string[];
  /**
  * Specifies users that cannot be resolved by the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#unfindable_users Adsprovider#unfindable_users}
  */
  readonly unfindableUsers?: string[];
  /**
  * Specifies the user name that has permission to join a machine to the given domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#user Adsprovider#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider powerscale_adsprovider}
*/
export class Adsprovider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_adsprovider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Adsprovider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Adsprovider to import
  * @param importFromId The id of the existing Adsprovider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Adsprovider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_adsprovider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/adsprovider powerscale_adsprovider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdsproviderConfig
  */
  public constructor(scope: Construct, id: string, config: AdsproviderConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_adsprovider',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocateGids = config.allocateGids;
    this._allocateUids = config.allocateUids;
    this._assumeDefaultDomain = config.assumeDefaultDomain;
    this._authentication = config.authentication;
    this._checkDuplicates = config.checkDuplicates;
    this._checkOnlineInterval = config.checkOnlineInterval;
    this._controllerTime = config.controllerTime;
    this._createHomeDirectory = config.createHomeDirectory;
    this._dnsDomain = config.dnsDomain;
    this._domainController = config.domainController;
    this._domainOfflineAlerts = config.domainOfflineAlerts;
    this._extraExpectedSpns = config.extraExpectedSpns;
    this._findableGroups = config.findableGroups;
    this._findableUsers = config.findableUsers;
    this._groupnet = config.groupnet;
    this._homeDirectoryTemplate = config.homeDirectoryTemplate;
    this._id = config.id;
    this._ignoreAllTrusts = config.ignoreAllTrusts;
    this._ignoredTrustedDomains = config.ignoredTrustedDomains;
    this._includeTrustedDomains = config.includeTrustedDomains;
    this._instance = config.instance;
    this._kerberosHdfsSpn = config.kerberosHdfsSpn;
    this._kerberosNfsSpn = config.kerberosNfsSpn;
    this._ldapSignAndSeal = config.ldapSignAndSeal;
    this._loginShell = config.loginShell;
    this._lookupDomains = config.lookupDomains;
    this._lookupGroups = config.lookupGroups;
    this._lookupNormalizeGroups = config.lookupNormalizeGroups;
    this._lookupNormalizeUsers = config.lookupNormalizeUsers;
    this._lookupUsers = config.lookupUsers;
    this._machineAccount = config.machineAccount;
    this._machinePasswordChanges = config.machinePasswordChanges;
    this._machinePasswordLifespan = config.machinePasswordLifespan;
    this._name = config.name;
    this._nodeDcAffinity = config.nodeDcAffinity;
    this._nodeDcAffinityTimeout = config.nodeDcAffinityTimeout;
    this._nssEnumeration = config.nssEnumeration;
    this._organizationalUnit = config.organizationalUnit;
    this._password = config.password;
    this._resetSchannel = config.resetSchannel;
    this._restrictFindable = config.restrictFindable;
    this._rpcCallTimeout = config.rpcCallTimeout;
    this._scope = config.scope;
    this._serverRetryLimit = config.serverRetryLimit;
    this._sfuSupport = config.sfuSupport;
    this._spns = config.spns;
    this._storeSfuMappings = config.storeSfuMappings;
    this._unfindableGroups = config.unfindableGroups;
    this._unfindableUsers = config.unfindableUsers;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_gids - computed: true, optional: true, required: false
  private _allocateGids?: boolean | cdktf.IResolvable; 
  public get allocateGids() {
    return this.getBooleanAttribute('allocate_gids');
  }
  public set allocateGids(value: boolean | cdktf.IResolvable) {
    this._allocateGids = value;
  }
  public resetAllocateGids() {
    this._allocateGids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateGidsInput() {
    return this._allocateGids;
  }

  // allocate_uids - computed: true, optional: true, required: false
  private _allocateUids?: boolean | cdktf.IResolvable; 
  public get allocateUids() {
    return this.getBooleanAttribute('allocate_uids');
  }
  public set allocateUids(value: boolean | cdktf.IResolvable) {
    this._allocateUids = value;
  }
  public resetAllocateUids() {
    this._allocateUids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateUidsInput() {
    return this._allocateUids;
  }

  // assume_default_domain - computed: true, optional: true, required: false
  private _assumeDefaultDomain?: boolean | cdktf.IResolvable; 
  public get assumeDefaultDomain() {
    return this.getBooleanAttribute('assume_default_domain');
  }
  public set assumeDefaultDomain(value: boolean | cdktf.IResolvable) {
    this._assumeDefaultDomain = value;
  }
  public resetAssumeDefaultDomain() {
    this._assumeDefaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeDefaultDomainInput() {
    return this._assumeDefaultDomain;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: boolean | cdktf.IResolvable; 
  public get authentication() {
    return this.getBooleanAttribute('authentication');
  }
  public set authentication(value: boolean | cdktf.IResolvable) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // check_duplicates - computed: false, optional: true, required: false
  private _checkDuplicates?: boolean | cdktf.IResolvable; 
  public get checkDuplicates() {
    return this.getBooleanAttribute('check_duplicates');
  }
  public set checkDuplicates(value: boolean | cdktf.IResolvable) {
    this._checkDuplicates = value;
  }
  public resetCheckDuplicates() {
    this._checkDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkDuplicatesInput() {
    return this._checkDuplicates;
  }

  // check_online_interval - computed: true, optional: true, required: false
  private _checkOnlineInterval?: number; 
  public get checkOnlineInterval() {
    return this.getNumberAttribute('check_online_interval');
  }
  public set checkOnlineInterval(value: number) {
    this._checkOnlineInterval = value;
  }
  public resetCheckOnlineInterval() {
    this._checkOnlineInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkOnlineIntervalInput() {
    return this._checkOnlineInterval;
  }

  // controller_time - computed: true, optional: true, required: false
  private _controllerTime?: number; 
  public get controllerTime() {
    return this.getNumberAttribute('controller_time');
  }
  public set controllerTime(value: number) {
    this._controllerTime = value;
  }
  public resetControllerTime() {
    this._controllerTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerTimeInput() {
    return this._controllerTime;
  }

  // create_home_directory - computed: true, optional: true, required: false
  private _createHomeDirectory?: boolean | cdktf.IResolvable; 
  public get createHomeDirectory() {
    return this.getBooleanAttribute('create_home_directory');
  }
  public set createHomeDirectory(value: boolean | cdktf.IResolvable) {
    this._createHomeDirectory = value;
  }
  public resetCreateHomeDirectory() {
    this._createHomeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createHomeDirectoryInput() {
    return this._createHomeDirectory;
  }

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }
  public set domainController(value: string) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
  }

  // domain_offline_alerts - computed: true, optional: true, required: false
  private _domainOfflineAlerts?: boolean | cdktf.IResolvable; 
  public get domainOfflineAlerts() {
    return this.getBooleanAttribute('domain_offline_alerts');
  }
  public set domainOfflineAlerts(value: boolean | cdktf.IResolvable) {
    this._domainOfflineAlerts = value;
  }
  public resetDomainOfflineAlerts() {
    this._domainOfflineAlerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainOfflineAlertsInput() {
    return this._domainOfflineAlerts;
  }

  // dup_spns - computed: true, optional: false, required: false
  public get dupSpns() {
    return this.getListAttribute('dup_spns');
  }

  // extra_expected_spns - computed: true, optional: true, required: false
  private _extraExpectedSpns?: string[]; 
  public get extraExpectedSpns() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_expected_spns'));
  }
  public set extraExpectedSpns(value: string[]) {
    this._extraExpectedSpns = value;
  }
  public resetExtraExpectedSpns() {
    this._extraExpectedSpns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraExpectedSpnsInput() {
    return this._extraExpectedSpns;
  }

  // findable_groups - computed: true, optional: true, required: false
  private _findableGroups?: string[]; 
  public get findableGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('findable_groups'));
  }
  public set findableGroups(value: string[]) {
    this._findableGroups = value;
  }
  public resetFindableGroups() {
    this._findableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findableGroupsInput() {
    return this._findableGroups;
  }

  // findable_users - computed: true, optional: true, required: false
  private _findableUsers?: string[]; 
  public get findableUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('findable_users'));
  }
  public set findableUsers(value: string[]) {
    this._findableUsers = value;
  }
  public resetFindableUsers() {
    this._findableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get findableUsersInput() {
    return this._findableUsers;
  }

  // forest - computed: true, optional: false, required: false
  public get forest() {
    return this.getStringAttribute('forest');
  }

  // groupnet - computed: true, optional: true, required: false
  private _groupnet?: string; 
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }
  public set groupnet(value: string) {
    this._groupnet = value;
  }
  public resetGroupnet() {
    this._groupnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnetInput() {
    return this._groupnet;
  }

  // home_directory_template - computed: true, optional: true, required: false
  private _homeDirectoryTemplate?: string; 
  public get homeDirectoryTemplate() {
    return this.getStringAttribute('home_directory_template');
  }
  public set homeDirectoryTemplate(value: string) {
    this._homeDirectoryTemplate = value;
  }
  public resetHomeDirectoryTemplate() {
    this._homeDirectoryTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryTemplateInput() {
    return this._homeDirectoryTemplate;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // ignore_all_trusts - computed: true, optional: true, required: false
  private _ignoreAllTrusts?: boolean | cdktf.IResolvable; 
  public get ignoreAllTrusts() {
    return this.getBooleanAttribute('ignore_all_trusts');
  }
  public set ignoreAllTrusts(value: boolean | cdktf.IResolvable) {
    this._ignoreAllTrusts = value;
  }
  public resetIgnoreAllTrusts() {
    this._ignoreAllTrusts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAllTrustsInput() {
    return this._ignoreAllTrusts;
  }

  // ignored_trusted_domains - computed: true, optional: true, required: false
  private _ignoredTrustedDomains?: string[]; 
  public get ignoredTrustedDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('ignored_trusted_domains'));
  }
  public set ignoredTrustedDomains(value: string[]) {
    this._ignoredTrustedDomains = value;
  }
  public resetIgnoredTrustedDomains() {
    this._ignoredTrustedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredTrustedDomainsInput() {
    return this._ignoredTrustedDomains;
  }

  // include_trusted_domains - computed: true, optional: true, required: false
  private _includeTrustedDomains?: string[]; 
  public get includeTrustedDomains() {
    return this.getListAttribute('include_trusted_domains');
  }
  public set includeTrustedDomains(value: string[]) {
    this._includeTrustedDomains = value;
  }
  public resetIncludeTrustedDomains() {
    this._includeTrustedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTrustedDomainsInput() {
    return this._includeTrustedDomains;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // kerberos_hdfs_spn - computed: false, optional: true, required: false
  private _kerberosHdfsSpn?: boolean | cdktf.IResolvable; 
  public get kerberosHdfsSpn() {
    return this.getBooleanAttribute('kerberos_hdfs_spn');
  }
  public set kerberosHdfsSpn(value: boolean | cdktf.IResolvable) {
    this._kerberosHdfsSpn = value;
  }
  public resetKerberosHdfsSpn() {
    this._kerberosHdfsSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosHdfsSpnInput() {
    return this._kerberosHdfsSpn;
  }

  // kerberos_nfs_spn - computed: false, optional: true, required: false
  private _kerberosNfsSpn?: boolean | cdktf.IResolvable; 
  public get kerberosNfsSpn() {
    return this.getBooleanAttribute('kerberos_nfs_spn');
  }
  public set kerberosNfsSpn(value: boolean | cdktf.IResolvable) {
    this._kerberosNfsSpn = value;
  }
  public resetKerberosNfsSpn() {
    this._kerberosNfsSpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosNfsSpnInput() {
    return this._kerberosNfsSpn;
  }

  // ldap_sign_and_seal - computed: true, optional: true, required: false
  private _ldapSignAndSeal?: boolean | cdktf.IResolvable; 
  public get ldapSignAndSeal() {
    return this.getBooleanAttribute('ldap_sign_and_seal');
  }
  public set ldapSignAndSeal(value: boolean | cdktf.IResolvable) {
    this._ldapSignAndSeal = value;
  }
  public resetLdapSignAndSeal() {
    this._ldapSignAndSeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSignAndSealInput() {
    return this._ldapSignAndSeal;
  }

  // login_shell - computed: true, optional: true, required: false
  private _loginShell?: string; 
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }
  public set loginShell(value: string) {
    this._loginShell = value;
  }
  public resetLoginShell() {
    this._loginShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginShellInput() {
    return this._loginShell;
  }

  // lookup_domains - computed: true, optional: true, required: false
  private _lookupDomains?: string[]; 
  public get lookupDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('lookup_domains'));
  }
  public set lookupDomains(value: string[]) {
    this._lookupDomains = value;
  }
  public resetLookupDomains() {
    this._lookupDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDomainsInput() {
    return this._lookupDomains;
  }

  // lookup_groups - computed: true, optional: true, required: false
  private _lookupGroups?: boolean | cdktf.IResolvable; 
  public get lookupGroups() {
    return this.getBooleanAttribute('lookup_groups');
  }
  public set lookupGroups(value: boolean | cdktf.IResolvable) {
    this._lookupGroups = value;
  }
  public resetLookupGroups() {
    this._lookupGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupGroupsInput() {
    return this._lookupGroups;
  }

  // lookup_normalize_groups - computed: true, optional: true, required: false
  private _lookupNormalizeGroups?: boolean | cdktf.IResolvable; 
  public get lookupNormalizeGroups() {
    return this.getBooleanAttribute('lookup_normalize_groups');
  }
  public set lookupNormalizeGroups(value: boolean | cdktf.IResolvable) {
    this._lookupNormalizeGroups = value;
  }
  public resetLookupNormalizeGroups() {
    this._lookupNormalizeGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNormalizeGroupsInput() {
    return this._lookupNormalizeGroups;
  }

  // lookup_normalize_users - computed: true, optional: true, required: false
  private _lookupNormalizeUsers?: boolean | cdktf.IResolvable; 
  public get lookupNormalizeUsers() {
    return this.getBooleanAttribute('lookup_normalize_users');
  }
  public set lookupNormalizeUsers(value: boolean | cdktf.IResolvable) {
    this._lookupNormalizeUsers = value;
  }
  public resetLookupNormalizeUsers() {
    this._lookupNormalizeUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNormalizeUsersInput() {
    return this._lookupNormalizeUsers;
  }

  // lookup_users - computed: true, optional: true, required: false
  private _lookupUsers?: boolean | cdktf.IResolvable; 
  public get lookupUsers() {
    return this.getBooleanAttribute('lookup_users');
  }
  public set lookupUsers(value: boolean | cdktf.IResolvable) {
    this._lookupUsers = value;
  }
  public resetLookupUsers() {
    this._lookupUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupUsersInput() {
    return this._lookupUsers;
  }

  // machine_account - computed: true, optional: true, required: false
  private _machineAccount?: string; 
  public get machineAccount() {
    return this.getStringAttribute('machine_account');
  }
  public set machineAccount(value: string) {
    this._machineAccount = value;
  }
  public resetMachineAccount() {
    this._machineAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineAccountInput() {
    return this._machineAccount;
  }

  // machine_password_changes - computed: true, optional: true, required: false
  private _machinePasswordChanges?: boolean | cdktf.IResolvable; 
  public get machinePasswordChanges() {
    return this.getBooleanAttribute('machine_password_changes');
  }
  public set machinePasswordChanges(value: boolean | cdktf.IResolvable) {
    this._machinePasswordChanges = value;
  }
  public resetMachinePasswordChanges() {
    this._machinePasswordChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePasswordChangesInput() {
    return this._machinePasswordChanges;
  }

  // machine_password_lifespan - computed: true, optional: true, required: false
  private _machinePasswordLifespan?: number; 
  public get machinePasswordLifespan() {
    return this.getNumberAttribute('machine_password_lifespan');
  }
  public set machinePasswordLifespan(value: number) {
    this._machinePasswordLifespan = value;
  }
  public resetMachinePasswordLifespan() {
    this._machinePasswordLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePasswordLifespanInput() {
    return this._machinePasswordLifespan;
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

  // netbios_domain - computed: true, optional: false, required: false
  public get netbiosDomain() {
    return this.getStringAttribute('netbios_domain');
  }

  // node_dc_affinity - computed: true, optional: true, required: false
  private _nodeDcAffinity?: string; 
  public get nodeDcAffinity() {
    return this.getStringAttribute('node_dc_affinity');
  }
  public set nodeDcAffinity(value: string) {
    this._nodeDcAffinity = value;
  }
  public resetNodeDcAffinity() {
    this._nodeDcAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDcAffinityInput() {
    return this._nodeDcAffinity;
  }

  // node_dc_affinity_timeout - computed: true, optional: true, required: false
  private _nodeDcAffinityTimeout?: number; 
  public get nodeDcAffinityTimeout() {
    return this.getNumberAttribute('node_dc_affinity_timeout');
  }
  public set nodeDcAffinityTimeout(value: number) {
    this._nodeDcAffinityTimeout = value;
  }
  public resetNodeDcAffinityTimeout() {
    this._nodeDcAffinityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDcAffinityTimeoutInput() {
    return this._nodeDcAffinityTimeout;
  }

  // nss_enumeration - computed: true, optional: true, required: false
  private _nssEnumeration?: boolean | cdktf.IResolvable; 
  public get nssEnumeration() {
    return this.getBooleanAttribute('nss_enumeration');
  }
  public set nssEnumeration(value: boolean | cdktf.IResolvable) {
    this._nssEnumeration = value;
  }
  public resetNssEnumeration() {
    this._nssEnumeration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssEnumerationInput() {
    return this._nssEnumeration;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // primary_domain - computed: true, optional: false, required: false
  public get primaryDomain() {
    return this.getStringAttribute('primary_domain');
  }

  // recommended_spns - computed: true, optional: false, required: false
  public get recommendedSpns() {
    return this.getListAttribute('recommended_spns');
  }

  // reset_schannel - computed: false, optional: true, required: false
  private _resetSchannel?: boolean | cdktf.IResolvable; 
  public get resetSchannel() {
    return this.getBooleanAttribute('reset_schannel');
  }
  public set resetSchannel(value: boolean | cdktf.IResolvable) {
    this._resetSchannel = value;
  }
  public resetResetSchannel() {
    this._resetSchannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetSchannelInput() {
    return this._resetSchannel;
  }

  // restrict_findable - computed: true, optional: true, required: false
  private _restrictFindable?: boolean | cdktf.IResolvable; 
  public get restrictFindable() {
    return this.getBooleanAttribute('restrict_findable');
  }
  public set restrictFindable(value: boolean | cdktf.IResolvable) {
    this._restrictFindable = value;
  }
  public resetRestrictFindable() {
    this._restrictFindable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictFindableInput() {
    return this._restrictFindable;
  }

  // rpc_call_timeout - computed: true, optional: true, required: false
  private _rpcCallTimeout?: number; 
  public get rpcCallTimeout() {
    return this.getNumberAttribute('rpc_call_timeout');
  }
  public set rpcCallTimeout(value: number) {
    this._rpcCallTimeout = value;
  }
  public resetRpcCallTimeout() {
    this._rpcCallTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpcCallTimeoutInput() {
    return this._rpcCallTimeout;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // server_retry_limit - computed: true, optional: true, required: false
  private _serverRetryLimit?: number; 
  public get serverRetryLimit() {
    return this.getNumberAttribute('server_retry_limit');
  }
  public set serverRetryLimit(value: number) {
    this._serverRetryLimit = value;
  }
  public resetServerRetryLimit() {
    this._serverRetryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRetryLimitInput() {
    return this._serverRetryLimit;
  }

  // sfu_support - computed: true, optional: true, required: false
  private _sfuSupport?: string; 
  public get sfuSupport() {
    return this.getStringAttribute('sfu_support');
  }
  public set sfuSupport(value: string) {
    this._sfuSupport = value;
  }
  public resetSfuSupport() {
    this._sfuSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfuSupportInput() {
    return this._sfuSupport;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // spns - computed: true, optional: true, required: false
  private _spns?: string[]; 
  public get spns() {
    return cdktf.Fn.tolist(this.getListAttribute('spns'));
  }
  public set spns(value: string[]) {
    this._spns = value;
  }
  public resetSpns() {
    this._spns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spnsInput() {
    return this._spns;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // store_sfu_mappings - computed: true, optional: true, required: false
  private _storeSfuMappings?: boolean | cdktf.IResolvable; 
  public get storeSfuMappings() {
    return this.getBooleanAttribute('store_sfu_mappings');
  }
  public set storeSfuMappings(value: boolean | cdktf.IResolvable) {
    this._storeSfuMappings = value;
  }
  public resetStoreSfuMappings() {
    this._storeSfuMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeSfuMappingsInput() {
    return this._storeSfuMappings;
  }

  // system - computed: true, optional: false, required: false
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }

  // unfindable_groups - computed: true, optional: true, required: false
  private _unfindableGroups?: string[]; 
  public get unfindableGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('unfindable_groups'));
  }
  public set unfindableGroups(value: string[]) {
    this._unfindableGroups = value;
  }
  public resetUnfindableGroups() {
    this._unfindableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unfindableGroupsInput() {
    return this._unfindableGroups;
  }

  // unfindable_users - computed: true, optional: true, required: false
  private _unfindableUsers?: string[]; 
  public get unfindableUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('unfindable_users'));
  }
  public set unfindableUsers(value: string[]) {
    this._unfindableUsers = value;
  }
  public resetUnfindableUsers() {
    this._unfindableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unfindableUsersInput() {
    return this._unfindableUsers;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // zone_name - computed: true, optional: false, required: false
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_gids: cdktf.booleanToTerraform(this._allocateGids),
      allocate_uids: cdktf.booleanToTerraform(this._allocateUids),
      assume_default_domain: cdktf.booleanToTerraform(this._assumeDefaultDomain),
      authentication: cdktf.booleanToTerraform(this._authentication),
      check_duplicates: cdktf.booleanToTerraform(this._checkDuplicates),
      check_online_interval: cdktf.numberToTerraform(this._checkOnlineInterval),
      controller_time: cdktf.numberToTerraform(this._controllerTime),
      create_home_directory: cdktf.booleanToTerraform(this._createHomeDirectory),
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      domain_controller: cdktf.stringToTerraform(this._domainController),
      domain_offline_alerts: cdktf.booleanToTerraform(this._domainOfflineAlerts),
      extra_expected_spns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraExpectedSpns),
      findable_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._findableGroups),
      findable_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._findableUsers),
      groupnet: cdktf.stringToTerraform(this._groupnet),
      home_directory_template: cdktf.stringToTerraform(this._homeDirectoryTemplate),
      id: cdktf.stringToTerraform(this._id),
      ignore_all_trusts: cdktf.booleanToTerraform(this._ignoreAllTrusts),
      ignored_trusted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredTrustedDomains),
      include_trusted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeTrustedDomains),
      instance: cdktf.stringToTerraform(this._instance),
      kerberos_hdfs_spn: cdktf.booleanToTerraform(this._kerberosHdfsSpn),
      kerberos_nfs_spn: cdktf.booleanToTerraform(this._kerberosNfsSpn),
      ldap_sign_and_seal: cdktf.booleanToTerraform(this._ldapSignAndSeal),
      login_shell: cdktf.stringToTerraform(this._loginShell),
      lookup_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lookupDomains),
      lookup_groups: cdktf.booleanToTerraform(this._lookupGroups),
      lookup_normalize_groups: cdktf.booleanToTerraform(this._lookupNormalizeGroups),
      lookup_normalize_users: cdktf.booleanToTerraform(this._lookupNormalizeUsers),
      lookup_users: cdktf.booleanToTerraform(this._lookupUsers),
      machine_account: cdktf.stringToTerraform(this._machineAccount),
      machine_password_changes: cdktf.booleanToTerraform(this._machinePasswordChanges),
      machine_password_lifespan: cdktf.numberToTerraform(this._machinePasswordLifespan),
      name: cdktf.stringToTerraform(this._name),
      node_dc_affinity: cdktf.stringToTerraform(this._nodeDcAffinity),
      node_dc_affinity_timeout: cdktf.numberToTerraform(this._nodeDcAffinityTimeout),
      nss_enumeration: cdktf.booleanToTerraform(this._nssEnumeration),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      password: cdktf.stringToTerraform(this._password),
      reset_schannel: cdktf.booleanToTerraform(this._resetSchannel),
      restrict_findable: cdktf.booleanToTerraform(this._restrictFindable),
      rpc_call_timeout: cdktf.numberToTerraform(this._rpcCallTimeout),
      scope: cdktf.stringToTerraform(this._scope),
      server_retry_limit: cdktf.numberToTerraform(this._serverRetryLimit),
      sfu_support: cdktf.stringToTerraform(this._sfuSupport),
      spns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spns),
      store_sfu_mappings: cdktf.booleanToTerraform(this._storeSfuMappings),
      unfindable_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unfindableGroups),
      unfindable_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._unfindableUsers),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_gids: {
        value: cdktf.booleanToHclTerraform(this._allocateGids),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allocate_uids: {
        value: cdktf.booleanToHclTerraform(this._allocateUids),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assume_default_domain: {
        value: cdktf.booleanToHclTerraform(this._assumeDefaultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication: {
        value: cdktf.booleanToHclTerraform(this._authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_duplicates: {
        value: cdktf.booleanToHclTerraform(this._checkDuplicates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_online_interval: {
        value: cdktf.numberToHclTerraform(this._checkOnlineInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      controller_time: {
        value: cdktf.numberToHclTerraform(this._controllerTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      create_home_directory: {
        value: cdktf.booleanToHclTerraform(this._createHomeDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_controller: {
        value: cdktf.stringToHclTerraform(this._domainController),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_offline_alerts: {
        value: cdktf.booleanToHclTerraform(this._domainOfflineAlerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_expected_spns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraExpectedSpns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      findable_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._findableGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      findable_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._findableUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      groupnet: {
        value: cdktf.stringToHclTerraform(this._groupnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      home_directory_template: {
        value: cdktf.stringToHclTerraform(this._homeDirectoryTemplate),
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
      ignore_all_trusts: {
        value: cdktf.booleanToHclTerraform(this._ignoreAllTrusts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignored_trusted_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredTrustedDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      include_trusted_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeTrustedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_hdfs_spn: {
        value: cdktf.booleanToHclTerraform(this._kerberosHdfsSpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kerberos_nfs_spn: {
        value: cdktf.booleanToHclTerraform(this._kerberosNfsSpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_sign_and_seal: {
        value: cdktf.booleanToHclTerraform(this._ldapSignAndSeal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_shell: {
        value: cdktf.stringToHclTerraform(this._loginShell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lookupDomains),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lookup_groups: {
        value: cdktf.booleanToHclTerraform(this._lookupGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lookup_normalize_groups: {
        value: cdktf.booleanToHclTerraform(this._lookupNormalizeGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lookup_normalize_users: {
        value: cdktf.booleanToHclTerraform(this._lookupNormalizeUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lookup_users: {
        value: cdktf.booleanToHclTerraform(this._lookupUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_account: {
        value: cdktf.stringToHclTerraform(this._machineAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_password_changes: {
        value: cdktf.booleanToHclTerraform(this._machinePasswordChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_password_lifespan: {
        value: cdktf.numberToHclTerraform(this._machinePasswordLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_dc_affinity: {
        value: cdktf.stringToHclTerraform(this._nodeDcAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_dc_affinity_timeout: {
        value: cdktf.numberToHclTerraform(this._nodeDcAffinityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nss_enumeration: {
        value: cdktf.booleanToHclTerraform(this._nssEnumeration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_schannel: {
        value: cdktf.booleanToHclTerraform(this._resetSchannel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_findable: {
        value: cdktf.booleanToHclTerraform(this._restrictFindable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rpc_call_timeout: {
        value: cdktf.numberToHclTerraform(this._rpcCallTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_retry_limit: {
        value: cdktf.numberToHclTerraform(this._serverRetryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sfu_support: {
        value: cdktf.stringToHclTerraform(this._sfuSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      store_sfu_mappings: {
        value: cdktf.booleanToHclTerraform(this._storeSfuMappings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unfindable_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unfindableGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unfindable_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._unfindableUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
