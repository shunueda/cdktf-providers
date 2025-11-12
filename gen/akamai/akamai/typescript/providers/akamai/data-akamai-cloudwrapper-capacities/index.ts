// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_capacities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudwrapperCapacitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of contract IDs with Cloud Wrapper entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_capacities#contract_ids DataAkamaiCloudwrapperCapacities#contract_ids}
  */
  readonly contractIds?: string[];
  /**
  * capacities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_capacities#capacities DataAkamaiCloudwrapperCapacities#capacities}
  */
  readonly capacities?: DataAkamaiCloudwrapperCapacitiesCapacities[] | cdktf.IResolvable;
}
export interface DataAkamaiCloudwrapperCapacitiesCapacitiesApproved {
}

export function dataAkamaiCloudwrapperCapacitiesCapacitiesApprovedToTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacitiesApproved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperCapacitiesCapacitiesApprovedToHclTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacitiesApproved): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperCapacitiesCapacitiesApprovedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperCapacitiesCapacitiesApproved | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperCapacitiesCapacitiesApproved | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAkamaiCloudwrapperCapacitiesCapacitiesAssigned {
}

export function dataAkamaiCloudwrapperCapacitiesCapacitiesAssignedToTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacitiesAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperCapacitiesCapacitiesAssignedToHclTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacitiesAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperCapacitiesCapacitiesAssignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperCapacitiesCapacitiesAssigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperCapacitiesCapacitiesAssigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAkamaiCloudwrapperCapacitiesCapacitiesUnassigned {
}

export function dataAkamaiCloudwrapperCapacitiesCapacitiesUnassignedToTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacitiesUnassigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperCapacitiesCapacitiesUnassignedToHclTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacitiesUnassigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperCapacitiesCapacitiesUnassignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAkamaiCloudwrapperCapacitiesCapacitiesUnassigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperCapacitiesCapacitiesUnassigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}
export interface DataAkamaiCloudwrapperCapacitiesCapacities {
}

export function dataAkamaiCloudwrapperCapacitiesCapacitiesToTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCloudwrapperCapacitiesCapacitiesToHclTerraform(struct?: DataAkamaiCloudwrapperCapacitiesCapacities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCloudwrapperCapacitiesCapacitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCloudwrapperCapacitiesCapacities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCloudwrapperCapacitiesCapacities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // approved - computed: true, optional: false, required: false
  private _approved = new DataAkamaiCloudwrapperCapacitiesCapacitiesApprovedOutputReference(this, "approved");
  public get approved() {
    return this._approved;
  }

  // assigned - computed: true, optional: false, required: false
  private _assigned = new DataAkamaiCloudwrapperCapacitiesCapacitiesAssignedOutputReference(this, "assigned");
  public get assigned() {
    return this._assigned;
  }

  // contract_id - computed: true, optional: false, required: false
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unassigned - computed: true, optional: false, required: false
  private _unassigned = new DataAkamaiCloudwrapperCapacitiesCapacitiesUnassignedOutputReference(this, "unassigned");
  public get unassigned() {
    return this._unassigned;
  }
}

export class DataAkamaiCloudwrapperCapacitiesCapacitiesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiCloudwrapperCapacitiesCapacities[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiCloudwrapperCapacitiesCapacitiesOutputReference {
    return new DataAkamaiCloudwrapperCapacitiesCapacitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_capacities akamai_cloudwrapper_capacities}
*/
export class DataAkamaiCloudwrapperCapacities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudwrapper_capacities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudwrapperCapacities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudwrapperCapacities to import
  * @param importFromId The id of the existing DataAkamaiCloudwrapperCapacities that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_capacities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudwrapperCapacities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudwrapper_capacities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_capacities akamai_cloudwrapper_capacities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudwrapperCapacitiesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudwrapperCapacitiesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudwrapper_capacities',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractIds = config.contractIds;
    this._capacities.internalValue = config.capacities;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_ids - computed: false, optional: true, required: false
  private _contractIds?: string[]; 
  public get contractIds() {
    return this.getListAttribute('contract_ids');
  }
  public set contractIds(value: string[]) {
    this._contractIds = value;
  }
  public resetContractIds() {
    this._contractIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdsInput() {
    return this._contractIds;
  }

  // capacities - computed: false, optional: true, required: false
  private _capacities = new DataAkamaiCloudwrapperCapacitiesCapacitiesList(this, "capacities", false);
  public get capacities() {
    return this._capacities;
  }
  public putCapacities(value: DataAkamaiCloudwrapperCapacitiesCapacities[] | cdktf.IResolvable) {
    this._capacities.internalValue = value;
  }
  public resetCapacities() {
    this._capacities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacitiesInput() {
    return this._capacities.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contractIds),
      capacities: cdktf.listMapper(dataAkamaiCloudwrapperCapacitiesCapacitiesToTerraform, true)(this._capacities.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contractIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      capacities: {
        value: cdktf.listMapperHcl(dataAkamaiCloudwrapperCapacitiesCapacitiesToHclTerraform, true)(this._capacities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiCloudwrapperCapacitiesCapacitiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
