// https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_keyspace_mac
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetaddrRangeKeyspaceMacConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_keyspace_mac#id DataNetaddrRangeKeyspaceMac#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the address range to get the key space from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_keyspace_mac#range_id DataNetaddrRangeKeyspaceMac#range_id}
  */
  readonly rangeId: string;
}
export interface DataNetaddrRangeKeyspaceMacAddresses {
}

export function dataNetaddrRangeKeyspaceMacAddressesToTerraform(struct?: DataNetaddrRangeKeyspaceMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetaddrRangeKeyspaceMacAddressesToHclTerraform(struct?: DataNetaddrRangeKeyspaceMacAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetaddrRangeKeyspaceMacAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetaddrRangeKeyspaceMacAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetaddrRangeKeyspaceMacAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNetaddrRangeKeyspaceMacAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetaddrRangeKeyspaceMacAddressesOutputReference {
    return new DataNetaddrRangeKeyspaceMacAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetaddrRangeKeyspaceMacDeletedAddresses {
}

export function dataNetaddrRangeKeyspaceMacDeletedAddressesToTerraform(struct?: DataNetaddrRangeKeyspaceMacDeletedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetaddrRangeKeyspaceMacDeletedAddressesToHclTerraform(struct?: DataNetaddrRangeKeyspaceMacDeletedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetaddrRangeKeyspaceMacDeletedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetaddrRangeKeyspaceMacDeletedAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetaddrRangeKeyspaceMacDeletedAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNetaddrRangeKeyspaceMacDeletedAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetaddrRangeKeyspaceMacDeletedAddressesOutputReference {
    return new DataNetaddrRangeKeyspaceMacDeletedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetaddrRangeKeyspaceMacGeneratedAddresses {
}

export function dataNetaddrRangeKeyspaceMacGeneratedAddressesToTerraform(struct?: DataNetaddrRangeKeyspaceMacGeneratedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetaddrRangeKeyspaceMacGeneratedAddressesToHclTerraform(struct?: DataNetaddrRangeKeyspaceMacGeneratedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetaddrRangeKeyspaceMacGeneratedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetaddrRangeKeyspaceMacGeneratedAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetaddrRangeKeyspaceMacGeneratedAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNetaddrRangeKeyspaceMacGeneratedAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetaddrRangeKeyspaceMacGeneratedAddressesOutputReference {
    return new DataNetaddrRangeKeyspaceMacGeneratedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNetaddrRangeKeyspaceMacHardcodedAddresses {
}

export function dataNetaddrRangeKeyspaceMacHardcodedAddressesToTerraform(struct?: DataNetaddrRangeKeyspaceMacHardcodedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetaddrRangeKeyspaceMacHardcodedAddressesToHclTerraform(struct?: DataNetaddrRangeKeyspaceMacHardcodedAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetaddrRangeKeyspaceMacHardcodedAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetaddrRangeKeyspaceMacHardcodedAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetaddrRangeKeyspaceMacHardcodedAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataNetaddrRangeKeyspaceMacHardcodedAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataNetaddrRangeKeyspaceMacHardcodedAddressesOutputReference {
    return new DataNetaddrRangeKeyspaceMacHardcodedAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_keyspace_mac netaddr_range_keyspace_mac}
*/
export class DataNetaddrRangeKeyspaceMac extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netaddr_range_keyspace_mac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetaddrRangeKeyspaceMac resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetaddrRangeKeyspaceMac to import
  * @param importFromId The id of the existing DataNetaddrRangeKeyspaceMac that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_keyspace_mac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetaddrRangeKeyspaceMac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netaddr_range_keyspace_mac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/netaddr/0.5.1/docs/data-sources/range_keyspace_mac netaddr_range_keyspace_mac} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetaddrRangeKeyspaceMacConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetaddrRangeKeyspaceMacConfig) {
    super(scope, id, {
      terraformResourceType: 'netaddr_range_keyspace_mac',
      terraformGeneratorMetadata: {
        providerName: 'netaddr',
        providerVersion: '0.5.1'
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
    this._rangeId = config.rangeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataNetaddrRangeKeyspaceMacAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }

  // deleted_addresses - computed: true, optional: false, required: false
  private _deletedAddresses = new DataNetaddrRangeKeyspaceMacDeletedAddressesList(this, "deleted_addresses", false);
  public get deletedAddresses() {
    return this._deletedAddresses;
  }

  // first_address - computed: true, optional: false, required: false
  public get firstAddress() {
    return this.getStringAttribute('first_address');
  }

  // generated_addresses - computed: true, optional: false, required: false
  private _generatedAddresses = new DataNetaddrRangeKeyspaceMacGeneratedAddressesList(this, "generated_addresses", false);
  public get generatedAddresses() {
    return this._generatedAddresses;
  }

  // hardcoded_addresses - computed: true, optional: false, required: false
  private _hardcodedAddresses = new DataNetaddrRangeKeyspaceMacHardcodedAddressesList(this, "hardcoded_addresses", false);
  public get hardcodedAddresses() {
    return this._hardcodedAddresses;
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

  // last_address - computed: true, optional: false, required: false
  public get lastAddress() {
    return this.getStringAttribute('last_address');
  }

  // next_address - computed: true, optional: false, required: false
  public get nextAddress() {
    return this.getStringAttribute('next_address');
  }

  // range_id - computed: false, optional: false, required: true
  private _rangeId?: string; 
  public get rangeId() {
    return this.getStringAttribute('range_id');
  }
  public set rangeId(value: string) {
    this._rangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeIdInput() {
    return this._rangeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      range_id: cdktf.stringToTerraform(this._rangeId),
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
      range_id: {
        value: cdktf.stringToHclTerraform(this._rangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
