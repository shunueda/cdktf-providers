// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSelectelDedicatedPublicSubnetV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1#id DataSelectelDedicatedPublicSubnetV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1#project_id DataSelectelDedicatedPublicSubnetV1#project_id}
  */
  readonly projectId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1#filter DataSelectelDedicatedPublicSubnetV1#filter}
  */
  readonly filter?: DataSelectelDedicatedPublicSubnetV1Filter;
}
export interface DataSelectelDedicatedPublicSubnetV1Subnets {
}

export function dataSelectelDedicatedPublicSubnetV1SubnetsToTerraform(struct?: DataSelectelDedicatedPublicSubnetV1Subnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSelectelDedicatedPublicSubnetV1SubnetsToHclTerraform(struct?: DataSelectelDedicatedPublicSubnetV1Subnets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSelectelDedicatedPublicSubnetV1SubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSelectelDedicatedPublicSubnetV1Subnets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelDedicatedPublicSubnetV1Subnets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast - computed: true, optional: false, required: false
  public get broadcast() {
    return this.getStringAttribute('broadcast');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // reserved_vrrp_ips - computed: true, optional: false, required: false
  public get reservedVrrpIps() {
    return this.getListAttribute('reserved_vrrp_ips');
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}

export class DataSelectelDedicatedPublicSubnetV1SubnetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSelectelDedicatedPublicSubnetV1SubnetsOutputReference {
    return new DataSelectelDedicatedPublicSubnetV1SubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSelectelDedicatedPublicSubnetV1Filter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1#ip DataSelectelDedicatedPublicSubnetV1#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1#location_id DataSelectelDedicatedPublicSubnetV1#location_id}
  */
  readonly locationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1#subnet DataSelectelDedicatedPublicSubnetV1#subnet}
  */
  readonly subnet?: string;
}

export function dataSelectelDedicatedPublicSubnetV1FilterToTerraform(struct?: DataSelectelDedicatedPublicSubnetV1FilterOutputReference | DataSelectelDedicatedPublicSubnetV1Filter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function dataSelectelDedicatedPublicSubnetV1FilterToHclTerraform(struct?: DataSelectelDedicatedPublicSubnetV1FilterOutputReference | DataSelectelDedicatedPublicSubnetV1Filter): any {
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
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
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

export class DataSelectelDedicatedPublicSubnetV1FilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSelectelDedicatedPublicSubnetV1Filter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSelectelDedicatedPublicSubnetV1Filter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._locationId = undefined;
      this._subnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._locationId = value.locationId;
      this._subnet = value.subnet;
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

  // location_id - computed: false, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
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

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1 selectel_dedicated_public_subnet_v1}
*/
export class DataSelectelDedicatedPublicSubnetV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_dedicated_public_subnet_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSelectelDedicatedPublicSubnetV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSelectelDedicatedPublicSubnetV1 to import
  * @param importFromId The id of the existing DataSelectelDedicatedPublicSubnetV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSelectelDedicatedPublicSubnetV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_dedicated_public_subnet_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/data-sources/dedicated_public_subnet_v1 selectel_dedicated_public_subnet_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSelectelDedicatedPublicSubnetV1Config
  */
  public constructor(scope: Construct, id: string, config: DataSelectelDedicatedPublicSubnetV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_dedicated_public_subnet_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
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
    this._projectId = config.projectId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // subnets - computed: true, optional: false, required: false
  private _subnets = new DataSelectelDedicatedPublicSubnetV1SubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataSelectelDedicatedPublicSubnetV1FilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSelectelDedicatedPublicSubnetV1Filter) {
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
      project_id: cdktf.stringToTerraform(this._projectId),
      filter: dataSelectelDedicatedPublicSubnetV1FilterToTerraform(this._filter.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataSelectelDedicatedPublicSubnetV1FilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSelectelDedicatedPublicSubnetV1FilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
