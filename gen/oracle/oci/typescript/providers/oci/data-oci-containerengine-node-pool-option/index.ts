// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciContainerengineNodePoolOptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#compartment_id DataOciContainerengineNodePoolOption#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#id DataOciContainerengineNodePoolOption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#node_pool_k8s_version DataOciContainerengineNodePoolOption#node_pool_k8s_version}
  */
  readonly nodePoolK8SVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#node_pool_option_id DataOciContainerengineNodePoolOption#node_pool_option_id}
  */
  readonly nodePoolOptionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#node_pool_os_arch DataOciContainerengineNodePoolOption#node_pool_os_arch}
  */
  readonly nodePoolOsArch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#node_pool_os_type DataOciContainerengineNodePoolOption#node_pool_os_type}
  */
  readonly nodePoolOsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#should_list_all_patch_versions DataOciContainerengineNodePoolOption#should_list_all_patch_versions}
  */
  readonly shouldListAllPatchVersions?: boolean | cdktf.IResolvable;
}
export interface DataOciContainerengineNodePoolOptionSources {
}

export function dataOciContainerengineNodePoolOptionSourcesToTerraform(struct?: DataOciContainerengineNodePoolOptionSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciContainerengineNodePoolOptionSourcesToHclTerraform(struct?: DataOciContainerengineNodePoolOptionSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciContainerengineNodePoolOptionSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciContainerengineNodePoolOptionSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciContainerengineNodePoolOptionSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciContainerengineNodePoolOptionSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciContainerengineNodePoolOptionSourcesOutputReference {
    return new DataOciContainerengineNodePoolOptionSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option oci_containerengine_node_pool_option}
*/
export class DataOciContainerengineNodePoolOption extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_node_pool_option";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciContainerengineNodePoolOption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciContainerengineNodePoolOption to import
  * @param importFromId The id of the existing DataOciContainerengineNodePoolOption that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciContainerengineNodePoolOption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_containerengine_node_pool_option", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/containerengine_node_pool_option oci_containerengine_node_pool_option} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciContainerengineNodePoolOptionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciContainerengineNodePoolOptionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_node_pool_option',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._nodePoolK8SVersion = config.nodePoolK8SVersion;
    this._nodePoolOptionId = config.nodePoolOptionId;
    this._nodePoolOsArch = config.nodePoolOsArch;
    this._nodePoolOsType = config.nodePoolOsType;
    this._shouldListAllPatchVersions = config.shouldListAllPatchVersions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // images - computed: true, optional: false, required: false
  public get images() {
    return this.getListAttribute('images');
  }

  // kubernetes_versions - computed: true, optional: false, required: false
  public get kubernetesVersions() {
    return this.getListAttribute('kubernetes_versions');
  }

  // node_pool_k8s_version - computed: false, optional: true, required: false
  private _nodePoolK8SVersion?: string; 
  public get nodePoolK8SVersion() {
    return this.getStringAttribute('node_pool_k8s_version');
  }
  public set nodePoolK8SVersion(value: string) {
    this._nodePoolK8SVersion = value;
  }
  public resetNodePoolK8SVersion() {
    this._nodePoolK8SVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolK8SVersionInput() {
    return this._nodePoolK8SVersion;
  }

  // node_pool_option_id - computed: false, optional: false, required: true
  private _nodePoolOptionId?: string; 
  public get nodePoolOptionId() {
    return this.getStringAttribute('node_pool_option_id');
  }
  public set nodePoolOptionId(value: string) {
    this._nodePoolOptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolOptionIdInput() {
    return this._nodePoolOptionId;
  }

  // node_pool_os_arch - computed: false, optional: true, required: false
  private _nodePoolOsArch?: string; 
  public get nodePoolOsArch() {
    return this.getStringAttribute('node_pool_os_arch');
  }
  public set nodePoolOsArch(value: string) {
    this._nodePoolOsArch = value;
  }
  public resetNodePoolOsArch() {
    this._nodePoolOsArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolOsArchInput() {
    return this._nodePoolOsArch;
  }

  // node_pool_os_type - computed: false, optional: true, required: false
  private _nodePoolOsType?: string; 
  public get nodePoolOsType() {
    return this.getStringAttribute('node_pool_os_type');
  }
  public set nodePoolOsType(value: string) {
    this._nodePoolOsType = value;
  }
  public resetNodePoolOsType() {
    this._nodePoolOsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolOsTypeInput() {
    return this._nodePoolOsType;
  }

  // shapes - computed: true, optional: false, required: false
  public get shapes() {
    return this.getListAttribute('shapes');
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

  // sources - computed: true, optional: false, required: false
  private _sources = new DataOciContainerengineNodePoolOptionSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      node_pool_k8s_version: cdktf.stringToTerraform(this._nodePoolK8SVersion),
      node_pool_option_id: cdktf.stringToTerraform(this._nodePoolOptionId),
      node_pool_os_arch: cdktf.stringToTerraform(this._nodePoolOsArch),
      node_pool_os_type: cdktf.stringToTerraform(this._nodePoolOsType),
      should_list_all_patch_versions: cdktf.booleanToTerraform(this._shouldListAllPatchVersions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      node_pool_k8s_version: {
        value: cdktf.stringToHclTerraform(this._nodePoolK8SVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pool_option_id: {
        value: cdktf.stringToHclTerraform(this._nodePoolOptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pool_os_arch: {
        value: cdktf.stringToHclTerraform(this._nodePoolOsArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_pool_os_type: {
        value: cdktf.stringToHclTerraform(this._nodePoolOsType),
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
