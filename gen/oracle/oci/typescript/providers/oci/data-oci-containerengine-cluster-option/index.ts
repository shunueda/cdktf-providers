// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciContainerengineClusterOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option#cluster_option_id DataOciContainerengineClusterOption#cluster_option_id}
  */
  readonly clusterOptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option#compartment_id DataOciContainerengineClusterOption#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option#id DataOciContainerengineClusterOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option#should_list_all_patch_versions DataOciContainerengineClusterOption#should_list_all_patch_versions}
  */
  readonly shouldListAllPatchVersions?: boolean | cdktf.IResolvable;
}
export interface DataOciContainerengineClusterOptionClusterPodNetworkOptions {
}

export function dataOciContainerengineClusterOptionClusterPodNetworkOptionsToTerraform(struct?: DataOciContainerengineClusterOptionClusterPodNetworkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineClusterOptionClusterPodNetworkOptionsToHclTerraform(struct?: DataOciContainerengineClusterOptionClusterPodNetworkOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineClusterOptionClusterPodNetworkOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineClusterOptionClusterPodNetworkOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineClusterOptionClusterPodNetworkOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cni_type - computed: true, optional: false, required: false
  public get cniType() {
    return this.getStringAttribute('cni_type');
  }
}

export class DataOciContainerengineClusterOptionClusterPodNetworkOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineClusterOptionClusterPodNetworkOptionsOutputReference {
    return new DataOciContainerengineClusterOptionClusterPodNetworkOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option oci_containerengine_cluster_option}
*/
export class DataOciContainerengineClusterOption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_cluster_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciContainerengineClusterOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciContainerengineClusterOption to import
  * @param importFromId The id of the existing DataOciContainerengineClusterOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciContainerengineClusterOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_containerengine_cluster_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/containerengine_cluster_option oci_containerengine_cluster_option} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciContainerengineClusterOptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciContainerengineClusterOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_cluster_option',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterOptionId = config.clusterOptionId;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._shouldListAllPatchVersions = config.shouldListAllPatchVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_option_id - computed: false, optional: false, required: true
  private _clusterOptionId?: string; 
  public get clusterOptionId() {
    return this.getStringAttribute('cluster_option_id');
  }
  public set clusterOptionId(value: string) {
    this._clusterOptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOptionIdInput() {
    return this._clusterOptionId;
  }

  // cluster_pod_network_options - computed: true, optional: false, required: false
  private _clusterPodNetworkOptions = new DataOciContainerengineClusterOptionClusterPodNetworkOptionsList(this, "cluster_pod_network_options", false);
  public get clusterPodNetworkOptions() {
    return this._clusterPodNetworkOptions;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // kubernetes_versions - computed: true, optional: false, required: false
  public get kubernetesVersions() {
    return this.getListAttribute('kubernetes_versions');
  }

  // should_list_all_patch_versions - computed: false, optional: true, required: false
  private _shouldListAllPatchVersions?: boolean | cdktf.IResolvable; 
  public get shouldListAllPatchVersions() {
    return this.getBooleanAttribute('should_list_all_patch_versions');
  }
  public set shouldListAllPatchVersions(value: boolean | cdktf.IResolvable) {
    this._shouldListAllPatchVersions = value;
  }
  public resetShouldListAllPatchVersions() {
    this._shouldListAllPatchVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldListAllPatchVersionsInput() {
    return this._shouldListAllPatchVersions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_option_id: cdktf.stringToTerraform(this._clusterOptionId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      should_list_all_patch_versions: cdktf.booleanToTerraform(this._shouldListAllPatchVersions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_option_id: {
        value: cdktf.stringToHclTerraform(this._clusterOptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      should_list_all_patch_versions: {
        value: cdktf.booleanToHclTerraform(this._shouldListAllPatchVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
