// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandSetGlobalPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure advanced global attributes. It's highly recommended to consult with Check Point's Technical Support before modifying these values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#advanced_conf ManagementCommandSetGlobalProperties#advanced_conf}
  */
  readonly advancedConf?: { [key: string]: string };
  /**
  * After installing an OPSEC application, the remote administration (RA) utility enables an OPSEC product to finish registering itself without having to access the SmartConsole. If set to true, any host including the application host can run the utility. Otherwise,  the RA utility can only be run from the Security Management host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#allow_remote_registration_of_opsec_products ManagementCommandSetGlobalProperties#allow_remote_registration_of_opsec_products}
  */
  readonly allowRemoteRegistrationOfOpsecProducts?: boolean | cdktf.IResolvable;
  /**
  * Define Authentication properties that are common to all users and to the various ways that the Check Point Security Gateway asks for passwords (User, Client and Session Authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#authentication ManagementCommandSetGlobalProperties#authentication}
  */
  readonly authentication?: { [key: string]: string };
  /**
  * Specify system-wide properties. Select GTP intra tunnel inspection options, including anti-spoofing; tracking and logging options, and integrity tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#carrier_security ManagementCommandSetGlobalProperties#carrier_security}
  */
  readonly carrierSecurity?: { [key: string]: string };
  /**
  * Configure settings that relate to ConnectControl server load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#connect_control ManagementCommandSetGlobalProperties#connect_control}
  */
  readonly connectControl?: { [key: string]: string };
  /**
  * Configure automatic downloads from Check Point and anonymously share product data. Options selected here apply to all Security Gateways, Clusters and VSX devices managed by this management server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#data_access_control ManagementCommandSetGlobalProperties#data_access_control}
  */
  readonly dataAccessControl?: { [key: string]: string };
  /**
  * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#domains_to_process ManagementCommandSetGlobalProperties#domains_to_process}
  */
  readonly domainsToProcess?: string[];
  /**
  * Add implied rules to or remove them from the Firewall Rule Base. Determine the position of the implied rules in the Rule Base, and whether or not to log them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#firewall ManagementCommandSetGlobalProperties#firewall}
  */
  readonly firewall?: { [key: string]: string };
  /**
  * Enable the Hit Count feature that tracks the number of connections that each rule matches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#hit_count ManagementCommandSetGlobalProperties#hit_count}
  */
  readonly hitCount?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#id ManagementCommandSetGlobalProperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#ignore_errors ManagementCommandSetGlobalProperties#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#ignore_warnings ManagementCommandSetGlobalProperties#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Define system-wide logging and alerting parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#log_and_alert ManagementCommandSetGlobalProperties#log_and_alert}
  */
  readonly logAndAlert?: { [key: string]: string };
  /**
  * Configure settings that apply to all NAT connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#nat ManagementCommandSetGlobalProperties#nat}
  */
  readonly nat?: { [key: string]: string };
  /**
  * Indicates how many incorrectly signed packets will be tolerated before assuming that there is an attack on the packet tagging and revoking the client's key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#num_spoofing_errs_that_trigger_brute_force ManagementCommandSetGlobalProperties#num_spoofing_errs_that_trigger_brute_force}
  */
  readonly numSpoofingErrsThatTriggerBruteForce?: number;
  /**
  * Select whether a proxy server is used when servers, gateways, or clients need to access the internet for certain Check Point features and set the default proxy server that will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#proxy ManagementCommandSetGlobalProperties#proxy}
  */
  readonly proxy?: { [key: string]: string };
  /**
  * Define the general parameters of Quality of Service (QoS) and apply them to QoS rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#qos ManagementCommandSetGlobalProperties#qos}
  */
  readonly qos?: { [key: string]: string };
  /**
  * Configure Remote Access properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#remote_access ManagementCommandSetGlobalProperties#remote_access}
  */
  readonly remoteAccess?: { [key: string]: string };
  /**
  * Adjust Stateful Inspection parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#stateful_inspection ManagementCommandSetGlobalProperties#stateful_inspection}
  */
  readonly statefulInspection?: { [key: string]: string };
  /**
  * Set the expiration for a user account and configure "about to expire" warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#user_accounts ManagementCommandSetGlobalProperties#user_accounts}
  */
  readonly userAccounts?: { [key: string]: string };
  /**
  * Decide whether to display and access the WebAccess rule base. This policy defines which users (that is, which Windows Domains) have access to the internal sites of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#user_authority ManagementCommandSetGlobalProperties#user_authority}
  */
  readonly userAuthority?: { [key: string]: string };
  /**
  * Set a language for the UserCheck message if the language setting in the user's browser cannot be determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#user_check ManagementCommandSetGlobalProperties#user_check}
  */
  readonly userCheck?: { [key: string]: string };
  /**
  * User can enable LDAP User Directory as well as specify global parameters for LDAP. If LDAP User Directory is enabled, this means that users are managed on an external LDAP server and not on the internal Check Point Security Gateway users databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#user_directory ManagementCommandSetGlobalProperties#user_directory}
  */
  readonly userDirectory?: { [key: string]: string };
  /**
  * Configure settings relevant to VPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#vpn ManagementCommandSetGlobalProperties#vpn}
  */
  readonly vpn?: { [key: string]: string };
  /**
  * non_unique_ip_address_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#non_unique_ip_address_ranges ManagementCommandSetGlobalProperties#non_unique_ip_address_ranges}
  */
  readonly nonUniqueIpAddressRanges?: ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges[] | cdktf.IResolvable;
}
export interface ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges {
  /**
  * The type of the IP Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#address_type ManagementCommandSetGlobalProperties#address_type}
  */
  readonly addressType?: string;
  /**
  * The first IPV4 Address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#first_ipv4_address ManagementCommandSetGlobalProperties#first_ipv4_address}
  */
  readonly firstIpv4Address?: string;
  /**
  * The first IPV6 Address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#first_ipv6_address ManagementCommandSetGlobalProperties#first_ipv6_address}
  */
  readonly firstIpv6Address?: string;
  /**
  * The last IPV4 Address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#last_ipv4_address ManagementCommandSetGlobalProperties#last_ipv4_address}
  */
  readonly lastIpv4Address?: string;
  /**
  * The last IPV6 Address in the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#last_ipv6_address ManagementCommandSetGlobalProperties#last_ipv6_address}
  */
  readonly lastIpv6Address?: string;
}

