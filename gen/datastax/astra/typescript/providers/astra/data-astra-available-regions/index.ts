// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstraAvailableRegionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cloud provider to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions#cloud_provider DataAstraAvailableRegions#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions#id DataAstraAvailableRegions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to filter by enabled regions. If 'false' or omitted, all regions are returned, enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions#only_enabled DataAstraAvailableRegions#only_enabled}
  */
  readonly onlyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The region type to filter by (currently either 'serverless', 'vector' or 'all'). If omitted, the default is 'serverless'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions#region_type DataAstraAvailableRegions#region_type}
  */
  readonly regionType?: string;
}
export interface DataAstraAvailableRegionsResults {
}

export function dataAstraAvailableRegionsResultsToTerraform(struct?: DataAstraAvailableRegionsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstraAvailableRegionsResultsToHclTerraform(struct?: DataAstraAvailableRegionsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstraAvailableRegionsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstraAvailableRegionsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstraAvailableRegionsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // region_type - computed: true, optional: false, required: false
  public get regionType() {
    return this.getStringAttribute('region_type');
  }

  // reserved_for_qualified_users - computed: true, optional: false, required: false
  public get reservedForQualifiedUsers() {
    return this.getBooleanAttribute('reserved_for_qualified_users');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataAstraAvailableRegionsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataAstraAvailableRegionsResultsOutputReference {
    return new DataAstraAvailableRegionsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions astra_available_regions}
*/
export class DataAstraAvailableRegions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_available_regions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstraAvailableRegions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstraAvailableRegions to import
  * @param importFromId The id of the existing DataAstraAvailableRegions that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstraAvailableRegions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_available_regions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/available_regions astra_available_regions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstraAvailableRegionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAstraAvailableRegionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'astra_available_regions',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudProvider = config.cloudProvider;
    this._id = config.id;
    this._onlyEnabled = config.onlyEnabled;
    this._regionType = config.regionType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
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

  // only_enabled - computed: false, optional: true, required: false
  private _onlyEnabled?: boolean | cdktf.IResolvable; 
  public get onlyEnabled() {
    return this.getBooleanAttribute('only_enabled');
  }
  public set onlyEnabled(value: boolean | cdktf.IResolvable) {
    this._onlyEnabled = value;
  }
  public resetOnlyEnabled() {
    this._onlyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyEnabledInput() {
    return this._onlyEnabled;
  }

  // region_type - computed: false, optional: true, required: false
  private _regionType?: string; 
  public get regionType() {
    return this.getStringAttribute('region_type');
  }
  public set regionType(value: string) {
    this._regionType = value;
  }
  public resetRegionType() {
    this._regionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionTypeInput() {
    return this._regionType;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataAstraAvailableRegionsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      id: cdktf.stringToTerraform(this._id),
      only_enabled: cdktf.booleanToTerraform(this._onlyEnabled),
      region_type: cdktf.stringToTerraform(this._regionType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
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
      only_enabled: {
        value: cdktf.booleanToHclTerraform(this._onlyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region_type: {
        value: cdktf.stringToHclTerraform(this._regionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
