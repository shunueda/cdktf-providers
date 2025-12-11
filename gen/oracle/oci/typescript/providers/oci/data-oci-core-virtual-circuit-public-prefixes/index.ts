// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreVirtualCircuitPublicPrefixesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#id DataOciCoreVirtualCircuitPublicPrefixesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#verification_state DataOciCoreVirtualCircuitPublicPrefixesA#verification_state}
  */
  readonly verificationState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#virtual_circuit_id DataOciCoreVirtualCircuitPublicPrefixesA#virtual_circuit_id}
  */
  readonly virtualCircuitId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#filter DataOciCoreVirtualCircuitPublicPrefixesA#filter}
  */
  readonly filter?: DataOciCoreVirtualCircuitPublicPrefixesFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes {
}

export function dataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesToTerraform(struct?: DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesToHclTerraform(struct?: DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // verification_state - computed: true, optional: false, required: false
  public get verificationState() {
    return this.getStringAttribute('verification_state');
  }
}

export class DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference {
    return new DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreVirtualCircuitPublicPrefixesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#name DataOciCoreVirtualCircuitPublicPrefixesA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#regex DataOciCoreVirtualCircuitPublicPrefixesA#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#values DataOciCoreVirtualCircuitPublicPrefixesA#values}
  */
  readonly values: string[];
}

export function dataOciCoreVirtualCircuitPublicPrefixesFilterToTerraform(struct?: DataOciCoreVirtualCircuitPublicPrefixesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCoreVirtualCircuitPublicPrefixesFilterToHclTerraform(struct?: DataOciCoreVirtualCircuitPublicPrefixesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreVirtualCircuitPublicPrefixesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreVirtualCircuitPublicPrefixesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
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
      this._regex = value.regex;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

export class DataOciCoreVirtualCircuitPublicPrefixesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreVirtualCircuitPublicPrefixesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference {
    return new DataOciCoreVirtualCircuitPublicPrefixesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes oci_core_virtual_circuit_public_prefixes}
*/
export class DataOciCoreVirtualCircuitPublicPrefixesA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_virtual_circuit_public_prefixes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreVirtualCircuitPublicPrefixesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreVirtualCircuitPublicPrefixesA to import
  * @param importFromId The id of the existing DataOciCoreVirtualCircuitPublicPrefixesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreVirtualCircuitPublicPrefixesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_virtual_circuit_public_prefixes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/core_virtual_circuit_public_prefixes oci_core_virtual_circuit_public_prefixes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreVirtualCircuitPublicPrefixesAConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreVirtualCircuitPublicPrefixesAConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_virtual_circuit_public_prefixes',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._verificationState = config.verificationState;
    this._virtualCircuitId = config.virtualCircuitId;
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

  // verification_state - computed: false, optional: true, required: false
  private _verificationState?: string; 
  public get verificationState() {
    return this.getStringAttribute('verification_state');
  }
  public set verificationState(value: string) {
    this._verificationState = value;
  }
  public resetVerificationState() {
    this._verificationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStateInput() {
    return this._verificationState;
  }

  // virtual_circuit_id - computed: false, optional: false, required: true
  private _virtualCircuitId?: string; 
  public get virtualCircuitId() {
    return this.getStringAttribute('virtual_circuit_id');
  }
  public set virtualCircuitId(value: string) {
    this._virtualCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualCircuitIdInput() {
    return this._virtualCircuitId;
  }

  // virtual_circuit_public_prefixes - computed: true, optional: false, required: false
  private _virtualCircuitPublicPrefixes = new DataOciCoreVirtualCircuitPublicPrefixesVirtualCircuitPublicPrefixesList(this, "virtual_circuit_public_prefixes", false);
  public get virtualCircuitPublicPrefixes() {
    return this._virtualCircuitPublicPrefixes;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreVirtualCircuitPublicPrefixesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreVirtualCircuitPublicPrefixesFilter[] | cdktf.IResolvable) {
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
      verification_state: cdktf.stringToTerraform(this._verificationState),
      virtual_circuit_id: cdktf.stringToTerraform(this._virtualCircuitId),
      filter: cdktf.listMapper(dataOciCoreVirtualCircuitPublicPrefixesFilterToTerraform, true)(this._filter.internalValue),
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
      verification_state: {
        value: cdktf.stringToHclTerraform(this._verificationState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_circuit_id: {
        value: cdktf.stringToHclTerraform(this._virtualCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreVirtualCircuitPublicPrefixesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreVirtualCircuitPublicPrefixesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
