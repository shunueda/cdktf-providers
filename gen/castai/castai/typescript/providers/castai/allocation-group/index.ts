// https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllocationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of CAST AI cluster ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group#cluster_ids AllocationGroup#cluster_ids}
  */
  readonly clusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group#id AllocationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels used to select workloads to track
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group#labels AllocationGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Operator with which to connect the labels
  * 	OR (default) - workload needs to have at least one label to be included
  * 	AND - workload needs to have all the labels to be included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group#labels_operator AllocationGroup#labels_operator}
  */
  readonly labelsOperator?: string;
  /**
  * Allocation group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group#name AllocationGroup#name}
  */
  readonly name: string;
  /**
  * List of cluster namespaces to track
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group#namespaces AllocationGroup#namespaces}
  */
  readonly namespaces?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group castai_allocation_group}
*/
export class AllocationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_allocation_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AllocationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AllocationGroup to import
  * @param importFromId The id of the existing AllocationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AllocationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_allocation_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/allocation_group castai_allocation_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllocationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AllocationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_allocation_group',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterIds = config.clusterIds;
    this._id = config.id;
    this._labels = config.labels;
    this._labelsOperator = config.labelsOperator;
    this._name = config.name;
    this._namespaces = config.namespaces;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ids - computed: false, optional: true, required: false
  private _clusterIds?: string[]; 
  public get clusterIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_ids'));
  }
  public set clusterIds(value: string[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // labels_operator - computed: false, optional: true, required: false
  private _labelsOperator?: string; 
  public get labelsOperator() {
    return this.getStringAttribute('labels_operator');
  }
  public set labelsOperator(value: string) {
    this._labelsOperator = value;
  }
  public resetLabelsOperator() {
    this._labelsOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsOperatorInput() {
    return this._labelsOperator;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterIds),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      labels_operator: cdktf.stringToTerraform(this._labelsOperator),
      name: cdktf.stringToTerraform(this._name),
      namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namespaces),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      labels_operator: {
        value: cdktf.stringToHclTerraform(this._labelsOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
