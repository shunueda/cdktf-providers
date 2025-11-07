// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgenodeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * A cluster prefix. The default is: 10.244.244.2/28
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#cluster_prefix EdgenodeCluster#cluster_prefix}
  */
  readonly clusterPrefix?: string;
  /**
  * Detailed description of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#description EdgenodeCluster#description}
  */
  readonly description?: string;
  /**
  * User defined name of the cluster, unique across the enterprise. Once cluster is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#name EdgenodeCluster#name}
  */
  readonly name: string;
  /**
  * Foreign key to the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#project_id EdgenodeCluster#project_id}
  */
  readonly projectId: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#tags EdgenodeCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the cluster. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#title EdgenodeCluster#title}
  */
  readonly title?: string;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#nodes EdgenodeCluster#nodes}
  */
  readonly nodes: EdgenodeClusterNodes[] | cdktf.IResolvable;
}
export interface EdgenodeClusterNodes {
  /**
  * User defined name of the cluster interface, ex.: eth0, eth1, wlan0, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#cluster_interface EdgenodeCluster#cluster_interface}
  */
  readonly clusterInterface: string;
  /**
  * Id of the node to be included in a cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#id EdgenodeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Type of node. Currently it supports only: EDGE_NODE_CLUSTER_NODE_TYPE_SERVER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#node_type EdgenodeCluster#node_type}
  */
  readonly nodeType?: string;
  /**
  * Resource labels are name/value pairs that enable you to categorize resources. Label names are case insensitive with max_length 512 and min_length 3. Label values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#resource_labels EdgenodeCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
}

export function edgenodeClusterNodesToTerraform(struct?: EdgenodeClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_interface: cdktf.stringToTerraform(struct!.clusterInterface),
    id: cdktf.stringToTerraform(struct!.id),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
  }
}


export function edgenodeClusterNodesToHclTerraform(struct?: EdgenodeClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_interface: {
      value: cdktf.stringToHclTerraform(struct!.clusterInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterInterface = this._clusterInterface;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterInterface = undefined;
      this._id = undefined;
      this._nodeType = undefined;
      this._resourceLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterInterface = value.clusterInterface;
      this._id = value.id;
      this._nodeType = value.nodeType;
      this._resourceLabels = value.resourceLabels;
    }
  }

  // cluster_interface - computed: false, optional: false, required: true
  private _clusterInterface?: string; 
  public get clusterInterface() {
    return this.getStringAttribute('cluster_interface');
  }
  public set clusterInterface(value: string) {
    this._clusterInterface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInterfaceInput() {
    return this._clusterInterface;
  }

  // cluster_prefix - computed: true, optional: false, required: false
  public get clusterPrefix() {
    return this.getStringAttribute('cluster_prefix');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }
}

export class EdgenodeClusterNodesList extends cdktf.ComplexList {
  public internalValue? : EdgenodeClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeClusterNodesOutputReference {
    return new EdgenodeClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster zedcloud_edgenode_cluster}
*/
export class EdgenodeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_edgenode_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgenodeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgenodeCluster to import
  * @param importFromId The id of the existing EdgenodeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgenodeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_edgenode_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/edgenode_cluster zedcloud_edgenode_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgenodeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EdgenodeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_edgenode_cluster',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterPrefix = config.clusterPrefix;
    this._description = config.description;
    this._name = config.name;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._title = config.title;
    this._nodes.internalValue = config.nodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_prefix - computed: false, optional: true, required: false
  private _clusterPrefix?: string; 
  public get clusterPrefix() {
    return this.getStringAttribute('cluster_prefix');
  }
  public set clusterPrefix(value: string) {
    this._clusterPrefix = value;
  }
  public resetClusterPrefix() {
    this._clusterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPrefixInput() {
    return this._clusterPrefix;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // nodes - computed: false, optional: false, required: true
  private _nodes = new EdgenodeClusterNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: EdgenodeClusterNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_prefix: cdktf.stringToTerraform(this._clusterPrefix),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      nodes: cdktf.listMapper(edgenodeClusterNodesToTerraform, true)(this._nodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_prefix: {
        value: cdktf.stringToHclTerraform(this._clusterPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes: {
        value: cdktf.listMapperHcl(edgenodeClusterNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeClusterNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
