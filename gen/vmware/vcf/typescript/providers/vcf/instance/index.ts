// https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable VCF Customer Experience Improvement Program
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ceip_enabled Instance#ceip_enabled}
  */
  readonly ceipEnabled?: boolean | cdktf.IResolvable;
  /**
  * The version of the distributed virtual switches to be used. One among: 7.0.0, 7.0.2, 7.0.3, 8.0.0, 8.0.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#dv_switch_version Instance#dv_switch_version}
  */
  readonly dvSwitchVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#esx_license Instance#esx_license}
  */
  readonly esxLicense?: string;
  /**
  * Enable Federal Information Processing Standards
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#fips_enabled Instance#fips_enabled}
  */
  readonly fipsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#id Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Client string that identifies an SDDC by name or instance name. Used for management domain name. Can contain only letters, numbers and the following symbols: '-'. Example: "sfo01-m01", Length 3-20 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#instance_id Instance#instance_id}
  */
  readonly instanceId: string;
  /**
  * A string identifying the network pool associated with the management domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#management_pool_name Instance#management_pool_name}
  */
  readonly managementPoolName: string;
  /**
  * List of NTP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ntp_servers Instance#ntp_servers}
  */
  readonly ntpServers: string[];
  /**
  * Skip ESXi thumbprint validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#skip_esx_thumbprint_validation Instance#skip_esx_thumbprint_validation}
  */
  readonly skipEsxThumbprintValidation: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#task_name Instance#task_name}
  */
  readonly taskName?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cluster Instance#cluster}
  */
  readonly cluster: InstanceCluster;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#dns Instance#dns}
  */
  readonly dns: InstanceDns;
  /**
  * dvs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#dvs Instance#dvs}
  */
  readonly dvs: InstanceDvs[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#host Instance#host}
  */
  readonly host: InstanceHost[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#network Instance#network}
  */
  readonly network: InstanceNetwork[] | cdktf.IResolvable;
  /**
  * nsx block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#nsx Instance#nsx}
  */
  readonly nsx?: InstanceNsx;
  /**
  * psc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#psc Instance#psc}
  */
  readonly psc?: InstancePsc[] | cdktf.IResolvable;
  /**
  * sddc_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#sddc_manager Instance#sddc_manager}
  */
  readonly sddcManager?: InstanceSddcManager;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#security Instance#security}
  */
  readonly security?: InstanceSecurity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
  /**
  * vcenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vcenter Instance#vcenter}
  */
  readonly vcenter: InstanceVcenter;
  /**
  * vsan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vsan Instance#vsan}
  */
  readonly vsan?: InstanceVsan;
  /**
  * vx_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vx_manager Instance#vx_manager}
  */
  readonly vxManager?: InstanceVxManager;
}
export interface InstanceClusterResourcePool {
  /**
  * CPU limit, default -1 (unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cpu_limit Instance#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Is CPU reservation expandable, default true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cpu_reservation_expandable Instance#cpu_reservation_expandable}
  */
  readonly cpuReservationExpandable?: boolean | cdktf.IResolvable;
  /**
  * CPU reservation in Mhz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cpu_reservation_mhz Instance#cpu_reservation_mhz}
  */
  readonly cpuReservationMhz?: number;
  /**
  * CPU reservation percentage, from 0 to 100, default 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cpu_reservation_percentage Instance#cpu_reservation_percentage}
  */
  readonly cpuReservationPercentage?: number;
  /**
  * CPU shares level, default 'normal', possible values: "custom", "high", "low", "normal"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cpu_shares_level Instance#cpu_shares_level}
  */
  readonly cpuSharesLevel?: string;
  /**
  * CPU shares value, only required when shares level is 'normal'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cpu_shares_value Instance#cpu_shares_value}
  */
  readonly cpuSharesValue?: number;
  /**
  * Memory limit, default -1 (unlimited)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#memory_limit Instance#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * Is Memory reservation expandable, default true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#memory_reservation_expandable Instance#memory_reservation_expandable}
  */
  readonly memoryReservationExpandable?: boolean | cdktf.IResolvable;
  /**
  * Memory reservation in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#memory_reservation_mb Instance#memory_reservation_mb}
  */
  readonly memoryReservationMb?: number;
  /**
  * Memory reservation percentage, from 0 to 100, default 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#memory_reservation_percentage Instance#memory_reservation_percentage}
  */
  readonly memoryReservationPercentage?: number;
  /**
  * Memory shares level, default 'normal', possible values: "custom", "high", "low", "normal"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#memory_shares_level Instance#memory_shares_level}
  */
  readonly memorySharesLevel?: string;
  /**
  * Memory shares value, only required when shares level is 'normal'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#memory_shares_value Instance#memory_shares_value}
  */
  readonly memorySharesValue?: number;
  /**
  * Resource Pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * Type of resource pool, possible values: "management", "compute", "network"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#type Instance#type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cluster_evc_mode Instance#cluster_evc_mode}
  */
  readonly clusterEvcMode?: string;
  /**
  * Whether to enable vSphere Lifecycle Manager images for this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cluster_image_enabled Instance#cluster_image_enabled}
  */
  readonly clusterImageEnabled?: boolean | cdktf.IResolvable;
  /**
  * vCenter Cluster Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cluster_name Instance#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Host failures to tolerate. In between 0 and 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#host_failures_to_tolerate Instance#host_failures_to_tolerate}
  */
  readonly hostFailuresToTolerate?: number;
  /**
  * Virtual Machine folders map. One among: MANAGEMENT, NETWORKING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vm_folder Instance#vm_folder}
  */
  readonly vmFolder?: { [key: string]: string };
  /**
  * resource_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#resource_pool Instance#resource_pool}
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
    cluster_image_enabled: cdktf.booleanToTerraform(struct!.clusterImageEnabled),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    host_failures_to_tolerate: cdktf.numberToTerraform(struct!.hostFailuresToTolerate),
    vm_folder: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vmFolder),
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
    cluster_image_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clusterImageEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_failures_to_tolerate: {
      value: cdktf.numberToHclTerraform(struct!.hostFailuresToTolerate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vm_folder: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vmFolder),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    if (this._clusterImageEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterImageEnabled = this._clusterImageEnabled;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._hostFailuresToTolerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostFailuresToTolerate = this._hostFailuresToTolerate;
    }
    if (this._vmFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmFolder = this._vmFolder;
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
      this._clusterImageEnabled = undefined;
      this._clusterName = undefined;
      this._hostFailuresToTolerate = undefined;
      this._vmFolder = undefined;
      this._resourcePool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterEvcMode = value.clusterEvcMode;
      this._clusterImageEnabled = value.clusterImageEnabled;
      this._clusterName = value.clusterName;
      this._hostFailuresToTolerate = value.hostFailuresToTolerate;
      this._vmFolder = value.vmFolder;
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

  // cluster_image_enabled - computed: false, optional: true, required: false
  private _clusterImageEnabled?: boolean | cdktf.IResolvable; 
  public get clusterImageEnabled() {
    return this.getBooleanAttribute('cluster_image_enabled');
  }
  public set clusterImageEnabled(value: boolean | cdktf.IResolvable) {
    this._clusterImageEnabled = value;
  }
  public resetClusterImageEnabled() {
    this._clusterImageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterImageEnabledInput() {
    return this._clusterImageEnabled;
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

  // host_failures_to_tolerate - computed: false, optional: true, required: false
  private _hostFailuresToTolerate?: number; 
  public get hostFailuresToTolerate() {
    return this.getNumberAttribute('host_failures_to_tolerate');
  }
  public set hostFailuresToTolerate(value: number) {
    this._hostFailuresToTolerate = value;
  }
  public resetHostFailuresToTolerate() {
    this._hostFailuresToTolerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFailuresToTolerateInput() {
    return this._hostFailuresToTolerate;
  }

  // vm_folder - computed: false, optional: true, required: false
  private _vmFolder?: { [key: string]: string }; 
  public get vmFolder() {
    return this.getStringMapAttribute('vm_folder');
  }
  public set vmFolder(value: { [key: string]: string }) {
    this._vmFolder = value;
  }
  public resetVmFolder() {
    this._vmFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmFolderInput() {
    return this._vmFolder;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#domain Instance#domain}
  */
  readonly domain: string;
  /**
  * Primary nameserver IPv4 address. Example: 172.0.0.4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#name_server Instance#name_server}
  */
  readonly nameServer?: string;
  /**
  * Secondary nameserver IPv4 address. Example: 172.0.0.5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#secondary_name_server Instance#secondary_name_server}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#traffic_type Instance#traffic_type}
  */
  readonly trafficType: string;
  /**
  * NIOC Value. Example: LOW, NORMAL, HIGH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#value Instance#value}
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
export interface InstanceDvs {
  /**
  * DVS Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#dvs_name Instance#dvs_name}
  */
  readonly dvsName: string;
  /**
  * Flag indicating whether the DVS is used by NSX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#is_used_by_nsxt Instance#is_used_by_nsxt}
  */
  readonly isUsedByNsxt?: boolean | cdktf.IResolvable;
  /**
  * DVS MTU (default value is 9000). In between 1500 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#mtu Instance#mtu}
  */
  readonly mtu?: number;
  /**
  * Types of networks in this portgroup. Possible values: VSAN, VMOTION, MANAGEMENT, VM_MANAGEMENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#networks Instance#networks}
  */
  readonly networks: string[];
  /**
  * Vmnics to be attached to the DVS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vmnics Instance#vmnics}
  */
  readonly vmnics: string[];
  /**
  * nioc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#nioc Instance#nioc}
  */
  readonly nioc?: InstanceDvsNioc[] | cdktf.IResolvable;
}

export function instanceDvsToTerraform(struct?: InstanceDvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dvs_name: cdktf.stringToTerraform(struct!.dvsName),
    is_used_by_nsxt: cdktf.booleanToTerraform(struct!.isUsedByNsxt),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networks),
    vmnics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vmnics),
    nioc: cdktf.listMapper(instanceDvsNiocToTerraform, true)(struct!.nioc),
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
    is_used_by_nsxt: {
      value: cdktf.booleanToHclTerraform(struct!.isUsedByNsxt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    vmnics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vmnics),
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
    if (this._isUsedByNsxt !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUsedByNsxt = this._isUsedByNsxt;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._vmnics !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmnics = this._vmnics;
    }
    if (this._nioc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nioc = this._nioc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceDvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dvsName = undefined;
      this._isUsedByNsxt = undefined;
      this._mtu = undefined;
      this._networks = undefined;
      this._vmnics = undefined;
      this._nioc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dvsName = value.dvsName;
      this._isUsedByNsxt = value.isUsedByNsxt;
      this._mtu = value.mtu;
      this._networks = value.networks;
      this._vmnics = value.vmnics;
      this._nioc.internalValue = value.nioc;
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

  // is_used_by_nsxt - computed: false, optional: true, required: false
  private _isUsedByNsxt?: boolean | cdktf.IResolvable; 
  public get isUsedByNsxt() {
    return this.getBooleanAttribute('is_used_by_nsxt');
  }
  public set isUsedByNsxt(value: boolean | cdktf.IResolvable) {
    this._isUsedByNsxt = value;
  }
  public resetIsUsedByNsxt() {
    this._isUsedByNsxt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUsedByNsxtInput() {
    return this._isUsedByNsxt;
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

  // vmnics - computed: false, optional: false, required: true
  private _vmnics?: string[]; 
  public get vmnics() {
    return this.getListAttribute('vmnics');
  }
  public set vmnics(value: string[]) {
    this._vmnics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmnicsInput() {
    return this._vmnics;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#password Instance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#username Instance#username}
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
export interface InstanceHostIpAddressPrivate {
  /**
  * Classless Inter-Domain Routing (CIDR), Example: 172.0.0.0/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cidr Instance#cidr}
  */
  readonly cidr?: string;
  /**
  * Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#gateway Instance#gateway}
  */
  readonly gateway: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ip_address Instance#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#subnet Instance#subnet}
  */
  readonly subnet?: string;
}

export function instanceHostIpAddressPrivateToTerraform(struct?: InstanceHostIpAddressPrivateOutputReference | InstanceHostIpAddressPrivate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function instanceHostIpAddressPrivateToHclTerraform(struct?: InstanceHostIpAddressPrivateOutputReference | InstanceHostIpAddressPrivate): any {
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
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceHostIpAddressPrivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceHostIpAddressPrivate | undefined {
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
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceHostIpAddressPrivate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidr = undefined;
      this._gateway = undefined;
      this._ipAddress = undefined;
      this._subnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidr = value.cidr;
      this._gateway = value.gateway;
      this._ipAddress = value.ipAddress;
      this._subnet = value.subnet;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
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
}
export interface InstanceHost {
  /**
  * Host Association: Location/Datacenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#association Instance#association}
  */
  readonly association: string;
  /**
  * ESXi hostname. If just the short hostname is provided, then FQDN will be generated using the "domain" from dns configuration. Must also adhere to RFC 1123 naming conventions. Example: "esx-1" length from 3 to 63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname: string;
  /**
  * Host SSH thumbprint (RSA SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ssh_thumbprint Instance#ssh_thumbprint}
  */
  readonly sshThumbprint?: string;
  /**
  * Host SSH thumbprint (RSA SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ssl_thumbprint Instance#ssl_thumbprint}
  */
  readonly sslThumbprint?: string;
  /**
  * Host vSwitch name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vswitch Instance#vswitch}
  */
  readonly vswitch: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#credentials Instance#credentials}
  */
  readonly credentials?: InstanceHostCredentials;
  /**
  * ip_address_private block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ip_address_private Instance#ip_address_private}
  */
  readonly ipAddressPrivate: InstanceHostIpAddressPrivate;
}

export function instanceHostToTerraform(struct?: InstanceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    association: cdktf.stringToTerraform(struct!.association),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ssh_thumbprint: cdktf.stringToTerraform(struct!.sshThumbprint),
    ssl_thumbprint: cdktf.stringToTerraform(struct!.sslThumbprint),
    vswitch: cdktf.stringToTerraform(struct!.vswitch),
    credentials: instanceHostCredentialsToTerraform(struct!.credentials),
    ip_address_private: instanceHostIpAddressPrivateToTerraform(struct!.ipAddressPrivate),
  }
}


export function instanceHostToHclTerraform(struct?: InstanceHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    association: {
      value: cdktf.stringToHclTerraform(struct!.association),
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
    vswitch: {
      value: cdktf.stringToHclTerraform(struct!.vswitch),
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
    ip_address_private: {
      value: instanceHostIpAddressPrivateToHclTerraform(struct!.ipAddressPrivate),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceHostIpAddressPrivateList",
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
    if (this._association !== undefined) {
      hasAnyValues = true;
      internalValueResult.association = this._association;
    }
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
    if (this._vswitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitch = this._vswitch;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._ipAddressPrivate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPrivate = this._ipAddressPrivate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._association = undefined;
      this._hostname = undefined;
      this._sshThumbprint = undefined;
      this._sslThumbprint = undefined;
      this._vswitch = undefined;
      this._credentials.internalValue = undefined;
      this._ipAddressPrivate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._association = value.association;
      this._hostname = value.hostname;
      this._sshThumbprint = value.sshThumbprint;
      this._sslThumbprint = value.sslThumbprint;
      this._vswitch = value.vswitch;
      this._credentials.internalValue = value.credentials;
      this._ipAddressPrivate.internalValue = value.ipAddressPrivate;
    }
  }

  // association - computed: false, optional: false, required: true
  private _association?: string; 
  public get association() {
    return this.getStringAttribute('association');
  }
  public set association(value: string) {
    this._association = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationInput() {
    return this._association;
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

  // vswitch - computed: false, optional: false, required: true
  private _vswitch?: string; 
  public get vswitch() {
    return this.getStringAttribute('vswitch');
  }
  public set vswitch(value: string) {
    this._vswitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchInput() {
    return this._vswitch;
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

  // ip_address_private - computed: false, optional: false, required: true
  private _ipAddressPrivate = new InstanceHostIpAddressPrivateOutputReference(this, "ip_address_private");
  public get ipAddressPrivate() {
    return this._ipAddressPrivate;
  }
  public putIpAddressPrivate(value: InstanceHostIpAddressPrivate) {
    this._ipAddressPrivate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPrivateInput() {
    return this._ipAddressPrivate.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#end_ip_address Instance#end_ip_address}
  */
  readonly endIpAddress: string;
  /**
  * Start IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#start_ip_address Instance#start_ip_address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#active_up_links Instance#active_up_links}
  */
  readonly activeUpLinks?: string[];
  /**
  * IP Address ranges to be excluded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#exclude_ip_address_ranges Instance#exclude_ip_address_ranges}
  */
  readonly excludeIpAddressRanges?: string[];
  /**
  * IP Addresses to be excluded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#exclude_ip_addresses Instance#exclude_ip_addresses}
  */
  readonly excludeIpAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#gateway Instance#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#include_ip_address Instance#include_ip_address}
  */
  readonly includeIpAddress?: string[];
  /**
  * MTU size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#mtu Instance#mtu}
  */
  readonly mtu: number;
  /**
  * Network Type. One among: VSAN, VMOTION, MANAGEMENT, VM_MANAGEMENT or any custom network type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#network_type Instance#network_type}
  */
  readonly networkType: string;
  /**
  * Portgroup key name. When adding a cluster with a new DVS, this value must be provided. When adding a cluster to an existing DVS, this value must not be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#port_group_key Instance#port_group_key}
  */
  readonly portGroupKey?: string;
  /**
  * Standby Uplinks for teaming policy, specify uplink2 for failover_explicit VSAN Teaming Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#standby_uplinks Instance#standby_uplinks}
  */
  readonly standbyUplinks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#subnet Instance#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#subnet_mask Instance#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Teaming Policy for VSAN and VMOTION network types, Default is loadbalance_loadbased. One among: loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, failover_explicit, loadbalance_loadbased
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#teaming_policy Instance#teaming_policy}
  */
  readonly teamingPolicy?: string;
  /**
  * VLAN Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vlan_id Instance#vlan_id}
  */
  readonly vlanId: number;
  /**
  * include_ip_address_ranges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#include_ip_address_ranges Instance#include_ip_address_ranges}
  */
  readonly includeIpAddressRanges?: InstanceNetworkIncludeIpAddressRanges[] | cdktf.IResolvable;
}

export function instanceNetworkToTerraform(struct?: InstanceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_up_links: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.activeUpLinks),
    exclude_ip_address_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeIpAddressRanges),
    exclude_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeIpAddresses),
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
    active_up_links: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.activeUpLinks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_ip_address_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeIpAddressRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exclude_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeIpAddresses),
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
    if (this._activeUpLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeUpLinks = this._activeUpLinks;
    }
    if (this._excludeIpAddressRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIpAddressRanges = this._excludeIpAddressRanges;
    }
    if (this._excludeIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIpAddresses = this._excludeIpAddresses;
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
      this._activeUpLinks = undefined;
      this._excludeIpAddressRanges = undefined;
      this._excludeIpAddresses = undefined;
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
      this._activeUpLinks = value.activeUpLinks;
      this._excludeIpAddressRanges = value.excludeIpAddressRanges;
      this._excludeIpAddresses = value.excludeIpAddresses;
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

  // active_up_links - computed: false, optional: true, required: false
  private _activeUpLinks?: string[]; 
  public get activeUpLinks() {
    return this.getListAttribute('active_up_links');
  }
  public set activeUpLinks(value: string[]) {
    this._activeUpLinks = value;
  }
  public resetActiveUpLinks() {
    this._activeUpLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUpLinksInput() {
    return this._activeUpLinks;
  }

  // exclude_ip_address_ranges - computed: false, optional: true, required: false
  private _excludeIpAddressRanges?: string[]; 
  public get excludeIpAddressRanges() {
    return this.getListAttribute('exclude_ip_address_ranges');
  }
  public set excludeIpAddressRanges(value: string[]) {
    this._excludeIpAddressRanges = value;
  }
  public resetExcludeIpAddressRanges() {
    this._excludeIpAddressRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpAddressRangesInput() {
    return this._excludeIpAddressRanges;
  }

  // exclude_ip_addresses - computed: false, optional: true, required: false
  private _excludeIpAddresses?: string[]; 
  public get excludeIpAddresses() {
    return this.getListAttribute('exclude_ip_addresses');
  }
  public set excludeIpAddresses(value: string[]) {
    this._excludeIpAddresses = value;
  }
  public resetExcludeIpAddresses() {
    this._excludeIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpAddressesInput() {
    return this._excludeIpAddresses;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#end Instance#end}
  */
  readonly end: string;
  /**
  * The first IP Address of the IP Address Range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#start Instance#start}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cidr Instance#cidr}
  */
  readonly cidr: string;
  /**
  * The default gateway address of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#gateway Instance#gateway}
  */
  readonly gateway: string;
  /**
  * ip_address_pool_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ip_address_pool_range Instance#ip_address_pool_range}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#description Instance#description}
  */
  readonly description?: string;
  /**
  * Ignore unavailable NSX cluster(s) during IP pool spec validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ignore_unavailable_nsx_cluster Instance#ignore_unavailable_nsx_cluster}
  */
  readonly ignoreUnavailableNsxCluster?: boolean | cdktf.IResolvable;
  /**
  * Providing only name of existing IP Address Pool reuses it, while providing a new name with subnets creates a new one
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#subnet Instance#subnet}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
  /**
  * NSX Manager IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ip Instance#ip}
  */
  readonly ip?: string;
}

export function instanceNsxNsxManagerToTerraform(struct?: InstanceNsxNsxManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
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
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsxNsxManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
export interface InstanceNsxOverlayTransportZone {
  /**
  * Transport zone network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#network_name Instance#network_name}
  */
  readonly networkName: string;
  /**
  * Transport zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#zone_name Instance#zone_name}
  */
  readonly zoneName: string;
}

export function instanceNsxOverlayTransportZoneToTerraform(struct?: InstanceNsxOverlayTransportZoneOutputReference | InstanceNsxOverlayTransportZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_name: cdktf.stringToTerraform(struct!.networkName),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function instanceNsxOverlayTransportZoneToHclTerraform(struct?: InstanceNsxOverlayTransportZoneOutputReference | InstanceNsxOverlayTransportZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceNsxOverlayTransportZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceNsxOverlayTransportZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsxOverlayTransportZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkName = undefined;
      this._zoneName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkName = value.networkName;
      this._zoneName = value.zoneName;
    }
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}
export interface InstanceNsx {
  /**
  * NSX Manager license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#license Instance#license}
  */
  readonly license?: string;
  /**
  * NSX admin password. The password must be at least 12 characters long. Must contain at-least 1 uppercase, 1 lowercase, 1 special character and 1 digit. In addition, a character cannot be repeated 3 or more times consecutively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#nsx_admin_password Instance#nsx_admin_password}
  */
  readonly nsxAdminPassword?: string;
  /**
  * NSX audit password. The password must be at least 12 characters long. Must contain at-least 1 uppercase, 1 lowercase, 1 special character and 1 digit. In addition, a character cannot be repeated 3 or more times consecutively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#nsx_audit_password Instance#nsx_audit_password}
  */
  readonly nsxAuditPassword?: string;
  /**
  * NSX-T Manager size. One among: medium, large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#nsx_manager_size Instance#nsx_manager_size}
  */
  readonly nsxManagerSize: string;
  /**
  * NSX Manager root password. Password should have 1) At least eight characters, 2) At least one lower-case letter, 3) At least one upper-case letter 4) At least one digit 5) At least one special character, 6) At least five different characters , 7) No dictionary words, 6) No palindromes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#root_nsx_manager_password Instance#root_nsx_manager_password}
  */
  readonly rootNsxManagerPassword: string;
  /**
  * Transport VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#transport_vlan_id Instance#transport_vlan_id}
  */
  readonly transportVlanId: number;
  /**
  * Virtual IP address which would act as proxy/alias for NSX Managers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vip Instance#vip}
  */
  readonly vip: string;
  /**
  * FQDN for VIP so that common SSL certificates can be installed across all managers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vip_fqdn Instance#vip_fqdn}
  */
  readonly vipFqdn: string;
  /**
  * ip_address_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ip_address_pool Instance#ip_address_pool}
  */
  readonly ipAddressPool?: InstanceNsxIpAddressPool;
  /**
  * nsx_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#nsx_manager Instance#nsx_manager}
  */
  readonly nsxManager: InstanceNsxNsxManager[] | cdktf.IResolvable;
  /**
  * overlay_transport_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#overlay_transport_zone Instance#overlay_transport_zone}
  */
  readonly overlayTransportZone?: InstanceNsxOverlayTransportZone;
}

export function instanceNsxToTerraform(struct?: InstanceNsxOutputReference | InstanceNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    nsx_admin_password: cdktf.stringToTerraform(struct!.nsxAdminPassword),
    nsx_audit_password: cdktf.stringToTerraform(struct!.nsxAuditPassword),
    nsx_manager_size: cdktf.stringToTerraform(struct!.nsxManagerSize),
    root_nsx_manager_password: cdktf.stringToTerraform(struct!.rootNsxManagerPassword),
    transport_vlan_id: cdktf.numberToTerraform(struct!.transportVlanId),
    vip: cdktf.stringToTerraform(struct!.vip),
    vip_fqdn: cdktf.stringToTerraform(struct!.vipFqdn),
    ip_address_pool: instanceNsxIpAddressPoolToTerraform(struct!.ipAddressPool),
    nsx_manager: cdktf.listMapper(instanceNsxNsxManagerToTerraform, true)(struct!.nsxManager),
    overlay_transport_zone: instanceNsxOverlayTransportZoneToTerraform(struct!.overlayTransportZone),
  }
}


export function instanceNsxToHclTerraform(struct?: InstanceNsxOutputReference | InstanceNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    vip: {
      value: cdktf.stringToHclTerraform(struct!.vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    overlay_transport_zone: {
      value: instanceNsxOverlayTransportZoneToHclTerraform(struct!.overlayTransportZone),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceNsxOverlayTransportZoneList",
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
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
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
    if (this._vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vip = this._vip;
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
    if (this._overlayTransportZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayTransportZone = this._overlayTransportZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceNsx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._license = undefined;
      this._nsxAdminPassword = undefined;
      this._nsxAuditPassword = undefined;
      this._nsxManagerSize = undefined;
      this._rootNsxManagerPassword = undefined;
      this._transportVlanId = undefined;
      this._vip = undefined;
      this._vipFqdn = undefined;
      this._ipAddressPool.internalValue = undefined;
      this._nsxManager.internalValue = undefined;
      this._overlayTransportZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._license = value.license;
      this._nsxAdminPassword = value.nsxAdminPassword;
      this._nsxAuditPassword = value.nsxAuditPassword;
      this._nsxManagerSize = value.nsxManagerSize;
      this._rootNsxManagerPassword = value.rootNsxManagerPassword;
      this._transportVlanId = value.transportVlanId;
      this._vip = value.vip;
      this._vipFqdn = value.vipFqdn;
      this._ipAddressPool.internalValue = value.ipAddressPool;
      this._nsxManager.internalValue = value.nsxManager;
      this._overlayTransportZone.internalValue = value.overlayTransportZone;
    }
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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

  // vip - computed: false, optional: false, required: true
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
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

  // overlay_transport_zone - computed: false, optional: true, required: false
  private _overlayTransportZone = new InstanceNsxOverlayTransportZoneOutputReference(this, "overlay_transport_zone");
  public get overlayTransportZone() {
    return this._overlayTransportZone;
  }
  public putOverlayTransportZone(value: InstanceNsxOverlayTransportZone) {
    this._overlayTransportZone.internalValue = value;
  }
  public resetOverlayTransportZone() {
    this._overlayTransportZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayTransportZoneInput() {
    return this._overlayTransportZone.internalValue;
  }
}
export interface InstancePsc {
  /**
  * Admin user sso password. Password needs to be a strong password with at least one Uppercase alphabet, one lowercase alphabet, one digit and one special character specified in braces [!$%^] and 8-20 characters in length,and 3 maximum identical adjacent characters!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#admin_user_sso_password Instance#admin_user_sso_password}
  */
  readonly adminUserSsoPassword: string;
  /**
  * PSC SSO Domain. Example: vsphere.local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#psc_sso_domain Instance#psc_sso_domain}
  */
  readonly pscSsoDomain?: string;
}

export function instancePscToTerraform(struct?: InstancePsc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_user_sso_password: cdktf.stringToTerraform(struct!.adminUserSsoPassword),
    psc_sso_domain: cdktf.stringToTerraform(struct!.pscSsoDomain),
  }
}


export function instancePscToHclTerraform(struct?: InstancePsc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_user_sso_password: {
      value: cdktf.stringToHclTerraform(struct!.adminUserSsoPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    psc_sso_domain: {
      value: cdktf.stringToHclTerraform(struct!.pscSsoDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstancePscOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstancePsc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUserSsoPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUserSsoPassword = this._adminUserSsoPassword;
    }
    if (this._pscSsoDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.pscSsoDomain = this._pscSsoDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstancePsc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminUserSsoPassword = undefined;
      this._pscSsoDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminUserSsoPassword = value.adminUserSsoPassword;
      this._pscSsoDomain = value.pscSsoDomain;
    }
  }

  // admin_user_sso_password - computed: false, optional: false, required: true
  private _adminUserSsoPassword?: string; 
  public get adminUserSsoPassword() {
    return this.getStringAttribute('admin_user_sso_password');
  }
  public set adminUserSsoPassword(value: string) {
    this._adminUserSsoPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserSsoPasswordInput() {
    return this._adminUserSsoPassword;
  }

  // psc_sso_domain - computed: false, optional: true, required: false
  private _pscSsoDomain?: string; 
  public get pscSsoDomain() {
    return this.getStringAttribute('psc_sso_domain');
  }
  public set pscSsoDomain(value: string) {
    this._pscSsoDomain = value;
  }
  public resetPscSsoDomain() {
    this._pscSsoDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscSsoDomainInput() {
    return this._pscSsoDomain;
  }
}

export class InstancePscList extends cdktf.ComplexList {
  public internalValue? : InstancePsc[] | cdktf.IResolvable

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
  public get(index: number): InstancePscOutputReference {
    return new InstancePscOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceSddcManagerRootUserCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#password Instance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#username Instance#username}
  */
  readonly username: string;
}

export function instanceSddcManagerRootUserCredentialsToTerraform(struct?: InstanceSddcManagerRootUserCredentialsOutputReference | InstanceSddcManagerRootUserCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function instanceSddcManagerRootUserCredentialsToHclTerraform(struct?: InstanceSddcManagerRootUserCredentialsOutputReference | InstanceSddcManagerRootUserCredentials): any {
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

export class InstanceSddcManagerRootUserCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceSddcManagerRootUserCredentials | undefined {
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

  public set internalValue(value: InstanceSddcManagerRootUserCredentials | undefined) {
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
export interface InstanceSddcManagerSecondUserCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#password Instance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#username Instance#username}
  */
  readonly username: string;
}

export function instanceSddcManagerSecondUserCredentialsToTerraform(struct?: InstanceSddcManagerSecondUserCredentialsOutputReference | InstanceSddcManagerSecondUserCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function instanceSddcManagerSecondUserCredentialsToHclTerraform(struct?: InstanceSddcManagerSecondUserCredentialsOutputReference | InstanceSddcManagerSecondUserCredentials): any {
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

export class InstanceSddcManagerSecondUserCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceSddcManagerSecondUserCredentials | undefined {
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

  public set internalValue(value: InstanceSddcManagerSecondUserCredentials | undefined) {
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
export interface InstanceSddcManager {
  /**
  * SDDC Manager Hostname. If just the short hostname is provided, then FQDN will be generated using the "domain" from dns configuration, length 3-63
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
  /**
  * SDDC Manager IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ip_address Instance#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The local account is a built-in admin account (password for the break glass user admin@local) in VCF that can be used in emergency scenarios. The password of this account must be at least 12 characters long. It also must contain at-least 1 uppercase, 1 lowercase, 1 special character specified in braces [!%@$^#?] and 1 digit. In addition, a character cannot be repeated more than 3 times consecutively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#local_user_password Instance#local_user_password}
  */
  readonly localUserPassword?: string;
  /**
  * root_user_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#root_user_credentials Instance#root_user_credentials}
  */
  readonly rootUserCredentials?: InstanceSddcManagerRootUserCredentials;
  /**
  * second_user_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#second_user_credentials Instance#second_user_credentials}
  */
  readonly secondUserCredentials?: InstanceSddcManagerSecondUserCredentials;
}

export function instanceSddcManagerToTerraform(struct?: InstanceSddcManagerOutputReference | InstanceSddcManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    local_user_password: cdktf.stringToTerraform(struct!.localUserPassword),
    root_user_credentials: instanceSddcManagerRootUserCredentialsToTerraform(struct!.rootUserCredentials),
    second_user_credentials: instanceSddcManagerSecondUserCredentialsToTerraform(struct!.secondUserCredentials),
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
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    root_user_credentials: {
      value: instanceSddcManagerRootUserCredentialsToHclTerraform(struct!.rootUserCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceSddcManagerRootUserCredentialsList",
    },
    second_user_credentials: {
      value: instanceSddcManagerSecondUserCredentialsToHclTerraform(struct!.secondUserCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceSddcManagerSecondUserCredentialsList",
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
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._localUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUserPassword = this._localUserPassword;
    }
    if (this._rootUserCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootUserCredentials = this._rootUserCredentials?.internalValue;
    }
    if (this._secondUserCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondUserCredentials = this._secondUserCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceSddcManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._ipAddress = undefined;
      this._localUserPassword = undefined;
      this._rootUserCredentials.internalValue = undefined;
      this._secondUserCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._ipAddress = value.ipAddress;
      this._localUserPassword = value.localUserPassword;
      this._rootUserCredentials.internalValue = value.rootUserCredentials;
      this._secondUserCredentials.internalValue = value.secondUserCredentials;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // root_user_credentials - computed: false, optional: true, required: false
  private _rootUserCredentials = new InstanceSddcManagerRootUserCredentialsOutputReference(this, "root_user_credentials");
  public get rootUserCredentials() {
    return this._rootUserCredentials;
  }
  public putRootUserCredentials(value: InstanceSddcManagerRootUserCredentials) {
    this._rootUserCredentials.internalValue = value;
  }
  public resetRootUserCredentials() {
    this._rootUserCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUserCredentialsInput() {
    return this._rootUserCredentials.internalValue;
  }

  // second_user_credentials - computed: false, optional: true, required: false
  private _secondUserCredentials = new InstanceSddcManagerSecondUserCredentialsOutputReference(this, "second_user_credentials");
  public get secondUserCredentials() {
    return this._secondUserCredentials;
  }
  public putSecondUserCredentials(value: InstanceSddcManagerSecondUserCredentials) {
    this._secondUserCredentials.internalValue = value;
  }
  public resetSecondUserCredentials() {
    this._secondUserCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondUserCredentialsInput() {
    return this._secondUserCredentials.internalValue;
  }
}
export interface InstanceSecurityRootCaCerts {
  /**
  * Certificate alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#alias Instance#alias}
  */
  readonly alias?: string;
  /**
  * List of Base64 encoded certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#cert_chain Instance#cert_chain}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#esxi_certs_mode Instance#esxi_certs_mode}
  */
  readonly esxiCertsMode?: string;
  /**
  * root_ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#root_ca_certs Instance#root_ca_certs}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#create Instance#create}
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
  * vCenter License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#license Instance#license}
  */
  readonly license?: string;
  /**
  * vCenter root password. The password must be between 8 characters and 20 characters long. It must also contain at least one uppercase and lowercase letter, one number, and one character from '! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { &Iota; } ~' and all characters must be ASCII. Space is not allowed in password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#root_vcenter_password Instance#root_vcenter_password}
  */
  readonly rootVcenterPassword: string;
  /**
  * vCenter Server SSH thumbprint (RSA SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ssh_thumbprint Instance#ssh_thumbprint}
  */
  readonly sshThumbprint?: string;
  /**
  * vCenter Server SSL thumbprint (SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ssl_thumbprint Instance#ssl_thumbprint}
  */
  readonly sslThumbprint?: string;
  /**
  * vCenter VM storage size. One among:lstorage, xlstorage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#storage_size Instance#storage_size}
  */
  readonly storageSize?: string;
  /**
  * vCenter Server hostname address. If just the short hostname is provided, then FQDN will be generated using the "domain" from dns configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vcenter_hostname Instance#vcenter_hostname}
  */
  readonly vcenterHostname: string;
  /**
  * vCenter Server IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vcenter_ip Instance#vcenter_ip}
  */
  readonly vcenterIp?: string;
  /**
  * vCenter Server Appliance  size. One among: tiny, small, medium, large, xlarge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vm_size Instance#vm_size}
  */
  readonly vmSize?: string;
}

export function instanceVcenterToTerraform(struct?: InstanceVcenterOutputReference | InstanceVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    root_vcenter_password: cdktf.stringToTerraform(struct!.rootVcenterPassword),
    ssh_thumbprint: cdktf.stringToTerraform(struct!.sshThumbprint),
    ssl_thumbprint: cdktf.stringToTerraform(struct!.sslThumbprint),
    storage_size: cdktf.stringToTerraform(struct!.storageSize),
    vcenter_hostname: cdktf.stringToTerraform(struct!.vcenterHostname),
    vcenter_ip: cdktf.stringToTerraform(struct!.vcenterIp),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}


export function instanceVcenterToHclTerraform(struct?: InstanceVcenterOutputReference | InstanceVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_vcenter_password: {
      value: cdktf.stringToHclTerraform(struct!.rootVcenterPassword),
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
    vcenter_ip: {
      value: cdktf.stringToHclTerraform(struct!.vcenterIp),
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
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
    }
    if (this._rootVcenterPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVcenterPassword = this._rootVcenterPassword;
    }
    if (this._sshThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshThumbprint = this._sshThumbprint;
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
    if (this._vcenterIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterIp = this._vcenterIp;
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
      this._license = undefined;
      this._rootVcenterPassword = undefined;
      this._sshThumbprint = undefined;
      this._sslThumbprint = undefined;
      this._storageSize = undefined;
      this._vcenterHostname = undefined;
      this._vcenterIp = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._license = value.license;
      this._rootVcenterPassword = value.rootVcenterPassword;
      this._sshThumbprint = value.sshThumbprint;
      this._sslThumbprint = value.sslThumbprint;
      this._storageSize = value.storageSize;
      this._vcenterHostname = value.vcenterHostname;
      this._vcenterIp = value.vcenterIp;
      this._vmSize = value.vmSize;
    }
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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

  // vcenter_ip - computed: false, optional: true, required: false
  private _vcenterIp?: string; 
  public get vcenterIp() {
    return this.getStringAttribute('vcenter_ip');
  }
  public set vcenterIp(value: string) {
    this._vcenterIp = value;
  }
  public resetVcenterIp() {
    this._vcenterIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterIpInput() {
    return this._vcenterIp;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#datastore_name Instance#datastore_name}
  */
  readonly datastoreName: string;
  /**
  * Enable vSAN ESA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#esa_enabled Instance#esa_enabled}
  */
  readonly esaEnabled?: boolean | cdktf.IResolvable;
  /**
  * A path (URL or local path) to an HCL file that will be uploaded to vCenter prior to configuring vSAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#hcl_file Instance#hcl_file}
  */
  readonly hclFile?: string;
  /**
  * VSAN License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#license Instance#license}
  */
  readonly license?: string;
  /**
  * VSAN feature Deduplication and Compression flag, one flag for both features
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vsan_dedup Instance#vsan_dedup}
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
    hcl_file: cdktf.stringToTerraform(struct!.hclFile),
    license: cdktf.stringToTerraform(struct!.license),
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
    hcl_file: {
      value: cdktf.stringToHclTerraform(struct!.hclFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license: {
      value: cdktf.stringToHclTerraform(struct!.license),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    if (this._hclFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.hclFile = this._hclFile;
    }
    if (this._license !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license;
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
      this._hclFile = undefined;
      this._license = undefined;
      this._vsanDedup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreName = value.datastoreName;
      this._esaEnabled = value.esaEnabled;
      this._hclFile = value.hclFile;
      this._license = value.license;
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

  // hcl_file - computed: false, optional: true, required: false
  private _hclFile?: string; 
  public get hclFile() {
    return this.getStringAttribute('hcl_file');
  }
  public set hclFile(value: string) {
    this._hclFile = value;
  }
  public resetHclFile() {
    this._hclFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hclFileInput() {
    return this._hclFile;
  }

  // license - computed: false, optional: true, required: false
  private _license?: string; 
  public get license() {
    return this.getStringAttribute('license');
  }
  public set license(value: string) {
    this._license = value;
  }
  public resetLicense() {
    this._license = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license;
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
export interface InstanceVxManagerDefaultAdminUserCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#password Instance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#username Instance#username}
  */
  readonly username: string;
}

export function instanceVxManagerDefaultAdminUserCredentialsToTerraform(struct?: InstanceVxManagerDefaultAdminUserCredentialsOutputReference | InstanceVxManagerDefaultAdminUserCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function instanceVxManagerDefaultAdminUserCredentialsToHclTerraform(struct?: InstanceVxManagerDefaultAdminUserCredentialsOutputReference | InstanceVxManagerDefaultAdminUserCredentials): any {
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

export class InstanceVxManagerDefaultAdminUserCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceVxManagerDefaultAdminUserCredentials | undefined {
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

  public set internalValue(value: InstanceVxManagerDefaultAdminUserCredentials | undefined) {
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
export interface InstanceVxManagerDefaultRootUserCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#password Instance#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#username Instance#username}
  */
  readonly username: string;
}

export function instanceVxManagerDefaultRootUserCredentialsToTerraform(struct?: InstanceVxManagerDefaultRootUserCredentialsOutputReference | InstanceVxManagerDefaultRootUserCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function instanceVxManagerDefaultRootUserCredentialsToHclTerraform(struct?: InstanceVxManagerDefaultRootUserCredentialsOutputReference | InstanceVxManagerDefaultRootUserCredentials): any {
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

export class InstanceVxManagerDefaultRootUserCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceVxManagerDefaultRootUserCredentials | undefined {
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

  public set internalValue(value: InstanceVxManagerDefaultRootUserCredentials | undefined) {
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
export interface InstanceVxManager {
  /**
  * VxRail Manager SSH thumbprint (RSA SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ssh_thumbprint Instance#ssh_thumbprint}
  */
  readonly sshThumbprint?: string;
  /**
  * VxRail Manager SSL thumbprint (SHA256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#ssl_thumbprint Instance#ssl_thumbprint}
  */
  readonly sslThumbprint?: string;
  /**
  * VxManager host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#vx_manager_hostname Instance#vx_manager_hostname}
  */
  readonly vxManagerHostname: string;
  /**
  * default_admin_user_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#default_admin_user_credentials Instance#default_admin_user_credentials}
  */
  readonly defaultAdminUserCredentials?: InstanceVxManagerDefaultAdminUserCredentials;
  /**
  * default_root_user_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#default_root_user_credentials Instance#default_root_user_credentials}
  */
  readonly defaultRootUserCredentials?: InstanceVxManagerDefaultRootUserCredentials;
}

export function instanceVxManagerToTerraform(struct?: InstanceVxManagerOutputReference | InstanceVxManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_thumbprint: cdktf.stringToTerraform(struct!.sshThumbprint),
    ssl_thumbprint: cdktf.stringToTerraform(struct!.sslThumbprint),
    vx_manager_hostname: cdktf.stringToTerraform(struct!.vxManagerHostname),
    default_admin_user_credentials: instanceVxManagerDefaultAdminUserCredentialsToTerraform(struct!.defaultAdminUserCredentials),
    default_root_user_credentials: instanceVxManagerDefaultRootUserCredentialsToTerraform(struct!.defaultRootUserCredentials),
  }
}


export function instanceVxManagerToHclTerraform(struct?: InstanceVxManagerOutputReference | InstanceVxManager): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    vx_manager_hostname: {
      value: cdktf.stringToHclTerraform(struct!.vxManagerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_admin_user_credentials: {
      value: instanceVxManagerDefaultAdminUserCredentialsToHclTerraform(struct!.defaultAdminUserCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceVxManagerDefaultAdminUserCredentialsList",
    },
    default_root_user_credentials: {
      value: instanceVxManagerDefaultRootUserCredentialsToHclTerraform(struct!.defaultRootUserCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceVxManagerDefaultRootUserCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceVxManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceVxManager | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshThumbprint = this._sshThumbprint;
    }
    if (this._sslThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslThumbprint = this._sslThumbprint;
    }
    if (this._vxManagerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxManagerHostname = this._vxManagerHostname;
    }
    if (this._defaultAdminUserCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAdminUserCredentials = this._defaultAdminUserCredentials?.internalValue;
    }
    if (this._defaultRootUserCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRootUserCredentials = this._defaultRootUserCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceVxManager | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sshThumbprint = undefined;
      this._sslThumbprint = undefined;
      this._vxManagerHostname = undefined;
      this._defaultAdminUserCredentials.internalValue = undefined;
      this._defaultRootUserCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sshThumbprint = value.sshThumbprint;
      this._sslThumbprint = value.sslThumbprint;
      this._vxManagerHostname = value.vxManagerHostname;
      this._defaultAdminUserCredentials.internalValue = value.defaultAdminUserCredentials;
      this._defaultRootUserCredentials.internalValue = value.defaultRootUserCredentials;
    }
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

  // vx_manager_hostname - computed: false, optional: false, required: true
  private _vxManagerHostname?: string; 
  public get vxManagerHostname() {
    return this.getStringAttribute('vx_manager_hostname');
  }
  public set vxManagerHostname(value: string) {
    this._vxManagerHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vxManagerHostnameInput() {
    return this._vxManagerHostname;
  }

  // default_admin_user_credentials - computed: false, optional: true, required: false
  private _defaultAdminUserCredentials = new InstanceVxManagerDefaultAdminUserCredentialsOutputReference(this, "default_admin_user_credentials");
  public get defaultAdminUserCredentials() {
    return this._defaultAdminUserCredentials;
  }
  public putDefaultAdminUserCredentials(value: InstanceVxManagerDefaultAdminUserCredentials) {
    this._defaultAdminUserCredentials.internalValue = value;
  }
  public resetDefaultAdminUserCredentials() {
    this._defaultAdminUserCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAdminUserCredentialsInput() {
    return this._defaultAdminUserCredentials.internalValue;
  }

  // default_root_user_credentials - computed: false, optional: true, required: false
  private _defaultRootUserCredentials = new InstanceVxManagerDefaultRootUserCredentialsOutputReference(this, "default_root_user_credentials");
  public get defaultRootUserCredentials() {
    return this._defaultRootUserCredentials;
  }
  public putDefaultRootUserCredentials(value: InstanceVxManagerDefaultRootUserCredentials) {
    this._defaultRootUserCredentials.internalValue = value;
  }
  public resetDefaultRootUserCredentials() {
    this._defaultRootUserCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRootUserCredentialsInput() {
    return this._defaultRootUserCredentials.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance vcf_instance}
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
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcf_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcf/0.16.2/docs/resources/instance vcf_instance} Resource
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
        providerVersion: '0.16.2',
        providerVersionConstraint: '0.16.2'
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
    this._dvSwitchVersion = config.dvSwitchVersion;
    this._esxLicense = config.esxLicense;
    this._fipsEnabled = config.fipsEnabled;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._managementPoolName = config.managementPoolName;
    this._ntpServers = config.ntpServers;
    this._skipEsxThumbprintValidation = config.skipEsxThumbprintValidation;
    this._taskName = config.taskName;
    this._cluster.internalValue = config.cluster;
    this._dns.internalValue = config.dns;
    this._dvs.internalValue = config.dvs;
    this._host.internalValue = config.host;
    this._network.internalValue = config.network;
    this._nsx.internalValue = config.nsx;
    this._psc.internalValue = config.psc;
    this._sddcManager.internalValue = config.sddcManager;
    this._security.internalValue = config.security;
    this._timeouts.internalValue = config.timeouts;
    this._vcenter.internalValue = config.vcenter;
    this._vsan.internalValue = config.vsan;
    this._vxManager.internalValue = config.vxManager;
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

  // dv_switch_version - computed: false, optional: false, required: true
  private _dvSwitchVersion?: string; 
  public get dvSwitchVersion() {
    return this.getStringAttribute('dv_switch_version');
  }
  public set dvSwitchVersion(value: string) {
    this._dvSwitchVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dvSwitchVersionInput() {
    return this._dvSwitchVersion;
  }

  // esx_license - computed: false, optional: true, required: false
  private _esxLicense?: string; 
  public get esxLicense() {
    return this.getStringAttribute('esx_license');
  }
  public set esxLicense(value: string) {
    this._esxLicense = value;
  }
  public resetEsxLicense() {
    this._esxLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxLicenseInput() {
    return this._esxLicense;
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

  // sddc_manager_fqdn - computed: true, optional: false, required: false
  public get sddcManagerFqdn() {
    return this.getStringAttribute('sddc_manager_fqdn');
  }

  // sddc_manager_id - computed: true, optional: false, required: false
  public get sddcManagerId() {
    return this.getStringAttribute('sddc_manager_id');
  }

  // sddc_manager_version - computed: true, optional: false, required: false
  public get sddcManagerVersion() {
    return this.getStringAttribute('sddc_manager_version');
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

  // task_name - computed: false, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
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

  // psc - computed: false, optional: true, required: false
  private _psc = new InstancePscList(this, "psc", false);
  public get psc() {
    return this._psc;
  }
  public putPsc(value: InstancePsc[] | cdktf.IResolvable) {
    this._psc.internalValue = value;
  }
  public resetPsc() {
    this._psc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pscInput() {
    return this._psc.internalValue;
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

  // vx_manager - computed: false, optional: true, required: false
  private _vxManager = new InstanceVxManagerOutputReference(this, "vx_manager");
  public get vxManager() {
    return this._vxManager;
  }
  public putVxManager(value: InstanceVxManager) {
    this._vxManager.internalValue = value;
  }
  public resetVxManager() {
    this._vxManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxManagerInput() {
    return this._vxManager.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ceip_enabled: cdktf.booleanToTerraform(this._ceipEnabled),
      dv_switch_version: cdktf.stringToTerraform(this._dvSwitchVersion),
      esx_license: cdktf.stringToTerraform(this._esxLicense),
      fips_enabled: cdktf.booleanToTerraform(this._fipsEnabled),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      management_pool_name: cdktf.stringToTerraform(this._managementPoolName),
      ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpServers),
      skip_esx_thumbprint_validation: cdktf.booleanToTerraform(this._skipEsxThumbprintValidation),
      task_name: cdktf.stringToTerraform(this._taskName),
      cluster: instanceClusterToTerraform(this._cluster.internalValue),
      dns: instanceDnsToTerraform(this._dns.internalValue),
      dvs: cdktf.listMapper(instanceDvsToTerraform, true)(this._dvs.internalValue),
      host: cdktf.listMapper(instanceHostToTerraform, true)(this._host.internalValue),
      network: cdktf.listMapper(instanceNetworkToTerraform, true)(this._network.internalValue),
      nsx: instanceNsxToTerraform(this._nsx.internalValue),
      psc: cdktf.listMapper(instancePscToTerraform, true)(this._psc.internalValue),
      sddc_manager: instanceSddcManagerToTerraform(this._sddcManager.internalValue),
      security: instanceSecurityToTerraform(this._security.internalValue),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
      vcenter: instanceVcenterToTerraform(this._vcenter.internalValue),
      vsan: instanceVsanToTerraform(this._vsan.internalValue),
      vx_manager: instanceVxManagerToTerraform(this._vxManager.internalValue),
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
      dv_switch_version: {
        value: cdktf.stringToHclTerraform(this._dvSwitchVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      esx_license: {
        value: cdktf.stringToHclTerraform(this._esxLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      psc: {
        value: cdktf.listMapperHcl(instancePscToHclTerraform, true)(this._psc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstancePscList",
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
      vx_manager: {
        value: instanceVxManagerToHclTerraform(this._vxManager.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceVxManagerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
