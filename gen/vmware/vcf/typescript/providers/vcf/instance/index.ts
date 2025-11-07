// https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable VCF Customer Experience Improvement Program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ceip_enabled Instance#ceip_enabled}
  */
  readonly ceipEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Federal Information Processing Standards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#fips_enabled Instance#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Client string that identifies an SDDC by name or instance name. Used for management domain name. Can contain only letters, numbers and the following symbols: '-'. Example: "sfo01-m01", Length 3-20 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#instance_id Instance#instance_id}
  */
  readonly instanceId: string;
  /**
  * A string identifying the network pool associated with the management domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#management_pool_name Instance#management_pool_name}
  */
  readonly managementPoolName: string;
  /**
  * List of NTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ntp_servers Instance#ntp_servers}
  */
  readonly ntpServers: string[];
  /**
  * Skip ESXi thumbprint validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#skip_esx_thumbprint_validation Instance#skip_esx_thumbprint_validation}
  */
  readonly skipEsxThumbprintValidation: boolean | cdktf.IResolvable;
  /**
  * VCF version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#version Instance#version}
  */
  readonly version?: string;
  /**
  * automation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#automation Instance#automation}
  */
  readonly automation?: InstanceAutomation;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cluster Instance#cluster}
  */
  readonly cluster: InstanceCluster;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#dns Instance#dns}
  */
  readonly dns: InstanceDns;
  /**
  * dvs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#dvs Instance#dvs}
  */
  readonly dvs: InstanceDvs[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#host Instance#host}
  */
  readonly host: InstanceHost[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#network Instance#network}
  */
  readonly network: InstanceNetwork[] | cdktf.IResolvable;
  /**
  * nsx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nsx Instance#nsx}
  */
  readonly nsx?: InstanceNsx;
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#operations Instance#operations}
  */
  readonly operations?: InstanceOperations;
  /**
  * operations_collector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#operations_collector Instance#operations_collector}
  */
  readonly operationsCollector?: InstanceOperationsCollector;
  /**
  * operations_fleet_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#operations_fleet_management Instance#operations_fleet_management}
  */
  readonly operationsFleetManagement?: InstanceOperationsFleetManagement;
  /**
  * sddc_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#sddc_manager Instance#sddc_manager}
  */
  readonly sddcManager?: InstanceSddcManager;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#security Instance#security}
  */
  readonly security?: InstanceSecurity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
  /**
  * vcenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vcenter Instance#vcenter}
  */
  readonly vcenter: InstanceVcenter;
  /**
  * vsan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vsan Instance#vsan}
  */
  readonly vsan?: InstanceVsan;
}
export interface InstanceAutomation {
  /**
  * Administrator password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#admin_user_password Instance#admin_user_password}
  */
  readonly adminUserPassword?: string;
  /**
  * Host name for the automation appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname: string;
  /**
  * Internal Cluster CIDR. One among: 198.18.0.0/15, 240.0.0.0/15, 250.0.0.0/15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#internal_cluster_cidr Instance#internal_cluster_cidr}
  */
  readonly internalClusterCidr: string;
  /**
  * List of IP addresses.  For Standard deployment model two IP addresses need to be specified and for High Availability four IP addresses need to be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ip_pool Instance#ip_pool}
  */
  readonly ipPool: string[];
  /**
  * Node Prefix. It cannot be blank and must begin and end with an alphanumeric character, and can only contain lowercase alphanumeric characters or hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#node_prefix Instance#node_prefix}
  */
  readonly nodePrefix?: string;
}

export function instanceAutomationToTerraform(struct?: InstanceAutomationOutputReference | InstanceAutomation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_user_password: cdktf.stringToTerraform(struct!.adminUserPassword),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    internal_cluster_cidr: cdktf.stringToTerraform(struct!.internalClusterCidr),
    ip_pool: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPool),
    node_prefix: cdktf.stringToTerraform(struct!.nodePrefix),
  }
}


