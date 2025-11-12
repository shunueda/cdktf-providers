// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeTransportNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#description EdgeTransportNode#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#display_name EdgeTransportNode#display_name}
  */
  readonly displayName: string;
  /**
  * ID of the Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#external_id EdgeTransportNode#external_id}
  */
  readonly externalId?: string;
  /**
  * Id of the failure domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#failure_domain EdgeTransportNode#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#id EdgeTransportNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Addresses of the Node, version 4 or 6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_addresses EdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Unique Id of the fabric node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#node_id EdgeTransportNode#node_id}
  */
  readonly nodeId?: string;
  /**
  * deployment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#deployment_config EdgeTransportNode#deployment_config}
  */
  readonly deploymentConfig?: EdgeTransportNodeDeploymentConfig;
  /**
  * node_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#node_settings EdgeTransportNode#node_settings}
  */
  readonly nodeSettings: EdgeTransportNodeNodeSettings;
  /**
  * standard_host_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#standard_host_switch EdgeTransportNode#standard_host_switch}
  */
  readonly standardHostSwitch: EdgeTransportNodeStandardHostSwitch[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#tag EdgeTransportNode#tag}
  */
  readonly tag?: EdgeTransportNodeTag[] | cdktf.IResolvable;
}
export interface EdgeTransportNodeDeploymentConfigNodeUserSettings {
  /**
  * Node audit user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#audit_password EdgeTransportNode#audit_password}
  */
  readonly auditPassword?: string;
  /**
  * CLI "audit" username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#audit_username EdgeTransportNode#audit_username}
  */
  readonly auditUsername?: string;
  /**
  * Node cli password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#cli_password EdgeTransportNode#cli_password}
  */
  readonly cliPassword: string;
  /**
  * CLI "admin" username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#cli_username EdgeTransportNode#cli_username}
  */
  readonly cliUsername?: string;
  /**
  * Node root user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#root_password EdgeTransportNode#root_password}
  */
  readonly rootPassword: string;
}

export function edgeTransportNodeDeploymentConfigNodeUserSettingsToTerraform(struct?: EdgeTransportNodeDeploymentConfigNodeUserSettingsOutputReference | EdgeTransportNodeDeploymentConfigNodeUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_password: cdktf.stringToTerraform(struct!.auditPassword),
    audit_username: cdktf.stringToTerraform(struct!.auditUsername),
    cli_password: cdktf.stringToTerraform(struct!.cliPassword),
    cli_username: cdktf.stringToTerraform(struct!.cliUsername),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
  }
}


