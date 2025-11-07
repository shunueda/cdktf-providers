// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdNsxtNetworkImportedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#id DataVcdNsxtNetworkImported#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique name for this network (optional if 'filter' is used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#name DataVcdNsxtNetworkImported#name}
  */
  readonly name?: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#org DataVcdNsxtNetworkImported#org}
  */
  readonly org?: string;
  /**
  * ID of VDC or VDC Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#owner_id DataVcdNsxtNetworkImported#owner_id}
  */
  readonly ownerId?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#vdc DataVcdNsxtNetworkImported#vdc}
  */
  readonly vdc?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#filter DataVcdNsxtNetworkImported#filter}
  */
  readonly filter?: DataVcdNsxtNetworkImportedFilter;
}
export interface DataVcdNsxtNetworkImportedSecondaryStaticIpPool {
}

export function dataVcdNsxtNetworkImportedSecondaryStaticIpPoolToTerraform(struct?: DataVcdNsxtNetworkImportedSecondaryStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtNetworkImportedSecondaryStaticIpPoolToHclTerraform(struct?: DataVcdNsxtNetworkImportedSecondaryStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtNetworkImportedSecondaryStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtNetworkImportedSecondaryStaticIpPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtNetworkImportedSecondaryStaticIpPool | undefined) {
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

export class DataVcdNsxtNetworkImportedSecondaryStaticIpPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtNetworkImportedSecondaryStaticIpPoolOutputReference {
    return new DataVcdNsxtNetworkImportedSecondaryStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtNetworkImportedStaticIpPool {
}

export function dataVcdNsxtNetworkImportedStaticIpPoolToTerraform(struct?: DataVcdNsxtNetworkImportedStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdNsxtNetworkImportedStaticIpPoolToHclTerraform(struct?: DataVcdNsxtNetworkImportedStaticIpPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdNsxtNetworkImportedStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdNsxtNetworkImportedStaticIpPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtNetworkImportedStaticIpPool | undefined) {
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

export class DataVcdNsxtNetworkImportedStaticIpPoolList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdNsxtNetworkImportedStaticIpPoolOutputReference {
    return new DataVcdNsxtNetworkImportedStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdNsxtNetworkImportedFilter {
  /**
  * Search by IP. The value can be a regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#ip DataVcdNsxtNetworkImported#ip}
  */
  readonly ip?: string;
  /**
  * Search by name with a regular expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#name_regex DataVcdNsxtNetworkImported#name_regex}
  */
  readonly nameRegex?: string;
}

export function dataVcdNsxtNetworkImportedFilterToTerraform(struct?: DataVcdNsxtNetworkImportedFilterOutputReference | DataVcdNsxtNetworkImportedFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    name_regex: cdktf.stringToTerraform(struct!.nameRegex),
  }
}


export function dataVcdNsxtNetworkImportedFilterToHclTerraform(struct?: DataVcdNsxtNetworkImportedFilterOutputReference | DataVcdNsxtNetworkImportedFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVcdNsxtNetworkImportedFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataVcdNsxtNetworkImportedFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._nameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegex = this._nameRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdNsxtNetworkImportedFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._nameRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._nameRegex = value.nameRegex;
    }
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported vcd_nsxt_network_imported}
*/
export class DataVcdNsxtNetworkImported extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_network_imported";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdNsxtNetworkImported resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdNsxtNetworkImported to import
  * @param importFromId The id of the existing DataVcdNsxtNetworkImported that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdNsxtNetworkImported to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_network_imported", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/nsxt_network_imported vcd_nsxt_network_imported} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdNsxtNetworkImportedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVcdNsxtNetworkImportedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_network_imported',
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
    this._org = config.org;
    this._ownerId = config.ownerId;
    this._vdc = config.vdc;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns1 - computed: true, optional: false, required: false
  public get dns1() {
    return this.getStringAttribute('dns1');
  }

  // dns2 - computed: true, optional: false, required: false
  public get dns2() {
    return this.getStringAttribute('dns2');
  }

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }

  // dual_stack_enabled - computed: true, optional: false, required: false
  public get dualStackEnabled() {
    return this.getBooleanAttribute('dual_stack_enabled');
  }

  // dvpg_id - computed: true, optional: false, required: false
  public get dvpgId() {
    return this.getStringAttribute('dvpg_id');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
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

  // nsxt_logical_switch_id - computed: true, optional: false, required: false
  public get nsxtLogicalSwitchId() {
    return this.getStringAttribute('nsxt_logical_switch_id');
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // owner_id - computed: true, optional: true, required: false
  private _ownerId?: string; 
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }
  public set ownerId(value: string) {
    this._ownerId = value;
  }
  public resetOwnerId() {
    this._ownerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdInput() {
    return this._ownerId;
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // secondary_gateway - computed: true, optional: false, required: false
  public get secondaryGateway() {
    return this.getStringAttribute('secondary_gateway');
  }

  // secondary_prefix_length - computed: true, optional: false, required: false
  public get secondaryPrefixLength() {
    return this.getStringAttribute('secondary_prefix_length');
  }

  // secondary_static_ip_pool - computed: true, optional: false, required: false
  private _secondaryStaticIpPool = new DataVcdNsxtNetworkImportedSecondaryStaticIpPoolList(this, "secondary_static_ip_pool", true);
  public get secondaryStaticIpPool() {
    return this._secondaryStaticIpPool;
  }

  // static_ip_pool - computed: true, optional: false, required: false
  private _staticIpPool = new DataVcdNsxtNetworkImportedStaticIpPoolList(this, "static_ip_pool", true);
  public get staticIpPool() {
    return this._staticIpPool;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataVcdNsxtNetworkImportedFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataVcdNsxtNetworkImportedFilter) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      owner_id: cdktf.stringToTerraform(this._ownerId),
      vdc: cdktf.stringToTerraform(this._vdc),
      filter: dataVcdNsxtNetworkImportedFilterToTerraform(this._filter.internalValue),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_id: {
        value: cdktf.stringToHclTerraform(this._ownerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataVcdNsxtNetworkImportedFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataVcdNsxtNetworkImportedFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