export function instanceAutomationToHclTerraform(struct?: InstanceAutomationOutputReference | InstanceAutomation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_user_password: {
      value: cdktf.stringToHclTerraform(struct!.adminUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_cluster_cidr: {
      value: cdktf.stringToHclTerraform(struct!.internalClusterCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_pool: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPool),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_prefix: {
      value: cdktf.stringToHclTerraform(struct!.nodePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceAutomationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceAutomation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUserPassword = this._adminUserPassword;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._internalClusterCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalClusterCidr = this._internalClusterCidr;
    }
    if (this._ipPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPool = this._ipPool;
    }
    if (this._nodePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePrefix = this._nodePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceAutomation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUserPassword = undefined;
      this._hostname = undefined;
      this._internalClusterCidr = undefined;
      this._ipPool = undefined;
      this._nodePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUserPassword = value.adminUserPassword;
      this._hostname = value.hostname;
      this._internalClusterCidr = value.internalClusterCidr;
      this._ipPool = value.ipPool;
      this._nodePrefix = value.nodePrefix;
    }
  }

  // admin_user_password - computed: false, optional: true, required: false
  private _adminUserPassword?: string; 
  public get adminUserPassword() {
    return this.getStringAttribute('admin_user_password');
  }
  public set adminUserPassword(value: string) {
    this._adminUserPassword = value;
  }
  public resetAdminUserPassword() {
    this._adminUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserPasswordInput() {
    return this._adminUserPassword;
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

  // internal_cluster_cidr - computed: false, optional: false, required: true
  private _internalClusterCidr?: string; 
  public get internalClusterCidr() {
    return this.getStringAttribute('internal_cluster_cidr');
  }
  public set internalClusterCidr(value: string) {
    this._internalClusterCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalClusterCidrInput() {
    return this._internalClusterCidr;
  }

  // ip_pool - computed: false, optional: false, required: true
  private _ipPool?: string[]; 
  public get ipPool() {
    return this.getListAttribute('ip_pool');
  }
  public set ipPool(value: string[]) {
    this._ipPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolInput() {
    return this._ipPool;
  }

  // node_prefix - computed: false, optional: true, required: false
  private _nodePrefix?: string; 
  public get nodePrefix() {
    return this.getStringAttribute('node_prefix');
  }
  public set nodePrefix(value: string) {
    this._nodePrefix = value;
  }
  public resetNodePrefix() {
    this._nodePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePrefixInput() {
    return this._nodePrefix;
  }
}
export interface InstanceClusterResourcePool {
  /**
  * CPU limit, default -1 (unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cpu_limit Instance#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Is CPU reservation expandable, default true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cpu_reservation_expandable Instance#cpu_reservation_expandable}
  */
  readonly cpuReservationExpandable?: boolean | cdktf.IResolvable;
  /**
  * CPU reservation in Mhz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cpu_reservation_mhz Instance#cpu_reservation_mhz}
  */
  readonly cpuReservationMhz?: number;
  /**
  * CPU reservation percentage, from 0 to 100, default 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cpu_reservation_percentage Instance#cpu_reservation_percentage}
  */
  readonly cpuReservationPercentage?: number;
  /**
  * CPU shares level, default 'normal', possible values: "custom", "high", "low", "normal"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cpu_shares_level Instance#cpu_shares_level}
  */
  readonly cpuSharesLevel?: string;
  /**
  * CPU shares value, only required when shares level is 'normal'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cpu_shares_value Instance#cpu_shares_value}
  */
  readonly cpuSharesValue?: number;
  /**
  * Memory limit, default -1 (unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#memory_limit Instance#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Is Memory reservation expandable, default true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#memory_reservation_expandable Instance#memory_reservation_expandable}
  */
  readonly memoryReservationExpandable?: boolean | cdktf.IResolvable;
  /**
  * Memory reservation in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#memory_reservation_mb Instance#memory_reservation_mb}
  */
  readonly memoryReservationMb?: number;
  /**
  * Memory reservation percentage, from 0 to 100, default 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#memory_reservation_percentage Instance#memory_reservation_percentage}
  */
  readonly memoryReservationPercentage?: number;
  /**
  * Memory shares level, default 'normal', possible values: "custom", "high", "low", "normal"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#memory_shares_level Instance#memory_shares_level}
  */
  readonly memorySharesLevel?: string;
  /**
  * Memory shares value, only required when shares level is 'normal'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#memory_shares_value Instance#memory_shares_value}
  */
  readonly memorySharesValue?: number;
  /**
  * Resource Pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * Type of resource pool, possible values: "management", "compute", "network"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#type Instance#type}
  */
  readonly type?: string;
}

export function instanceClusterResourcePoolToTerraform(struct?: InstanceClusterResourcePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit: cdktf.numberToTerraform(struct!.cpuLimit),
    cpu_reservation_expandable: cdktf.booleanToTerraform(struct!.cpuReservationExpandable),
    cpu_reservation_mhz: cdktf.numberToTerraform(struct!.cpuReservationMhz),
    cpu_reservation_percentage: cdktf.numberToTerraform(struct!.cpuReservationPercentage),
    cpu_shares_level: cdktf.stringToTerraform(struct!.cpuSharesLevel),
    cpu_shares_value: cdktf.numberToTerraform(struct!.cpuSharesValue),
    memory_limit: cdktf.numberToTerraform(struct!.memoryLimit),
    memory_reservation_expandable: cdktf.booleanToTerraform(struct!.memoryReservationExpandable),
    memory_reservation_mb: cdktf.numberToTerraform(struct!.memoryReservationMb),
    memory_reservation_percentage: cdktf.numberToTerraform(struct!.memoryReservationPercentage),
    memory_shares_level: cdktf.stringToTerraform(struct!.memorySharesLevel),
    memory_shares_value: cdktf.numberToTerraform(struct!.memorySharesValue),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function instanceClusterResourcePoolToHclTerraform(struct?: InstanceClusterResourcePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit: {
      value: cdktf.numberToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_reservation_expandable: {
      value: cdktf.booleanToHclTerraform(struct!.cpuReservationExpandable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_reservation_mhz: {
      value: cdktf.numberToHclTerraform(struct!.cpuReservationMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_reservation_percentage: {
      value: cdktf.numberToHclTerraform(struct!.cpuReservationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_shares_level: {
      value: cdktf.stringToHclTerraform(struct!.cpuSharesLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_shares_value: {
      value: cdktf.numberToHclTerraform(struct!.cpuSharesValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation_expandable: {
      value: cdktf.booleanToHclTerraform(struct!.memoryReservationExpandable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_reservation_mb: {
      value: cdktf.numberToHclTerraform(struct!.memoryReservationMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation_percentage: {
      value: cdktf.numberToHclTerraform(struct!.memoryReservationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_shares_level: {
      value: cdktf.stringToHclTerraform(struct!.memorySharesLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_shares_value: {
      value: cdktf.numberToHclTerraform(struct!.memorySharesValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceClusterResourcePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceClusterResourcePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuReservationExpandable !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationExpandable = this._cpuReservationExpandable;
    }
    if (this._cpuReservationMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationMhz = this._cpuReservationMhz;
    }
    if (this._cpuReservationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationPercentage = this._cpuReservationPercentage;
    }
    if (this._cpuSharesLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSharesLevel = this._cpuSharesLevel;
    }
    if (this._cpuSharesValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSharesValue = this._cpuSharesValue;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryReservationExpandable !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservationExpandable = this._memoryReservationExpandable;
    }
    if (this._memoryReservationMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservationMb = this._memoryReservationMb;
    }
    if (this._memoryReservationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservationPercentage = this._memoryReservationPercentage;
    }
    if (this._memorySharesLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySharesLevel = this._memorySharesLevel;
    }
    if (this._memorySharesValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySharesValue = this._memorySharesValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceClusterResourcePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuLimit = undefined;
      this._cpuReservationExpandable = undefined;
      this._cpuReservationMhz = undefined;
      this._cpuReservationPercentage = undefined;
      this._cpuSharesLevel = undefined;
      this._cpuSharesValue = undefined;
      this._memoryLimit = undefined;
      this._memoryReservationExpandable = undefined;
      this._memoryReservationMb = undefined;
      this._memoryReservationPercentage = undefined;
      this._memorySharesLevel = undefined;
      this._memorySharesValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuLimit = value.cpuLimit;
      this._cpuReservationExpandable = value.cpuReservationExpandable;
      this._cpuReservationMhz = value.cpuReservationMhz;
      this._cpuReservationPercentage = value.cpuReservationPercentage;
      this._cpuSharesLevel = value.cpuSharesLevel;
      this._cpuSharesValue = value.cpuSharesValue;
      this._memoryLimit = value.memoryLimit;
      this._memoryReservationExpandable = value.memoryReservationExpandable;
      this._memoryReservationMb = value.memoryReservationMb;
      this._memoryReservationPercentage = value.memoryReservationPercentage;
      this._memorySharesLevel = value.memorySharesLevel;
      this._memorySharesValue = value.memorySharesValue;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_reservation_expandable - computed: false, optional: true, required: false
  private _cpuReservationExpandable?: boolean | cdktf.IResolvable; 
  public get cpuReservationExpandable() {
    return this.getBooleanAttribute('cpu_reservation_expandable');
  }
  public set cpuReservationExpandable(value: boolean | cdktf.IResolvable) {
    this._cpuReservationExpandable = value;
  }
  public resetCpuReservationExpandable() {
    this._cpuReservationExpandable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationExpandableInput() {
    return this._cpuReservationExpandable;
  }

  // cpu_reservation_mhz - computed: false, optional: true, required: false
  private _cpuReservationMhz?: number; 
  public get cpuReservationMhz() {
    return this.getNumberAttribute('cpu_reservation_mhz');
  }
  public set cpuReservationMhz(value: number) {
    this._cpuReservationMhz = value;
  }
  public resetCpuReservationMhz() {
    this._cpuReservationMhz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationMhzInput() {
    return this._cpuReservationMhz;
  }

  // cpu_reservation_percentage - computed: false, optional: true, required: false
  private _cpuReservationPercentage?: number; 
  public get cpuReservationPercentage() {
    return this.getNumberAttribute('cpu_reservation_percentage');
  }
  public set cpuReservationPercentage(value: number) {
    this._cpuReservationPercentage = value;
  }
  public resetCpuReservationPercentage() {
    this._cpuReservationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationPercentageInput() {
    return this._cpuReservationPercentage;
  }

  // cpu_shares_level - computed: false, optional: true, required: false
  private _cpuSharesLevel?: string; 
  public get cpuSharesLevel() {
    return this.getStringAttribute('cpu_shares_level');
  }
  public set cpuSharesLevel(value: string) {
    this._cpuSharesLevel = value;
  }
  public resetCpuSharesLevel() {
    this._cpuSharesLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesLevelInput() {
    return this._cpuSharesLevel;
  }

  // cpu_shares_value - computed: false, optional: true, required: false
  private _cpuSharesValue?: number; 
  public get cpuSharesValue() {
    return this.getNumberAttribute('cpu_shares_value');
  }
  public set cpuSharesValue(value: number) {
    this._cpuSharesValue = value;
  }
  public resetCpuSharesValue() {
    this._cpuSharesValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSharesValueInput() {
    return this._cpuSharesValue;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_reservation_expandable - computed: false, optional: true, required: false
  private _memoryReservationExpandable?: boolean | cdktf.IResolvable; 
  public get memoryReservationExpandable() {
    return this.getBooleanAttribute('memory_reservation_expandable');
  }
  public set memoryReservationExpandable(value: boolean | cdktf.IResolvable) {
    this._memoryReservationExpandable = value;
  }
  public resetMemoryReservationExpandable() {
    this._memoryReservationExpandable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationExpandableInput() {
    return this._memoryReservationExpandable;
  }

  // memory_reservation_mb - computed: false, optional: true, required: false
  private _memoryReservationMb?: number; 
  public get memoryReservationMb() {
    return this.getNumberAttribute('memory_reservation_mb');
  }
  public set memoryReservationMb(value: number) {
    this._memoryReservationMb = value;
  }
  public resetMemoryReservationMb() {
    this._memoryReservationMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationMbInput() {
    return this._memoryReservationMb;
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

  // memory_shares_level - computed: false, optional: true, required: false
  private _memorySharesLevel?: string; 
  public get memorySharesLevel() {
    return this.getStringAttribute('memory_shares_level');
  }
  public set memorySharesLevel(value: string) {
    this._memorySharesLevel = value;
  }
  public resetMemorySharesLevel() {
    this._memorySharesLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySharesLevelInput() {
    return this._memorySharesLevel;
  }

  // memory_shares_value - computed: false, optional: true, required: false
  private _memorySharesValue?: number; 
  public get memorySharesValue() {
    return this.getNumberAttribute('memory_shares_value');
  }
  public set memorySharesValue(value: number) {
    this._memorySharesValue = value;
  }
  public resetMemorySharesValue() {
    this._memorySharesValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySharesValueInput() {
    return this._memorySharesValue;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class InstanceClusterResourcePoolList extends cdktf.ComplexList {
  public internalValue? : InstanceClusterResourcePool[] | cdktf.IResolvable

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
  public get(index: number): InstanceClusterResourcePoolOutputReference {
    return new InstanceClusterResourcePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceCluster {
  /**
  * vCenter cluster EVC mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cluster_evc_mode Instance#cluster_evc_mode}
  */
  readonly clusterEvcMode?: string;
  /**
  * vCenter Cluster Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cluster_name Instance#cluster_name}
  */
  readonly clusterName: string;
  /**
  * vCenter Datacenter Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#datacenter_name Instance#datacenter_name}
  */
  readonly datacenterName: string;
  /**
  * resource_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#resource_pool Instance#resource_pool}
  */
  readonly resourcePool?: InstanceClusterResourcePool[] | cdktf.IResolvable;
}

export function instanceClusterToTerraform(struct?: InstanceClusterOutputReference | InstanceCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_evc_mode: cdktf.stringToTerraform(struct!.clusterEvcMode),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    datacenter_name: cdktf.stringToTerraform(struct!.datacenterName),
    resource_pool: cdktf.listMapper(instanceClusterResourcePoolToTerraform, true)(struct!.resourcePool),
  }
}


export function instanceClusterToHclTerraform(struct?: InstanceClusterOutputReference | InstanceCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_evc_mode: {
      value: cdktf.stringToHclTerraform(struct!.clusterEvcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter_name: {
      value: cdktf.stringToHclTerraform(struct!.datacenterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.listMapperHcl(instanceClusterResourcePoolToHclTerraform, true)(struct!.resourcePool),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceClusterResourcePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterEvcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEvcMode = this._clusterEvcMode;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._datacenterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenterName = this._datacenterName;
    }
    if (this._resourcePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterEvcMode = undefined;
      this._clusterName = undefined;
      this._datacenterName = undefined;
      this._resourcePool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterEvcMode = value.clusterEvcMode;
      this._clusterName = value.clusterName;
      this._datacenterName = value.datacenterName;
      this._resourcePool.internalValue = value.resourcePool;
    }
  }

  // cluster_evc_mode - computed: false, optional: true, required: false
  private _clusterEvcMode?: string; 
  public get clusterEvcMode() {
    return this.getStringAttribute('cluster_evc_mode');
  }
  public set clusterEvcMode(value: string) {
    this._clusterEvcMode = value;
  }
  public resetClusterEvcMode() {
    this._clusterEvcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEvcModeInput() {
    return this._clusterEvcMode;
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

  // datacenter_name - computed: false, optional: false, required: true
  private _datacenterName?: string; 
  public get datacenterName() {
    return this.getStringAttribute('datacenter_name');
  }
  public set datacenterName(value: string) {
    this._datacenterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterNameInput() {
    return this._datacenterName;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool = new InstanceClusterResourcePoolList(this, "resource_pool", false);
  public get resourcePool() {
    return this._resourcePool;
  }
  public putResourcePool(value: InstanceClusterResourcePool[] | cdktf.IResolvable) {
    this._resourcePool.internalValue = value;
  }
  public resetResourcePool() {
    this._resourcePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool.internalValue;
  }
}
export interface InstanceDns {
  /**
  * Tenant domain. Parent tenant domain including TLD suffix Example: vmware.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#domain Instance#domain}
  */
  readonly domain: string;
  /**
  * Primary nameserver IPv4 address. Example: 172.0.0.4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#name_server Instance#name_server}
  */
  readonly nameServer?: string;
  /**
  * Secondary nameserver IPv4 address. Example: 172.0.0.5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#secondary_name_server Instance#secondary_name_server}
  */
  readonly secondaryNameServer?: string;
}

export function instanceDnsToTerraform(struct?: InstanceDnsOutputReference | InstanceDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name_server: cdktf.stringToTerraform(struct!.nameServer),
    secondary_name_server: cdktf.stringToTerraform(struct!.secondaryNameServer),
  }
}


export function instanceDnsToHclTerraform(struct?: InstanceDnsOutputReference | InstanceDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_server: {
      value: cdktf.stringToHclTerraform(struct!.nameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_name_server: {
      value: cdktf.stringToHclTerraform(struct!.secondaryNameServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._nameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServer = this._nameServer;
    }
    if (this._secondaryNameServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryNameServer = this._secondaryNameServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._nameServer = undefined;
      this._secondaryNameServer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._nameServer = value.nameServer;
      this._secondaryNameServer = value.secondaryNameServer;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // name_server - computed: false, optional: true, required: false
  private _nameServer?: string; 
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
  public set nameServer(value: string) {
    this._nameServer = value;
  }
  public resetNameServer() {
    this._nameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerInput() {
    return this._nameServer;
  }

  // secondary_name_server - computed: false, optional: true, required: false
  private _secondaryNameServer?: string; 
  public get secondaryNameServer() {
    return this.getStringAttribute('secondary_name_server');
  }
  public set secondaryNameServer(value: string) {
    this._secondaryNameServer = value;
  }
  public resetSecondaryNameServer() {
    this._secondaryNameServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNameServerInput() {
    return this._secondaryNameServer;
  }
}
export interface InstanceDvsNioc {
  /**
  * Traffic Type One among:VSAN, VMOTION, VIRTUALMACHINE, MANAGEMENT, NFS, VDP, HBR, FAULTTOLERANCE, ISCSI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#traffic_type Instance#traffic_type}
  */
  readonly trafficType: string;
  /**
  * NIOC Value. Example: LOW, NORMAL, HIGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#value Instance#value}
  */
  readonly value: string;
}

export function instanceDvsNiocToTerraform(struct?: InstanceDvsNioc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_type: cdktf.stringToTerraform(struct!.trafficType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function instanceDvsNiocToHclTerraform(struct?: InstanceDvsNioc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_type: {
      value: cdktf.stringToHclTerraform(struct!.trafficType),
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

export class InstanceDvsNiocOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceDvsNioc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficType = this._trafficType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDvsNioc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficType = value.trafficType;
      this._value = value.value;
    }
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
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

export class InstanceDvsNiocList extends cdktf.ComplexList {
  public internalValue? : InstanceDvsNioc[] | cdktf.IResolvable

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
  public get(index: number): InstanceDvsNiocOutputReference {
    return new InstanceDvsNiocOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceDvsNsxTeaming {
  /**
  * List of active uplinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#active_uplinks Instance#active_uplinks}
  */
  readonly activeUplinks: string[];
  /**
  * Teaming policy (e.g., FAILOVER_ORDER, LOADBALANCE_SRCID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#policy Instance#policy}
  */
  readonly policy: string;
  /**
  * List of standby uplinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#standby_uplinks Instance#standby_uplinks}
  */
  readonly standbyUplinks?: string[];
}

export function instanceDvsNsxTeamingToTerraform(struct?: InstanceDvsNsxTeaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeUplinks),
    policy: cdktf.stringToTerraform(struct!.policy),
    standby_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.standbyUplinks),
  }
}


export function instanceDvsNsxTeamingToHclTerraform(struct?: InstanceDvsNsxTeaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_uplinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeUplinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_uplinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.standbyUplinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceDvsNsxTeamingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceDvsNsxTeaming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeUplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeUplinks = this._activeUplinks;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._standbyUplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyUplinks = this._standbyUplinks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDvsNsxTeaming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeUplinks = undefined;
      this._policy = undefined;
      this._standbyUplinks = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeUplinks = value.activeUplinks;
      this._policy = value.policy;
      this._standbyUplinks = value.standbyUplinks;
    }
  }

  // active_uplinks - computed: false, optional: false, required: true
  private _activeUplinks?: string[]; 
  public get activeUplinks() {
    return this.getListAttribute('active_uplinks');
  }
  public set activeUplinks(value: string[]) {
    this._activeUplinks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUplinksInput() {
    return this._activeUplinks;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // standby_uplinks - computed: false, optional: true, required: false
  private _standbyUplinks?: string[]; 
  public get standbyUplinks() {
    return this.getListAttribute('standby_uplinks');
  }
  public set standbyUplinks(value: string[]) {
    this._standbyUplinks = value;
  }
  public resetStandbyUplinks() {
    this._standbyUplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyUplinksInput() {
    return this._standbyUplinks;
  }
}

export class InstanceDvsNsxTeamingList extends cdktf.ComplexList {
  public internalValue? : InstanceDvsNsxTeaming[] | cdktf.IResolvable

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
  public get(index: number): InstanceDvsNsxTeamingOutputReference {
    return new InstanceDvsNsxTeamingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceDvsNsxtSwitchConfigTransportZones {
  /**
  * Transport zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#name Instance#name}
  */
  readonly name?: string;
  /**
  * Transport type (e.g., OVERLAY, VLAN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#transport_type Instance#transport_type}
  */
  readonly transportType: string;
}

export function instanceDvsNsxtSwitchConfigTransportZonesToTerraform(struct?: InstanceDvsNsxtSwitchConfigTransportZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    transport_type: cdktf.stringToTerraform(struct!.transportType),
  }
}


export function instanceDvsNsxtSwitchConfigTransportZonesToHclTerraform(struct?: InstanceDvsNsxtSwitchConfigTransportZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_type: {
      value: cdktf.stringToHclTerraform(struct!.transportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceDvsNsxtSwitchConfigTransportZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceDvsNsxtSwitchConfigTransportZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._transportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportType = this._transportType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDvsNsxtSwitchConfigTransportZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._transportType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._transportType = value.transportType;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // transport_type - computed: false, optional: false, required: true
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }
}

export class InstanceDvsNsxtSwitchConfigTransportZonesList extends cdktf.ComplexList {
  public internalValue? : InstanceDvsNsxtSwitchConfigTransportZones[] | cdktf.IResolvable

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
  public get(index: number): InstanceDvsNsxtSwitchConfigTransportZonesOutputReference {
    return new InstanceDvsNsxtSwitchConfigTransportZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceDvsNsxtSwitchConfig {
  /**
  * Host switch operational mode (e.g., STANDARD, ENS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#host_switch_operational_mode Instance#host_switch_operational_mode}
  */
  readonly hostSwitchOperationalMode?: string;
  /**
  * IP assignment type for host switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ip_assignment_type Instance#ip_assignment_type}
  */
  readonly ipAssignmentType?: string;
  /**
  * transport_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#transport_zones Instance#transport_zones}
  */
  readonly transportZones: InstanceDvsNsxtSwitchConfigTransportZones[] | cdktf.IResolvable;
}

export function instanceDvsNsxtSwitchConfigToTerraform(struct?: InstanceDvsNsxtSwitchConfigOutputReference | InstanceDvsNsxtSwitchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_switch_operational_mode: cdktf.stringToTerraform(struct!.hostSwitchOperationalMode),
    ip_assignment_type: cdktf.stringToTerraform(struct!.ipAssignmentType),
    transport_zones: cdktf.listMapper(instanceDvsNsxtSwitchConfigTransportZonesToTerraform, true)(struct!.transportZones),
  }
}


export function instanceDvsNsxtSwitchConfigToHclTerraform(struct?: InstanceDvsNsxtSwitchConfigOutputReference | InstanceDvsNsxtSwitchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_switch_operational_mode: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchOperationalMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_assignment_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAssignmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_zones: {
      value: cdktf.listMapperHcl(instanceDvsNsxtSwitchConfigTransportZonesToHclTerraform, true)(struct!.transportZones),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceDvsNsxtSwitchConfigTransportZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceDvsNsxtSwitchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceDvsNsxtSwitchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostSwitchOperationalMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchOperationalMode = this._hostSwitchOperationalMode;
    }
    if (this._ipAssignmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAssignmentType = this._ipAssignmentType;
    }
    if (this._transportZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZones = this._transportZones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDvsNsxtSwitchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostSwitchOperationalMode = undefined;
      this._ipAssignmentType = undefined;
      this._transportZones.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostSwitchOperationalMode = value.hostSwitchOperationalMode;
      this._ipAssignmentType = value.ipAssignmentType;
      this._transportZones.internalValue = value.transportZones;
    }
  }

  // host_switch_operational_mode - computed: false, optional: true, required: false
  private _hostSwitchOperationalMode?: string; 
  public get hostSwitchOperationalMode() {
    return this.getStringAttribute('host_switch_operational_mode');
  }
  public set hostSwitchOperationalMode(value: string) {
    this._hostSwitchOperationalMode = value;
  }
  public resetHostSwitchOperationalMode() {
    this._hostSwitchOperationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchOperationalModeInput() {
    return this._hostSwitchOperationalMode;
  }

  // ip_assignment_type - computed: false, optional: true, required: false
  private _ipAssignmentType?: string; 
  public get ipAssignmentType() {
    return this.getStringAttribute('ip_assignment_type');
  }
  public set ipAssignmentType(value: string) {
    this._ipAssignmentType = value;
  }
  public resetIpAssignmentType() {
    this._ipAssignmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentTypeInput() {
    return this._ipAssignmentType;
  }

  // transport_zones - computed: false, optional: false, required: true
  private _transportZones = new InstanceDvsNsxtSwitchConfigTransportZonesList(this, "transport_zones", false);
  public get transportZones() {
    return this._transportZones;
  }
  public putTransportZones(value: InstanceDvsNsxtSwitchConfigTransportZones[] | cdktf.IResolvable) {
    this._transportZones.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZonesInput() {
    return this._transportZones.internalValue;
  }
}
export interface InstanceDvsVmnicMapping {
  /**
  * Uplink identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#uplink Instance#uplink}
  */
  readonly uplink: string;
  /**
  * Vmnic identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vmnic Instance#vmnic}
  */
  readonly vmnic: string;
}

export function instanceDvsVmnicMappingToTerraform(struct?: InstanceDvsVmnicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uplink: cdktf.stringToTerraform(struct!.uplink),
    vmnic: cdktf.stringToTerraform(struct!.vmnic),
  }
}


export function instanceDvsVmnicMappingToHclTerraform(struct?: InstanceDvsVmnicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uplink: {
      value: cdktf.stringToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmnic: {
      value: cdktf.stringToHclTerraform(struct!.vmnic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceDvsVmnicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceDvsVmnicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    if (this._vmnic !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmnic = this._vmnic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDvsVmnicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uplink = undefined;
      this._vmnic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uplink = value.uplink;
      this._vmnic = value.vmnic;
    }
  }

  // uplink - computed: false, optional: false, required: true
  private _uplink?: string; 
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
  public set uplink(value: string) {
    this._uplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }

  // vmnic - computed: false, optional: false, required: true
  private _vmnic?: string; 
  public get vmnic() {
    return this.getStringAttribute('vmnic');
  }
  public set vmnic(value: string) {
    this._vmnic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmnicInput() {
    return this._vmnic;
  }
}

export class InstanceDvsVmnicMappingList extends cdktf.ComplexList {
  public internalValue? : InstanceDvsVmnicMapping[] | cdktf.IResolvable

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
  public get(index: number): InstanceDvsVmnicMappingOutputReference {
    return new InstanceDvsVmnicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceDvs {
  /**
  * DVS Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#dvs_name Instance#dvs_name}
  */
  readonly dvsName: string;
  /**
  * DVS MTU (default value is 9000). In between 1500 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#mtu Instance#mtu}
  */
  readonly mtu?: number;
  /**
  * Types of networks in this portgroup. Possible values: VSAN, VMOTION, MANAGEMENT, VM_MANAGEMENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#networks Instance#networks}
  */
  readonly networks: string[];
  /**
  * nioc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nioc Instance#nioc}
  */
  readonly nioc?: InstanceDvsNioc[] | cdktf.IResolvable;
  /**
  * nsx_teaming block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nsx_teaming Instance#nsx_teaming}
  */
  readonly nsxTeaming?: InstanceDvsNsxTeaming[] | cdktf.IResolvable;
  /**
  * nsxt_switch_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nsxt_switch_config Instance#nsxt_switch_config}
  */
  readonly nsxtSwitchConfig?: InstanceDvsNsxtSwitchConfig;
  /**
  * vmnic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vmnic_mapping Instance#vmnic_mapping}
  */
  readonly vmnicMapping: InstanceDvsVmnicMapping[] | cdktf.IResolvable;
}

export function instanceDvsToTerraform(struct?: InstanceDvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dvs_name: cdktf.stringToTerraform(struct!.dvsName),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    nioc: cdktf.listMapper(instanceDvsNiocToTerraform, true)(struct!.nioc),
    nsx_teaming: cdktf.listMapper(instanceDvsNsxTeamingToTerraform, true)(struct!.nsxTeaming),
    nsxt_switch_config: instanceDvsNsxtSwitchConfigToTerraform(struct!.nsxtSwitchConfig),
    vmnic_mapping: cdktf.listMapper(instanceDvsVmnicMappingToTerraform, true)(struct!.vmnicMapping),
  }
}


export function instanceDvsToHclTerraform(struct?: InstanceDvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dvs_name: {
      value: cdktf.stringToHclTerraform(struct!.dvsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nioc: {
      value: cdktf.listMapperHcl(instanceDvsNiocToHclTerraform, true)(struct!.nioc),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceDvsNiocList",
    },
    nsx_teaming: {
      value: cdktf.listMapperHcl(instanceDvsNsxTeamingToHclTerraform, true)(struct!.nsxTeaming),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceDvsNsxTeamingList",
    },
    nsxt_switch_config: {
      value: instanceDvsNsxtSwitchConfigToHclTerraform(struct!.nsxtSwitchConfig),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceDvsNsxtSwitchConfigList",
    },
    vmnic_mapping: {
      value: cdktf.listMapperHcl(instanceDvsVmnicMappingToHclTerraform, true)(struct!.vmnicMapping),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceDvsVmnicMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceDvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceDvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dvsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dvsName = this._dvsName;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._nioc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nioc = this._nioc?.internalValue;
    }
    if (this._nsxTeaming?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxTeaming = this._nsxTeaming?.internalValue;
    }
    if (this._nsxtSwitchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxtSwitchConfig = this._nsxtSwitchConfig?.internalValue;
    }
    if (this._vmnicMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmnicMapping = this._vmnicMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dvsName = undefined;
      this._mtu = undefined;
      this._networks = undefined;
      this._nioc.internalValue = undefined;
      this._nsxTeaming.internalValue = undefined;
      this._nsxtSwitchConfig.internalValue = undefined;
      this._vmnicMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dvsName = value.dvsName;
      this._mtu = value.mtu;
      this._networks = value.networks;
      this._nioc.internalValue = value.nioc;
      this._nsxTeaming.internalValue = value.nsxTeaming;
      this._nsxtSwitchConfig.internalValue = value.nsxtSwitchConfig;
      this._vmnicMapping.internalValue = value.vmnicMapping;
    }
  }

  // dvs_name - computed: false, optional: false, required: true
  private _dvsName?: string; 
  public get dvsName() {
    return this.getStringAttribute('dvs_name');
  }
  public set dvsName(value: string) {
    this._dvsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dvsNameInput() {
    return this._dvsName;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // networks - computed: false, optional: false, required: true
  private _networks?: string[]; 
  public get networks() {
    return this.getListAttribute('networks');
  }
  public set networks(value: string[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // nioc - computed: false, optional: true, required: false
  private _nioc = new InstanceDvsNiocList(this, "nioc", false);
  public get nioc() {
    return this._nioc;
  }
  public putNioc(value: InstanceDvsNioc[] | cdktf.IResolvable) {
    this._nioc.internalValue = value;
  }
  public resetNioc() {
    this._nioc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get niocInput() {
    return this._nioc.internalValue;
  }

  // nsx_teaming - computed: false, optional: true, required: false
  private _nsxTeaming = new InstanceDvsNsxTeamingList(this, "nsx_teaming", false);
  public get nsxTeaming() {
    return this._nsxTeaming;
  }
  public putNsxTeaming(value: InstanceDvsNsxTeaming[] | cdktf.IResolvable) {
    this._nsxTeaming.internalValue = value;
  }
  public resetNsxTeaming() {
    this._nsxTeaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxTeamingInput() {
    return this._nsxTeaming.internalValue;
  }

  // nsxt_switch_config - computed: false, optional: true, required: false
  private _nsxtSwitchConfig = new InstanceDvsNsxtSwitchConfigOutputReference(this, "nsxt_switch_config");
  public get nsxtSwitchConfig() {
    return this._nsxtSwitchConfig;
  }
  public putNsxtSwitchConfig(value: InstanceDvsNsxtSwitchConfig) {
    this._nsxtSwitchConfig.internalValue = value;
  }
  public resetNsxtSwitchConfig() {
    this._nsxtSwitchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxtSwitchConfigInput() {
    return this._nsxtSwitchConfig.internalValue;
  }

  // vmnic_mapping - computed: false, optional: false, required: true
  private _vmnicMapping = new InstanceDvsVmnicMappingList(this, "vmnic_mapping", false);
  public get vmnicMapping() {
    return this._vmnicMapping;
  }
  public putVmnicMapping(value: InstanceDvsVmnicMapping[] | cdktf.IResolvable) {
    this._vmnicMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmnicMappingInput() {
    return this._vmnicMapping.internalValue;
  }
}

export class InstanceDvsList extends cdktf.ComplexList {
  public internalValue? : InstanceDvs[] | cdktf.IResolvable

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
  public get(index: number): InstanceDvsOutputReference {
    return new InstanceDvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceHostCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#password Instance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#username Instance#username}
  */
  readonly username: string;
}

export function instanceHostCredentialsToTerraform(struct?: InstanceHostCredentialsOutputReference | InstanceHostCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function instanceHostCredentialsToHclTerraform(struct?: InstanceHostCredentialsOutputReference | InstanceHostCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceHostCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceHostCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceHostCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface InstanceHost {
  /**
  * ESXi hostname. If just the short hostname is provided, then FQDN will be generated using the "domain" from dns configuration. Must also adhere to RFC 1123 naming conventions. Example: "esx-1" length from 3 to 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname: string;
  /**
  * Host SSH thumbprint (RSA SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ssh_thumbprint Instance#ssh_thumbprint}
  */
  readonly sshThumbprint?: string;
  /**
  * Host SSH thumbprint (RSA SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ssl_thumbprint Instance#ssl_thumbprint}
  */
  readonly sslThumbprint?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#credentials Instance#credentials}
  */
  readonly credentials?: InstanceHostCredentials;
}

export function instanceHostToTerraform(struct?: InstanceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ssh_thumbprint: cdktf.stringToTerraform(struct!.sshThumbprint),
    ssl_thumbprint: cdktf.stringToTerraform(struct!.sslThumbprint),
    credentials: instanceHostCredentialsToTerraform(struct!.credentials),
  }
}


export function instanceHostToHclTerraform(struct?: InstanceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.sshThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.sslThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: instanceHostCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceHostCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._sshThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshThumbprint = this._sshThumbprint;
    }
    if (this._sslThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThumbprint = this._sslThumbprint;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._sshThumbprint = undefined;
      this._sslThumbprint = undefined;
      this._credentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._sshThumbprint = value.sshThumbprint;
      this._sslThumbprint = value.sslThumbprint;
      this._credentials.internalValue = value.credentials;
    }
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

  // ssh_thumbprint - computed: false, optional: true, required: false
  private _sshThumbprint?: string; 
  public get sshThumbprint() {
    return this.getStringAttribute('ssh_thumbprint');
  }
  public set sshThumbprint(value: string) {
    this._sshThumbprint = value;
  }
  public resetSshThumbprint() {
    this._sshThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshThumbprintInput() {
    return this._sshThumbprint;
  }

  // ssl_thumbprint - computed: false, optional: true, required: false
  private _sslThumbprint?: string; 
  public get sslThumbprint() {
    return this.getStringAttribute('ssl_thumbprint');
  }
  public set sslThumbprint(value: string) {
    this._sslThumbprint = value;
  }
  public resetSslThumbprint() {
    this._sslThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThumbprintInput() {
    return this._sslThumbprint;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new InstanceHostCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: InstanceHostCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}

export class InstanceHostList extends cdktf.ComplexList {
  public internalValue? : InstanceHost[] | cdktf.IResolvable

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
  public get(index: number): InstanceHostOutputReference {
    return new InstanceHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceNetworkIncludeIpAddressRanges {
  /**
  * End IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#end_ip_address Instance#end_ip_address}
  */
  readonly endIpAddress: string;
  /**
  * Start IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#start_ip_address Instance#start_ip_address}
  */
  readonly startIpAddress: string;
}

export function instanceNetworkIncludeIpAddressRangesToTerraform(struct?: InstanceNetworkIncludeIpAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip_address: cdktf.stringToTerraform(struct!.endIpAddress),
    start_ip_address: cdktf.stringToTerraform(struct!.startIpAddress),
  }
}


export function instanceNetworkIncludeIpAddressRangesToHclTerraform(struct?: InstanceNetworkIncludeIpAddressRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.endIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.startIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNetworkIncludeIpAddressRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceNetworkIncludeIpAddressRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIpAddress = this._endIpAddress;
    }
    if (this._startIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIpAddress = this._startIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNetworkIncludeIpAddressRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIpAddress = undefined;
      this._startIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIpAddress = value.endIpAddress;
      this._startIpAddress = value.startIpAddress;
    }
  }

  // end_ip_address - computed: false, optional: false, required: true
  private _endIpAddress?: string; 
  public get endIpAddress() {
    return this.getStringAttribute('end_ip_address');
  }
  public set endIpAddress(value: string) {
    this._endIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpAddressInput() {
    return this._endIpAddress;
  }

  // start_ip_address - computed: false, optional: false, required: true
  private _startIpAddress?: string; 
  public get startIpAddress() {
    return this.getStringAttribute('start_ip_address');
  }
  public set startIpAddress(value: string) {
    this._startIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpAddressInput() {
    return this._startIpAddress;
  }
}

export class InstanceNetworkIncludeIpAddressRangesList extends cdktf.ComplexList {
  public internalValue? : InstanceNetworkIncludeIpAddressRanges[] | cdktf.IResolvable

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
  public get(index: number): InstanceNetworkIncludeIpAddressRangesOutputReference {
    return new InstanceNetworkIncludeIpAddressRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceNetwork {
  /**
  * Active Uplinks for teaming policy, specify uplink1 for failover_explicit VSAN Teaming Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#active_uplinks Instance#active_uplinks}
  */
  readonly activeUplinks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#gateway Instance#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#include_ip_address Instance#include_ip_address}
  */
  readonly includeIpAddress?: string[];
  /**
  * MTU size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#mtu Instance#mtu}
  */
  readonly mtu: number;
  /**
  * Network Type. One among: VSAN, VMOTION, MANAGEMENT, VM_MANAGEMENT or any custom network type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#network_type Instance#network_type}
  */
  readonly networkType: string;
  /**
  * Portgroup key name. When adding a cluster with a new DVS, this value must be provided. When adding a cluster to an existing DVS, this value must not be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#port_group_key Instance#port_group_key}
  */
  readonly portGroupKey?: string;
  /**
  * Standby Uplinks for teaming policy, specify uplink2 for failover_explicit VSAN Teaming Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#standby_uplinks Instance#standby_uplinks}
  */
  readonly standbyUplinks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#subnet Instance#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#subnet_mask Instance#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Teaming Policy for VSAN and VMOTION network types, Default is loadbalance_loadbased. One among: loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, loadbalance_loadbased
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#teaming_policy Instance#teaming_policy}
  */
  readonly teamingPolicy?: string;
  /**
  * VLAN Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vlan_id Instance#vlan_id}
  */
  readonly vlanId: number;
  /**
  * include_ip_address_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#include_ip_address_ranges Instance#include_ip_address_ranges}
  */
  readonly includeIpAddressRanges?: InstanceNetworkIncludeIpAddressRanges[] | cdktf.IResolvable;
}

export function instanceNetworkToTerraform(struct?: InstanceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeUplinks),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    include_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeIpAddress),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    port_group_key: cdktf.stringToTerraform(struct!.portGroupKey),
    standby_uplinks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.standbyUplinks),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    teaming_policy: cdktf.stringToTerraform(struct!.teamingPolicy),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    include_ip_address_ranges: cdktf.listMapper(instanceNetworkIncludeIpAddressRangesToTerraform, true)(struct!.includeIpAddressRanges),
  }
}


export function instanceNetworkToHclTerraform(struct?: InstanceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_uplinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeUplinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeIpAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_group_key: {
      value: cdktf.stringToHclTerraform(struct!.portGroupKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_uplinks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.standbyUplinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
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
    teaming_policy: {
      value: cdktf.stringToHclTerraform(struct!.teamingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_ip_address_ranges: {
      value: cdktf.listMapperHcl(instanceNetworkIncludeIpAddressRangesToHclTerraform, true)(struct!.includeIpAddressRanges),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceNetworkIncludeIpAddressRangesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeUplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeUplinks = this._activeUplinks;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._includeIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIpAddress = this._includeIpAddress;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._portGroupKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portGroupKey = this._portGroupKey;
    }
    if (this._standbyUplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyUplinks = this._standbyUplinks;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._teamingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamingPolicy = this._teamingPolicy;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._includeIpAddressRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeIpAddressRanges = this._includeIpAddressRanges?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeUplinks = undefined;
      this._gateway = undefined;
      this._includeIpAddress = undefined;
      this._mtu = undefined;
      this._networkType = undefined;
      this._portGroupKey = undefined;
      this._standbyUplinks = undefined;
      this._subnet = undefined;
      this._subnetMask = undefined;
      this._teamingPolicy = undefined;
      this._vlanId = undefined;
      this._includeIpAddressRanges.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeUplinks = value.activeUplinks;
      this._gateway = value.gateway;
      this._includeIpAddress = value.includeIpAddress;
      this._mtu = value.mtu;
      this._networkType = value.networkType;
      this._portGroupKey = value.portGroupKey;
      this._standbyUplinks = value.standbyUplinks;
      this._subnet = value.subnet;
      this._subnetMask = value.subnetMask;
      this._teamingPolicy = value.teamingPolicy;
      this._vlanId = value.vlanId;
      this._includeIpAddressRanges.internalValue = value.includeIpAddressRanges;
    }
  }

  // active_uplinks - computed: false, optional: true, required: false
  private _activeUplinks?: string[]; 
  public get activeUplinks() {
    return this.getListAttribute('active_uplinks');
  }
  public set activeUplinks(value: string[]) {
    this._activeUplinks = value;
  }
  public resetActiveUplinks() {
    this._activeUplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUplinksInput() {
    return this._activeUplinks;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // include_ip_address - computed: false, optional: true, required: false
  private _includeIpAddress?: string[]; 
  public get includeIpAddress() {
    return this.getListAttribute('include_ip_address');
  }
  public set includeIpAddress(value: string[]) {
    this._includeIpAddress = value;
  }
  public resetIncludeIpAddress() {
    this._includeIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIpAddressInput() {
    return this._includeIpAddress;
  }

  // mtu - computed: false, optional: false, required: true
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // port_group_key - computed: false, optional: true, required: false
  private _portGroupKey?: string; 
  public get portGroupKey() {
    return this.getStringAttribute('port_group_key');
  }
  public set portGroupKey(value: string) {
    this._portGroupKey = value;
  }
  public resetPortGroupKey() {
    this._portGroupKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portGroupKeyInput() {
    return this._portGroupKey;
  }

  // standby_uplinks - computed: false, optional: true, required: false
  private _standbyUplinks?: string[]; 
  public get standbyUplinks() {
    return this.getListAttribute('standby_uplinks');
  }
  public set standbyUplinks(value: string[]) {
    this._standbyUplinks = value;
  }
  public resetStandbyUplinks() {
    this._standbyUplinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyUplinksInput() {
    return this._standbyUplinks;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // teaming_policy - computed: false, optional: true, required: false
  private _teamingPolicy?: string; 
  public get teamingPolicy() {
    return this.getStringAttribute('teaming_policy');
  }
  public set teamingPolicy(value: string) {
    this._teamingPolicy = value;
  }
  public resetTeamingPolicy() {
    this._teamingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamingPolicyInput() {
    return this._teamingPolicy;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // include_ip_address_ranges - computed: false, optional: true, required: false
  private _includeIpAddressRanges = new InstanceNetworkIncludeIpAddressRangesList(this, "include_ip_address_ranges", false);
  public get includeIpAddressRanges() {
    return this._includeIpAddressRanges;
  }
  public putIncludeIpAddressRanges(value: InstanceNetworkIncludeIpAddressRanges[] | cdktf.IResolvable) {
    this._includeIpAddressRanges.internalValue = value;
  }
  public resetIncludeIpAddressRanges() {
    this._includeIpAddressRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIpAddressRangesInput() {
    return this._includeIpAddressRanges.internalValue;
  }
}

export class InstanceNetworkList extends cdktf.ComplexList {
  public internalValue? : InstanceNetwork[] | cdktf.IResolvable

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
  public get(index: number): InstanceNetworkOutputReference {
    return new InstanceNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceNsxIpAddressPoolSubnetIpAddressPoolRange {
  /**
  * The last IP Address of the IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#end Instance#end}
  */
  readonly end: string;
  /**
  * The first IP Address of the IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#start Instance#start}
  */
  readonly start: string;
}

export function instanceNsxIpAddressPoolSubnetIpAddressPoolRangeToTerraform(struct?: InstanceNsxIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function instanceNsxIpAddressPoolSubnetIpAddressPoolRangeToHclTerraform(struct?: InstanceNsxIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNsxIpAddressPoolSubnetIpAddressPoolRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceNsxIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsxIpAddressPoolSubnetIpAddressPoolRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class InstanceNsxIpAddressPoolSubnetIpAddressPoolRangeList extends cdktf.ComplexList {
  public internalValue? : InstanceNsxIpAddressPoolSubnetIpAddressPoolRange[] | cdktf.IResolvable

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
  public get(index: number): InstanceNsxIpAddressPoolSubnetIpAddressPoolRangeOutputReference {
    return new InstanceNsxIpAddressPoolSubnetIpAddressPoolRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceNsxIpAddressPoolSubnet {
  /**
  * The subnet representation, contains the network address and the prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cidr Instance#cidr}
  */
  readonly cidr: string;
  /**
  * The default gateway address of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#gateway Instance#gateway}
  */
  readonly gateway: string;
  /**
  * ip_address_pool_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ip_address_pool_range Instance#ip_address_pool_range}
  */
  readonly ipAddressPoolRange?: InstanceNsxIpAddressPoolSubnetIpAddressPoolRange[] | cdktf.IResolvable;
}

export function instanceNsxIpAddressPoolSubnetToTerraform(struct?: InstanceNsxIpAddressPoolSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_address_pool_range: cdktf.listMapper(instanceNsxIpAddressPoolSubnetIpAddressPoolRangeToTerraform, true)(struct!.ipAddressPoolRange),
  }
}


export function instanceNsxIpAddressPoolSubnetToHclTerraform(struct?: InstanceNsxIpAddressPoolSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_pool_range: {
      value: cdktf.listMapperHcl(instanceNsxIpAddressPoolSubnetIpAddressPoolRangeToHclTerraform, true)(struct!.ipAddressPoolRange),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceNsxIpAddressPoolSubnetIpAddressPoolRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNsxIpAddressPoolSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceNsxIpAddressPoolSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipAddressPoolRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPoolRange = this._ipAddressPoolRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsxIpAddressPoolSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._gateway = undefined;
      this._ipAddressPoolRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._gateway = value.gateway;
      this._ipAddressPoolRange.internalValue = value.ipAddressPoolRange;
    }
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_address_pool_range - computed: false, optional: true, required: false
  private _ipAddressPoolRange = new InstanceNsxIpAddressPoolSubnetIpAddressPoolRangeList(this, "ip_address_pool_range", false);
  public get ipAddressPoolRange() {
    return this._ipAddressPoolRange;
  }
  public putIpAddressPoolRange(value: InstanceNsxIpAddressPoolSubnetIpAddressPoolRange[] | cdktf.IResolvable) {
    this._ipAddressPoolRange.internalValue = value;
  }
  public resetIpAddressPoolRange() {
    this._ipAddressPoolRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPoolRangeInput() {
    return this._ipAddressPoolRange.internalValue;
  }
}

export class InstanceNsxIpAddressPoolSubnetList extends cdktf.ComplexList {
  public internalValue? : InstanceNsxIpAddressPoolSubnet[] | cdktf.IResolvable

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
  public get(index: number): InstanceNsxIpAddressPoolSubnetOutputReference {
    return new InstanceNsxIpAddressPoolSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceNsxIpAddressPool {
  /**
  * Description of the IP address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#description Instance#description}
  */
  readonly description?: string;
  /**
  * Ignore unavailable NSX cluster(s) during IP pool spec validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ignore_unavailable_nsx_cluster Instance#ignore_unavailable_nsx_cluster}
  */
  readonly ignoreUnavailableNsxCluster?: boolean | cdktf.IResolvable;
  /**
  * Providing only name of existing IP Address Pool reuses it, while providing a new name with subnets creates a new one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#subnet Instance#subnet}
  */
  readonly subnet?: InstanceNsxIpAddressPoolSubnet[] | cdktf.IResolvable;
}

export function instanceNsxIpAddressPoolToTerraform(struct?: InstanceNsxIpAddressPoolOutputReference | InstanceNsxIpAddressPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ignore_unavailable_nsx_cluster: cdktf.booleanToTerraform(struct!.ignoreUnavailableNsxCluster),
    name: cdktf.stringToTerraform(struct!.name),
    subnet: cdktf.listMapper(instanceNsxIpAddressPoolSubnetToTerraform, true)(struct!.subnet),
  }
}


export function instanceNsxIpAddressPoolToHclTerraform(struct?: InstanceNsxIpAddressPoolOutputReference | InstanceNsxIpAddressPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_unavailable_nsx_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnavailableNsxCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.listMapperHcl(instanceNsxIpAddressPoolSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceNsxIpAddressPoolSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNsxIpAddressPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceNsxIpAddressPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ignoreUnavailableNsxCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnavailableNsxCluster = this._ignoreUnavailableNsxCluster;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsxIpAddressPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._ignoreUnavailableNsxCluster = undefined;
      this._name = undefined;
      this._subnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._ignoreUnavailableNsxCluster = value.ignoreUnavailableNsxCluster;
      this._name = value.name;
      this._subnet.internalValue = value.subnet;
    }
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

  // ignore_unavailable_nsx_cluster - computed: false, optional: true, required: false
  private _ignoreUnavailableNsxCluster?: boolean | cdktf.IResolvable; 
  public get ignoreUnavailableNsxCluster() {
    return this.getBooleanAttribute('ignore_unavailable_nsx_cluster');
  }
  public set ignoreUnavailableNsxCluster(value: boolean | cdktf.IResolvable) {
    this._ignoreUnavailableNsxCluster = value;
  }
  public resetIgnoreUnavailableNsxCluster() {
    this._ignoreUnavailableNsxCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnavailableNsxClusterInput() {
    return this._ignoreUnavailableNsxCluster;
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

  // subnet - computed: false, optional: true, required: false
  private _subnet = new InstanceNsxIpAddressPoolSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: InstanceNsxIpAddressPoolSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}
export interface InstanceNsxNsxManager {
  /**
  * NSX Manager hostname. If just the short hostname is provided, then FQDN will be generated using the "domain" from dns configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
}

export function instanceNsxNsxManagerToTerraform(struct?: InstanceNsxNsxManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function instanceNsxNsxManagerToHclTerraform(struct?: InstanceNsxNsxManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNsxNsxManagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceNsxNsxManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsxNsxManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
    }
  }

  // hostname - computed: false, optional: true, required: false
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
}

export class InstanceNsxNsxManagerList extends cdktf.ComplexList {
  public internalValue? : InstanceNsxNsxManager[] | cdktf.IResolvable

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
  public get(index: number): InstanceNsxNsxManagerOutputReference {
    return new InstanceNsxNsxManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceNsx {
  /**
  * NSX admin password. The password must be at least 12 characters long. Must contain at-least 1 uppercase, 1 lowercase, 1 special character and 1 digit. In addition, a character cannot be repeated 3 or more times consecutively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nsx_admin_password Instance#nsx_admin_password}
  */
  readonly nsxAdminPassword?: string;
  /**
  * NSX audit password. The password must be at least 12 characters long. Must contain at-least 1 uppercase, 1 lowercase, 1 special character and 1 digit. In addition, a character cannot be repeated 3 or more times consecutively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nsx_audit_password Instance#nsx_audit_password}
  */
  readonly nsxAuditPassword?: string;
  /**
  * NSX-T Manager size. One among: medium, large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nsx_manager_size Instance#nsx_manager_size}
  */
  readonly nsxManagerSize: string;
  /**
  * NSX Manager root password. Password should have 1) At least eight characters, 2) At least one lower-case letter, 3) At least one upper-case letter 4) At least one digit 5) At least one special character, 6) At least five different characters , 7) No dictionary words, 6) No palindromes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#root_nsx_manager_password Instance#root_nsx_manager_password}
  */
  readonly rootNsxManagerPassword: string;
  /**
  * Transport VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#transport_vlan_id Instance#transport_vlan_id}
  */
  readonly transportVlanId: number;
  /**
  * FQDN for VIP so that common SSL certificates can be installed across all managers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vip_fqdn Instance#vip_fqdn}
  */
  readonly vipFqdn: string;
  /**
  * ip_address_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ip_address_pool Instance#ip_address_pool}
  */
  readonly ipAddressPool?: InstanceNsxIpAddressPool;
  /**
  * nsx_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#nsx_manager Instance#nsx_manager}
  */
  readonly nsxManager: InstanceNsxNsxManager[] | cdktf.IResolvable;
}

export function instanceNsxToTerraform(struct?: InstanceNsxOutputReference | InstanceNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsx_admin_password: cdktf.stringToTerraform(struct!.nsxAdminPassword),
    nsx_audit_password: cdktf.stringToTerraform(struct!.nsxAuditPassword),
    nsx_manager_size: cdktf.stringToTerraform(struct!.nsxManagerSize),
    root_nsx_manager_password: cdktf.stringToTerraform(struct!.rootNsxManagerPassword),
    transport_vlan_id: cdktf.numberToTerraform(struct!.transportVlanId),
    vip_fqdn: cdktf.stringToTerraform(struct!.vipFqdn),
    ip_address_pool: instanceNsxIpAddressPoolToTerraform(struct!.ipAddressPool),
    nsx_manager: cdktf.listMapper(instanceNsxNsxManagerToTerraform, true)(struct!.nsxManager),
  }
}


export function instanceNsxToHclTerraform(struct?: InstanceNsxOutputReference | InstanceNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsx_admin_password: {
      value: cdktf.stringToHclTerraform(struct!.nsxAdminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsx_audit_password: {
      value: cdktf.stringToHclTerraform(struct!.nsxAuditPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsx_manager_size: {
      value: cdktf.stringToHclTerraform(struct!.nsxManagerSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_nsx_manager_password: {
      value: cdktf.stringToHclTerraform(struct!.rootNsxManagerPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.transportVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vip_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.vipFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_pool: {
      value: instanceNsxIpAddressPoolToHclTerraform(struct!.ipAddressPool),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceNsxIpAddressPoolList",
    },
    nsx_manager: {
      value: cdktf.listMapperHcl(instanceNsxNsxManagerToHclTerraform, true)(struct!.nsxManager),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceNsxNsxManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNsxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceNsx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsxAdminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxAdminPassword = this._nsxAdminPassword;
    }
    if (this._nsxAuditPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxAuditPassword = this._nsxAuditPassword;
    }
    if (this._nsxManagerSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxManagerSize = this._nsxManagerSize;
    }
    if (this._rootNsxManagerPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootNsxManagerPassword = this._rootNsxManagerPassword;
    }
    if (this._transportVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportVlanId = this._transportVlanId;
    }
    if (this._vipFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipFqdn = this._vipFqdn;
    }
    if (this._ipAddressPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPool = this._ipAddressPool?.internalValue;
    }
    if (this._nsxManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsxManager = this._nsxManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nsxAdminPassword = undefined;
      this._nsxAuditPassword = undefined;
      this._nsxManagerSize = undefined;
      this._rootNsxManagerPassword = undefined;
      this._transportVlanId = undefined;
      this._vipFqdn = undefined;
      this._ipAddressPool.internalValue = undefined;
      this._nsxManager.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nsxAdminPassword = value.nsxAdminPassword;
      this._nsxAuditPassword = value.nsxAuditPassword;
      this._nsxManagerSize = value.nsxManagerSize;
      this._rootNsxManagerPassword = value.rootNsxManagerPassword;
      this._transportVlanId = value.transportVlanId;
      this._vipFqdn = value.vipFqdn;
      this._ipAddressPool.internalValue = value.ipAddressPool;
      this._nsxManager.internalValue = value.nsxManager;
    }
  }

  // nsx_admin_password - computed: false, optional: true, required: false
  private _nsxAdminPassword?: string; 
  public get nsxAdminPassword() {
    return this.getStringAttribute('nsx_admin_password');
  }
  public set nsxAdminPassword(value: string) {
    this._nsxAdminPassword = value;
  }
  public resetNsxAdminPassword() {
    this._nsxAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxAdminPasswordInput() {
    return this._nsxAdminPassword;
  }

  // nsx_audit_password - computed: false, optional: true, required: false
  private _nsxAuditPassword?: string; 
  public get nsxAuditPassword() {
    return this.getStringAttribute('nsx_audit_password');
  }
  public set nsxAuditPassword(value: string) {
    this._nsxAuditPassword = value;
  }
  public resetNsxAuditPassword() {
    this._nsxAuditPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxAuditPasswordInput() {
    return this._nsxAuditPassword;
  }

  // nsx_manager_size - computed: false, optional: false, required: true
  private _nsxManagerSize?: string; 
  public get nsxManagerSize() {
    return this.getStringAttribute('nsx_manager_size');
  }
  public set nsxManagerSize(value: string) {
    this._nsxManagerSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxManagerSizeInput() {
    return this._nsxManagerSize;
  }

  // root_nsx_manager_password - computed: false, optional: false, required: true
  private _rootNsxManagerPassword?: string; 
  public get rootNsxManagerPassword() {
    return this.getStringAttribute('root_nsx_manager_password');
  }
  public set rootNsxManagerPassword(value: string) {
    this._rootNsxManagerPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootNsxManagerPasswordInput() {
    return this._rootNsxManagerPassword;
  }

  // transport_vlan_id - computed: false, optional: false, required: true
  private _transportVlanId?: number; 
  public get transportVlanId() {
    return this.getNumberAttribute('transport_vlan_id');
  }
  public set transportVlanId(value: number) {
    this._transportVlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportVlanIdInput() {
    return this._transportVlanId;
  }

  // vip_fqdn - computed: false, optional: false, required: true
  private _vipFqdn?: string; 
  public get vipFqdn() {
    return this.getStringAttribute('vip_fqdn');
  }
  public set vipFqdn(value: string) {
    this._vipFqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipFqdnInput() {
    return this._vipFqdn;
  }

  // ip_address_pool - computed: false, optional: true, required: false
  private _ipAddressPool = new InstanceNsxIpAddressPoolOutputReference(this, "ip_address_pool");
  public get ipAddressPool() {
    return this._ipAddressPool;
  }
  public putIpAddressPool(value: InstanceNsxIpAddressPool) {
    this._ipAddressPool.internalValue = value;
  }
  public resetIpAddressPool() {
    this._ipAddressPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPoolInput() {
    return this._ipAddressPool.internalValue;
  }

  // nsx_manager - computed: false, optional: false, required: true
  private _nsxManager = new InstanceNsxNsxManagerList(this, "nsx_manager", false);
  public get nsxManager() {
    return this._nsxManager;
  }
  public putNsxManager(value: InstanceNsxNsxManager[] | cdktf.IResolvable) {
    this._nsxManager.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxManagerInput() {
    return this._nsxManager.internalValue;
  }
}
export interface InstanceOperationsNode {
  /**
  * Host name for the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname: string;
  /**
  * root password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#root_user_password Instance#root_user_password}
  */
  readonly rootUserPassword?: string;
  /**
  * Type of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#type Instance#type}
  */
  readonly type: string;
}

export function instanceOperationsNodeToTerraform(struct?: InstanceOperationsNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    root_user_password: cdktf.stringToTerraform(struct!.rootUserPassword),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function instanceOperationsNodeToHclTerraform(struct?: InstanceOperationsNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_user_password: {
      value: cdktf.stringToHclTerraform(struct!.rootUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceOperationsNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceOperationsNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._rootUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootUserPassword = this._rootUserPassword;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceOperationsNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._rootUserPassword = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._rootUserPassword = value.rootUserPassword;
      this._type = value.type;
    }
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

  // root_user_password - computed: false, optional: true, required: false
  private _rootUserPassword?: string; 
  public get rootUserPassword() {
    return this.getStringAttribute('root_user_password');
  }
  public set rootUserPassword(value: string) {
    this._rootUserPassword = value;
  }
  public resetRootUserPassword() {
    this._rootUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUserPasswordInput() {
    return this._rootUserPassword;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class InstanceOperationsNodeList extends cdktf.ComplexList {
  public internalValue? : InstanceOperationsNode[] | cdktf.IResolvable

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
  public get(index: number): InstanceOperationsNodeOutputReference {
    return new InstanceOperationsNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceOperations {
  /**
  * Administrator password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#admin_user_password Instance#admin_user_password}
  */
  readonly adminUserPassword?: string;
  /**
  * Appliance size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#appliance_size Instance#appliance_size}
  */
  readonly applianceSize?: string;
  /**
  * FQDN of the load balancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#load_balancer_fqdn Instance#load_balancer_fqdn}
  */
  readonly loadBalancerFqdn?: string;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#node Instance#node}
  */
  readonly nodeAttribute: InstanceOperationsNode[] | cdktf.IResolvable;
}

export function instanceOperationsToTerraform(struct?: InstanceOperationsOutputReference | InstanceOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_user_password: cdktf.stringToTerraform(struct!.adminUserPassword),
    appliance_size: cdktf.stringToTerraform(struct!.applianceSize),
    load_balancer_fqdn: cdktf.stringToTerraform(struct!.loadBalancerFqdn),
    node: cdktf.listMapper(instanceOperationsNodeToTerraform, true)(struct!.nodeAttribute),
  }
}


export function instanceOperationsToHclTerraform(struct?: InstanceOperationsOutputReference | InstanceOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_user_password: {
      value: cdktf.stringToHclTerraform(struct!.adminUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appliance_size: {
      value: cdktf.stringToHclTerraform(struct!.applianceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balancer_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: cdktf.listMapperHcl(instanceOperationsNodeToHclTerraform, true)(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceOperationsNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUserPassword = this._adminUserPassword;
    }
    if (this._applianceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.applianceSize = this._applianceSize;
    }
    if (this._loadBalancerFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerFqdn = this._loadBalancerFqdn;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUserPassword = undefined;
      this._applianceSize = undefined;
      this._loadBalancerFqdn = undefined;
      this._node.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUserPassword = value.adminUserPassword;
      this._applianceSize = value.applianceSize;
      this._loadBalancerFqdn = value.loadBalancerFqdn;
      this._node.internalValue = value.nodeAttribute;
    }
  }

  // admin_user_password - computed: false, optional: true, required: false
  private _adminUserPassword?: string; 
  public get adminUserPassword() {
    return this.getStringAttribute('admin_user_password');
  }
  public set adminUserPassword(value: string) {
    this._adminUserPassword = value;
  }
  public resetAdminUserPassword() {
    this._adminUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserPasswordInput() {
    return this._adminUserPassword;
  }

  // appliance_size - computed: false, optional: true, required: false
  private _applianceSize?: string; 
  public get applianceSize() {
    return this.getStringAttribute('appliance_size');
  }
  public set applianceSize(value: string) {
    this._applianceSize = value;
  }
  public resetApplianceSize() {
    this._applianceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceSizeInput() {
    return this._applianceSize;
  }

  // load_balancer_fqdn - computed: false, optional: true, required: false
  private _loadBalancerFqdn?: string; 
  public get loadBalancerFqdn() {
    return this.getStringAttribute('load_balancer_fqdn');
  }
  public set loadBalancerFqdn(value: string) {
    this._loadBalancerFqdn = value;
  }
  public resetLoadBalancerFqdn() {
    this._loadBalancerFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerFqdnInput() {
    return this._loadBalancerFqdn;
  }

  // node - computed: false, optional: false, required: true
  private _node = new InstanceOperationsNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: InstanceOperationsNode[] | cdktf.IResolvable) {
    this._node.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }
}
export interface InstanceOperationsCollector {
  /**
  * Appliance size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#appliance_size Instance#appliance_size}
  */
  readonly applianceSize?: string;
  /**
  * Host name for the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname: string;
  /**
  * root password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#root_user_password Instance#root_user_password}
  */
  readonly rootUserPassword?: string;
}

export function instanceOperationsCollectorToTerraform(struct?: InstanceOperationsCollectorOutputReference | InstanceOperationsCollector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    appliance_size: cdktf.stringToTerraform(struct!.applianceSize),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    root_user_password: cdktf.stringToTerraform(struct!.rootUserPassword),
  }
}


export function instanceOperationsCollectorToHclTerraform(struct?: InstanceOperationsCollectorOutputReference | InstanceOperationsCollector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    appliance_size: {
      value: cdktf.stringToHclTerraform(struct!.applianceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_user_password: {
      value: cdktf.stringToHclTerraform(struct!.rootUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceOperationsCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceOperationsCollector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applianceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.applianceSize = this._applianceSize;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._rootUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootUserPassword = this._rootUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceOperationsCollector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applianceSize = undefined;
      this._hostname = undefined;
      this._rootUserPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applianceSize = value.applianceSize;
      this._hostname = value.hostname;
      this._rootUserPassword = value.rootUserPassword;
    }
  }

  // appliance_size - computed: false, optional: true, required: false
  private _applianceSize?: string; 
  public get applianceSize() {
    return this.getStringAttribute('appliance_size');
  }
  public set applianceSize(value: string) {
    this._applianceSize = value;
  }
  public resetApplianceSize() {
    this._applianceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceSizeInput() {
    return this._applianceSize;
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

  // root_user_password - computed: false, optional: true, required: false
  private _rootUserPassword?: string; 
  public get rootUserPassword() {
    return this.getStringAttribute('root_user_password');
  }
  public set rootUserPassword(value: string) {
    this._rootUserPassword = value;
  }
  public resetRootUserPassword() {
    this._rootUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUserPasswordInput() {
    return this._rootUserPassword;
  }
}
export interface InstanceOperationsFleetManagement {
  /**
  * root password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#admin_user_password Instance#admin_user_password}
  */
  readonly adminUserPassword?: string;
  /**
  * Host name for the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname: string;
  /**
  * root password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#root_user_password Instance#root_user_password}
  */
  readonly rootUserPassword?: string;
}

export function instanceOperationsFleetManagementToTerraform(struct?: InstanceOperationsFleetManagementOutputReference | InstanceOperationsFleetManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_user_password: cdktf.stringToTerraform(struct!.adminUserPassword),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    root_user_password: cdktf.stringToTerraform(struct!.rootUserPassword),
  }
}


export function instanceOperationsFleetManagementToHclTerraform(struct?: InstanceOperationsFleetManagementOutputReference | InstanceOperationsFleetManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_user_password: {
      value: cdktf.stringToHclTerraform(struct!.adminUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_user_password: {
      value: cdktf.stringToHclTerraform(struct!.rootUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceOperationsFleetManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceOperationsFleetManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUserPassword = this._adminUserPassword;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._rootUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootUserPassword = this._rootUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceOperationsFleetManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUserPassword = undefined;
      this._hostname = undefined;
      this._rootUserPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUserPassword = value.adminUserPassword;
      this._hostname = value.hostname;
      this._rootUserPassword = value.rootUserPassword;
    }
  }

  // admin_user_password - computed: false, optional: true, required: false
  private _adminUserPassword?: string; 
  public get adminUserPassword() {
    return this.getStringAttribute('admin_user_password');
  }
  public set adminUserPassword(value: string) {
    this._adminUserPassword = value;
  }
  public resetAdminUserPassword() {
    this._adminUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserPasswordInput() {
    return this._adminUserPassword;
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

  // root_user_password - computed: false, optional: true, required: false
  private _rootUserPassword?: string; 
  public get rootUserPassword() {
    return this.getStringAttribute('root_user_password');
  }
  public set rootUserPassword(value: string) {
    this._rootUserPassword = value;
  }
  public resetRootUserPassword() {
    this._rootUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUserPasswordInput() {
    return this._rootUserPassword;
  }
}
export interface InstanceSddcManager {
  /**
  * SDDC Manager Hostname. If just the short hostname is provided, then FQDN will be generated using the "domain" from dns configuration, length 3-63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
  /**
  * The local account is a built-in admin account (password for the break glass user admin@local) in VCF that can be used in emergency scenarios. The password of this account must be at least 12 characters long. It also must contain at-least 1 uppercase, 1 lowercase, 1 special character specified in braces [!%@$^#?] and 1 digit. In addition, a character cannot be repeated more than 3 times consecutively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#local_user_password Instance#local_user_password}
  */
  readonly localUserPassword?: string;
  /**
  * The password for the root user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#root_user_password Instance#root_user_password}
  */
  readonly rootUserPassword: string;
  /**
  * The password for the vcf user (ssh connections only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ssh_password Instance#ssh_password}
  */
  readonly sshPassword: string;
}

export function instanceSddcManagerToTerraform(struct?: InstanceSddcManagerOutputReference | InstanceSddcManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    local_user_password: cdktf.stringToTerraform(struct!.localUserPassword),
    root_user_password: cdktf.stringToTerraform(struct!.rootUserPassword),
    ssh_password: cdktf.stringToTerraform(struct!.sshPassword),
  }
}


export function instanceSddcManagerToHclTerraform(struct?: InstanceSddcManagerOutputReference | InstanceSddcManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_user_password: {
      value: cdktf.stringToHclTerraform(struct!.localUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_user_password: {
      value: cdktf.stringToHclTerraform(struct!.rootUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_password: {
      value: cdktf.stringToHclTerraform(struct!.sshPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceSddcManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceSddcManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._localUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUserPassword = this._localUserPassword;
    }
    if (this._rootUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootUserPassword = this._rootUserPassword;
    }
    if (this._sshPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPassword = this._sshPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceSddcManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._localUserPassword = undefined;
      this._rootUserPassword = undefined;
      this._sshPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._localUserPassword = value.localUserPassword;
      this._rootUserPassword = value.rootUserPassword;
      this._sshPassword = value.sshPassword;
    }
  }

  // hostname - computed: false, optional: true, required: false
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

  // local_user_password - computed: false, optional: true, required: false
  private _localUserPassword?: string; 
  public get localUserPassword() {
    return this.getStringAttribute('local_user_password');
  }
  public set localUserPassword(value: string) {
    this._localUserPassword = value;
  }
  public resetLocalUserPassword() {
    this._localUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUserPasswordInput() {
    return this._localUserPassword;
  }

  // root_user_password - computed: false, optional: false, required: true
  private _rootUserPassword?: string; 
  public get rootUserPassword() {
    return this.getStringAttribute('root_user_password');
  }
  public set rootUserPassword(value: string) {
    this._rootUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUserPasswordInput() {
    return this._rootUserPassword;
  }

  // ssh_password - computed: false, optional: false, required: true
  private _sshPassword?: string; 
  public get sshPassword() {
    return this.getStringAttribute('ssh_password');
  }
  public set sshPassword(value: string) {
    this._sshPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }
}
export interface InstanceSecurityRootCaCerts {
  /**
  * Certificate alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#alias Instance#alias}
  */
  readonly alias?: string;
  /**
  * List of Base64 encoded certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#cert_chain Instance#cert_chain}
  */
  readonly certChain?: string[];
}

export function instanceSecurityRootCaCertsToTerraform(struct?: InstanceSecurityRootCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    cert_chain: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certChain),
  }
}


export function instanceSecurityRootCaCertsToHclTerraform(struct?: InstanceSecurityRootCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_chain: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certChain),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceSecurityRootCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceSecurityRootCaCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._certChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.certChain = this._certChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceSecurityRootCaCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._certChain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._certChain = value.certChain;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cert_chain - computed: false, optional: true, required: false
  private _certChain?: string[]; 
  public get certChain() {
    return this.getListAttribute('cert_chain');
  }
  public set certChain(value: string[]) {
    this._certChain = value;
  }
  public resetCertChain() {
    this._certChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certChainInput() {
    return this._certChain;
  }
}

export class InstanceSecurityRootCaCertsList extends cdktf.ComplexList {
  public internalValue? : InstanceSecurityRootCaCerts[] | cdktf.IResolvable

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
  public get(index: number): InstanceSecurityRootCaCertsOutputReference {
    return new InstanceSecurityRootCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceSecurity {
  /**
  * ESXi certificates mode. One among: Custom, VMCA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#esxi_certs_mode Instance#esxi_certs_mode}
  */
  readonly esxiCertsMode?: string;
  /**
  * root_ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#root_ca_certs Instance#root_ca_certs}
  */
  readonly rootCaCerts?: InstanceSecurityRootCaCerts[] | cdktf.IResolvable;
}

export function instanceSecurityToTerraform(struct?: InstanceSecurityOutputReference | InstanceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    esxi_certs_mode: cdktf.stringToTerraform(struct!.esxiCertsMode),
    root_ca_certs: cdktf.listMapper(instanceSecurityRootCaCertsToTerraform, true)(struct!.rootCaCerts),
  }
}


export function instanceSecurityToHclTerraform(struct?: InstanceSecurityOutputReference | InstanceSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    esxi_certs_mode: {
      value: cdktf.stringToHclTerraform(struct!.esxiCertsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_ca_certs: {
      value: cdktf.listMapperHcl(instanceSecurityRootCaCertsToHclTerraform, true)(struct!.rootCaCerts),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceSecurityRootCaCertsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esxiCertsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.esxiCertsMode = this._esxiCertsMode;
    }
    if (this._rootCaCerts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootCaCerts = this._rootCaCerts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._esxiCertsMode = undefined;
      this._rootCaCerts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._esxiCertsMode = value.esxiCertsMode;
      this._rootCaCerts.internalValue = value.rootCaCerts;
    }
  }

  // esxi_certs_mode - computed: false, optional: true, required: false
  private _esxiCertsMode?: string; 
  public get esxiCertsMode() {
    return this.getStringAttribute('esxi_certs_mode');
  }
  public set esxiCertsMode(value: string) {
    this._esxiCertsMode = value;
  }
  public resetEsxiCertsMode() {
    this._esxiCertsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiCertsModeInput() {
    return this._esxiCertsMode;
  }

  // root_ca_certs - computed: false, optional: true, required: false
  private _rootCaCerts = new InstanceSecurityRootCaCertsList(this, "root_ca_certs", false);
  public get rootCaCerts() {
    return this._rootCaCerts;
  }
  public putRootCaCerts(value: InstanceSecurityRootCaCerts[] | cdktf.IResolvable) {
    this._rootCaCerts.internalValue = value;
  }
  public resetRootCaCerts() {
    this._rootCaCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaCertsInput() {
    return this._rootCaCerts.internalValue;
  }
}
export interface InstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
export interface InstanceVcenter {
  /**
  * vCenter root password. The password must be between 8 characters and 20 characters long. It must also contain at least one uppercase and lowercase letter, one number, and one character from '! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { &Iota; } ~' and all characters must be ASCII. Space is not allowed in password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#root_vcenter_password Instance#root_vcenter_password}
  */
  readonly rootVcenterPassword: string;
  /**
  * vCenter Server SSL thumbprint (SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#ssl_thumbprint Instance#ssl_thumbprint}
  */
  readonly sslThumbprint?: string;
  /**
  * vCenter VM storage size. One among:lstorage, xlstorage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#storage_size Instance#storage_size}
  */
  readonly storageSize?: string;
  /**
  * vCenter Server hostname address. If just the short hostname is provided, then FQDN will be generated using the "domain" from dns configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vcenter_hostname Instance#vcenter_hostname}
  */
  readonly vcenterHostname: string;
  /**
  * vCenter Server Appliance  size. One among: tiny, small, medium, large, xlarge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vm_size Instance#vm_size}
  */
  readonly vmSize?: string;
}

export function instanceVcenterToTerraform(struct?: InstanceVcenterOutputReference | InstanceVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_vcenter_password: cdktf.stringToTerraform(struct!.rootVcenterPassword),
    ssl_thumbprint: cdktf.stringToTerraform(struct!.sslThumbprint),
    storage_size: cdktf.stringToTerraform(struct!.storageSize),
    vcenter_hostname: cdktf.stringToTerraform(struct!.vcenterHostname),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}


export function instanceVcenterToHclTerraform(struct?: InstanceVcenterOutputReference | InstanceVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_vcenter_password: {
      value: cdktf.stringToHclTerraform(struct!.rootVcenterPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.sslThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.stringToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_hostname: {
      value: cdktf.stringToHclTerraform(struct!.vcenterHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceVcenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceVcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootVcenterPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVcenterPassword = this._rootVcenterPassword;
    }
    if (this._sslThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThumbprint = this._sslThumbprint;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    if (this._vcenterHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterHostname = this._vcenterHostname;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceVcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rootVcenterPassword = undefined;
      this._sslThumbprint = undefined;
      this._storageSize = undefined;
      this._vcenterHostname = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rootVcenterPassword = value.rootVcenterPassword;
      this._sslThumbprint = value.sslThumbprint;
      this._storageSize = value.storageSize;
      this._vcenterHostname = value.vcenterHostname;
      this._vmSize = value.vmSize;
    }
  }

  // root_vcenter_password - computed: false, optional: false, required: true
  private _rootVcenterPassword?: string; 
  public get rootVcenterPassword() {
    return this.getStringAttribute('root_vcenter_password');
  }
  public set rootVcenterPassword(value: string) {
    this._rootVcenterPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVcenterPasswordInput() {
    return this._rootVcenterPassword;
  }

  // ssl_thumbprint - computed: false, optional: true, required: false
  private _sslThumbprint?: string; 
  public get sslThumbprint() {
    return this.getStringAttribute('ssl_thumbprint');
  }
  public set sslThumbprint(value: string) {
    this._sslThumbprint = value;
  }
  public resetSslThumbprint() {
    this._sslThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslThumbprintInput() {
    return this._sslThumbprint;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: string; 
  public get storageSize() {
    return this.getStringAttribute('storage_size');
  }
  public set storageSize(value: string) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }

  // vcenter_hostname - computed: false, optional: false, required: true
  private _vcenterHostname?: string; 
  public get vcenterHostname() {
    return this.getStringAttribute('vcenter_hostname');
  }
  public set vcenterHostname(value: string) {
    this._vcenterHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterHostnameInput() {
    return this._vcenterHostname;
  }

  // vm_size - computed: false, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }
}
export interface InstanceVsan {
  /**
  * Datastore Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#datastore_name Instance#datastore_name}
  */
  readonly datastoreName: string;
  /**
  * Enable vSAN ESA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#esa_enabled Instance#esa_enabled}
  */
  readonly esaEnabled?: boolean | cdktf.IResolvable;
  /**
  * Host failures to tolerate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#failures_to_tolerate Instance#failures_to_tolerate}
  */
  readonly failuresToTolerate?: number;
  /**
  * VSAN feature Deduplication and Compression flag, one flag for both features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#vsan_dedup Instance#vsan_dedup}
  */
  readonly vsanDedup?: boolean | cdktf.IResolvable;
}

export function instanceVsanToTerraform(struct?: InstanceVsanOutputReference | InstanceVsan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_name: cdktf.stringToTerraform(struct!.datastoreName),
    esa_enabled: cdktf.booleanToTerraform(struct!.esaEnabled),
    failures_to_tolerate: cdktf.numberToTerraform(struct!.failuresToTolerate),
    vsan_dedup: cdktf.booleanToTerraform(struct!.vsanDedup),
  }
}


export function instanceVsanToHclTerraform(struct?: InstanceVsanOutputReference | InstanceVsan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_name: {
      value: cdktf.stringToHclTerraform(struct!.datastoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    esa_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.esaEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failures_to_tolerate: {
      value: cdktf.numberToHclTerraform(struct!.failuresToTolerate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vsan_dedup: {
      value: cdktf.booleanToHclTerraform(struct!.vsanDedup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceVsanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceVsan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    if (this._esaEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.esaEnabled = this._esaEnabled;
    }
    if (this._failuresToTolerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.failuresToTolerate = this._failuresToTolerate;
    }
    if (this._vsanDedup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsanDedup = this._vsanDedup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceVsan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreName = undefined;
      this._esaEnabled = undefined;
      this._failuresToTolerate = undefined;
      this._vsanDedup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreName = value.datastoreName;
      this._esaEnabled = value.esaEnabled;
      this._failuresToTolerate = value.failuresToTolerate;
      this._vsanDedup = value.vsanDedup;
    }
  }

  // datastore_name - computed: false, optional: false, required: true
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }

  // esa_enabled - computed: false, optional: true, required: false
  private _esaEnabled?: boolean | cdktf.IResolvable; 
  public get esaEnabled() {
    return this.getBooleanAttribute('esa_enabled');
  }
  public set esaEnabled(value: boolean | cdktf.IResolvable) {
    this._esaEnabled = value;
  }
  public resetEsaEnabled() {
    this._esaEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esaEnabledInput() {
    return this._esaEnabled;
  }

  // failures_to_tolerate - computed: false, optional: true, required: false
  private _failuresToTolerate?: number; 
  public get failuresToTolerate() {
    return this.getNumberAttribute('failures_to_tolerate');
  }
  public set failuresToTolerate(value: number) {
    this._failuresToTolerate = value;
  }
  public resetFailuresToTolerate() {
    this._failuresToTolerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failuresToTolerateInput() {
    return this._failuresToTolerate;
  }

  // vsan_dedup - computed: false, optional: true, required: false
  private _vsanDedup?: boolean | cdktf.IResolvable; 
  public get vsanDedup() {
    return this.getBooleanAttribute('vsan_dedup');
  }
  public set vsanDedup(value: boolean | cdktf.IResolvable) {
    this._vsanDedup = value;
  }
  public resetVsanDedup() {
    this._vsanDedup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanDedupInput() {
    return this._vsanDedup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance vcf_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcf_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcf_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcf/0.17.1/docs/resources/instance vcf_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vcf_instance',
      terraformGeneratorMetadata: {
        providerName: 'vcf',
        providerVersion: '0.17.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ceipEnabled = config.ceipEnabled;
    this._fipsEnabled = config.fipsEnabled;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._managementPoolName = config.managementPoolName;
    this._ntpServers = config.ntpServers;
    this._skipEsxThumbprintValidation = config.skipEsxThumbprintValidation;
    this._version = config.version;
    this._automation.internalValue = config.automation;
    this._cluster.internalValue = config.cluster;
    this._dns.internalValue = config.dns;
    this._dvs.internalValue = config.dvs;
    this._host.internalValue = config.host;
    this._network.internalValue = config.network;
    this._nsx.internalValue = config.nsx;
    this._operations.internalValue = config.operations;
    this._operationsCollector.internalValue = config.operationsCollector;
    this._operationsFleetManagement.internalValue = config.operationsFleetManagement;
    this._sddcManager.internalValue = config.sddcManager;
    this._security.internalValue = config.security;
    this._timeouts.internalValue = config.timeouts;
    this._vcenter.internalValue = config.vcenter;
    this._vsan.internalValue = config.vsan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ceip_enabled - computed: false, optional: true, required: false
  private _ceipEnabled?: boolean | cdktf.IResolvable; 
  public get ceipEnabled() {
    return this.getBooleanAttribute('ceip_enabled');
  }
  public set ceipEnabled(value: boolean | cdktf.IResolvable) {
    this._ceipEnabled = value;
  }
  public resetCeipEnabled() {
    this._ceipEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceipEnabledInput() {
    return this._ceipEnabled;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // fips_enabled - computed: false, optional: true, required: false
  private _fipsEnabled?: boolean | cdktf.IResolvable; 
  public get fipsEnabled() {
    return this.getBooleanAttribute('fips_enabled');
  }
  public set fipsEnabled(value: boolean | cdktf.IResolvable) {
    this._fipsEnabled = value;
  }
  public resetFipsEnabled() {
    this._fipsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnabledInput() {
    return this._fipsEnabled;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // management_pool_name - computed: false, optional: false, required: true
  private _managementPoolName?: string; 
  public get managementPoolName() {
    return this.getStringAttribute('management_pool_name');
  }
  public set managementPoolName(value: string) {
    this._managementPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementPoolNameInput() {
    return this._managementPoolName;
  }

  // ntp_servers - computed: false, optional: false, required: true
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // skip_esx_thumbprint_validation - computed: false, optional: false, required: true
  private _skipEsxThumbprintValidation?: boolean | cdktf.IResolvable; 
  public get skipEsxThumbprintValidation() {
    return this.getBooleanAttribute('skip_esx_thumbprint_validation');
  }
  public set skipEsxThumbprintValidation(value: boolean | cdktf.IResolvable) {
    this._skipEsxThumbprintValidation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEsxThumbprintValidationInput() {
    return this._skipEsxThumbprintValidation;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // automation - computed: false, optional: true, required: false
  private _automation = new InstanceAutomationOutputReference(this, "automation");
  public get automation() {
    return this._automation;
  }
  public putAutomation(value: InstanceAutomation) {
    this._automation.internalValue = value;
  }
  public resetAutomation() {
    this._automation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationInput() {
    return this._automation.internalValue;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new InstanceClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: InstanceCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // dns - computed: false, optional: false, required: true
  private _dns = new InstanceDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: InstanceDns) {
    this._dns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // dvs - computed: false, optional: false, required: true
  private _dvs = new InstanceDvsList(this, "dvs", false);
  public get dvs() {
    return this._dvs;
  }
  public putDvs(value: InstanceDvs[] | cdktf.IResolvable) {
    this._dvs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dvsInput() {
    return this._dvs.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host = new InstanceHostList(this, "host", false);
  public get host() {
    return this._host;
  }
  public putHost(value: InstanceHost[] | cdktf.IResolvable) {
    this._host.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new InstanceNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: InstanceNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // nsx - computed: false, optional: true, required: false
  private _nsx = new InstanceNsxOutputReference(this, "nsx");
  public get nsx() {
    return this._nsx;
  }
  public putNsx(value: InstanceNsx) {
    this._nsx.internalValue = value;
  }
  public resetNsx() {
    this._nsx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxInput() {
    return this._nsx.internalValue;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new InstanceOperationsOutputReference(this, "operations");
  public get operations() {
    return this._operations;
  }
  public putOperations(value: InstanceOperations) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }

  // operations_collector - computed: false, optional: true, required: false
  private _operationsCollector = new InstanceOperationsCollectorOutputReference(this, "operations_collector");
  public get operationsCollector() {
    return this._operationsCollector;
  }
  public putOperationsCollector(value: InstanceOperationsCollector) {
    this._operationsCollector.internalValue = value;
  }
  public resetOperationsCollector() {
    this._operationsCollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsCollectorInput() {
    return this._operationsCollector.internalValue;
  }

  // operations_fleet_management - computed: false, optional: true, required: false
  private _operationsFleetManagement = new InstanceOperationsFleetManagementOutputReference(this, "operations_fleet_management");
  public get operationsFleetManagement() {
    return this._operationsFleetManagement;
  }
  public putOperationsFleetManagement(value: InstanceOperationsFleetManagement) {
    this._operationsFleetManagement.internalValue = value;
  }
  public resetOperationsFleetManagement() {
    this._operationsFleetManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsFleetManagementInput() {
    return this._operationsFleetManagement.internalValue;
  }

  // sddc_manager - computed: false, optional: true, required: false
  private _sddcManager = new InstanceSddcManagerOutputReference(this, "sddc_manager");
  public get sddcManager() {
    return this._sddcManager;
  }
  public putSddcManager(value: InstanceSddcManager) {
    this._sddcManager.internalValue = value;
  }
  public resetSddcManager() {
    this._sddcManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcManagerInput() {
    return this._sddcManager.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new InstanceSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: InstanceSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vcenter - computed: false, optional: false, required: true
  private _vcenter = new InstanceVcenterOutputReference(this, "vcenter");
  public get vcenter() {
    return this._vcenter;
  }
  public putVcenter(value: InstanceVcenter) {
    this._vcenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInput() {
    return this._vcenter.internalValue;
  }

  // vsan - computed: false, optional: true, required: false
  private _vsan = new InstanceVsanOutputReference(this, "vsan");
  public get vsan() {
    return this._vsan;
  }
  public putVsan(value: InstanceVsan) {
    this._vsan.internalValue = value;
  }
  public resetVsan() {
    this._vsan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsanInput() {
    return this._vsan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ceip_enabled: cdktf.booleanToTerraform(this._ceipEnabled),
      fips_enabled: cdktf.booleanToTerraform(this._fipsEnabled),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      management_pool_name: cdktf.stringToTerraform(this._managementPoolName),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      skip_esx_thumbprint_validation: cdktf.booleanToTerraform(this._skipEsxThumbprintValidation),
      version: cdktf.stringToTerraform(this._version),
      automation: instanceAutomationToTerraform(this._automation.internalValue),
      cluster: instanceClusterToTerraform(this._cluster.internalValue),
      dns: instanceDnsToTerraform(this._dns.internalValue),
      dvs: cdktf.listMapper(instanceDvsToTerraform, true)(this._dvs.internalValue),
      host: cdktf.listMapper(instanceHostToTerraform, true)(this._host.internalValue),
      network: cdktf.listMapper(instanceNetworkToTerraform, true)(this._network.internalValue),
      nsx: instanceNsxToTerraform(this._nsx.internalValue),
      operations: instanceOperationsToTerraform(this._operations.internalValue),
      operations_collector: instanceOperationsCollectorToTerraform(this._operationsCollector.internalValue),
      operations_fleet_management: instanceOperationsFleetManagementToTerraform(this._operationsFleetManagement.internalValue),
      sddc_manager: instanceSddcManagerToTerraform(this._sddcManager.internalValue),
      security: instanceSecurityToTerraform(this._security.internalValue),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
      vcenter: instanceVcenterToTerraform(this._vcenter.internalValue),
      vsan: instanceVsanToTerraform(this._vsan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ceip_enabled: {
        value: cdktf.booleanToHclTerraform(this._ceipEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fips_enabled: {
        value: cdktf.booleanToHclTerraform(this._fipsEnabled),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_pool_name: {
        value: cdktf.stringToHclTerraform(this._managementPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      skip_esx_thumbprint_validation: {
        value: cdktf.booleanToHclTerraform(this._skipEsxThumbprintValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automation: {
        value: instanceAutomationToHclTerraform(this._automation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceAutomationList",
      },
      cluster: {
        value: instanceClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceClusterList",
      },
      dns: {
        value: instanceDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceDnsList",
      },
      dvs: {
        value: cdktf.listMapperHcl(instanceDvsToHclTerraform, true)(this._dvs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceDvsList",
      },
      host: {
        value: cdktf.listMapperHcl(instanceHostToHclTerraform, true)(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceHostList",
      },
      network: {
        value: cdktf.listMapperHcl(instanceNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceNetworkList",
      },
      nsx: {
        value: instanceNsxToHclTerraform(this._nsx.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceNsxList",
      },
      operations: {
        value: instanceOperationsToHclTerraform(this._operations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceOperationsList",
      },
      operations_collector: {
        value: instanceOperationsCollectorToHclTerraform(this._operationsCollector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceOperationsCollectorList",
      },
      operations_fleet_management: {
        value: instanceOperationsFleetManagementToHclTerraform(this._operationsFleetManagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceOperationsFleetManagementList",
      },
      sddc_manager: {
        value: instanceSddcManagerToHclTerraform(this._sddcManager.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceSddcManagerList",
      },
      security: {
        value: instanceSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceSecurityList",
      },
      timeouts: {
        value: instanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceTimeouts",
      },
      vcenter: {
        value: instanceVcenterToHclTerraform(this._vcenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceVcenterList",
      },
      vsan: {
        value: instanceVsanToHclTerraform(this._vsan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceVsanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
