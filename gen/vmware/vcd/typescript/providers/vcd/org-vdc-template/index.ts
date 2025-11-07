// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgVdcTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocation model that the VDCs instantiated from this template will use. Must be one of: 'AllocationVApp', 'AllocationPool', 'ReservationPool' or 'Flex'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#allocation_model OrgVdcTemplate#allocation_model}
  */
  readonly allocationModel: string;
  /**
  * Description of the VDC Template as seen by the System administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#description OrgVdcTemplate#description}
  */
  readonly description?: string;
  /**
  * If 'true', the VDCs instantiated from this template will have Fast provisioning enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#enable_fast_provisioning OrgVdcTemplate#enable_fast_provisioning}
  */
  readonly enableFastProvisioning?: boolean | cdktf.IResolvable;
  /**
  * If 'true', the VDCs instantiated from this template will have Thin provisioning enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#enable_thin_provisioning OrgVdcTemplate#enable_thin_provisioning}
  */
  readonly enableThinProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#id OrgVdcTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the VDC Template as seen by the System administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#name OrgVdcTemplate#name}
  */
  readonly name: string;
  /**
  * If set, specifies the Network pool for the instantiated VDCs. Otherwise, it is automatically chosen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#network_pool_id OrgVdcTemplate#network_pool_id}
  */
  readonly networkPoolId?: string;
  /**
  * Quota for the NICs of the instantiated VDCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#nic_quota OrgVdcTemplate#nic_quota}
  */
  readonly nicQuota?: number;
  /**
  * Quota for the provisioned networks of the instantiated VDCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#provisioned_network_quota OrgVdcTemplate#provisioned_network_quota}
  */
  readonly provisionedNetworkQuota?: number;
  /**
  * IDs of the Organizations that will be able to view and instantiate this VDC template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#readable_by_org_ids OrgVdcTemplate#readable_by_org_ids}
  */
  readonly readableByOrgIds?: string[];
  /**
  * Description of the VDC Template as seen by the tenants (organizations)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#tenant_description OrgVdcTemplate#tenant_description}
  */
  readonly tenantDescription?: string;
  /**
  * Name of the VDC Template as seen by the tenants (organizations)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#tenant_name OrgVdcTemplate#tenant_name}
  */
  readonly tenantName: string;
  /**
  * Quota for the VMs of the instantiated VDCs. 0 means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#vm_quota OrgVdcTemplate#vm_quota}
  */
  readonly vmQuota?: number;
  /**
  * compute_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#compute_configuration OrgVdcTemplate#compute_configuration}
  */
  readonly computeConfiguration: OrgVdcTemplateComputeConfiguration;
  /**
  * edge_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#edge_gateway OrgVdcTemplate#edge_gateway}
  */
  readonly edgeGateway?: OrgVdcTemplateEdgeGateway;
  /**
  * provider_vdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#provider_vdc OrgVdcTemplate#provider_vdc}
  */
  readonly providerVdc: OrgVdcTemplateProviderVdc[] | cdktf.IResolvable;
  /**
  * storage_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#storage_profile OrgVdcTemplate#storage_profile}
  */
  readonly storageProfile: OrgVdcTemplateStorageProfile[] | cdktf.IResolvable;
}
export interface OrgVdcTemplateComputeConfiguration {
  /**
  * AllocationPool, ReservationPool, Flex: The maximum amount of CPU, in MHz, available to the VMs running within the VDC that is instantiated from this template. Minimum is 256MHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#cpu_allocated OrgVdcTemplate#cpu_allocated}
  */
  readonly cpuAllocated?: number;
  /**
  * AllocationVApp, AllocationPool, Flex: The percentage of the CPU guaranteed to be available to VMs running within the VDC instantiated from this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#cpu_guaranteed OrgVdcTemplate#cpu_guaranteed}
  */
  readonly cpuGuaranteed?: number;
  /**
  * AllocationVApp, ReservationPool, Flex: The limit amount of CPU, in MHz, of the VDC that is instantiated from this template. Minimum is 256MHz. 0 means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#cpu_limit OrgVdcTemplate#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * AllocationVApp, AllocationPool, Flex: Specifies the clock frequency, in MHz, for any virtual CPU that is allocated to a VM. Minimum is 256MHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#cpu_speed OrgVdcTemplate#cpu_speed}
  */
  readonly cpuSpeed?: number;
  /**
  * Flex only: True if compute capacity can grow or shrink based on demand
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#elasticity OrgVdcTemplate#elasticity}
  */
  readonly elasticity?: boolean | cdktf.IResolvable;
  /**
  * Flex only: True if the instantiated VDC includes memory overhead into its accounting for admission control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#include_vm_memory_overhead OrgVdcTemplate#include_vm_memory_overhead}
  */
  readonly includeVmMemoryOverhead?: boolean | cdktf.IResolvable;
  /**
  * AllocationPool, ReservationPool, Flex: The maximum amount of Memory, in MB, available to the VMs running within the VDC that is instantiated from this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#memory_allocated OrgVdcTemplate#memory_allocated}
  */
  readonly memoryAllocated?: number;
  /**
  * AllocationVApp, AllocationPool, Flex: The percentage of the Memory guaranteed to be available to VMs running within the VDC instantiated from this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#memory_guaranteed OrgVdcTemplate#memory_guaranteed}
  */
  readonly memoryGuaranteed?: number;
  /**
  * AllocationVApp, ReservationPool, Flex: The limit amount of Memory, in MB, of the VDC that is instantiated from this template. Minimum is 1024MB. 0 means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#memory_limit OrgVdcTemplate#memory_limit}
  */
  readonly memoryLimit?: number;
}

