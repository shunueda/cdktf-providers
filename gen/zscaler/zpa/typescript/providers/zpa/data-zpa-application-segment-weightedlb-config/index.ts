// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaApplicationSegmentWeightedlbConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application segment identifier to query. One of application_id or application_name must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config#application_id DataZpaApplicationSegmentWeightedlbConfig#application_id}
  */
  readonly applicationId?: string;
  /**
  * Application segment name to query. One of application_id or application_name must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config#application_name DataZpaApplicationSegmentWeightedlbConfig#application_name}
  */
  readonly applicationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config#id DataZpaApplicationSegmentWeightedlbConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional microtenant identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config#microtenant_id DataZpaApplicationSegmentWeightedlbConfig#microtenant_id}
  */
  readonly microtenantId?: string;
}
export interface DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings {
}

export function dataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsToTerraform(struct?: DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsToHclTerraform(struct?: DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getStringAttribute('weight');
  }
}

export class DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsOutputReference {
    return new DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config zpa_application_segment_weightedlb_config}
*/
export class DataZpaApplicationSegmentWeightedlbConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment_weightedlb_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaApplicationSegmentWeightedlbConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaApplicationSegmentWeightedlbConfig to import
  * @param importFromId The id of the existing DataZpaApplicationSegmentWeightedlbConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaApplicationSegmentWeightedlbConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment_weightedlb_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/application_segment_weightedlb_config zpa_application_segment_weightedlb_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaApplicationSegmentWeightedlbConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaApplicationSegmentWeightedlbConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment_weightedlb_config',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._applicationName = config.applicationName;
    this._id = config.id;
    this._microtenantId = config.microtenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // application_name - computed: true, optional: true, required: false
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  public resetApplicationName() {
    this._applicationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // application_to_server_group_mappings - computed: true, optional: false, required: false
  private _applicationToServerGroupMappings = new DataZpaApplicationSegmentWeightedlbConfigApplicationToServerGroupMappingsList(this, "application_to_server_group_mappings", false);
  public get applicationToServerGroupMappings() {
    return this._applicationToServerGroupMappings;
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

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // weighted_load_balancing - computed: true, optional: false, required: false
  public get weightedLoadBalancing() {
    return this.getBooleanAttribute('weighted_load_balancing');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      application_name: cdktf.stringToTerraform(this._applicationName),
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
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
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
