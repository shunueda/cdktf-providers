// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudTrafficBandwidthClusterAreasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Code(ID) of the bandwidth cluster area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas#area_code DataZenlayercloudTrafficBandwidthClusterAreas#area_code}
  */
  readonly areaCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas#id DataZenlayercloudTrafficBandwidthClusterAreas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A regex string to apply to the name of bandwidth cluster area list returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas#name_regex DataZenlayercloudTrafficBandwidthClusterAreas#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * The IP network support to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas#network_type DataZenlayercloudTrafficBandwidthClusterAreas#network_type}
  */
  readonly networkType?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas#result_output_file DataZenlayercloudTrafficBandwidthClusterAreas#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudTrafficBandwidthClusterAreasAreas {
}

export function dataZenlayercloudTrafficBandwidthClusterAreasAreasToTerraform(struct?: DataZenlayercloudTrafficBandwidthClusterAreasAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudTrafficBandwidthClusterAreasAreasToHclTerraform(struct?: DataZenlayercloudTrafficBandwidthClusterAreasAreas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudTrafficBandwidthClusterAreasAreasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudTrafficBandwidthClusterAreasAreas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudTrafficBandwidthClusterAreasAreas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // area_code - computed: true, optional: false, required: false
  public get areaCode() {
    return this.getStringAttribute('area_code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_types - computed: true, optional: false, required: false
  public get networkTypes() {
    return this.getListAttribute('network_types');
  }
}

export class DataZenlayercloudTrafficBandwidthClusterAreasAreasList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudTrafficBandwidthClusterAreasAreasOutputReference {
    return new DataZenlayercloudTrafficBandwidthClusterAreasAreasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas zenlayercloud_traffic_bandwidth_cluster_areas}
*/
export class DataZenlayercloudTrafficBandwidthClusterAreas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_traffic_bandwidth_cluster_areas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudTrafficBandwidthClusterAreas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudTrafficBandwidthClusterAreas to import
  * @param importFromId The id of the existing DataZenlayercloudTrafficBandwidthClusterAreas that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudTrafficBandwidthClusterAreas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_traffic_bandwidth_cluster_areas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/traffic_bandwidth_cluster_areas zenlayercloud_traffic_bandwidth_cluster_areas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudTrafficBandwidthClusterAreasConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudTrafficBandwidthClusterAreasConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_traffic_bandwidth_cluster_areas',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaCode = config.areaCode;
    this._id = config.id;
    this._nameRegex = config.nameRegex;
    this._networkType = config.networkType;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_code - computed: false, optional: true, required: false
  private _areaCode?: string; 
  public get areaCode() {
    return this.getStringAttribute('area_code');
  }
  public set areaCode(value: string) {
    this._areaCode = value;
  }
  public resetAreaCode() {
    this._areaCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCodeInput() {
    return this._areaCode;
  }

  // areas - computed: true, optional: false, required: false
  private _areas = new DataZenlayercloudTrafficBandwidthClusterAreasAreasList(this, "areas", false);
  public get areas() {
    return this._areas;
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_code: cdktf.stringToTerraform(this._areaCode),
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      network_type: cdktf.stringToTerraform(this._networkType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_code: {
        value: cdktf.stringToHclTerraform(this._areaCode),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