export function managementCommandSetGlobalPropertiesNonUniqueIpAddressRangesToTerraform(struct?: ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_type: cdktf.stringToTerraform(struct!.addressType),
    first_ipv4_address: cdktf.stringToTerraform(struct!.firstIpv4Address),
    first_ipv6_address: cdktf.stringToTerraform(struct!.firstIpv6Address),
    last_ipv4_address: cdktf.stringToTerraform(struct!.lastIpv4Address),
    last_ipv6_address: cdktf.stringToTerraform(struct!.lastIpv6Address),
  }
}


export function managementCommandSetGlobalPropertiesNonUniqueIpAddressRangesToHclTerraform(struct?: ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_type: {
      value: cdktf.stringToHclTerraform(struct!.addressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.firstIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.firstIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.lastIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.lastIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRangesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressType = this._addressType;
    }
    if (this._firstIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIpv4Address = this._firstIpv4Address;
    }
    if (this._firstIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIpv6Address = this._firstIpv6Address;
    }
    if (this._lastIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastIpv4Address = this._lastIpv4Address;
    }
    if (this._lastIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastIpv6Address = this._lastIpv6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressType = undefined;
      this._firstIpv4Address = undefined;
      this._firstIpv6Address = undefined;
      this._lastIpv4Address = undefined;
      this._lastIpv6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressType = value.addressType;
      this._firstIpv4Address = value.firstIpv4Address;
      this._firstIpv6Address = value.firstIpv6Address;
      this._lastIpv4Address = value.lastIpv4Address;
      this._lastIpv6Address = value.lastIpv6Address;
    }
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // first_ipv4_address - computed: false, optional: true, required: false
  private _firstIpv4Address?: string; 
  public get firstIpv4Address() {
    return this.getStringAttribute('first_ipv4_address');
  }
  public set firstIpv4Address(value: string) {
    this._firstIpv4Address = value;
  }
  public resetFirstIpv4Address() {
    this._firstIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpv4AddressInput() {
    return this._firstIpv4Address;
  }

  // first_ipv6_address - computed: false, optional: true, required: false
  private _firstIpv6Address?: string; 
  public get firstIpv6Address() {
    return this.getStringAttribute('first_ipv6_address');
  }
  public set firstIpv6Address(value: string) {
    this._firstIpv6Address = value;
  }
  public resetFirstIpv6Address() {
    this._firstIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpv6AddressInput() {
    return this._firstIpv6Address;
  }

  // last_ipv4_address - computed: false, optional: true, required: false
  private _lastIpv4Address?: string; 
  public get lastIpv4Address() {
    return this.getStringAttribute('last_ipv4_address');
  }
  public set lastIpv4Address(value: string) {
    this._lastIpv4Address = value;
  }
  public resetLastIpv4Address() {
    this._lastIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastIpv4AddressInput() {
    return this._lastIpv4Address;
  }

  // last_ipv6_address - computed: false, optional: true, required: false
  private _lastIpv6Address?: string; 
  public get lastIpv6Address() {
    return this.getStringAttribute('last_ipv6_address');
  }
  public set lastIpv6Address(value: string) {
    this._lastIpv6Address = value;
  }
  public resetLastIpv6Address() {
    this._lastIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastIpv6AddressInput() {
    return this._lastIpv6Address;
  }
}

export class ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRangesList extends cdktf.ComplexList {
  public internalValue? : ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges[] | cdktf.IResolvable

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
  public get(index: number): ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRangesOutputReference {
    return new ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties checkpoint_management_command_set_global_properties}
*/
export class ManagementCommandSetGlobalProperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_set_global_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandSetGlobalProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandSetGlobalProperties to import
  * @param importFromId The id of the existing ManagementCommandSetGlobalProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandSetGlobalProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_set_global_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_command_set_global_properties checkpoint_management_command_set_global_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandSetGlobalPropertiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandSetGlobalPropertiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_set_global_properties',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedConf = config.advancedConf;
    this._allowRemoteRegistrationOfOpsecProducts = config.allowRemoteRegistrationOfOpsecProducts;
    this._authentication = config.authentication;
    this._carrierSecurity = config.carrierSecurity;
    this._connectControl = config.connectControl;
    this._dataAccessControl = config.dataAccessControl;
    this._domainsToProcess = config.domainsToProcess;
    this._firewall = config.firewall;
    this._hitCount = config.hitCount;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._logAndAlert = config.logAndAlert;
    this._nat = config.nat;
    this._numSpoofingErrsThatTriggerBruteForce = config.numSpoofingErrsThatTriggerBruteForce;
    this._proxy = config.proxy;
    this._qos = config.qos;
    this._remoteAccess = config.remoteAccess;
    this._statefulInspection = config.statefulInspection;
    this._userAccounts = config.userAccounts;
    this._userAuthority = config.userAuthority;
    this._userCheck = config.userCheck;
    this._userDirectory = config.userDirectory;
    this._vpn = config.vpn;
    this._nonUniqueIpAddressRanges.internalValue = config.nonUniqueIpAddressRanges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_conf - computed: false, optional: true, required: false
  private _advancedConf?: { [key: string]: string }; 
  public get advancedConf() {
    return this.getStringMapAttribute('advanced_conf');
  }
  public set advancedConf(value: { [key: string]: string }) {
    this._advancedConf = value;
  }
  public resetAdvancedConf() {
    this._advancedConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfInput() {
    return this._advancedConf;
  }

  // allow_remote_registration_of_opsec_products - computed: false, optional: true, required: false
  private _allowRemoteRegistrationOfOpsecProducts?: boolean | cdktf.IResolvable; 
  public get allowRemoteRegistrationOfOpsecProducts() {
    return this.getBooleanAttribute('allow_remote_registration_of_opsec_products');
  }
  public set allowRemoteRegistrationOfOpsecProducts(value: boolean | cdktf.IResolvable) {
    this._allowRemoteRegistrationOfOpsecProducts = value;
  }
  public resetAllowRemoteRegistrationOfOpsecProducts() {
    this._allowRemoteRegistrationOfOpsecProducts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteRegistrationOfOpsecProductsInput() {
    return this._allowRemoteRegistrationOfOpsecProducts;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: { [key: string]: string }; 
  public get authentication() {
    return this.getStringMapAttribute('authentication');
  }
  public set authentication(value: { [key: string]: string }) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // carrier_security - computed: false, optional: true, required: false
  private _carrierSecurity?: { [key: string]: string }; 
  public get carrierSecurity() {
    return this.getStringMapAttribute('carrier_security');
  }
  public set carrierSecurity(value: { [key: string]: string }) {
    this._carrierSecurity = value;
  }
  public resetCarrierSecurity() {
    this._carrierSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierSecurityInput() {
    return this._carrierSecurity;
  }

  // connect_control - computed: false, optional: true, required: false
  private _connectControl?: { [key: string]: string }; 
  public get connectControl() {
    return this.getStringMapAttribute('connect_control');
  }
  public set connectControl(value: { [key: string]: string }) {
    this._connectControl = value;
  }
  public resetConnectControl() {
    this._connectControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectControlInput() {
    return this._connectControl;
  }

  // data_access_control - computed: false, optional: true, required: false
  private _dataAccessControl?: { [key: string]: string }; 
  public get dataAccessControl() {
    return this.getStringMapAttribute('data_access_control');
  }
  public set dataAccessControl(value: { [key: string]: string }) {
    this._dataAccessControl = value;
  }
  public resetDataAccessControl() {
    this._dataAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessControlInput() {
    return this._dataAccessControl;
  }

  // domains_to_process - computed: false, optional: true, required: false
  private _domainsToProcess?: string[]; 
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }
  public set domainsToProcess(value: string[]) {
    this._domainsToProcess = value;
  }
  public resetDomainsToProcess() {
    this._domainsToProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsToProcessInput() {
    return this._domainsToProcess;
  }

  // firewall - computed: false, optional: true, required: false
  private _firewall?: { [key: string]: string }; 
  public get firewall() {
    return this.getStringMapAttribute('firewall');
  }
  public set firewall(value: { [key: string]: string }) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
  }

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: { [key: string]: string }; 
  public get hitCount() {
    return this.getStringMapAttribute('hit_count');
  }
  public set hitCount(value: { [key: string]: string }) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // log_and_alert - computed: false, optional: true, required: false
  private _logAndAlert?: { [key: string]: string }; 
  public get logAndAlert() {
    return this.getStringMapAttribute('log_and_alert');
  }
  public set logAndAlert(value: { [key: string]: string }) {
    this._logAndAlert = value;
  }
  public resetLogAndAlert() {
    this._logAndAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAndAlertInput() {
    return this._logAndAlert;
  }

  // nat - computed: false, optional: true, required: false
  private _nat?: { [key: string]: string }; 
  public get nat() {
    return this.getStringMapAttribute('nat');
  }
  public set nat(value: { [key: string]: string }) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // num_spoofing_errs_that_trigger_brute_force - computed: false, optional: true, required: false
  private _numSpoofingErrsThatTriggerBruteForce?: number; 
  public get numSpoofingErrsThatTriggerBruteForce() {
    return this.getNumberAttribute('num_spoofing_errs_that_trigger_brute_force');
  }
  public set numSpoofingErrsThatTriggerBruteForce(value: number) {
    this._numSpoofingErrsThatTriggerBruteForce = value;
  }
  public resetNumSpoofingErrsThatTriggerBruteForce() {
    this._numSpoofingErrsThatTriggerBruteForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSpoofingErrsThatTriggerBruteForceInput() {
    return this._numSpoofingErrsThatTriggerBruteForce;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: { [key: string]: string }; 
  public get proxy() {
    return this.getStringMapAttribute('proxy');
  }
  public set proxy(value: { [key: string]: string }) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: { [key: string]: string }; 
  public get qos() {
    return this.getStringMapAttribute('qos');
  }
  public set qos(value: { [key: string]: string }) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // remote_access - computed: false, optional: true, required: false
  private _remoteAccess?: { [key: string]: string }; 
  public get remoteAccess() {
    return this.getStringMapAttribute('remote_access');
  }
  public set remoteAccess(value: { [key: string]: string }) {
    this._remoteAccess = value;
  }
  public resetRemoteAccess() {
    this._remoteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAccessInput() {
    return this._remoteAccess;
  }

  // stateful_inspection - computed: false, optional: true, required: false
  private _statefulInspection?: { [key: string]: string }; 
  public get statefulInspection() {
    return this.getStringMapAttribute('stateful_inspection');
  }
  public set statefulInspection(value: { [key: string]: string }) {
    this._statefulInspection = value;
  }
  public resetStatefulInspection() {
    this._statefulInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInspectionInput() {
    return this._statefulInspection;
  }

  // user_accounts - computed: false, optional: true, required: false
  private _userAccounts?: { [key: string]: string }; 
  public get userAccounts() {
    return this.getStringMapAttribute('user_accounts');
  }
  public set userAccounts(value: { [key: string]: string }) {
    this._userAccounts = value;
  }
  public resetUserAccounts() {
    this._userAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountsInput() {
    return this._userAccounts;
  }

  // user_authority - computed: false, optional: true, required: false
  private _userAuthority?: { [key: string]: string }; 
  public get userAuthority() {
    return this.getStringMapAttribute('user_authority');
  }
  public set userAuthority(value: { [key: string]: string }) {
    this._userAuthority = value;
  }
  public resetUserAuthority() {
    this._userAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorityInput() {
    return this._userAuthority;
  }

  // user_check - computed: false, optional: true, required: false
  private _userCheck?: { [key: string]: string }; 
  public get userCheck() {
    return this.getStringMapAttribute('user_check');
  }
  public set userCheck(value: { [key: string]: string }) {
    this._userCheck = value;
  }
  public resetUserCheck() {
    this._userCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userCheckInput() {
    return this._userCheck;
  }

  // user_directory - computed: false, optional: true, required: false
  private _userDirectory?: { [key: string]: string }; 
  public get userDirectory() {
    return this.getStringMapAttribute('user_directory');
  }
  public set userDirectory(value: { [key: string]: string }) {
    this._userDirectory = value;
  }
  public resetUserDirectory() {
    this._userDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDirectoryInput() {
    return this._userDirectory;
  }

  // vpn - computed: false, optional: true, required: false
  private _vpn?: { [key: string]: string }; 
  public get vpn() {
    return this.getStringMapAttribute('vpn');
  }
  public set vpn(value: { [key: string]: string }) {
    this._vpn = value;
  }
  public resetVpn() {
    this._vpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // non_unique_ip_address_ranges - computed: false, optional: true, required: false
  private _nonUniqueIpAddressRanges = new ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRangesList(this, "non_unique_ip_address_ranges", false);
  public get nonUniqueIpAddressRanges() {
    return this._nonUniqueIpAddressRanges;
  }
  public putNonUniqueIpAddressRanges(value: ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRanges[] | cdktf.IResolvable) {
    this._nonUniqueIpAddressRanges.internalValue = value;
  }
  public resetNonUniqueIpAddressRanges() {
    this._nonUniqueIpAddressRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonUniqueIpAddressRangesInput() {
    return this._nonUniqueIpAddressRanges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_conf: cdktf.hashMapper(cdktf.stringToTerraform)(this._advancedConf),
      allow_remote_registration_of_opsec_products: cdktf.booleanToTerraform(this._allowRemoteRegistrationOfOpsecProducts),
      authentication: cdktf.hashMapper(cdktf.stringToTerraform)(this._authentication),
      carrier_security: cdktf.hashMapper(cdktf.stringToTerraform)(this._carrierSecurity),
      connect_control: cdktf.hashMapper(cdktf.stringToTerraform)(this._connectControl),
      data_access_control: cdktf.hashMapper(cdktf.stringToTerraform)(this._dataAccessControl),
      domains_to_process: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainsToProcess),
      firewall: cdktf.hashMapper(cdktf.stringToTerraform)(this._firewall),
      hit_count: cdktf.hashMapper(cdktf.stringToTerraform)(this._hitCount),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      log_and_alert: cdktf.hashMapper(cdktf.stringToTerraform)(this._logAndAlert),
      nat: cdktf.hashMapper(cdktf.stringToTerraform)(this._nat),
      num_spoofing_errs_that_trigger_brute_force: cdktf.numberToTerraform(this._numSpoofingErrsThatTriggerBruteForce),
      proxy: cdktf.hashMapper(cdktf.stringToTerraform)(this._proxy),
      qos: cdktf.hashMapper(cdktf.stringToTerraform)(this._qos),
      remote_access: cdktf.hashMapper(cdktf.stringToTerraform)(this._remoteAccess),
      stateful_inspection: cdktf.hashMapper(cdktf.stringToTerraform)(this._statefulInspection),
      user_accounts: cdktf.hashMapper(cdktf.stringToTerraform)(this._userAccounts),
      user_authority: cdktf.hashMapper(cdktf.stringToTerraform)(this._userAuthority),
      user_check: cdktf.hashMapper(cdktf.stringToTerraform)(this._userCheck),
      user_directory: cdktf.hashMapper(cdktf.stringToTerraform)(this._userDirectory),
      vpn: cdktf.hashMapper(cdktf.stringToTerraform)(this._vpn),
      non_unique_ip_address_ranges: cdktf.listMapper(managementCommandSetGlobalPropertiesNonUniqueIpAddressRangesToTerraform, true)(this._nonUniqueIpAddressRanges.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_conf: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._advancedConf),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      allow_remote_registration_of_opsec_products: {
        value: cdktf.booleanToHclTerraform(this._allowRemoteRegistrationOfOpsecProducts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._authentication),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      carrier_security: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._carrierSecurity),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connect_control: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._connectControl),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      data_access_control: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dataAccessControl),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      domains_to_process: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainsToProcess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firewall: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._firewall),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hit_count: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._hitCount),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_and_alert: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._logAndAlert),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      nat: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nat),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      num_spoofing_errs_that_trigger_brute_force: {
        value: cdktf.numberToHclTerraform(this._numSpoofingErrsThatTriggerBruteForce),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._proxy),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      qos: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._qos),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      remote_access: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._remoteAccess),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      stateful_inspection: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._statefulInspection),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_accounts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userAccounts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_authority: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userAuthority),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_check: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userCheck),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_directory: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._userDirectory),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpn: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vpn),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      non_unique_ip_address_ranges: {
        value: cdktf.listMapperHcl(managementCommandSetGlobalPropertiesNonUniqueIpAddressRangesToHclTerraform, true)(this._nonUniqueIpAddressRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementCommandSetGlobalPropertiesNonUniqueIpAddressRangesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
