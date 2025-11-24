// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdmBootstrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Rubrik cluster sends messages for the admin account to this email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#admin_email CdmBootstrap#admin_email}
  */
  readonly adminEmail: string;
  /**
  * Password for the admin account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#admin_password CdmBootstrap#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Unique name to assign to the Rubrik cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#cluster_name CdmBootstrap#cluster_name}
  */
  readonly clusterName: string;
  /**
  * IP address of the cluster node to connect to. If not specified, a random node from the `cluster_nodes` map will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#cluster_node_ip_address CdmBootstrap#cluster_node_ip_address}
  */
  readonly clusterNodeIpAddress?: string;
  /**
  * The node name and IP formatted as a map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#cluster_nodes CdmBootstrap#cluster_nodes}
  */
  readonly clusterNodes?: { [key: string]: string };
  /**
  * IPv4 addresses of DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#dns_name_servers CdmBootstrap#dns_name_servers}
  */
  readonly dnsNameServers: string[];
  /**
  * The search domain that the DNS Service will use to resolve hostnames that are not fully qualified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#dns_search_domain CdmBootstrap#dns_search_domain}
  */
  readonly dnsSearchDomain: string[];
  /**
  * Enable software data encryption at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#enable_encryption CdmBootstrap#enable_encryption}
  */
  readonly enableEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#id CdmBootstrap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address assigned to the management network gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#management_gateway CdmBootstrap#management_gateway}
  */
  readonly managementGateway: string;
  /**
  * Subnet mask assigned to the management network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#management_subnet_mask CdmBootstrap#management_subnet_mask}
  */
  readonly managementSubnetMask: string;
  /**
  * The node name and IP address formatted as a map. **Deprecated:** use `cluster_nodes` instead. Only kept for backwards compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#node_config CdmBootstrap#node_config}
  */
  readonly nodeConfig?: { [key: string]: string };
  /**
  * Symmetric key material for NTP server #1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server1_key CdmBootstrap#ntp_server1_key}
  */
  readonly ntpServer1Key?: string;
  /**
  * Key id number for NTP server #1 (typically this is 0).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server1_key_id CdmBootstrap#ntp_server1_key_id}
  */
  readonly ntpServer1KeyId?: number;
  /**
  * Symmetric key type for NTP server #1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server1_key_type CdmBootstrap#ntp_server1_key_type}
  */
  readonly ntpServer1KeyType?: string;
  /**
  * Name or IP address for NTP server #1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server1_name CdmBootstrap#ntp_server1_name}
  */
  readonly ntpServer1Name: string;
  /**
  * Symmetric key material for NTP server #2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server2_key CdmBootstrap#ntp_server2_key}
  */
  readonly ntpServer2Key?: string;
  /**
  * Key id number for NTP server #2 (typically this is 1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server2_key_id CdmBootstrap#ntp_server2_key_id}
  */
  readonly ntpServer2KeyId?: number;
  /**
  * Symmetric key type for NTP server #2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server2_key_type CdmBootstrap#ntp_server2_key_type}
  */
  readonly ntpServer2KeyType?: string;
  /**
  * Name or IP address for NTP server #2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#ntp_server2_name CdmBootstrap#ntp_server2_name}
  */
  readonly ntpServer2Name: string;
  /**
  * The time to wait to establish a connection the Rubrik cluster before returning an error (defaults to `4m`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#timeout CdmBootstrap#timeout}
  */
  readonly timeout?: string;
  /**
  * Flag to determine if Terraform should wait for the bootstrap process to complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#wait_for_completion CdmBootstrap#wait_for_completion}
  */
  readonly waitForCompletion?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#timeouts CdmBootstrap#timeouts}
  */
  readonly timeouts?: CdmBootstrapTimeouts;
}
export interface CdmBootstrapTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#create CdmBootstrap#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#default CdmBootstrap#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#read CdmBootstrap#read}
  */
  readonly read?: string;
}