export function orgVdcTemplateComputeConfigurationToTerraform(struct?: OrgVdcTemplateComputeConfigurationOutputReference | OrgVdcTemplateComputeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_allocated: cdktf.numberToTerraform(struct!.cpuAllocated),
    cpu_guaranteed: cdktf.numberToTerraform(struct!.cpuGuaranteed),
    cpu_limit: cdktf.numberToTerraform(struct!.cpuLimit),
    cpu_speed: cdktf.numberToTerraform(struct!.cpuSpeed),
    elasticity: cdktf.booleanToTerraform(struct!.elasticity),
    include_vm_memory_overhead: cdktf.booleanToTerraform(struct!.includeVmMemoryOverhead),
    memory_allocated: cdktf.numberToTerraform(struct!.memoryAllocated),
    memory_guaranteed: cdktf.numberToTerraform(struct!.memoryGuaranteed),
    memory_limit: cdktf.numberToTerraform(struct!.memoryLimit),
  }
}


export function orgVdcTemplateComputeConfigurationToHclTerraform(struct?: OrgVdcTemplateComputeConfigurationOutputReference | OrgVdcTemplateComputeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_allocated: {
      value: cdktf.numberToHclTerraform(struct!.cpuAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_guaranteed: {
      value: cdktf.numberToHclTerraform(struct!.cpuGuaranteed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_limit: {
      value: cdktf.numberToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_speed: {
      value: cdktf.numberToHclTerraform(struct!.cpuSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elasticity: {
      value: cdktf.booleanToHclTerraform(struct!.elasticity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_vm_memory_overhead: {
      value: cdktf.booleanToHclTerraform(struct!.includeVmMemoryOverhead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_allocated: {
      value: cdktf.numberToHclTerraform(struct!.memoryAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_guaranteed: {
      value: cdktf.numberToHclTerraform(struct!.memoryGuaranteed),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcTemplateComputeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVdcTemplateComputeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuAllocated = this._cpuAllocated;
    }
    if (this._cpuGuaranteed !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuGuaranteed = this._cpuGuaranteed;
    }
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuSpeed = this._cpuSpeed;
    }
    if (this._elasticity !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticity = this._elasticity;
    }
    if (this._includeVmMemoryOverhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeVmMemoryOverhead = this._includeVmMemoryOverhead;
    }
    if (this._memoryAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryAllocated = this._memoryAllocated;
    }
    if (this._memoryGuaranteed !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGuaranteed = this._memoryGuaranteed;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcTemplateComputeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuAllocated = undefined;
      this._cpuGuaranteed = undefined;
      this._cpuLimit = undefined;
      this._cpuSpeed = undefined;
      this._elasticity = undefined;
      this._includeVmMemoryOverhead = undefined;
      this._memoryAllocated = undefined;
      this._memoryGuaranteed = undefined;
      this._memoryLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuAllocated = value.cpuAllocated;
      this._cpuGuaranteed = value.cpuGuaranteed;
      this._cpuLimit = value.cpuLimit;
      this._cpuSpeed = value.cpuSpeed;
      this._elasticity = value.elasticity;
      this._includeVmMemoryOverhead = value.includeVmMemoryOverhead;
      this._memoryAllocated = value.memoryAllocated;
      this._memoryGuaranteed = value.memoryGuaranteed;
      this._memoryLimit = value.memoryLimit;
    }
  }

  // cpu_allocated - computed: false, optional: true, required: false
  private _cpuAllocated?: number; 
  public get cpuAllocated() {
    return this.getNumberAttribute('cpu_allocated');
  }
  public set cpuAllocated(value: number) {
    this._cpuAllocated = value;
  }
  public resetCpuAllocated() {
    this._cpuAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuAllocatedInput() {
    return this._cpuAllocated;
  }

  // cpu_guaranteed - computed: false, optional: true, required: false
  private _cpuGuaranteed?: number; 
  public get cpuGuaranteed() {
    return this.getNumberAttribute('cpu_guaranteed');
  }
  public set cpuGuaranteed(value: number) {
    this._cpuGuaranteed = value;
  }
  public resetCpuGuaranteed() {
    this._cpuGuaranteed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuGuaranteedInput() {
    return this._cpuGuaranteed;
  }

  // cpu_limit - computed: true, optional: true, required: false
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

  // cpu_speed - computed: false, optional: true, required: false
  private _cpuSpeed?: number; 
  public get cpuSpeed() {
    return this.getNumberAttribute('cpu_speed');
  }
  public set cpuSpeed(value: number) {
    this._cpuSpeed = value;
  }
  public resetCpuSpeed() {
    this._cpuSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSpeedInput() {
    return this._cpuSpeed;
  }

  // elasticity - computed: true, optional: true, required: false
  private _elasticity?: boolean | cdktf.IResolvable; 
  public get elasticity() {
    return this.getBooleanAttribute('elasticity');
  }
  public set elasticity(value: boolean | cdktf.IResolvable) {
    this._elasticity = value;
  }
  public resetElasticity() {
    this._elasticity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticityInput() {
    return this._elasticity;
  }

  // include_vm_memory_overhead - computed: true, optional: true, required: false
  private _includeVmMemoryOverhead?: boolean | cdktf.IResolvable; 
  public get includeVmMemoryOverhead() {
    return this.getBooleanAttribute('include_vm_memory_overhead');
  }
  public set includeVmMemoryOverhead(value: boolean | cdktf.IResolvable) {
    this._includeVmMemoryOverhead = value;
  }
  public resetIncludeVmMemoryOverhead() {
    this._includeVmMemoryOverhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVmMemoryOverheadInput() {
    return this._includeVmMemoryOverhead;
  }

  // memory_allocated - computed: false, optional: true, required: false
  private _memoryAllocated?: number; 
  public get memoryAllocated() {
    return this.getNumberAttribute('memory_allocated');
  }
  public set memoryAllocated(value: number) {
    this._memoryAllocated = value;
  }
  public resetMemoryAllocated() {
    this._memoryAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryAllocatedInput() {
    return this._memoryAllocated;
  }

  // memory_guaranteed - computed: false, optional: true, required: false
  private _memoryGuaranteed?: number; 
  public get memoryGuaranteed() {
    return this.getNumberAttribute('memory_guaranteed');
  }
  public set memoryGuaranteed(value: number) {
    this._memoryGuaranteed = value;
  }
  public resetMemoryGuaranteed() {
    this._memoryGuaranteed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGuaranteedInput() {
    return this._memoryGuaranteed;
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
}
export interface OrgVdcTemplateEdgeGatewayStaticIpPool {
  /**
  * End address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#end_address OrgVdcTemplate#end_address}
  */
  readonly endAddress: string;
  /**
  * Start address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#start_address OrgVdcTemplate#start_address}
  */
  readonly startAddress: string;
}

export function orgVdcTemplateEdgeGatewayStaticIpPoolToTerraform(struct?: OrgVdcTemplateEdgeGatewayStaticIpPoolOutputReference | OrgVdcTemplateEdgeGatewayStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function orgVdcTemplateEdgeGatewayStaticIpPoolToHclTerraform(struct?: OrgVdcTemplateEdgeGatewayStaticIpPoolOutputReference | OrgVdcTemplateEdgeGatewayStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcTemplateEdgeGatewayStaticIpPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVdcTemplateEdgeGatewayStaticIpPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcTemplateEdgeGatewayStaticIpPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}
export interface OrgVdcTemplateEdgeGateway {
  /**
  * Description of the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#description OrgVdcTemplate#description}
  */
  readonly description?: string;
  /**
  * Allocated IPs for the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#ip_allocation_count OrgVdcTemplate#ip_allocation_count}
  */
  readonly ipAllocationCount?: number;
  /**
  * Name of the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#name OrgVdcTemplate#name}
  */
  readonly name: string;
  /**
  * Description of the routed network to create with the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#routed_network_description OrgVdcTemplate#routed_network_description}
  */
  readonly routedNetworkDescription?: string;
  /**
  * CIDR of the Edge Gateway for the created routed network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#routed_network_gateway_cidr OrgVdcTemplate#routed_network_gateway_cidr}
  */
  readonly routedNetworkGatewayCidr: string;
  /**
  * Name of the routed network to create with the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#routed_network_name OrgVdcTemplate#routed_network_name}
  */
  readonly routedNetworkName: string;
  /**
  * static_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#static_ip_pool OrgVdcTemplate#static_ip_pool}
  */
  readonly staticIpPool?: OrgVdcTemplateEdgeGatewayStaticIpPool;
}

export function orgVdcTemplateEdgeGatewayToTerraform(struct?: OrgVdcTemplateEdgeGatewayOutputReference | OrgVdcTemplateEdgeGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ip_allocation_count: cdktf.numberToTerraform(struct!.ipAllocationCount),
    name: cdktf.stringToTerraform(struct!.name),
    routed_network_description: cdktf.stringToTerraform(struct!.routedNetworkDescription),
    routed_network_gateway_cidr: cdktf.stringToTerraform(struct!.routedNetworkGatewayCidr),
    routed_network_name: cdktf.stringToTerraform(struct!.routedNetworkName),
    static_ip_pool: orgVdcTemplateEdgeGatewayStaticIpPoolToTerraform(struct!.staticIpPool),
  }
}


export function orgVdcTemplateEdgeGatewayToHclTerraform(struct?: OrgVdcTemplateEdgeGatewayOutputReference | OrgVdcTemplateEdgeGateway): any {
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
    ip_allocation_count: {
      value: cdktf.numberToHclTerraform(struct!.ipAllocationCount),
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
    routed_network_description: {
      value: cdktf.stringToHclTerraform(struct!.routedNetworkDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routed_network_gateway_cidr: {
      value: cdktf.stringToHclTerraform(struct!.routedNetworkGatewayCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routed_network_name: {
      value: cdktf.stringToHclTerraform(struct!.routedNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip_pool: {
      value: orgVdcTemplateEdgeGatewayStaticIpPoolToHclTerraform(struct!.staticIpPool),
      isBlock: true,
      type: "set",
      storageClassType: "OrgVdcTemplateEdgeGatewayStaticIpPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcTemplateEdgeGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVdcTemplateEdgeGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ipAllocationCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocationCount = this._ipAllocationCount;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._routedNetworkDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.routedNetworkDescription = this._routedNetworkDescription;
    }
    if (this._routedNetworkGatewayCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.routedNetworkGatewayCidr = this._routedNetworkGatewayCidr;
    }
    if (this._routedNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routedNetworkName = this._routedNetworkName;
    }
    if (this._staticIpPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpPool = this._staticIpPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcTemplateEdgeGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._ipAllocationCount = undefined;
      this._name = undefined;
      this._routedNetworkDescription = undefined;
      this._routedNetworkGatewayCidr = undefined;
      this._routedNetworkName = undefined;
      this._staticIpPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._ipAllocationCount = value.ipAllocationCount;
      this._name = value.name;
      this._routedNetworkDescription = value.routedNetworkDescription;
      this._routedNetworkGatewayCidr = value.routedNetworkGatewayCidr;
      this._routedNetworkName = value.routedNetworkName;
      this._staticIpPool.internalValue = value.staticIpPool;
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

  // ip_allocation_count - computed: false, optional: true, required: false
  private _ipAllocationCount?: number; 
  public get ipAllocationCount() {
    return this.getNumberAttribute('ip_allocation_count');
  }
  public set ipAllocationCount(value: number) {
    this._ipAllocationCount = value;
  }
  public resetIpAllocationCount() {
    this._ipAllocationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationCountInput() {
    return this._ipAllocationCount;
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

  // routed_network_description - computed: false, optional: true, required: false
  private _routedNetworkDescription?: string; 
  public get routedNetworkDescription() {
    return this.getStringAttribute('routed_network_description');
  }
  public set routedNetworkDescription(value: string) {
    this._routedNetworkDescription = value;
  }
  public resetRoutedNetworkDescription() {
    this._routedNetworkDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedNetworkDescriptionInput() {
    return this._routedNetworkDescription;
  }

  // routed_network_gateway_cidr - computed: false, optional: false, required: true
  private _routedNetworkGatewayCidr?: string; 
  public get routedNetworkGatewayCidr() {
    return this.getStringAttribute('routed_network_gateway_cidr');
  }
  public set routedNetworkGatewayCidr(value: string) {
    this._routedNetworkGatewayCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routedNetworkGatewayCidrInput() {
    return this._routedNetworkGatewayCidr;
  }

  // routed_network_name - computed: false, optional: false, required: true
  private _routedNetworkName?: string; 
  public get routedNetworkName() {
    return this.getStringAttribute('routed_network_name');
  }
  public set routedNetworkName(value: string) {
    this._routedNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routedNetworkNameInput() {
    return this._routedNetworkName;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool = new OrgVdcTemplateEdgeGatewayStaticIpPoolOutputReference(this, "static_ip_pool");
  public get staticIpPool() {
    return this._staticIpPool;
  }
  public putStaticIpPool(value: OrgVdcTemplateEdgeGatewayStaticIpPool) {
    this._staticIpPool.internalValue = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool.internalValue;
  }
}
export interface OrgVdcTemplateProviderVdc {
  /**
  * ID of the External network that the VDCs instantiated from this template will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#external_network_id OrgVdcTemplate#external_network_id}
  */
  readonly externalNetworkId: string;
  /**
  * ID of the Edge Cluster that the VDCs instantiated from this template will use with the Edge Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#gateway_edge_cluster_id OrgVdcTemplate#gateway_edge_cluster_id}
  */
  readonly gatewayEdgeClusterId?: string;
  /**
  * ID of Provider VDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#id OrgVdcTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * ID of the Edge Cluster that the VDCs instantiated from this template will use for services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#services_edge_cluster_id OrgVdcTemplate#services_edge_cluster_id}
  */
  readonly servicesEdgeClusterId?: string;
}

export function orgVdcTemplateProviderVdcToTerraform(struct?: OrgVdcTemplateProviderVdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_network_id: cdktf.stringToTerraform(struct!.externalNetworkId),
    gateway_edge_cluster_id: cdktf.stringToTerraform(struct!.gatewayEdgeClusterId),
    id: cdktf.stringToTerraform(struct!.id),
    services_edge_cluster_id: cdktf.stringToTerraform(struct!.servicesEdgeClusterId),
  }
}


export function orgVdcTemplateProviderVdcToHclTerraform(struct?: OrgVdcTemplateProviderVdc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_network_id: {
      value: cdktf.stringToHclTerraform(struct!.externalNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_edge_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.gatewayEdgeClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_edge_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.servicesEdgeClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcTemplateProviderVdcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgVdcTemplateProviderVdc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNetworkId = this._externalNetworkId;
    }
    if (this._gatewayEdgeClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayEdgeClusterId = this._gatewayEdgeClusterId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._servicesEdgeClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesEdgeClusterId = this._servicesEdgeClusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcTemplateProviderVdc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalNetworkId = undefined;
      this._gatewayEdgeClusterId = undefined;
      this._id = undefined;
      this._servicesEdgeClusterId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalNetworkId = value.externalNetworkId;
      this._gatewayEdgeClusterId = value.gatewayEdgeClusterId;
      this._id = value.id;
      this._servicesEdgeClusterId = value.servicesEdgeClusterId;
    }
  }

  // external_network_id - computed: false, optional: false, required: true
  private _externalNetworkId?: string; 
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }
  public set externalNetworkId(value: string) {
    this._externalNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNetworkIdInput() {
    return this._externalNetworkId;
  }

  // gateway_edge_cluster_id - computed: false, optional: true, required: false
  private _gatewayEdgeClusterId?: string; 
  public get gatewayEdgeClusterId() {
    return this.getStringAttribute('gateway_edge_cluster_id');
  }
  public set gatewayEdgeClusterId(value: string) {
    this._gatewayEdgeClusterId = value;
  }
  public resetGatewayEdgeClusterId() {
    this._gatewayEdgeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayEdgeClusterIdInput() {
    return this._gatewayEdgeClusterId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // services_edge_cluster_id - computed: false, optional: true, required: false
  private _servicesEdgeClusterId?: string; 
  public get servicesEdgeClusterId() {
    return this.getStringAttribute('services_edge_cluster_id');
  }
  public set servicesEdgeClusterId(value: string) {
    this._servicesEdgeClusterId = value;
  }
  public resetServicesEdgeClusterId() {
    this._servicesEdgeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesEdgeClusterIdInput() {
    return this._servicesEdgeClusterId;
  }
}

export class OrgVdcTemplateProviderVdcList extends cdktf.ComplexList {
  public internalValue? : OrgVdcTemplateProviderVdc[] | cdktf.IResolvable

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
  public get(index: number): OrgVdcTemplateProviderVdcOutputReference {
    return new OrgVdcTemplateProviderVdcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgVdcTemplateStorageProfile {
  /**
  * True if this is default storage profile for the VDCs instantiated from this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#default OrgVdcTemplate#default}
  */
  readonly default: boolean | cdktf.IResolvable;
  /**
  * Storage limit for the VDCs instantiated from this template, in Megabytes. 0 means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#limit OrgVdcTemplate#limit}
  */
  readonly limit: number;
  /**
  * Name of Provider VDC storage profile to use for the VDCs instantiated from this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#name OrgVdcTemplate#name}
  */
  readonly name: string;
}

export function orgVdcTemplateStorageProfileToTerraform(struct?: OrgVdcTemplateStorageProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function orgVdcTemplateStorageProfileToHclTerraform(struct?: OrgVdcTemplateStorageProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcTemplateStorageProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgVdcTemplateStorageProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcTemplateStorageProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._limit = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._limit = value.limit;
      this._name = value.name;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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
}

export class OrgVdcTemplateStorageProfileList extends cdktf.ComplexList {
  public internalValue? : OrgVdcTemplateStorageProfile[] | cdktf.IResolvable

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
  public get(index: number): OrgVdcTemplateStorageProfileOutputReference {
    return new OrgVdcTemplateStorageProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template vcd_org_vdc_template}
*/
export class OrgVdcTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_vdc_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgVdcTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgVdcTemplate to import
  * @param importFromId The id of the existing OrgVdcTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgVdcTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_vdc_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc_template vcd_org_vdc_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgVdcTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: OrgVdcTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_vdc_template',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationModel = config.allocationModel;
    this._description = config.description;
    this._enableFastProvisioning = config.enableFastProvisioning;
    this._enableThinProvisioning = config.enableThinProvisioning;
    this._id = config.id;
    this._name = config.name;
    this._networkPoolId = config.networkPoolId;
    this._nicQuota = config.nicQuota;
    this._provisionedNetworkQuota = config.provisionedNetworkQuota;
    this._readableByOrgIds = config.readableByOrgIds;
    this._tenantDescription = config.tenantDescription;
    this._tenantName = config.tenantName;
    this._vmQuota = config.vmQuota;
    this._computeConfiguration.internalValue = config.computeConfiguration;
    this._edgeGateway.internalValue = config.edgeGateway;
    this._providerVdc.internalValue = config.providerVdc;
    this._storageProfile.internalValue = config.storageProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_model - computed: false, optional: false, required: true
  private _allocationModel?: string; 
  public get allocationModel() {
    return this.getStringAttribute('allocation_model');
  }
  public set allocationModel(value: string) {
    this._allocationModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationModelInput() {
    return this._allocationModel;
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

  // enable_fast_provisioning - computed: false, optional: true, required: false
  private _enableFastProvisioning?: boolean | cdktf.IResolvable; 
  public get enableFastProvisioning() {
    return this.getBooleanAttribute('enable_fast_provisioning');
  }
  public set enableFastProvisioning(value: boolean | cdktf.IResolvable) {
    this._enableFastProvisioning = value;
  }
  public resetEnableFastProvisioning() {
    this._enableFastProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFastProvisioningInput() {
    return this._enableFastProvisioning;
  }

  // enable_thin_provisioning - computed: false, optional: true, required: false
  private _enableThinProvisioning?: boolean | cdktf.IResolvable; 
  public get enableThinProvisioning() {
    return this.getBooleanAttribute('enable_thin_provisioning');
  }
  public set enableThinProvisioning(value: boolean | cdktf.IResolvable) {
    this._enableThinProvisioning = value;
  }
  public resetEnableThinProvisioning() {
    this._enableThinProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThinProvisioningInput() {
    return this._enableThinProvisioning;
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

  // network_pool_id - computed: false, optional: true, required: false
  private _networkPoolId?: string; 
  public get networkPoolId() {
    return this.getStringAttribute('network_pool_id');
  }
  public set networkPoolId(value: string) {
    this._networkPoolId = value;
  }
  public resetNetworkPoolId() {
    this._networkPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoolIdInput() {
    return this._networkPoolId;
  }

  // nic_quota - computed: false, optional: true, required: false
  private _nicQuota?: number; 
  public get nicQuota() {
    return this.getNumberAttribute('nic_quota');
  }
  public set nicQuota(value: number) {
    this._nicQuota = value;
  }
  public resetNicQuota() {
    this._nicQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicQuotaInput() {
    return this._nicQuota;
  }

  // provisioned_network_quota - computed: false, optional: true, required: false
  private _provisionedNetworkQuota?: number; 
  public get provisionedNetworkQuota() {
    return this.getNumberAttribute('provisioned_network_quota');
  }
  public set provisionedNetworkQuota(value: number) {
    this._provisionedNetworkQuota = value;
  }
  public resetProvisionedNetworkQuota() {
    this._provisionedNetworkQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedNetworkQuotaInput() {
    return this._provisionedNetworkQuota;
  }

  // readable_by_org_ids - computed: false, optional: true, required: false
  private _readableByOrgIds?: string[]; 
  public get readableByOrgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('readable_by_org_ids'));
  }
  public set readableByOrgIds(value: string[]) {
    this._readableByOrgIds = value;
  }
  public resetReadableByOrgIds() {
    this._readableByOrgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readableByOrgIdsInput() {
    return this._readableByOrgIds;
  }

  // tenant_description - computed: false, optional: true, required: false
  private _tenantDescription?: string; 
  public get tenantDescription() {
    return this.getStringAttribute('tenant_description');
  }
  public set tenantDescription(value: string) {
    this._tenantDescription = value;
  }
  public resetTenantDescription() {
    this._tenantDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDescriptionInput() {
    return this._tenantDescription;
  }

  // tenant_name - computed: false, optional: false, required: true
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // vm_quota - computed: false, optional: true, required: false
  private _vmQuota?: number; 
  public get vmQuota() {
    return this.getNumberAttribute('vm_quota');
  }
  public set vmQuota(value: number) {
    this._vmQuota = value;
  }
  public resetVmQuota() {
    this._vmQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmQuotaInput() {
    return this._vmQuota;
  }

  // compute_configuration - computed: false, optional: false, required: true
  private _computeConfiguration = new OrgVdcTemplateComputeConfigurationOutputReference(this, "compute_configuration");
  public get computeConfiguration() {
    return this._computeConfiguration;
  }
  public putComputeConfiguration(value: OrgVdcTemplateComputeConfiguration) {
    this._computeConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeConfigurationInput() {
    return this._computeConfiguration.internalValue;
  }

  // edge_gateway - computed: false, optional: true, required: false
  private _edgeGateway = new OrgVdcTemplateEdgeGatewayOutputReference(this, "edge_gateway");
  public get edgeGateway() {
    return this._edgeGateway;
  }
  public putEdgeGateway(value: OrgVdcTemplateEdgeGateway) {
    this._edgeGateway.internalValue = value;
  }
  public resetEdgeGateway() {
    this._edgeGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway.internalValue;
  }

  // provider_vdc - computed: false, optional: false, required: true
  private _providerVdc = new OrgVdcTemplateProviderVdcList(this, "provider_vdc", true);
  public get providerVdc() {
    return this._providerVdc;
  }
  public putProviderVdc(value: OrgVdcTemplateProviderVdc[] | cdktf.IResolvable) {
    this._providerVdc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVdcInput() {
    return this._providerVdc.internalValue;
  }

  // storage_profile - computed: false, optional: false, required: true
  private _storageProfile = new OrgVdcTemplateStorageProfileList(this, "storage_profile", true);
  public get storageProfile() {
    return this._storageProfile;
  }
  public putStorageProfile(value: OrgVdcTemplateStorageProfile[] | cdktf.IResolvable) {
    this._storageProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_model: cdktf.stringToTerraform(this._allocationModel),
      description: cdktf.stringToTerraform(this._description),
      enable_fast_provisioning: cdktf.booleanToTerraform(this._enableFastProvisioning),
      enable_thin_provisioning: cdktf.booleanToTerraform(this._enableThinProvisioning),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_pool_id: cdktf.stringToTerraform(this._networkPoolId),
      nic_quota: cdktf.numberToTerraform(this._nicQuota),
      provisioned_network_quota: cdktf.numberToTerraform(this._provisionedNetworkQuota),
      readable_by_org_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readableByOrgIds),
      tenant_description: cdktf.stringToTerraform(this._tenantDescription),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      vm_quota: cdktf.numberToTerraform(this._vmQuota),
      compute_configuration: orgVdcTemplateComputeConfigurationToTerraform(this._computeConfiguration.internalValue),
      edge_gateway: orgVdcTemplateEdgeGatewayToTerraform(this._edgeGateway.internalValue),
      provider_vdc: cdktf.listMapper(orgVdcTemplateProviderVdcToTerraform, true)(this._providerVdc.internalValue),
      storage_profile: cdktf.listMapper(orgVdcTemplateStorageProfileToTerraform, true)(this._storageProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_model: {
        value: cdktf.stringToHclTerraform(this._allocationModel),
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
      enable_fast_provisioning: {
        value: cdktf.booleanToHclTerraform(this._enableFastProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_thin_provisioning: {
        value: cdktf.booleanToHclTerraform(this._enableThinProvisioning),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_pool_id: {
        value: cdktf.stringToHclTerraform(this._networkPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nic_quota: {
        value: cdktf.numberToHclTerraform(this._nicQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provisioned_network_quota: {
        value: cdktf.numberToHclTerraform(this._provisionedNetworkQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      readable_by_org_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readableByOrgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_description: {
        value: cdktf.stringToHclTerraform(this._tenantDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_quota: {
        value: cdktf.numberToHclTerraform(this._vmQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_configuration: {
        value: orgVdcTemplateComputeConfigurationToHclTerraform(this._computeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgVdcTemplateComputeConfigurationList",
      },
      edge_gateway: {
        value: orgVdcTemplateEdgeGatewayToHclTerraform(this._edgeGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgVdcTemplateEdgeGatewayList",
      },
      provider_vdc: {
        value: cdktf.listMapperHcl(orgVdcTemplateProviderVdcToHclTerraform, true)(this._providerVdc.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgVdcTemplateProviderVdcList",
      },
      storage_profile: {
        value: cdktf.listMapperHcl(orgVdcTemplateStorageProfileToHclTerraform, true)(this._storageProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgVdcTemplateStorageProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