export function edgeTransportNodeDeploymentConfigNodeUserSettingsToHclTerraform(struct?: EdgeTransportNodeDeploymentConfigNodeUserSettingsOutputReference | EdgeTransportNodeDeploymentConfigNodeUserSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_password: {
      value: cdktf.stringToHclTerraform(struct!.auditPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audit_username: {
      value: cdktf.stringToHclTerraform(struct!.auditUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_password: {
      value: cdktf.stringToHclTerraform(struct!.cliPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_username: {
      value: cdktf.stringToHclTerraform(struct!.cliUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_password: {
      value: cdktf.stringToHclTerraform(struct!.rootPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeDeploymentConfigNodeUserSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeDeploymentConfigNodeUserSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditPassword = this._auditPassword;
    }
    if (this._auditUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditUsername = this._auditUsername;
    }
    if (this._cliPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliPassword = this._cliPassword;
    }
    if (this._cliUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliUsername = this._cliUsername;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeDeploymentConfigNodeUserSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditPassword = undefined;
      this._auditUsername = undefined;
      this._cliPassword = undefined;
      this._cliUsername = undefined;
      this._rootPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditPassword = value.auditPassword;
      this._auditUsername = value.auditUsername;
      this._cliPassword = value.cliPassword;
      this._cliUsername = value.cliUsername;
      this._rootPassword = value.rootPassword;
    }
  }

  // audit_password - computed: false, optional: true, required: false
  private _auditPassword?: string; 
  public get auditPassword() {
    return this.getStringAttribute('audit_password');
  }
  public set auditPassword(value: string) {
    this._auditPassword = value;
  }
  public resetAuditPassword() {
    this._auditPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditPasswordInput() {
    return this._auditPassword;
  }

  // audit_username - computed: false, optional: true, required: false
  private _auditUsername?: string; 
  public get auditUsername() {
    return this.getStringAttribute('audit_username');
  }
  public set auditUsername(value: string) {
    this._auditUsername = value;
  }
  public resetAuditUsername() {
    this._auditUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditUsernameInput() {
    return this._auditUsername;
  }

  // cli_password - computed: false, optional: false, required: true
  private _cliPassword?: string; 
  public get cliPassword() {
    return this.getStringAttribute('cli_password');
  }
  public set cliPassword(value: string) {
    this._cliPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cliPasswordInput() {
    return this._cliPassword;
  }

  // cli_username - computed: false, optional: true, required: false
  private _cliUsername?: string; 
  public get cliUsername() {
    return this.getStringAttribute('cli_username');
  }
  public set cliUsername(value: string) {
    this._cliUsername = value;
  }
  public resetCliUsername() {
    this._cliUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliUsernameInput() {
    return this._cliUsername;
  }

  // root_password - computed: false, optional: false, required: true
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }
}
export interface EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet {
  /**
  * IP Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_addresses EdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#prefix_length EdgeTransportNode#prefix_length}
  */
  readonly prefixLength: number;
}

export function edgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetToTerraform(struct?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function edgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetToHclTerraform(struct?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddresses = undefined;
      this._prefixLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddresses = value.ipAddresses;
      this._prefixLength = value.prefixLength;
    }
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}

export class EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetOutputReference {
    return new EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfo {
  /**
  * CPU reservation in MHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#cpu_reservation_in_mhz EdgeTransportNode#cpu_reservation_in_mhz}
  */
  readonly cpuReservationInMhz?: number;
  /**
  * CPU reservation in shares
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#cpu_reservation_in_shares EdgeTransportNode#cpu_reservation_in_shares}
  */
  readonly cpuReservationInShares?: string;
  /**
  * Memory reservation percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#memory_reservation_percentage EdgeTransportNode#memory_reservation_percentage}
  */
  readonly memoryReservationPercentage?: number;
}

export function edgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoToTerraform(struct?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoOutputReference | EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_reservation_in_mhz: cdktf.numberToTerraform(struct!.cpuReservationInMhz),
    cpu_reservation_in_shares: cdktf.stringToTerraform(struct!.cpuReservationInShares),
    memory_reservation_percentage: cdktf.numberToTerraform(struct!.memoryReservationPercentage),
  }
}


export function edgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoToHclTerraform(struct?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoOutputReference | EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_reservation_in_mhz: {
      value: cdktf.numberToHclTerraform(struct!.cpuReservationInMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_reservation_in_shares: {
      value: cdktf.stringToHclTerraform(struct!.cpuReservationInShares),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_reservation_percentage: {
      value: cdktf.numberToHclTerraform(struct!.memoryReservationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuReservationInMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationInMhz = this._cpuReservationInMhz;
    }
    if (this._cpuReservationInShares !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationInShares = this._cpuReservationInShares;
    }
    if (this._memoryReservationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservationPercentage = this._memoryReservationPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuReservationInMhz = undefined;
      this._cpuReservationInShares = undefined;
      this._memoryReservationPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuReservationInMhz = value.cpuReservationInMhz;
      this._cpuReservationInShares = value.cpuReservationInShares;
      this._memoryReservationPercentage = value.memoryReservationPercentage;
    }
  }

  // cpu_reservation_in_mhz - computed: false, optional: true, required: false
  private _cpuReservationInMhz?: number; 
  public get cpuReservationInMhz() {
    return this.getNumberAttribute('cpu_reservation_in_mhz');
  }
  public set cpuReservationInMhz(value: number) {
    this._cpuReservationInMhz = value;
  }
  public resetCpuReservationInMhz() {
    this._cpuReservationInMhz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInMhzInput() {
    return this._cpuReservationInMhz;
  }

  // cpu_reservation_in_shares - computed: false, optional: true, required: false
  private _cpuReservationInShares?: string; 
  public get cpuReservationInShares() {
    return this.getStringAttribute('cpu_reservation_in_shares');
  }
  public set cpuReservationInShares(value: string) {
    this._cpuReservationInShares = value;
  }
  public resetCpuReservationInShares() {
    this._cpuReservationInShares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationInSharesInput() {
    return this._cpuReservationInShares;
  }

  // memory_reservation_percentage - computed: false, optional: true, required: false
  private _memoryReservationPercentage?: number; 
  public get memoryReservationPercentage() {
    return this.getNumberAttribute('memory_reservation_percentage');
  }
  public set memoryReservationPercentage(value: number) {
    this._memoryReservationPercentage = value;
  }
  public resetMemoryReservationPercentage() {
    this._memoryReservationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationPercentageInput() {
    return this._memoryReservationPercentage;
  }
}
export interface EdgeTransportNodeDeploymentConfigVmDeploymentConfig {
  /**
  * Compute folder identifier in the specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#compute_folder_id EdgeTransportNode#compute_folder_id}
  */
  readonly computeFolderId?: string;
  /**
  * Cluster identifier or resourcepool identifier for specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#compute_id EdgeTransportNode#compute_id}
  */
  readonly computeId: string;
  /**
  * List of portgroups, logical switch identifiers or segment paths for datapath connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#data_network_ids EdgeTransportNode#data_network_ids}
  */
  readonly dataNetworkIds: string[];
  /**
  * Default gateway for the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#default_gateway_address EdgeTransportNode#default_gateway_address}
  */
  readonly defaultGatewayAddress?: string[];
  /**
  * Host identifier in the specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#host_id EdgeTransportNode#host_id}
  */
  readonly hostId?: string;
  /**
  * Portgroup, logical switch identifier or segment path for management network connectivity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#management_network_id EdgeTransportNode#management_network_id}
  */
  readonly managementNetworkId: string;
  /**
  * Storage/datastore identifier in the specified vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#storage_id EdgeTransportNode#storage_id}
  */
  readonly storageId: string;
  /**
  * Vsphere compute identifier for identifying the vcenter server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#vc_id EdgeTransportNode#vc_id}
  */
  readonly vcId: string;
  /**
  * management_port_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#management_port_subnet EdgeTransportNode#management_port_subnet}
  */
  readonly managementPortSubnet?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet[] | cdktf.IResolvable;
  /**
  * reservation_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#reservation_info EdgeTransportNode#reservation_info}
  */
  readonly reservationInfo?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfo;
}

export function edgeTransportNodeDeploymentConfigVmDeploymentConfigToTerraform(struct?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigOutputReference | EdgeTransportNodeDeploymentConfigVmDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_folder_id: cdktf.stringToTerraform(struct!.computeFolderId),
    compute_id: cdktf.stringToTerraform(struct!.computeId),
    data_network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataNetworkIds),
    default_gateway_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultGatewayAddress),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    management_network_id: cdktf.stringToTerraform(struct!.managementNetworkId),
    storage_id: cdktf.stringToTerraform(struct!.storageId),
    vc_id: cdktf.stringToTerraform(struct!.vcId),
    management_port_subnet: cdktf.listMapper(edgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetToTerraform, true)(struct!.managementPortSubnet),
    reservation_info: edgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoToTerraform(struct!.reservationInfo),
  }
}


export function edgeTransportNodeDeploymentConfigVmDeploymentConfigToHclTerraform(struct?: EdgeTransportNodeDeploymentConfigVmDeploymentConfigOutputReference | EdgeTransportNodeDeploymentConfigVmDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_folder_id: {
      value: cdktf.stringToHclTerraform(struct!.computeFolderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_id: {
      value: cdktf.stringToHclTerraform(struct!.computeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_network_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataNetworkIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_gateway_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultGatewayAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_network_id: {
      value: cdktf.stringToHclTerraform(struct!.managementNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_id: {
      value: cdktf.stringToHclTerraform(struct!.storageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vc_id: {
      value: cdktf.stringToHclTerraform(struct!.vcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_port_subnet: {
      value: cdktf.listMapperHcl(edgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetToHclTerraform, true)(struct!.managementPortSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetList",
    },
    reservation_info: {
      value: edgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoToHclTerraform(struct!.reservationInfo),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeDeploymentConfigVmDeploymentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeDeploymentConfigVmDeploymentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeFolderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeFolderId = this._computeFolderId;
    }
    if (this._computeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeId = this._computeId;
    }
    if (this._dataNetworkIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNetworkIds = this._dataNetworkIds;
    }
    if (this._defaultGatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGatewayAddress = this._defaultGatewayAddress;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._managementNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementNetworkId = this._managementNetworkId;
    }
    if (this._storageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageId = this._storageId;
    }
    if (this._vcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcId = this._vcId;
    }
    if (this._managementPortSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementPortSubnet = this._managementPortSubnet?.internalValue;
    }
    if (this._reservationInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationInfo = this._reservationInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeDeploymentConfigVmDeploymentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeFolderId = undefined;
      this._computeId = undefined;
      this._dataNetworkIds = undefined;
      this._defaultGatewayAddress = undefined;
      this._hostId = undefined;
      this._managementNetworkId = undefined;
      this._storageId = undefined;
      this._vcId = undefined;
      this._managementPortSubnet.internalValue = undefined;
      this._reservationInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeFolderId = value.computeFolderId;
      this._computeId = value.computeId;
      this._dataNetworkIds = value.dataNetworkIds;
      this._defaultGatewayAddress = value.defaultGatewayAddress;
      this._hostId = value.hostId;
      this._managementNetworkId = value.managementNetworkId;
      this._storageId = value.storageId;
      this._vcId = value.vcId;
      this._managementPortSubnet.internalValue = value.managementPortSubnet;
      this._reservationInfo.internalValue = value.reservationInfo;
    }
  }

  // compute_folder_id - computed: false, optional: true, required: false
  private _computeFolderId?: string; 
  public get computeFolderId() {
    return this.getStringAttribute('compute_folder_id');
  }
  public set computeFolderId(value: string) {
    this._computeFolderId = value;
  }
  public resetComputeFolderId() {
    this._computeFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeFolderIdInput() {
    return this._computeFolderId;
  }

  // compute_id - computed: false, optional: false, required: true
  private _computeId?: string; 
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }
  public set computeId(value: string) {
    this._computeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeIdInput() {
    return this._computeId;
  }

  // data_network_ids - computed: false, optional: false, required: true
  private _dataNetworkIds?: string[]; 
  public get dataNetworkIds() {
    return this.getListAttribute('data_network_ids');
  }
  public set dataNetworkIds(value: string[]) {
    this._dataNetworkIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNetworkIdsInput() {
    return this._dataNetworkIds;
  }

  // default_gateway_address - computed: true, optional: true, required: false
  private _defaultGatewayAddress?: string[]; 
  public get defaultGatewayAddress() {
    return this.getListAttribute('default_gateway_address');
  }
  public set defaultGatewayAddress(value: string[]) {
    this._defaultGatewayAddress = value;
  }
  public resetDefaultGatewayAddress() {
    this._defaultGatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayAddressInput() {
    return this._defaultGatewayAddress;
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // management_network_id - computed: false, optional: false, required: true
  private _managementNetworkId?: string; 
  public get managementNetworkId() {
    return this.getStringAttribute('management_network_id');
  }
  public set managementNetworkId(value: string) {
    this._managementNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementNetworkIdInput() {
    return this._managementNetworkId;
  }

  // storage_id - computed: false, optional: false, required: true
  private _storageId?: string; 
  public get storageId() {
    return this.getStringAttribute('storage_id');
  }
  public set storageId(value: string) {
    this._storageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // vc_id - computed: false, optional: false, required: true
  private _vcId?: string; 
  public get vcId() {
    return this.getStringAttribute('vc_id');
  }
  public set vcId(value: string) {
    this._vcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcIdInput() {
    return this._vcId;
  }

  // management_port_subnet - computed: false, optional: true, required: false
  private _managementPortSubnet = new EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnetList(this, "management_port_subnet", false);
  public get managementPortSubnet() {
    return this._managementPortSubnet;
  }
  public putManagementPortSubnet(value: EdgeTransportNodeDeploymentConfigVmDeploymentConfigManagementPortSubnet[] | cdktf.IResolvable) {
    this._managementPortSubnet.internalValue = value;
  }
  public resetManagementPortSubnet() {
    this._managementPortSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPortSubnetInput() {
    return this._managementPortSubnet.internalValue;
  }

  // reservation_info - computed: false, optional: true, required: false
  private _reservationInfo = new EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfoOutputReference(this, "reservation_info");
  public get reservationInfo() {
    return this._reservationInfo;
  }
  public putReservationInfo(value: EdgeTransportNodeDeploymentConfigVmDeploymentConfigReservationInfo) {
    this._reservationInfo.internalValue = value;
  }
  public resetReservationInfo() {
    this._reservationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationInfoInput() {
    return this._reservationInfo.internalValue;
  }
}
export interface EdgeTransportNodeDeploymentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#form_factor EdgeTransportNode#form_factor}
  */
  readonly formFactor?: string;
  /**
  * node_user_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#node_user_settings EdgeTransportNode#node_user_settings}
  */
  readonly nodeUserSettings: EdgeTransportNodeDeploymentConfigNodeUserSettings;
  /**
  * vm_deployment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#vm_deployment_config EdgeTransportNode#vm_deployment_config}
  */
  readonly vmDeploymentConfig: EdgeTransportNodeDeploymentConfigVmDeploymentConfig;
}

export function edgeTransportNodeDeploymentConfigToTerraform(struct?: EdgeTransportNodeDeploymentConfigOutputReference | EdgeTransportNodeDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    form_factor: cdktf.stringToTerraform(struct!.formFactor),
    node_user_settings: edgeTransportNodeDeploymentConfigNodeUserSettingsToTerraform(struct!.nodeUserSettings),
    vm_deployment_config: edgeTransportNodeDeploymentConfigVmDeploymentConfigToTerraform(struct!.vmDeploymentConfig),
  }
}


export function edgeTransportNodeDeploymentConfigToHclTerraform(struct?: EdgeTransportNodeDeploymentConfigOutputReference | EdgeTransportNodeDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    form_factor: {
      value: cdktf.stringToHclTerraform(struct!.formFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_user_settings: {
      value: edgeTransportNodeDeploymentConfigNodeUserSettingsToHclTerraform(struct!.nodeUserSettings),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeDeploymentConfigNodeUserSettingsList",
    },
    vm_deployment_config: {
      value: edgeTransportNodeDeploymentConfigVmDeploymentConfigToHclTerraform(struct!.vmDeploymentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeDeploymentConfigVmDeploymentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeDeploymentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeDeploymentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.formFactor = this._formFactor;
    }
    if (this._nodeUserSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeUserSettings = this._nodeUserSettings?.internalValue;
    }
    if (this._vmDeploymentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDeploymentConfig = this._vmDeploymentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeDeploymentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._formFactor = undefined;
      this._nodeUserSettings.internalValue = undefined;
      this._vmDeploymentConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._formFactor = value.formFactor;
      this._nodeUserSettings.internalValue = value.nodeUserSettings;
      this._vmDeploymentConfig.internalValue = value.vmDeploymentConfig;
    }
  }

  // form_factor - computed: false, optional: true, required: false
  private _formFactor?: string; 
  public get formFactor() {
    return this.getStringAttribute('form_factor');
  }
  public set formFactor(value: string) {
    this._formFactor = value;
  }
  public resetFormFactor() {
    this._formFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFactorInput() {
    return this._formFactor;
  }

  // node_user_settings - computed: false, optional: false, required: true
  private _nodeUserSettings = new EdgeTransportNodeDeploymentConfigNodeUserSettingsOutputReference(this, "node_user_settings");
  public get nodeUserSettings() {
    return this._nodeUserSettings;
  }
  public putNodeUserSettings(value: EdgeTransportNodeDeploymentConfigNodeUserSettings) {
    this._nodeUserSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUserSettingsInput() {
    return this._nodeUserSettings.internalValue;
  }

  // vm_deployment_config - computed: false, optional: false, required: true
  private _vmDeploymentConfig = new EdgeTransportNodeDeploymentConfigVmDeploymentConfigOutputReference(this, "vm_deployment_config");
  public get vmDeploymentConfig() {
    return this._vmDeploymentConfig;
  }
  public putVmDeploymentConfig(value: EdgeTransportNodeDeploymentConfigVmDeploymentConfig) {
    this._vmDeploymentConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDeploymentConfigInput() {
    return this._vmDeploymentConfig.internalValue;
  }
}
export interface EdgeTransportNodeNodeSettingsAdvancedConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#key EdgeTransportNode#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#value EdgeTransportNode#value}
  */
  readonly value: string;
}

export function edgeTransportNodeNodeSettingsAdvancedConfigurationToTerraform(struct?: EdgeTransportNodeNodeSettingsAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function edgeTransportNodeNodeSettingsAdvancedConfigurationToHclTerraform(struct?: EdgeTransportNodeNodeSettingsAdvancedConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeNodeSettingsAdvancedConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeNodeSettingsAdvancedConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeNodeSettingsAdvancedConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EdgeTransportNodeNodeSettingsAdvancedConfigurationList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeNodeSettingsAdvancedConfiguration[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeNodeSettingsAdvancedConfigurationOutputReference {
    return new EdgeTransportNodeNodeSettingsAdvancedConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeNodeSettingsSyslogServer {
  /**
  * Log level to be redirected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#log_level EdgeTransportNode#log_level}
  */
  readonly logLevel?: string;
  /**
  * Syslog server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#port EdgeTransportNode#port}
  */
  readonly port?: string;
  /**
  * Syslog protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#protocol EdgeTransportNode#protocol}
  */
  readonly protocol?: string;
  /**
  * Server IP or fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#server EdgeTransportNode#server}
  */
  readonly server: string;
}

export function edgeTransportNodeNodeSettingsSyslogServerToTerraform(struct?: EdgeTransportNodeNodeSettingsSyslogServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function edgeTransportNodeNodeSettingsSyslogServerToHclTerraform(struct?: EdgeTransportNodeNodeSettingsSyslogServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeNodeSettingsSyslogServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeNodeSettingsSyslogServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeNodeSettingsSyslogServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logLevel = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logLevel = value.logLevel;
      this._port = value.port;
      this._protocol = value.protocol;
      this._server = value.server;
    }
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}

export class EdgeTransportNodeNodeSettingsSyslogServerList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeNodeSettingsSyslogServer[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeNodeSettingsSyslogServerOutputReference {
    return new EdgeTransportNodeNodeSettingsSyslogServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeNodeSettings {
  /**
  * Allow root SSH logins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#allow_ssh_root_login EdgeTransportNode#allow_ssh_root_login}
  */
  readonly allowSshRootLogin?: boolean | cdktf.IResolvable;
  /**
  * DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#dns_servers EdgeTransportNode#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Enable SSH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#enable_ssh EdgeTransportNode#enable_ssh}
  */
  readonly enableSsh?: boolean | cdktf.IResolvable;
  /**
  * Enable Uniform Passthrough mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#enable_upt_mode EdgeTransportNode#enable_upt_mode}
  */
  readonly enableUptMode?: boolean | cdktf.IResolvable;
  /**
  * Host name or FQDN for edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#hostname EdgeTransportNode#hostname}
  */
  readonly hostname: string;
  /**
  * NTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ntp_servers EdgeTransportNode#ntp_servers}
  */
  readonly ntpServers?: string[];
  /**
  * Search domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#search_domains EdgeTransportNode#search_domains}
  */
  readonly searchDomains?: string[];
  /**
  * advanced_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#advanced_configuration EdgeTransportNode#advanced_configuration}
  */
  readonly advancedConfiguration?: EdgeTransportNodeNodeSettingsAdvancedConfiguration[] | cdktf.IResolvable;
  /**
  * syslog_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#syslog_server EdgeTransportNode#syslog_server}
  */
  readonly syslogServer?: EdgeTransportNodeNodeSettingsSyslogServer[] | cdktf.IResolvable;
}

export function edgeTransportNodeNodeSettingsToTerraform(struct?: EdgeTransportNodeNodeSettingsOutputReference | EdgeTransportNodeNodeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ssh_root_login: cdktf.booleanToTerraform(struct!.allowSshRootLogin),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    enable_ssh: cdktf.booleanToTerraform(struct!.enableSsh),
    enable_upt_mode: cdktf.booleanToTerraform(struct!.enableUptMode),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchDomains),
    advanced_configuration: cdktf.listMapper(edgeTransportNodeNodeSettingsAdvancedConfigurationToTerraform, true)(struct!.advancedConfiguration),
    syslog_server: cdktf.listMapper(edgeTransportNodeNodeSettingsSyslogServerToTerraform, true)(struct!.syslogServer),
  }
}


export function edgeTransportNodeNodeSettingsToHclTerraform(struct?: EdgeTransportNodeNodeSettingsOutputReference | EdgeTransportNodeNodeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ssh_root_login: {
      value: cdktf.booleanToHclTerraform(struct!.allowSshRootLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.enableSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upt_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableUptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_configuration: {
      value: cdktf.listMapperHcl(edgeTransportNodeNodeSettingsAdvancedConfigurationToHclTerraform, true)(struct!.advancedConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeNodeSettingsAdvancedConfigurationList",
    },
    syslog_server: {
      value: cdktf.listMapperHcl(edgeTransportNodeNodeSettingsSyslogServerToHclTerraform, true)(struct!.syslogServer),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeNodeSettingsSyslogServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeNodeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeNodeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSshRootLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSshRootLogin = this._allowSshRootLogin;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._enableSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSsh = this._enableSsh;
    }
    if (this._enableUptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUptMode = this._enableUptMode;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    if (this._searchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomains = this._searchDomains;
    }
    if (this._advancedConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedConfiguration = this._advancedConfiguration?.internalValue;
    }
    if (this._syslogServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogServer = this._syslogServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeNodeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSshRootLogin = undefined;
      this._dnsServers = undefined;
      this._enableSsh = undefined;
      this._enableUptMode = undefined;
      this._hostname = undefined;
      this._ntpServers = undefined;
      this._searchDomains = undefined;
      this._advancedConfiguration.internalValue = undefined;
      this._syslogServer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSshRootLogin = value.allowSshRootLogin;
      this._dnsServers = value.dnsServers;
      this._enableSsh = value.enableSsh;
      this._enableUptMode = value.enableUptMode;
      this._hostname = value.hostname;
      this._ntpServers = value.ntpServers;
      this._searchDomains = value.searchDomains;
      this._advancedConfiguration.internalValue = value.advancedConfiguration;
      this._syslogServer.internalValue = value.syslogServer;
    }
  }

  // allow_ssh_root_login - computed: false, optional: true, required: false
  private _allowSshRootLogin?: boolean | cdktf.IResolvable; 
  public get allowSshRootLogin() {
    return this.getBooleanAttribute('allow_ssh_root_login');
  }
  public set allowSshRootLogin(value: boolean | cdktf.IResolvable) {
    this._allowSshRootLogin = value;
  }
  public resetAllowSshRootLogin() {
    this._allowSshRootLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSshRootLoginInput() {
    return this._allowSshRootLogin;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // enable_ssh - computed: false, optional: true, required: false
  private _enableSsh?: boolean | cdktf.IResolvable; 
  public get enableSsh() {
    return this.getBooleanAttribute('enable_ssh');
  }
  public set enableSsh(value: boolean | cdktf.IResolvable) {
    this._enableSsh = value;
  }
  public resetEnableSsh() {
    this._enableSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSshInput() {
    return this._enableSsh;
  }

  // enable_upt_mode - computed: false, optional: true, required: false
  private _enableUptMode?: boolean | cdktf.IResolvable; 
  public get enableUptMode() {
    return this.getBooleanAttribute('enable_upt_mode');
  }
  public set enableUptMode(value: boolean | cdktf.IResolvable) {
    this._enableUptMode = value;
  }
  public resetEnableUptMode() {
    this._enableUptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUptModeInput() {
    return this._enableUptMode;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // search_domains - computed: false, optional: true, required: false
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  public resetSearchDomains() {
    this._searchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
  }

  // advanced_configuration - computed: false, optional: true, required: false
  private _advancedConfiguration = new EdgeTransportNodeNodeSettingsAdvancedConfigurationList(this, "advanced_configuration", false);
  public get advancedConfiguration() {
    return this._advancedConfiguration;
  }
  public putAdvancedConfiguration(value: EdgeTransportNodeNodeSettingsAdvancedConfiguration[] | cdktf.IResolvable) {
    this._advancedConfiguration.internalValue = value;
  }
  public resetAdvancedConfiguration() {
    this._advancedConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigurationInput() {
    return this._advancedConfiguration.internalValue;
  }

  // syslog_server - computed: false, optional: true, required: false
  private _syslogServer = new EdgeTransportNodeNodeSettingsSyslogServerList(this, "syslog_server", false);
  public get syslogServer() {
    return this._syslogServer;
  }
  public putSyslogServer(value: EdgeTransportNodeNodeSettingsSyslogServer[] | cdktf.IResolvable) {
    this._syslogServer.internalValue = value;
  }
  public resetSyslogServer() {
    this._syslogServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerInput() {
    return this._syslogServer.internalValue;
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#default_gateway EdgeTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_addresses EdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#subnet_mask EdgeTransportNode#subnet_mask}
  */
  readonly subnetMask: string;
}

export function edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference | EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
  }
}


export function edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference | EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipAddresses = undefined;
      this._subnetMask = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipAddresses = value.ipAddresses;
      this._subnetMask = value.subnetMask;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_address EdgeTransportNode#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#mac_address EdgeTransportNode#mac_address}
  */
  readonly macAddress: string;
}

export function edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference {
    return new EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#default_gateway EdgeTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#subnet_mask EdgeTransportNode#subnet_mask}
  */
  readonly subnetMask: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_mac_pair EdgeTransportNode#ip_mac_pair}
  */
  readonly ipMacPair: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference | EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    ip_mac_pair: cdktf.listMapper(edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference | EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mac_pair: {
      value: cdktf.listMapperHcl(edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._ipMacPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMacPair = this._ipMacPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._subnetMask = undefined;
      this._ipMacPair.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._subnetMask = value.subnetMask;
      this._ipMacPair.internalValue = value.ipMacPair;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // ip_mac_pair - computed: false, optional: false, required: true
  private _ipMacPair = new EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpAssignment {
  /**
  * Enables DHCP assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#assigned_by_dhcp EdgeTransportNode#assigned_by_dhcp}
  */
  readonly assignedByDhcp?: boolean | cdktf.IResolvable;
  /**
  * No IPv4 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#no_ipv4 EdgeTransportNode#no_ipv4}
  */
  readonly noIpv4?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#static_ip_pool EdgeTransportNode#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#static_ip EdgeTransportNode#static_ip}
  */
  readonly staticIp?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#static_ip_mac EdgeTransportNode#static_ip_mac}
  */
  readonly staticIpMac?: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMac;
}

export function edgeTransportNodeStandardHostSwitchIpAssignmentToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentOutputReference | EdgeTransportNodeStandardHostSwitchIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_dhcp: cdktf.booleanToTerraform(struct!.assignedByDhcp),
    no_ipv4: cdktf.booleanToTerraform(struct!.noIpv4),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function edgeTransportNodeStandardHostSwitchIpAssignmentToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpAssignmentOutputReference | EdgeTransportNodeStandardHostSwitchIpAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_by_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip_pool: {
      value: cdktf.stringToHclTerraform(struct!.staticIpPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip: {
      value: edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpList",
    },
    static_ip_mac: {
      value: edgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedByDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByDhcp = this._assignedByDhcp;
    }
    if (this._noIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4 = this._noIpv4;
    }
    if (this._staticIpPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpPool = this._staticIpPool;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpMac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpMac = this._staticIpMac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedByDhcp = undefined;
      this._noIpv4 = undefined;
      this._staticIpPool = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpMac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedByDhcp = value.assignedByDhcp;
      this._noIpv4 = value.noIpv4;
      this._staticIpPool = value.staticIpPool;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpMac.internalValue = value.staticIpMac;
    }
  }

  // assigned_by_dhcp - computed: false, optional: true, required: false
  private _assignedByDhcp?: boolean | cdktf.IResolvable; 
  public get assignedByDhcp() {
    return this.getBooleanAttribute('assigned_by_dhcp');
  }
  public set assignedByDhcp(value: boolean | cdktf.IResolvable) {
    this._assignedByDhcp = value;
  }
  public resetAssignedByDhcp() {
    this._assignedByDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByDhcpInput() {
    return this._assignedByDhcp;
  }

  // no_ipv4 - computed: false, optional: true, required: false
  private _noIpv4?: boolean | cdktf.IResolvable; 
  public get noIpv4() {
    return this.getBooleanAttribute('no_ipv4');
  }
  public set noIpv4(value: boolean | cdktf.IResolvable) {
    this._noIpv4 = value;
  }
  public resetNoIpv4() {
    this._noIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4Input() {
    return this._noIpv4;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool?: string; 
  public get staticIpPool() {
    return this.getStringAttribute('static_ip_pool');
  }
  public set staticIpPool(value: string) {
    this._staticIpPool = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ip_mac - computed: false, optional: true, required: false
  private _staticIpMac = new EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: EdgeTransportNodeStandardHostSwitchIpAssignmentStaticIpMac) {
    this._staticIpMac.internalValue = value;
  }
  public resetStaticIpMac() {
    this._staticIpMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpMacInput() {
    return this._staticIpMac.internalValue;
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIp {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#default_gateway EdgeTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * List of IPs for transport node host switch virtual tunnel endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_addresses EdgeTransportNode#ip_addresses}
  */
  readonly ipAddresses: string[];
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#prefix_length EdgeTransportNode#prefix_length}
  */
  readonly prefixLength: string;
}

export function edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference | EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
  }
}


export function edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference | EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._ipAddresses = undefined;
      this._prefixLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._ipAddresses = value.ipAddresses;
      this._prefixLength = value.prefixLength;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // ip_addresses - computed: false, optional: false, required: true
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair {
  /**
  * A single IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_address EdgeTransportNode#ip_address}
  */
  readonly ipAddress: string;
  /**
  * A single MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#mac_address EdgeTransportNode#mac_address}
  */
  readonly macAddress: string;
}

export function edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._macAddress = value.macAddress;
    }
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // mac_address - computed: false, optional: false, required: true
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference {
    return new EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#default_gateway EdgeTransportNode#default_gateway}
  */
  readonly defaultGateway: string;
  /**
  * Prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#prefix_length EdgeTransportNode#prefix_length}
  */
  readonly prefixLength: string;
  /**
  * ip_mac_pair block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_mac_pair EdgeTransportNode#ip_mac_pair}
  */
  readonly ipMacPair: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable;
}

export function edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference | EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    prefix_length: cdktf.stringToTerraform(struct!.prefixLength),
    ip_mac_pair: cdktf.listMapper(edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToTerraform, true)(struct!.ipMacPair),
  }
}


export function edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference | EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_length: {
      value: cdktf.stringToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mac_pair: {
      value: cdktf.listMapperHcl(edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairToHclTerraform, true)(struct!.ipMacPair),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._ipMacPair?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMacPair = this._ipMacPair?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGateway = undefined;
      this._prefixLength = undefined;
      this._ipMacPair.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGateway = value.defaultGateway;
      this._prefixLength = value.prefixLength;
      this._ipMacPair.internalValue = value.ipMacPair;
    }
  }

  // default_gateway - computed: false, optional: false, required: true
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // prefix_length - computed: false, optional: false, required: true
  private _prefixLength?: string; 
  public get prefixLength() {
    return this.getStringAttribute('prefix_length');
  }
  public set prefixLength(value: string) {
    this._prefixLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // ip_mac_pair - computed: false, optional: false, required: true
  private _ipMacPair = new EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPairList(this, "ip_mac_pair", false);
  public get ipMacPair() {
    return this._ipMacPair;
  }
  public putIpMacPair(value: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacIpMacPair[] | cdktf.IResolvable) {
    this._ipMacPair.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMacPairInput() {
    return this._ipMacPair.internalValue;
  }
}
export interface EdgeTransportNodeStandardHostSwitchIpv6Assignment {
  /**
  * Enables autoconf assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#assigned_by_autoconf EdgeTransportNode#assigned_by_autoconf}
  */
  readonly assignedByAutoconf?: boolean | cdktf.IResolvable;
  /**
  * Enables DHCPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#assigned_by_dhcpv6 EdgeTransportNode#assigned_by_dhcpv6}
  */
  readonly assignedByDhcpv6?: boolean | cdktf.IResolvable;
  /**
  * No IPv6 assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#no_ipv6 EdgeTransportNode#no_ipv6}
  */
  readonly noIpv6?: boolean | cdktf.IResolvable;
  /**
  * IP assignment specification for Static IP Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#static_ip_pool EdgeTransportNode#static_ip_pool}
  */
  readonly staticIpPool?: string;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#static_ip EdgeTransportNode#static_ip}
  */
  readonly staticIp?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIp;
  /**
  * static_ip_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#static_ip_mac EdgeTransportNode#static_ip_mac}
  */
  readonly staticIpMac?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac;
}

export function edgeTransportNodeStandardHostSwitchIpv6AssignmentToTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentOutputReference | EdgeTransportNodeStandardHostSwitchIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assigned_by_autoconf: cdktf.booleanToTerraform(struct!.assignedByAutoconf),
    assigned_by_dhcpv6: cdktf.booleanToTerraform(struct!.assignedByDhcpv6),
    no_ipv6: cdktf.booleanToTerraform(struct!.noIpv6),
    static_ip_pool: cdktf.stringToTerraform(struct!.staticIpPool),
    static_ip: edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToTerraform(struct!.staticIp),
    static_ip_mac: edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToTerraform(struct!.staticIpMac),
  }
}


export function edgeTransportNodeStandardHostSwitchIpv6AssignmentToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchIpv6AssignmentOutputReference | EdgeTransportNodeStandardHostSwitchIpv6Assignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assigned_by_autoconf: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByAutoconf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assigned_by_dhcpv6: {
      value: cdktf.booleanToHclTerraform(struct!.assignedByDhcpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_ip_pool: {
      value: cdktf.stringToHclTerraform(struct!.staticIpPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip: {
      value: edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpList",
    },
    static_ip_mac: {
      value: edgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacToHclTerraform(struct!.staticIpMac),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchIpv6AssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeTransportNodeStandardHostSwitchIpv6Assignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignedByAutoconf !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByAutoconf = this._assignedByAutoconf;
    }
    if (this._assignedByDhcpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignedByDhcpv6 = this._assignedByDhcpv6;
    }
    if (this._noIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6 = this._noIpv6;
    }
    if (this._staticIpPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpPool = this._staticIpPool;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpMac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpMac = this._staticIpMac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchIpv6Assignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignedByAutoconf = undefined;
      this._assignedByDhcpv6 = undefined;
      this._noIpv6 = undefined;
      this._staticIpPool = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpMac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignedByAutoconf = value.assignedByAutoconf;
      this._assignedByDhcpv6 = value.assignedByDhcpv6;
      this._noIpv6 = value.noIpv6;
      this._staticIpPool = value.staticIpPool;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpMac.internalValue = value.staticIpMac;
    }
  }

  // assigned_by_autoconf - computed: false, optional: true, required: false
  private _assignedByAutoconf?: boolean | cdktf.IResolvable; 
  public get assignedByAutoconf() {
    return this.getBooleanAttribute('assigned_by_autoconf');
  }
  public set assignedByAutoconf(value: boolean | cdktf.IResolvable) {
    this._assignedByAutoconf = value;
  }
  public resetAssignedByAutoconf() {
    this._assignedByAutoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByAutoconfInput() {
    return this._assignedByAutoconf;
  }

  // assigned_by_dhcpv6 - computed: false, optional: true, required: false
  private _assignedByDhcpv6?: boolean | cdktf.IResolvable; 
  public get assignedByDhcpv6() {
    return this.getBooleanAttribute('assigned_by_dhcpv6');
  }
  public set assignedByDhcpv6(value: boolean | cdktf.IResolvable) {
    this._assignedByDhcpv6 = value;
  }
  public resetAssignedByDhcpv6() {
    this._assignedByDhcpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedByDhcpv6Input() {
    return this._assignedByDhcpv6;
  }

  // no_ipv6 - computed: false, optional: true, required: false
  private _noIpv6?: boolean | cdktf.IResolvable; 
  public get noIpv6() {
    return this.getBooleanAttribute('no_ipv6');
  }
  public set noIpv6(value: boolean | cdktf.IResolvable) {
    this._noIpv6 = value;
  }
  public resetNoIpv6() {
    this._noIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6Input() {
    return this._noIpv6;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool?: string; 
  public get staticIpPool() {
    return this.getStringAttribute('static_ip_pool');
  }
  public set staticIpPool(value: string) {
    this._staticIpPool = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ip_mac - computed: false, optional: true, required: false
  private _staticIpMac = new EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMacOutputReference(this, "static_ip_mac");
  public get staticIpMac() {
    return this._staticIpMac;
  }
  public putStaticIpMac(value: EdgeTransportNodeStandardHostSwitchIpv6AssignmentStaticIpMac) {
    this._staticIpMac.internalValue = value;
  }
  public resetStaticIpMac() {
    this._staticIpMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpMacInput() {
    return this._staticIpMac.internalValue;
  }
}
export interface EdgeTransportNodeStandardHostSwitchPnic {
  /**
  * Device name or key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#device_name EdgeTransportNode#device_name}
  */
  readonly deviceName: string;
  /**
  * Uplink name for this Pnic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#uplink_name EdgeTransportNode#uplink_name}
  */
  readonly uplinkName: string;
}

export function edgeTransportNodeStandardHostSwitchPnicToTerraform(struct?: EdgeTransportNodeStandardHostSwitchPnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
  }
}


export function edgeTransportNodeStandardHostSwitchPnicToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchPnic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchPnicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeStandardHostSwitchPnic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchPnic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._uplinkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._uplinkName = value.uplinkName;
    }
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }
}

export class EdgeTransportNodeStandardHostSwitchPnicList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeStandardHostSwitchPnic[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeStandardHostSwitchPnicOutputReference {
    return new EdgeTransportNodeStandardHostSwitchPnicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint {
  /**
  * Unique ID identifying the transport zone for this endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#transport_zone EdgeTransportNode#transport_zone}
  */
  readonly transportZone: string;
  /**
  * Identifiers of the transport zone profiles associated with this transport zone endpoint on this transport node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#transport_zone_profiles EdgeTransportNode#transport_zone_profiles}
  */
  readonly transportZoneProfiles?: string[];
}

export function edgeTransportNodeStandardHostSwitchTransportZoneEndpointToTerraform(struct?: EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transport_zone: cdktf.stringToTerraform(struct!.transportZone),
    transport_zone_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transportZoneProfiles),
  }
}


export function edgeTransportNodeStandardHostSwitchTransportZoneEndpointToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transport_zone: {
      value: cdktf.stringToHclTerraform(struct!.transportZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_zone_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transportZoneProfiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchTransportZoneEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transportZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZone = this._transportZone;
    }
    if (this._transportZoneProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZoneProfiles = this._transportZoneProfiles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transportZone = undefined;
      this._transportZoneProfiles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transportZone = value.transportZone;
      this._transportZoneProfiles = value.transportZoneProfiles;
    }
  }

  // transport_zone - computed: false, optional: false, required: true
  private _transportZone?: string; 
  public get transportZone() {
    return this.getStringAttribute('transport_zone');
  }
  public set transportZone(value: string) {
    this._transportZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneInput() {
    return this._transportZone;
  }

  // transport_zone_profiles - computed: true, optional: true, required: false
  private _transportZoneProfiles?: string[]; 
  public get transportZoneProfiles() {
    return this.getListAttribute('transport_zone_profiles');
  }
  public set transportZoneProfiles(value: string[]) {
    this._transportZoneProfiles = value;
  }
  public resetTransportZoneProfiles() {
    this._transportZoneProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneProfilesInput() {
    return this._transportZoneProfiles;
  }
}

export class EdgeTransportNodeStandardHostSwitchTransportZoneEndpointList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeStandardHostSwitchTransportZoneEndpointOutputReference {
    return new EdgeTransportNodeStandardHostSwitchTransportZoneEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeStandardHostSwitch {
  /**
  * The host switch id. This ID will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#host_switch_id EdgeTransportNode#host_switch_id}
  */
  readonly hostSwitchId?: string;
  /**
  * Host switch name. This name will be used to reference a host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#host_switch_name EdgeTransportNode#host_switch_name}
  */
  readonly hostSwitchName?: string;
  /**
  * Identifiers of host switch profiles to be associated with this host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#host_switch_profile EdgeTransportNode#host_switch_profile}
  */
  readonly hostSwitchProfile?: string[];
  /**
  * Host switch uplink profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#uplink_profile EdgeTransportNode#uplink_profile}
  */
  readonly uplinkProfile?: string;
  /**
  * Host switch high availability profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#vtep_ha_profile EdgeTransportNode#vtep_ha_profile}
  */
  readonly vtepHaProfile?: string;
  /**
  * ip_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ip_assignment EdgeTransportNode#ip_assignment}
  */
  readonly ipAssignment?: EdgeTransportNodeStandardHostSwitchIpAssignment;
  /**
  * ipv6_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#ipv6_assignment EdgeTransportNode#ipv6_assignment}
  */
  readonly ipv6Assignment?: EdgeTransportNodeStandardHostSwitchIpv6Assignment;
  /**
  * pnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#pnic EdgeTransportNode#pnic}
  */
  readonly pnic?: EdgeTransportNodeStandardHostSwitchPnic[] | cdktf.IResolvable;
  /**
  * transport_zone_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#transport_zone_endpoint EdgeTransportNode#transport_zone_endpoint}
  */
  readonly transportZoneEndpoint?: EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable;
}

export function edgeTransportNodeStandardHostSwitchToTerraform(struct?: EdgeTransportNodeStandardHostSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_switch_id: cdktf.stringToTerraform(struct!.hostSwitchId),
    host_switch_name: cdktf.stringToTerraform(struct!.hostSwitchName),
    host_switch_profile: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostSwitchProfile),
    uplink_profile: cdktf.stringToTerraform(struct!.uplinkProfile),
    vtep_ha_profile: cdktf.stringToTerraform(struct!.vtepHaProfile),
    ip_assignment: edgeTransportNodeStandardHostSwitchIpAssignmentToTerraform(struct!.ipAssignment),
    ipv6_assignment: edgeTransportNodeStandardHostSwitchIpv6AssignmentToTerraform(struct!.ipv6Assignment),
    pnic: cdktf.listMapper(edgeTransportNodeStandardHostSwitchPnicToTerraform, true)(struct!.pnic),
    transport_zone_endpoint: cdktf.listMapper(edgeTransportNodeStandardHostSwitchTransportZoneEndpointToTerraform, true)(struct!.transportZoneEndpoint),
  }
}


export function edgeTransportNodeStandardHostSwitchToHclTerraform(struct?: EdgeTransportNodeStandardHostSwitch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_switch_id: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switch_name: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switch_profile: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostSwitchProfile),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uplink_profile: {
      value: cdktf.stringToHclTerraform(struct!.uplinkProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vtep_ha_profile: {
      value: cdktf.stringToHclTerraform(struct!.vtepHaProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_assignment: {
      value: edgeTransportNodeStandardHostSwitchIpAssignmentToHclTerraform(struct!.ipAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpAssignmentList",
    },
    ipv6_assignment: {
      value: edgeTransportNodeStandardHostSwitchIpv6AssignmentToHclTerraform(struct!.ipv6Assignment),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchIpv6AssignmentList",
    },
    pnic: {
      value: cdktf.listMapperHcl(edgeTransportNodeStandardHostSwitchPnicToHclTerraform, true)(struct!.pnic),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchPnicList",
    },
    transport_zone_endpoint: {
      value: cdktf.listMapperHcl(edgeTransportNodeStandardHostSwitchTransportZoneEndpointToHclTerraform, true)(struct!.transportZoneEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "EdgeTransportNodeStandardHostSwitchTransportZoneEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeStandardHostSwitchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeStandardHostSwitch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostSwitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchId = this._hostSwitchId;
    }
    if (this._hostSwitchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchName = this._hostSwitchName;
    }
    if (this._hostSwitchProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchProfile = this._hostSwitchProfile;
    }
    if (this._uplinkProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkProfile = this._uplinkProfile;
    }
    if (this._vtepHaProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtepHaProfile = this._vtepHaProfile;
    }
    if (this._ipAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAssignment = this._ipAssignment?.internalValue;
    }
    if (this._ipv6Assignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Assignment = this._ipv6Assignment?.internalValue;
    }
    if (this._pnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pnic = this._pnic?.internalValue;
    }
    if (this._transportZoneEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZoneEndpoint = this._transportZoneEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeStandardHostSwitch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostSwitchId = undefined;
      this._hostSwitchName = undefined;
      this._hostSwitchProfile = undefined;
      this._uplinkProfile = undefined;
      this._vtepHaProfile = undefined;
      this._ipAssignment.internalValue = undefined;
      this._ipv6Assignment.internalValue = undefined;
      this._pnic.internalValue = undefined;
      this._transportZoneEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostSwitchId = value.hostSwitchId;
      this._hostSwitchName = value.hostSwitchName;
      this._hostSwitchProfile = value.hostSwitchProfile;
      this._uplinkProfile = value.uplinkProfile;
      this._vtepHaProfile = value.vtepHaProfile;
      this._ipAssignment.internalValue = value.ipAssignment;
      this._ipv6Assignment.internalValue = value.ipv6Assignment;
      this._pnic.internalValue = value.pnic;
      this._transportZoneEndpoint.internalValue = value.transportZoneEndpoint;
    }
  }

  // host_switch_id - computed: true, optional: true, required: false
  private _hostSwitchId?: string; 
  public get hostSwitchId() {
    return this.getStringAttribute('host_switch_id');
  }
  public set hostSwitchId(value: string) {
    this._hostSwitchId = value;
  }
  public resetHostSwitchId() {
    this._hostSwitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchIdInput() {
    return this._hostSwitchId;
  }

  // host_switch_name - computed: true, optional: true, required: false
  private _hostSwitchName?: string; 
  public get hostSwitchName() {
    return this.getStringAttribute('host_switch_name');
  }
  public set hostSwitchName(value: string) {
    this._hostSwitchName = value;
  }
  public resetHostSwitchName() {
    this._hostSwitchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchNameInput() {
    return this._hostSwitchName;
  }

  // host_switch_profile - computed: true, optional: true, required: false
  private _hostSwitchProfile?: string[]; 
  public get hostSwitchProfile() {
    return this.getListAttribute('host_switch_profile');
  }
  public set hostSwitchProfile(value: string[]) {
    this._hostSwitchProfile = value;
  }
  public resetHostSwitchProfile() {
    this._hostSwitchProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchProfileInput() {
    return this._hostSwitchProfile;
  }

  // uplink_profile - computed: true, optional: true, required: false
  private _uplinkProfile?: string; 
  public get uplinkProfile() {
    return this.getStringAttribute('uplink_profile');
  }
  public set uplinkProfile(value: string) {
    this._uplinkProfile = value;
  }
  public resetUplinkProfile() {
    this._uplinkProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkProfileInput() {
    return this._uplinkProfile;
  }

  // vtep_ha_profile - computed: true, optional: true, required: false
  private _vtepHaProfile?: string; 
  public get vtepHaProfile() {
    return this.getStringAttribute('vtep_ha_profile');
  }
  public set vtepHaProfile(value: string) {
    this._vtepHaProfile = value;
  }
  public resetVtepHaProfile() {
    this._vtepHaProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepHaProfileInput() {
    return this._vtepHaProfile;
  }

  // ip_assignment - computed: false, optional: true, required: false
  private _ipAssignment = new EdgeTransportNodeStandardHostSwitchIpAssignmentOutputReference(this, "ip_assignment");
  public get ipAssignment() {
    return this._ipAssignment;
  }
  public putIpAssignment(value: EdgeTransportNodeStandardHostSwitchIpAssignment) {
    this._ipAssignment.internalValue = value;
  }
  public resetIpAssignment() {
    this._ipAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentInput() {
    return this._ipAssignment.internalValue;
  }

  // ipv6_assignment - computed: false, optional: true, required: false
  private _ipv6Assignment = new EdgeTransportNodeStandardHostSwitchIpv6AssignmentOutputReference(this, "ipv6_assignment");
  public get ipv6Assignment() {
    return this._ipv6Assignment;
  }
  public putIpv6Assignment(value: EdgeTransportNodeStandardHostSwitchIpv6Assignment) {
    this._ipv6Assignment.internalValue = value;
  }
  public resetIpv6Assignment() {
    this._ipv6Assignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AssignmentInput() {
    return this._ipv6Assignment.internalValue;
  }

  // pnic - computed: false, optional: true, required: false
  private _pnic = new EdgeTransportNodeStandardHostSwitchPnicList(this, "pnic", false);
  public get pnic() {
    return this._pnic;
  }
  public putPnic(value: EdgeTransportNodeStandardHostSwitchPnic[] | cdktf.IResolvable) {
    this._pnic.internalValue = value;
  }
  public resetPnic() {
    this._pnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pnicInput() {
    return this._pnic.internalValue;
  }

  // transport_zone_endpoint - computed: false, optional: true, required: false
  private _transportZoneEndpoint = new EdgeTransportNodeStandardHostSwitchTransportZoneEndpointList(this, "transport_zone_endpoint", false);
  public get transportZoneEndpoint() {
    return this._transportZoneEndpoint;
  }
  public putTransportZoneEndpoint(value: EdgeTransportNodeStandardHostSwitchTransportZoneEndpoint[] | cdktf.IResolvable) {
    this._transportZoneEndpoint.internalValue = value;
  }
  public resetTransportZoneEndpoint() {
    this._transportZoneEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZoneEndpointInput() {
    return this._transportZoneEndpoint.internalValue;
  }
}

export class EdgeTransportNodeStandardHostSwitchList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeStandardHostSwitch[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeStandardHostSwitchOutputReference {
    return new EdgeTransportNodeStandardHostSwitchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgeTransportNodeTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#scope EdgeTransportNode#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#tag EdgeTransportNode#tag}
  */
  readonly tag?: string;
}

export function edgeTransportNodeTagToTerraform(struct?: EdgeTransportNodeTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function edgeTransportNodeTagToHclTerraform(struct?: EdgeTransportNodeTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgeTransportNodeTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgeTransportNodeTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgeTransportNodeTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class EdgeTransportNodeTagList extends cdktf.ComplexList {
  public internalValue? : EdgeTransportNodeTag[] | cdktf.IResolvable

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
  public get(index: number): EdgeTransportNodeTagOutputReference {
    return new EdgeTransportNodeTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node nsxt_edge_transport_node}
*/
export class EdgeTransportNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_edge_transport_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeTransportNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeTransportNode to import
  * @param importFromId The id of the existing EdgeTransportNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeTransportNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_edge_transport_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/edge_transport_node nsxt_edge_transport_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeTransportNodeConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeTransportNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_edge_transport_node',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._externalId = config.externalId;
    this._failureDomain = config.failureDomain;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._nodeId = config.nodeId;
    this._deploymentConfig.internalValue = config.deploymentConfig;
    this._nodeSettings.internalValue = config.nodeSettings;
    this._standardHostSwitch.internalValue = config.standardHostSwitch;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_id - computed: true, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // failure_domain - computed: true, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
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

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // deployment_config - computed: false, optional: true, required: false
  private _deploymentConfig = new EdgeTransportNodeDeploymentConfigOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: EdgeTransportNodeDeploymentConfig) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // node_settings - computed: false, optional: false, required: true
  private _nodeSettings = new EdgeTransportNodeNodeSettingsOutputReference(this, "node_settings");
  public get nodeSettings() {
    return this._nodeSettings;
  }
  public putNodeSettings(value: EdgeTransportNodeNodeSettings) {
    this._nodeSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSettingsInput() {
    return this._nodeSettings.internalValue;
  }

  // standard_host_switch - computed: false, optional: false, required: true
  private _standardHostSwitch = new EdgeTransportNodeStandardHostSwitchList(this, "standard_host_switch", false);
  public get standardHostSwitch() {
    return this._standardHostSwitch;
  }
  public putStandardHostSwitch(value: EdgeTransportNodeStandardHostSwitch[] | cdktf.IResolvable) {
    this._standardHostSwitch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardHostSwitchInput() {
    return this._standardHostSwitch.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new EdgeTransportNodeTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: EdgeTransportNodeTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_id: cdktf.stringToTerraform(this._externalId),
      failure_domain: cdktf.stringToTerraform(this._failureDomain),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      node_id: cdktf.stringToTerraform(this._nodeId),
      deployment_config: edgeTransportNodeDeploymentConfigToTerraform(this._deploymentConfig.internalValue),
      node_settings: edgeTransportNodeNodeSettingsToTerraform(this._nodeSettings.internalValue),
      standard_host_switch: cdktf.listMapper(edgeTransportNodeStandardHostSwitchToTerraform, true)(this._standardHostSwitch.internalValue),
      tag: cdktf.listMapper(edgeTransportNodeTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_domain: {
        value: cdktf.stringToHclTerraform(this._failureDomain),
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
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_config: {
        value: edgeTransportNodeDeploymentConfigToHclTerraform(this._deploymentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeTransportNodeDeploymentConfigList",
      },
      node_settings: {
        value: edgeTransportNodeNodeSettingsToHclTerraform(this._nodeSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeTransportNodeNodeSettingsList",
      },
      standard_host_switch: {
        value: cdktf.listMapperHcl(edgeTransportNodeStandardHostSwitchToHclTerraform, true)(this._standardHostSwitch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeTransportNodeStandardHostSwitchList",
      },
      tag: {
        value: cdktf.listMapperHcl(edgeTransportNodeTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EdgeTransportNodeTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
