// https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHivelocityBareMetalDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#device_id DataHivelocityBareMetalDevice#device_id}
  */
  readonly deviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#first DataHivelocityBareMetalDevice#first}
  */
  readonly first?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#hostname DataHivelocityBareMetalDevice#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#id DataHivelocityBareMetalDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#last_updated DataHivelocityBareMetalDevice#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#location_name DataHivelocityBareMetalDevice#location_name}
  */
  readonly locationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#order_id DataHivelocityBareMetalDevice#order_id}
  */
  readonly orderId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#os_name DataHivelocityBareMetalDevice#os_name}
  */
  readonly osName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#period DataHivelocityBareMetalDevice#period}
  */
  readonly period?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#power_status DataHivelocityBareMetalDevice#power_status}
  */
  readonly powerStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#primary_ip DataHivelocityBareMetalDevice#primary_ip}
  */
  readonly primaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#product_id DataHivelocityBareMetalDevice#product_id}
  */
  readonly productId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#product_name DataHivelocityBareMetalDevice#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#public_ssh_key_id DataHivelocityBareMetalDevice#public_ssh_key_id}
  */
  readonly publicSshKeyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#script DataHivelocityBareMetalDevice#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#service_id DataHivelocityBareMetalDevice#service_id}
  */
  readonly serviceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#tags DataHivelocityBareMetalDevice#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#vlan_id DataHivelocityBareMetalDevice#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#filter DataHivelocityBareMetalDevice#filter}
  */
  readonly filter?: DataHivelocityBareMetalDeviceFilter[] | cdktf.IResolvable;
}
export interface DataHivelocityBareMetalDeviceFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#name DataHivelocityBareMetalDevice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#values DataHivelocityBareMetalDevice#values}
  */
  readonly values: string[];
}

export function dataHivelocityBareMetalDeviceFilterToTerraform(struct?: DataHivelocityBareMetalDeviceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataHivelocityBareMetalDeviceFilterToHclTerraform(struct?: DataHivelocityBareMetalDeviceFilter | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHivelocityBareMetalDeviceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHivelocityBareMetalDeviceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHivelocityBareMetalDeviceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataHivelocityBareMetalDeviceFilterList extends cdktf.ComplexList {
  public internalValue? : DataHivelocityBareMetalDeviceFilter[] | cdktf.IResolvable

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
  public get(index: number): DataHivelocityBareMetalDeviceFilterOutputReference {
    return new DataHivelocityBareMetalDeviceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device hivelocity_bare_metal_device}
*/
export class DataHivelocityBareMetalDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hivelocity_bare_metal_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHivelocityBareMetalDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHivelocityBareMetalDevice to import
  * @param importFromId The id of the existing DataHivelocityBareMetalDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHivelocityBareMetalDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hivelocity_bare_metal_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hivelocity/hivelocity/0.7.9/docs/data-sources/bare_metal_device hivelocity_bare_metal_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHivelocityBareMetalDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHivelocityBareMetalDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hivelocity_bare_metal_device',
      terraformGeneratorMetadata: {
        providerName: 'hivelocity',
        providerVersion: '0.7.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._first = config.first;
    this._hostname = config.hostname;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._locationName = config.locationName;
    this._orderId = config.orderId;
    this._osName = config.osName;
    this._period = config.period;
    this._powerStatus = config.powerStatus;
    this._primaryIp = config.primaryIp;
    this._productId = config.productId;
    this._productName = config.productName;
    this._publicSshKeyId = config.publicSshKeyId;
    this._script = config.script;
    this._serviceId = config.serviceId;
    this._tags = config.tags;
    this._vlanId = config.vlanId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // first - computed: false, optional: true, required: false
  private _first?: boolean | cdktf.IResolvable; 
  public get first() {
    return this.getBooleanAttribute('first');
  }
  public set first(value: boolean | cdktf.IResolvable) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // location_name - computed: true, optional: true, required: false
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  public resetLocationName() {
    this._locationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // order_id - computed: true, optional: true, required: false
  private _orderId?: number; 
  public get orderId() {
    return this.getNumberAttribute('order_id');
  }
  public set orderId(value: number) {
    this._orderId = value;
  }
  public resetOrderId() {
    this._orderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderIdInput() {
    return this._orderId;
  }

  // os_name - computed: true, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
  }

  // period - computed: true, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // power_status - computed: true, optional: true, required: false
  private _powerStatus?: string; 
  public get powerStatus() {
    return this.getStringAttribute('power_status');
  }
  public set powerStatus(value: string) {
    this._powerStatus = value;
  }
  public resetPowerStatus() {
    this._powerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStatusInput() {
    return this._powerStatus;
  }

  // primary_ip - computed: true, optional: true, required: false
  private _primaryIp?: string; 
  public get primaryIp() {
    return this.getStringAttribute('primary_ip');
  }
  public set primaryIp(value: string) {
    this._primaryIp = value;
  }
  public resetPrimaryIp() {
    this._primaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpInput() {
    return this._primaryIp;
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: number; 
  public get productId() {
    return this.getNumberAttribute('product_id');
  }
  public set productId(value: number) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // public_ssh_key_id - computed: false, optional: true, required: false
  private _publicSshKeyId?: number; 
  public get publicSshKeyId() {
    return this.getNumberAttribute('public_ssh_key_id');
  }
  public set publicSshKeyId(value: number) {
    this._publicSshKeyId = value;
  }
  public resetPublicSshKeyId() {
    this._publicSshKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicSshKeyIdInput() {
    return this._publicSshKeyId;
  }

  // script - computed: true, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataHivelocityBareMetalDeviceFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataHivelocityBareMetalDeviceFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.numberToTerraform(this._deviceId),
      first: cdktf.booleanToTerraform(this._first),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      location_name: cdktf.stringToTerraform(this._locationName),
      order_id: cdktf.numberToTerraform(this._orderId),
      os_name: cdktf.stringToTerraform(this._osName),
      period: cdktf.stringToTerraform(this._period),
      power_status: cdktf.stringToTerraform(this._powerStatus),
      primary_ip: cdktf.stringToTerraform(this._primaryIp),
      product_id: cdktf.numberToTerraform(this._productId),
      product_name: cdktf.stringToTerraform(this._productName),
      public_ssh_key_id: cdktf.numberToTerraform(this._publicSshKeyId),
      script: cdktf.stringToTerraform(this._script),
      service_id: cdktf.numberToTerraform(this._serviceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      filter: cdktf.listMapper(dataHivelocityBareMetalDeviceFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      first: {
        value: cdktf.booleanToHclTerraform(this._first),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_name: {
        value: cdktf.stringToHclTerraform(this._locationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_id: {
        value: cdktf.numberToHclTerraform(this._orderId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_status: {
        value: cdktf.stringToHclTerraform(this._powerStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_ip: {
        value: cdktf.stringToHclTerraform(this._primaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.numberToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ssh_key_id: {
        value: cdktf.numberToHclTerraform(this._publicSshKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.listMapperHcl(dataHivelocityBareMetalDeviceFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHivelocityBareMetalDeviceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