export function cdmBootstrapTimeoutsToTerraform(struct?: CdmBootstrapTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function cdmBootstrapTimeoutsToHclTerraform(struct?: CdmBootstrapTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdmBootstrapTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CdmBootstrapTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdmBootstrapTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._read = value.read;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap polaris_cdm_bootstrap}
*/
export class CdmBootstrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_cdm_bootstrap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdmBootstrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdmBootstrap to import
  * @param importFromId The id of the existing CdmBootstrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdmBootstrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_cdm_bootstrap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.1/docs/resources/cdm_bootstrap polaris_cdm_bootstrap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdmBootstrapConfig
  */
  public constructor(scope: Construct, id: string, config: CdmBootstrapConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_cdm_bootstrap',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminEmail = config.adminEmail;
    this._adminPassword = config.adminPassword;
    this._clusterName = config.clusterName;
    this._clusterNodeIpAddress = config.clusterNodeIpAddress;
    this._clusterNodes = config.clusterNodes;
    this._dnsNameServers = config.dnsNameServers;
    this._dnsSearchDomain = config.dnsSearchDomain;
    this._enableEncryption = config.enableEncryption;
    this._id = config.id;
    this._managementGateway = config.managementGateway;
    this._managementSubnetMask = config.managementSubnetMask;
    this._nodeConfig = config.nodeConfig;
    this._ntpServer1Key = config.ntpServer1Key;
    this._ntpServer1KeyId = config.ntpServer1KeyId;
    this._ntpServer1KeyType = config.ntpServer1KeyType;
    this._ntpServer1Name = config.ntpServer1Name;
    this._ntpServer2Key = config.ntpServer2Key;
    this._ntpServer2KeyId = config.ntpServer2KeyId;
    this._ntpServer2KeyType = config.ntpServer2KeyType;
    this._ntpServer2Name = config.ntpServer2Name;
    this._timeout = config.timeout;
    this._waitForCompletion = config.waitForCompletion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_email - computed: false, optional: false, required: true
  private _adminEmail?: string; 
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }
  public set adminEmail(value: string) {
    this._adminEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailInput() {
    return this._adminEmail;
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_node_ip_address - computed: false, optional: true, required: false
  private _clusterNodeIpAddress?: string; 
  public get clusterNodeIpAddress() {
    return this.getStringAttribute('cluster_node_ip_address');
  }
  public set clusterNodeIpAddress(value: string) {
    this._clusterNodeIpAddress = value;
  }
  public resetClusterNodeIpAddress() {
    this._clusterNodeIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodeIpAddressInput() {
    return this._clusterNodeIpAddress;
  }

  // cluster_nodes - computed: false, optional: true, required: false
  private _clusterNodes?: { [key: string]: string }; 
  public get clusterNodes() {
    return this.getStringMapAttribute('cluster_nodes');
  }
  public set clusterNodes(value: { [key: string]: string }) {
    this._clusterNodes = value;
  }
  public resetClusterNodes() {
    this._clusterNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodesInput() {
    return this._clusterNodes;
  }

  // dns_name_servers - computed: false, optional: false, required: true
  private _dnsNameServers?: string[]; 
  public get dnsNameServers() {
    return this.getListAttribute('dns_name_servers');
  }
  public set dnsNameServers(value: string[]) {
    this._dnsNameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameServersInput() {
    return this._dnsNameServers;
  }

  // dns_search_domain - computed: false, optional: false, required: true
  private _dnsSearchDomain?: string[]; 
  public get dnsSearchDomain() {
    return this.getListAttribute('dns_search_domain');
  }
  public set dnsSearchDomain(value: string[]) {
    this._dnsSearchDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchDomainInput() {
    return this._dnsSearchDomain;
  }

  // enable_encryption - computed: false, optional: true, required: false
  private _enableEncryption?: boolean | cdktf.IResolvable; 
  public get enableEncryption() {
    return this.getBooleanAttribute('enable_encryption');
  }
  public set enableEncryption(value: boolean | cdktf.IResolvable) {
    this._enableEncryption = value;
  }
  public resetEnableEncryption() {
    this._enableEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEncryptionInput() {
    return this._enableEncryption;
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

  // management_gateway - computed: false, optional: false, required: true
  private _managementGateway?: string; 
  public get managementGateway() {
    return this.getStringAttribute('management_gateway');
  }
  public set managementGateway(value: string) {
    this._managementGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementGatewayInput() {
    return this._managementGateway;
  }

  // management_subnet_mask - computed: false, optional: false, required: true
  private _managementSubnetMask?: string; 
  public get managementSubnetMask() {
    return this.getStringAttribute('management_subnet_mask');
  }
  public set managementSubnetMask(value: string) {
    this._managementSubnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSubnetMaskInput() {
    return this._managementSubnetMask;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig?: { [key: string]: string }; 
  public get nodeConfig() {
    return this.getStringMapAttribute('node_config');
  }
  public set nodeConfig(value: { [key: string]: string }) {
    this._nodeConfig = value;
  }
  public resetNodeConfig() {
    this._nodeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig;
  }

  // ntp_server1_key - computed: false, optional: true, required: false
  private _ntpServer1Key?: string; 
  public get ntpServer1Key() {
    return this.getStringAttribute('ntp_server1_key');
  }
  public set ntpServer1Key(value: string) {
    this._ntpServer1Key = value;
  }
  public resetNtpServer1Key() {
    this._ntpServer1Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1KeyInput() {
    return this._ntpServer1Key;
  }

  // ntp_server1_key_id - computed: false, optional: true, required: false
  private _ntpServer1KeyId?: number; 
  public get ntpServer1KeyId() {
    return this.getNumberAttribute('ntp_server1_key_id');
  }
  public set ntpServer1KeyId(value: number) {
    this._ntpServer1KeyId = value;
  }
  public resetNtpServer1KeyId() {
    this._ntpServer1KeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1KeyIdInput() {
    return this._ntpServer1KeyId;
  }

  // ntp_server1_key_type - computed: false, optional: true, required: false
  private _ntpServer1KeyType?: string; 
  public get ntpServer1KeyType() {
    return this.getStringAttribute('ntp_server1_key_type');
  }
  public set ntpServer1KeyType(value: string) {
    this._ntpServer1KeyType = value;
  }
  public resetNtpServer1KeyType() {
    this._ntpServer1KeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1KeyTypeInput() {
    return this._ntpServer1KeyType;
  }

  // ntp_server1_name - computed: false, optional: false, required: true
  private _ntpServer1Name?: string; 
  public get ntpServer1Name() {
    return this.getStringAttribute('ntp_server1_name');
  }
  public set ntpServer1Name(value: string) {
    this._ntpServer1Name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1NameInput() {
    return this._ntpServer1Name;
  }

  // ntp_server2_key - computed: false, optional: true, required: false
  private _ntpServer2Key?: string; 
  public get ntpServer2Key() {
    return this.getStringAttribute('ntp_server2_key');
  }
  public set ntpServer2Key(value: string) {
    this._ntpServer2Key = value;
  }
  public resetNtpServer2Key() {
    this._ntpServer2Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2KeyInput() {
    return this._ntpServer2Key;
  }

  // ntp_server2_key_id - computed: false, optional: true, required: false
  private _ntpServer2KeyId?: number; 
  public get ntpServer2KeyId() {
    return this.getNumberAttribute('ntp_server2_key_id');
  }
  public set ntpServer2KeyId(value: number) {
    this._ntpServer2KeyId = value;
  }
  public resetNtpServer2KeyId() {
    this._ntpServer2KeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2KeyIdInput() {
    return this._ntpServer2KeyId;
  }

  // ntp_server2_key_type - computed: false, optional: true, required: false
  private _ntpServer2KeyType?: string; 
  public get ntpServer2KeyType() {
    return this.getStringAttribute('ntp_server2_key_type');
  }
  public set ntpServer2KeyType(value: string) {
    this._ntpServer2KeyType = value;
  }
  public resetNtpServer2KeyType() {
    this._ntpServer2KeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2KeyTypeInput() {
    return this._ntpServer2KeyType;
  }

  // ntp_server2_name - computed: false, optional: false, required: true
  private _ntpServer2Name?: string; 
  public get ntpServer2Name() {
    return this.getStringAttribute('ntp_server2_name');
  }
  public set ntpServer2Name(value: string) {
    this._ntpServer2Name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2NameInput() {
    return this._ntpServer2Name;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // wait_for_completion - computed: false, optional: true, required: false
  private _waitForCompletion?: boolean | cdktf.IResolvable; 
  public get waitForCompletion() {
    return this.getBooleanAttribute('wait_for_completion');
  }
  public set waitForCompletion(value: boolean | cdktf.IResolvable) {
    this._waitForCompletion = value;
  }
  public resetWaitForCompletion() {
    this._waitForCompletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCompletionInput() {
    return this._waitForCompletion;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CdmBootstrapTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CdmBootstrapTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_email: cdktf.stringToTerraform(this._adminEmail),
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_node_ip_address: cdktf.stringToTerraform(this._clusterNodeIpAddress),
      cluster_nodes: cdktf.hashMapper(cdktf.stringToTerraform)(this._clusterNodes),
      dns_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsNameServers),
      dns_search_domain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearchDomain),
      enable_encryption: cdktf.booleanToTerraform(this._enableEncryption),
      id: cdktf.stringToTerraform(this._id),
      management_gateway: cdktf.stringToTerraform(this._managementGateway),
      management_subnet_mask: cdktf.stringToTerraform(this._managementSubnetMask),
      node_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeConfig),
      ntp_server1_key: cdktf.stringToTerraform(this._ntpServer1Key),
      ntp_server1_key_id: cdktf.numberToTerraform(this._ntpServer1KeyId),
      ntp_server1_key_type: cdktf.stringToTerraform(this._ntpServer1KeyType),
      ntp_server1_name: cdktf.stringToTerraform(this._ntpServer1Name),
      ntp_server2_key: cdktf.stringToTerraform(this._ntpServer2Key),
      ntp_server2_key_id: cdktf.numberToTerraform(this._ntpServer2KeyId),
      ntp_server2_key_type: cdktf.stringToTerraform(this._ntpServer2KeyType),
      ntp_server2_name: cdktf.stringToTerraform(this._ntpServer2Name),
      timeout: cdktf.stringToTerraform(this._timeout),
      wait_for_completion: cdktf.booleanToTerraform(this._waitForCompletion),
      timeouts: cdmBootstrapTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_email: {
        value: cdktf.stringToHclTerraform(this._adminEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_node_ip_address: {
        value: cdktf.stringToHclTerraform(this._clusterNodeIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_nodes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clusterNodes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      dns_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_search_domain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearchDomain),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_encryption: {
        value: cdktf.booleanToHclTerraform(this._enableEncryption),
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
      management_gateway: {
        value: cdktf.stringToHclTerraform(this._managementGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._managementSubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ntp_server1_key: {
        value: cdktf.stringToHclTerraform(this._ntpServer1Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server1_key_id: {
        value: cdktf.numberToHclTerraform(this._ntpServer1KeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntp_server1_key_type: {
        value: cdktf.stringToHclTerraform(this._ntpServer1KeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server1_name: {
        value: cdktf.stringToHclTerraform(this._ntpServer1Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server2_key: {
        value: cdktf.stringToHclTerraform(this._ntpServer2Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server2_key_id: {
        value: cdktf.numberToHclTerraform(this._ntpServer2KeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntp_server2_key_type: {
        value: cdktf.stringToHclTerraform(this._ntpServer2KeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_server2_name: {
        value: cdktf.stringToHclTerraform(this._ntpServer2Name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_completion: {
        value: cdktf.booleanToHclTerraform(this._waitForCompletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: cdmBootstrapTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CdmBootstrapTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
