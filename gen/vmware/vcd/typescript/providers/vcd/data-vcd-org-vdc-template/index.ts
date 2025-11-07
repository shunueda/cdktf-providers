// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org_vdc_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdOrgVdcTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org_vdc_template#id DataVcdOrgVdcTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the VDC Template as seen by the System administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org_vdc_template#name DataVcdOrgVdcTemplate#name}
  */
  readonly name: string;
}
export interface DataVcdOrgVdcTemplateComputeConfiguration {
}

export function dataVcdOrgVdcTemplateComputeConfigurationToTerraform(struct?: DataVcdOrgVdcTemplateComputeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgVdcTemplateComputeConfigurationToHclTerraform(struct?: DataVcdOrgVdcTemplateComputeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgVdcTemplateComputeConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgVdcTemplateComputeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgVdcTemplateComputeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_allocated - computed: true, optional: false, required: false
  public get cpuAllocated() {
    return this.getNumberAttribute('cpu_allocated');
  }

  // cpu_guaranteed - computed: true, optional: false, required: false
  public get cpuGuaranteed() {
    return this.getNumberAttribute('cpu_guaranteed');
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }

  // cpu_speed - computed: true, optional: false, required: false
  public get cpuSpeed() {
    return this.getNumberAttribute('cpu_speed');
  }

  // elasticity - computed: true, optional: false, required: false
  public get elasticity() {
    return this.getBooleanAttribute('elasticity');
  }

  // include_vm_memory_overhead - computed: true, optional: false, required: false
  public get includeVmMemoryOverhead() {
    return this.getBooleanAttribute('include_vm_memory_overhead');
  }

  // memory_allocated - computed: true, optional: false, required: false
  public get memoryAllocated() {
    return this.getNumberAttribute('memory_allocated');
  }

  // memory_guaranteed - computed: true, optional: false, required: false
  public get memoryGuaranteed() {
    return this.getNumberAttribute('memory_guaranteed');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
}

export class DataVcdOrgVdcTemplateComputeConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgVdcTemplateComputeConfigurationOutputReference {
    return new DataVcdOrgVdcTemplateComputeConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdOrgVdcTemplateEdgeGatewayStaticIpPool {
}

export function dataVcdOrgVdcTemplateEdgeGatewayStaticIpPoolToTerraform(struct?: DataVcdOrgVdcTemplateEdgeGatewayStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgVdcTemplateEdgeGatewayStaticIpPoolToHclTerraform(struct?: DataVcdOrgVdcTemplateEdgeGatewayStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgVdcTemplateEdgeGatewayStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgVdcTemplateEdgeGatewayStaticIpPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgVdcTemplateEdgeGatewayStaticIpPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_address - computed: true, optional: false, required: false
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }

  // start_address - computed: true, optional: false, required: false
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
}

export class DataVcdOrgVdcTemplateEdgeGatewayStaticIpPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgVdcTemplateEdgeGatewayStaticIpPoolOutputReference {
    return new DataVcdOrgVdcTemplateEdgeGatewayStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdOrgVdcTemplateEdgeGateway {
}

export function dataVcdOrgVdcTemplateEdgeGatewayToTerraform(struct?: DataVcdOrgVdcTemplateEdgeGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgVdcTemplateEdgeGatewayToHclTerraform(struct?: DataVcdOrgVdcTemplateEdgeGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgVdcTemplateEdgeGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgVdcTemplateEdgeGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgVdcTemplateEdgeGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // ip_allocation_count - computed: true, optional: false, required: false
  public get ipAllocationCount() {
    return this.getNumberAttribute('ip_allocation_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // routed_network_description - computed: true, optional: false, required: false
  public get routedNetworkDescription() {
    return this.getStringAttribute('routed_network_description');
  }

  // routed_network_gateway_cidr - computed: true, optional: false, required: false
  public get routedNetworkGatewayCidr() {
    return this.getStringAttribute('routed_network_gateway_cidr');
  }

  // routed_network_name - computed: true, optional: false, required: false
  public get routedNetworkName() {
    return this.getStringAttribute('routed_network_name');
  }

  // static_ip_pool - computed: true, optional: false, required: false
  private _staticIpPool = new DataVcdOrgVdcTemplateEdgeGatewayStaticIpPoolList(this, "static_ip_pool", true);
  public get staticIpPool() {
    return this._staticIpPool;
  }
}

export class DataVcdOrgVdcTemplateEdgeGatewayList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgVdcTemplateEdgeGatewayOutputReference {
    return new DataVcdOrgVdcTemplateEdgeGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdOrgVdcTemplateProviderVdc {
}

export function dataVcdOrgVdcTemplateProviderVdcToTerraform(struct?: DataVcdOrgVdcTemplateProviderVdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgVdcTemplateProviderVdcToHclTerraform(struct?: DataVcdOrgVdcTemplateProviderVdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgVdcTemplateProviderVdcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgVdcTemplateProviderVdc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgVdcTemplateProviderVdc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_network_id - computed: true, optional: false, required: false
  public get externalNetworkId() {
    return this.getStringAttribute('external_network_id');
  }

  // gateway_edge_cluster_id - computed: true, optional: false, required: false
  public get gatewayEdgeClusterId() {
    return this.getStringAttribute('gateway_edge_cluster_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // services_edge_cluster_id - computed: true, optional: false, required: false
  public get servicesEdgeClusterId() {
    return this.getStringAttribute('services_edge_cluster_id');
  }
}

export class DataVcdOrgVdcTemplateProviderVdcList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgVdcTemplateProviderVdcOutputReference {
    return new DataVcdOrgVdcTemplateProviderVdcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdOrgVdcTemplateStorageProfile {
}

export function dataVcdOrgVdcTemplateStorageProfileToTerraform(struct?: DataVcdOrgVdcTemplateStorageProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgVdcTemplateStorageProfileToHclTerraform(struct?: DataVcdOrgVdcTemplateStorageProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgVdcTemplateStorageProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgVdcTemplateStorageProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgVdcTemplateStorageProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataVcdOrgVdcTemplateStorageProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgVdcTemplateStorageProfileOutputReference {
    return new DataVcdOrgVdcTemplateStorageProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org_vdc_template vcd_org_vdc_template}
*/
export class DataVcdOrgVdcTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_vdc_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdOrgVdcTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdOrgVdcTemplate to import
  * @param importFromId The id of the existing DataVcdOrgVdcTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org_vdc_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdOrgVdcTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_vdc_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org_vdc_template vcd_org_vdc_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdOrgVdcTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdOrgVdcTemplateConfig) {
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_model - computed: true, optional: false, required: false
  public get allocationModel() {
    return this.getStringAttribute('allocation_model');
  }

  // compute_configuration - computed: true, optional: false, required: false
  private _computeConfiguration = new DataVcdOrgVdcTemplateComputeConfigurationList(this, "compute_configuration", false);
  public get computeConfiguration() {
    return this._computeConfiguration;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // edge_gateway - computed: true, optional: false, required: false
  private _edgeGateway = new DataVcdOrgVdcTemplateEdgeGatewayList(this, "edge_gateway", false);
  public get edgeGateway() {
    return this._edgeGateway;
  }

  // enable_fast_provisioning - computed: true, optional: false, required: false
  public get enableFastProvisioning() {
    return this.getBooleanAttribute('enable_fast_provisioning');
  }

  // enable_thin_provisioning - computed: true, optional: false, required: false
  public get enableThinProvisioning() {
    return this.getBooleanAttribute('enable_thin_provisioning');
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

  // network_pool_id - computed: true, optional: false, required: false
  public get networkPoolId() {
    return this.getStringAttribute('network_pool_id');
  }

  // nic_quota - computed: true, optional: false, required: false
  public get nicQuota() {
    return this.getNumberAttribute('nic_quota');
  }

  // provider_vdc - computed: true, optional: false, required: false
  private _providerVdc = new DataVcdOrgVdcTemplateProviderVdcList(this, "provider_vdc", true);
  public get providerVdc() {
    return this._providerVdc;
  }

  // provisioned_network_quota - computed: true, optional: false, required: false
  public get provisionedNetworkQuota() {
    return this.getNumberAttribute('provisioned_network_quota');
  }

  // readable_by_org_ids - computed: true, optional: false, required: false
  public get readableByOrgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('readable_by_org_ids'));
  }

  // storage_profile - computed: true, optional: false, required: false
  private _storageProfile = new DataVcdOrgVdcTemplateStorageProfileList(this, "storage_profile", true);
  public get storageProfile() {
    return this._storageProfile;
  }

  // tenant_description - computed: true, optional: false, required: false
  public get tenantDescription() {
    return this.getStringAttribute('tenant_description');
  }

  // tenant_name - computed: true, optional: false, required: false
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }

  // vm_quota - computed: true, optional: false, required: false
  public get vmQuota() {
    return this.getNumberAttribute('vm_quota');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
