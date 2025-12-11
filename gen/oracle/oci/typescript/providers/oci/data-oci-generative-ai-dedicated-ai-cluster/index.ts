// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_dedicated_ai_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGenerativeAiDedicatedAiClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_dedicated_ai_cluster#dedicated_ai_cluster_id DataOciGenerativeAiDedicatedAiCluster#dedicated_ai_cluster_id}
  */
  readonly dedicatedAiClusterId: string;
}
export interface DataOciGenerativeAiDedicatedAiClusterCapacity {
}

export function dataOciGenerativeAiDedicatedAiClusterCapacityToTerraform(struct?: DataOciGenerativeAiDedicatedAiClusterCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGenerativeAiDedicatedAiClusterCapacityToHclTerraform(struct?: DataOciGenerativeAiDedicatedAiClusterCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGenerativeAiDedicatedAiClusterCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGenerativeAiDedicatedAiClusterCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // capacity_type - computed: true, optional: false, required: false
  public get capacityType() {
    return this.getStringAttribute('capacity_type');
  }

  // total_endpoint_capacity - computed: true, optional: false, required: false
  public get totalEndpointCapacity() {
    return this.getNumberAttribute('total_endpoint_capacity');
  }

  // used_endpoint_capacity - computed: true, optional: false, required: false
  public get usedEndpointCapacity() {
    return this.getNumberAttribute('used_endpoint_capacity');
  }
}

export class DataOciGenerativeAiDedicatedAiClusterCapacityList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference {
    return new DataOciGenerativeAiDedicatedAiClusterCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_dedicated_ai_cluster oci_generative_ai_dedicated_ai_cluster}
*/
export class DataOciGenerativeAiDedicatedAiCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_generative_ai_dedicated_ai_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGenerativeAiDedicatedAiCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGenerativeAiDedicatedAiCluster to import
  * @param importFromId The id of the existing DataOciGenerativeAiDedicatedAiCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_dedicated_ai_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGenerativeAiDedicatedAiCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_generative_ai_dedicated_ai_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/generative_ai_dedicated_ai_cluster oci_generative_ai_dedicated_ai_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGenerativeAiDedicatedAiClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGenerativeAiDedicatedAiClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_generative_ai_dedicated_ai_cluster',
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
    this._dedicatedAiClusterId = config.dedicatedAiClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity - computed: true, optional: false, required: false
  private _capacity = new DataOciGenerativeAiDedicatedAiClusterCapacityList(this, "capacity", false);
  public get capacity() {
    return this._capacity;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // dedicated_ai_cluster_id - computed: false, optional: false, required: true
  private _dedicatedAiClusterId?: string; 
  public get dedicatedAiClusterId() {
    return this.getStringAttribute('dedicated_ai_cluster_id');
  }
  public set dedicatedAiClusterId(value: string) {
    this._dedicatedAiClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedAiClusterIdInput() {
    return this._dedicatedAiClusterId;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit_count - computed: true, optional: false, required: false
  public get unitCount() {
    return this.getNumberAttribute('unit_count');
  }

  // unit_shape - computed: true, optional: false, required: false
  public get unitShape() {
    return this.getStringAttribute('unit_shape');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dedicated_ai_cluster_id: cdktf.stringToTerraform(this._dedicatedAiClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dedicated_ai_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedAiClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
