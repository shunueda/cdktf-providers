// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#cluster_field_override Cluster#cluster_field_override}
  */
  readonly clusterFieldOverride?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#cluster_type Cluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#creation_timeout_minutes Cluster#creation_timeout_minutes}
  */
  readonly creationTimeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#delete_action Cluster#delete_action}
  */
  readonly deleteAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#endpoint Cluster#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#labels Cluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#nodepool_field_override Cluster#nodepool_field_override}
  */
  readonly nodepoolFieldOverride?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#override_credentials Cluster#override_credentials}
  */
  readonly overrideCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#system_metadata Cluster#system_metadata}
  */
  readonly systemMetadata?: { [key: string]: string };
  /**
  * nodepools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#nodepools Cluster#nodepools}
  */
  readonly nodepools: ClusterNodepools[] | cdktf.IResolvable;
}
export interface ClusterNodepools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#enable_auto_scaling Cluster#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#max_count Cluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#min_count Cluster#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#node_count Cluster#node_count}
  */
  readonly nodeCount: number;
}

export function clusterNodepoolsToTerraform(struct?: ClusterNodepools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_scaling: cdktf.booleanToTerraform(struct!.enableAutoScaling),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
  }
}


export function clusterNodepoolsToHclTerraform(struct?: ClusterNodepools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_scaling: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterNodepoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterNodepools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoScaling = this._enableAutoScaling;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterNodepools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoScaling = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._nodeCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoScaling = value.enableAutoScaling;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._nodeCount = value.nodeCount;
    }
  }

  // enable_auto_scaling - computed: false, optional: true, required: false
  private _enableAutoScaling?: boolean | cdktf.IResolvable; 
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }
  public set enableAutoScaling(value: boolean | cdktf.IResolvable) {
    this._enableAutoScaling = value;
  }
  public resetEnableAutoScaling() {
    this._enableAutoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScalingInput() {
    return this._enableAutoScaling;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }
}

export class ClusterNodepoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterNodepools[] | cdktf.IResolvable

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
  public get(index: number): ClusterNodepoolsOutputReference {
    return new ClusterNodepoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster nirmata_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster nirmata_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_cluster',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterFieldOverride = config.clusterFieldOverride;
    this._clusterType = config.clusterType;
    this._creationTimeoutMinutes = config.creationTimeoutMinutes;
    this._deleteAction = config.deleteAction;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._nodepoolFieldOverride = config.nodepoolFieldOverride;
    this._overrideCredentials = config.overrideCredentials;
    this._systemMetadata = config.systemMetadata;
    this._nodepools.internalValue = config.nodepools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_field_override - computed: false, optional: true, required: false
  private _clusterFieldOverride?: { [key: string]: string }; 
  public get clusterFieldOverride() {
    return this.getStringMapAttribute('cluster_field_override');
  }
  public set clusterFieldOverride(value: { [key: string]: string }) {
    this._clusterFieldOverride = value;
  }
  public resetClusterFieldOverride() {
    this._clusterFieldOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFieldOverrideInput() {
    return this._clusterFieldOverride;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // creation_timeout_minutes - computed: false, optional: true, required: false
  private _creationTimeoutMinutes?: number; 
  public get creationTimeoutMinutes() {
    return this.getNumberAttribute('creation_timeout_minutes');
  }
  public set creationTimeoutMinutes(value: number) {
    this._creationTimeoutMinutes = value;
  }
  public resetCreationTimeoutMinutes() {
    this._creationTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeoutMinutesInput() {
    return this._creationTimeoutMinutes;
  }

  // delete_action - computed: false, optional: true, required: false
  private _deleteAction?: string; 
  public get deleteAction() {
    return this.getStringAttribute('delete_action');
  }
  public set deleteAction(value: string) {
    this._deleteAction = value;
  }
  public resetDeleteAction() {
    this._deleteAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteActionInput() {
    return this._deleteAction;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // nodepool_field_override - computed: false, optional: true, required: false
  private _nodepoolFieldOverride?: { [key: string]: string }; 
  public get nodepoolFieldOverride() {
    return this.getStringMapAttribute('nodepool_field_override');
  }
  public set nodepoolFieldOverride(value: { [key: string]: string }) {
    this._nodepoolFieldOverride = value;
  }
  public resetNodepoolFieldOverride() {
    this._nodepoolFieldOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolFieldOverrideInput() {
    return this._nodepoolFieldOverride;
  }

  // override_credentials - computed: false, optional: true, required: false
  private _overrideCredentials?: string; 
  public get overrideCredentials() {
    return this.getStringAttribute('override_credentials');
  }
  public set overrideCredentials(value: string) {
    this._overrideCredentials = value;
  }
  public resetOverrideCredentials() {
    this._overrideCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCredentialsInput() {
    return this._overrideCredentials;
  }

  // system_metadata - computed: false, optional: true, required: false
  private _systemMetadata?: { [key: string]: string }; 
  public get systemMetadata() {
    return this.getStringMapAttribute('system_metadata');
  }
  public set systemMetadata(value: { [key: string]: string }) {
    this._systemMetadata = value;
  }
  public resetSystemMetadata() {
    this._systemMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMetadataInput() {
    return this._systemMetadata;
  }

  // nodepools - computed: false, optional: false, required: true
  private _nodepools = new ClusterNodepoolsList(this, "nodepools", false);
  public get nodepools() {
    return this._nodepools;
  }
  public putNodepools(value: ClusterNodepools[] | cdktf.IResolvable) {
    this._nodepools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolsInput() {
    return this._nodepools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_field_override: cdktf.hashMapper(cdktf.stringToTerraform)(this._clusterFieldOverride),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      creation_timeout_minutes: cdktf.numberToTerraform(this._creationTimeoutMinutes),
      delete_action: cdktf.stringToTerraform(this._deleteAction),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      nodepool_field_override: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodepoolFieldOverride),
      override_credentials: cdktf.stringToTerraform(this._overrideCredentials),
      system_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemMetadata),
      nodepools: cdktf.listMapper(clusterNodepoolsToTerraform, true)(this._nodepools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_field_override: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clusterFieldOverride),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_timeout_minutes: {
        value: cdktf.numberToHclTerraform(this._creationTimeoutMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_action: {
        value: cdktf.stringToHclTerraform(this._deleteAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodepool_field_override: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodepoolFieldOverride),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      override_credentials: {
        value: cdktf.stringToHclTerraform(this._overrideCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      nodepools: {
        value: cdktf.listMapperHcl(clusterNodepoolsToHclTerraform, true)(this._nodepools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterNodepoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
