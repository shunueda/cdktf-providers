// https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataXenorchestraVmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms#host DataXenorchestraVms#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms#id DataXenorchestraVms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the pool the VM belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms#pool_id DataXenorchestraVms#pool_id}
  */
  readonly poolId: string;
  /**
  * The power state of the vms. (Running, Halted)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms#power_state DataXenorchestraVms#power_state}
  */
  readonly powerState?: string;
}
export interface DataXenorchestraVmsVmsDisk {
}

export function dataXenorchestraVmsVmsDiskToTerraform(struct?: DataXenorchestraVmsVmsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXenorchestraVmsVmsDiskToHclTerraform(struct?: DataXenorchestraVmsVmsDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXenorchestraVmsVmsDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataXenorchestraVmsVmsDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXenorchestraVmsVmsDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // name_description - computed: true, optional: false, required: false
  public get nameDescription() {
    return this.getStringAttribute('name_description');
  }

  // name_label - computed: true, optional: false, required: false
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // sr_id - computed: true, optional: false, required: false
  public get srId() {
    return this.getStringAttribute('sr_id');
  }

  // vbd_id - computed: true, optional: false, required: false
  public get vbdId() {
    return this.getStringAttribute('vbd_id');
  }

  // vdi_id - computed: true, optional: false, required: false
  public get vdiId() {
    return this.getStringAttribute('vdi_id');
  }
}

export class DataXenorchestraVmsVmsDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataXenorchestraVmsVmsDiskOutputReference {
    return new DataXenorchestraVmsVmsDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataXenorchestraVmsVmsNetwork {
}

export function dataXenorchestraVmsVmsNetworkToTerraform(struct?: DataXenorchestraVmsVmsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXenorchestraVmsVmsNetworkToHclTerraform(struct?: DataXenorchestraVmsVmsNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXenorchestraVmsVmsNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataXenorchestraVmsVmsNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXenorchestraVmsVmsNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached - computed: true, optional: false, required: false
  public get attached() {
    return this.getBooleanAttribute('attached');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv4_addresses');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
}

export class DataXenorchestraVmsVmsNetworkList extends cdktf.ComplexList {

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
  public get(index: number): DataXenorchestraVmsVmsNetworkOutputReference {
    return new DataXenorchestraVmsVmsNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataXenorchestraVmsVms {
}

export function dataXenorchestraVmsVmsToTerraform(struct?: DataXenorchestraVmsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataXenorchestraVmsVmsToHclTerraform(struct?: DataXenorchestraVmsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataXenorchestraVmsVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataXenorchestraVmsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataXenorchestraVmsVms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // affinity_host - computed: true, optional: false, required: false
  public get affinityHost() {
    return this.getStringAttribute('affinity_host');
  }

  // auto_poweron - computed: true, optional: false, required: false
  public get autoPoweron() {
    return this.getBooleanAttribute('auto_poweron');
  }

  // blocked_operations - computed: true, optional: false, required: false
  public get blockedOperations() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_operations'));
  }

  // cloud_config - computed: true, optional: false, required: false
  public get cloudConfig() {
    return this.getStringAttribute('cloud_config');
  }

  // cloud_network_config - computed: true, optional: false, required: false
  public get cloudNetworkConfig() {
    return this.getStringAttribute('cloud_network_config');
  }

  // core_os - computed: true, optional: false, required: false
  public get coreOs() {
    return this.getBooleanAttribute('core_os');
  }

  // cpu_cap - computed: true, optional: false, required: false
  public get cpuCap() {
    return this.getNumberAttribute('cpu_cap');
  }

  // cpu_weight - computed: true, optional: false, required: false
  public get cpuWeight() {
    return this.getNumberAttribute('cpu_weight');
  }

  // cpus - computed: true, optional: false, required: false
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }

  // disk - computed: true, optional: false, required: false
  private _disk = new DataXenorchestraVmsVmsDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }

  // exp_nested_hvm - computed: true, optional: false, required: false
  public get expNestedHvm() {
    return this.getBooleanAttribute('exp_nested_hvm');
  }

  // high_availability - computed: true, optional: false, required: false
  public get highAvailability() {
    return this.getStringAttribute('high_availability');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // hvm_boot_firmware - computed: true, optional: false, required: false
  public get hvmBootFirmware() {
    return this.getStringAttribute('hvm_boot_firmware');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return this.getListAttribute('ipv4_addresses');
  }

  // ipv6_addresses - computed: true, optional: false, required: false
  public get ipv6Addresses() {
    return this.getListAttribute('ipv6_addresses');
  }

  // memory_max - computed: true, optional: false, required: false
  public get memoryMax() {
    return this.getNumberAttribute('memory_max');
  }

  // name_description - computed: true, optional: false, required: false
  public get nameDescription() {
    return this.getStringAttribute('name_description');
  }

  // name_label - computed: true, optional: false, required: false
  public get nameLabel() {
    return this.getStringAttribute('name_label');
  }

  // network - computed: true, optional: false, required: false
  private _network = new DataXenorchestraVmsVmsNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }

  // power_state - computed: true, optional: false, required: false
  public get powerState() {
    return this.getStringAttribute('power_state');
  }

  // resource_set - computed: true, optional: false, required: false
  public get resourceSet() {
    return this.getStringAttribute('resource_set');
  }

  // start_delay - computed: true, optional: false, required: false
  public get startDelay() {
    return this.getNumberAttribute('start_delay');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // vga - computed: true, optional: false, required: false
  public get vga() {
    return this.getStringAttribute('vga');
  }

  // videoram - computed: true, optional: false, required: false
  public get videoram() {
    return this.getNumberAttribute('videoram');
  }

  // wait_for_ip - computed: true, optional: false, required: false
  public get waitForIp() {
    return this.getBooleanAttribute('wait_for_ip');
  }
}

export class DataXenorchestraVmsVmsList extends cdktf.ComplexList {

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
  public get(index: number): DataXenorchestraVmsVmsOutputReference {
    return new DataXenorchestraVmsVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms xenorchestra_vms}
*/
export class DataXenorchestraVms extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "xenorchestra_vms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataXenorchestraVms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataXenorchestraVms to import
  * @param importFromId The id of the existing DataXenorchestraVms that should be imported. Refer to the {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataXenorchestraVms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "xenorchestra_vms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terra-farm/xenorchestra/0.26.1/docs/data-sources/vms xenorchestra_vms} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataXenorchestraVmsConfig
  */
  public constructor(scope: Construct, id: string, config: DataXenorchestraVmsConfig) {
    super(scope, id, {
      terraformResourceType: 'xenorchestra_vms',
      terraformGeneratorMetadata: {
        providerName: 'xenorchestra',
        providerVersion: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._id = config.id;
    this._poolId = config.poolId;
    this._powerState = config.powerState;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // pool_id - computed: false, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
  }

  // vms - computed: true, optional: false, required: false
  private _vms = new DataXenorchestraVmsVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      pool_id: cdktf.stringToTerraform(this._poolId),
      power_state: cdktf.stringToTerraform(this._powerState),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_state: {
        value: cdktf.stringToHclTerraform(this._powerState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
