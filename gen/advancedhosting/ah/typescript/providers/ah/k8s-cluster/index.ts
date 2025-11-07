// https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#datacenter K8SCluster#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#id K8SCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#k8s_version K8SCluster#k8s_version}
  */
  readonly k8SVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#name K8SCluster#name}
  */
  readonly name: string;
  /**
  * node_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#node_pools K8SCluster#node_pools}
  */
  readonly nodePools?: K8SClusterNodePools;
}
export interface K8SClusterNodePools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#auto_scale K8SCluster#auto_scale}
  */
  readonly autoScale?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#labels K8SCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#max_count K8SCluster#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#min_count K8SCluster#min_count}
  */
  readonly minCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#nodes_count K8SCluster#nodes_count}
  */
  readonly nodesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#private_properties K8SCluster#private_properties}
  */
  readonly privateProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#public_properties K8SCluster#public_properties}
  */
  readonly publicProperties?: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#type K8SCluster#type}
  */
  readonly type: string;
}

export function k8SClusterNodePoolsToTerraform(struct?: K8SClusterNodePoolsOutputReference | K8SClusterNodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale: cdktf.booleanToTerraform(struct!.autoScale),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    nodes_count: cdktf.numberToTerraform(struct!.nodesCount),
    private_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.privateProperties),
    public_properties: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.publicProperties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function k8SClusterNodePoolsToHclTerraform(struct?: K8SClusterNodePoolsOutputReference | K8SClusterNodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scale: {
      value: cdktf.booleanToHclTerraform(struct!.autoScale),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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
    nodes_count: {
      value: cdktf.numberToHclTerraform(struct!.nodesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.privateProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    public_properties: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.publicProperties),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterNodePoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterNodePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScale = this._autoScale;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._nodesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesCount = this._nodesCount;
    }
    if (this._privateProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateProperties = this._privateProperties;
    }
    if (this._publicProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicProperties = this._publicProperties;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterNodePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScale = undefined;
      this._labels = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
      this._nodesCount = undefined;
      this._privateProperties = undefined;
      this._publicProperties = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScale = value.autoScale;
      this._labels = value.labels;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
      this._nodesCount = value.nodesCount;
      this._privateProperties = value.privateProperties;
      this._publicProperties = value.publicProperties;
      this._type = value.type;
    }
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: boolean | cdktf.IResolvable; 
  public get autoScale() {
    return this.getBooleanAttribute('auto_scale');
  }
  public set autoScale(value: boolean | cdktf.IResolvable) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nodes_count - computed: false, optional: true, required: false
  private _nodesCount?: number; 
  public get nodesCount() {
    return this.getNumberAttribute('nodes_count');
  }
  public set nodesCount(value: number) {
    this._nodesCount = value;
  }
  public resetNodesCount() {
    this._nodesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesCountInput() {
    return this._nodesCount;
  }

  // private_properties - computed: false, optional: true, required: false
  private _privateProperties?: { [key: string]: string }; 
  public get privateProperties() {
    return this.getStringMapAttribute('private_properties');
  }
  public set privateProperties(value: { [key: string]: string }) {
    this._privateProperties = value;
  }
  public resetPrivateProperties() {
    this._privateProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePropertiesInput() {
    return this._privateProperties;
  }

  // public_properties - computed: false, optional: true, required: false
  private _publicProperties?: { [key: string]: number }; 
  public get publicProperties() {
    return this.getNumberMapAttribute('public_properties');
  }
  public set publicProperties(value: { [key: string]: number }) {
    this._publicProperties = value;
  }
  public resetPublicProperties() {
    this._publicProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPropertiesInput() {
    return this._publicProperties;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster ah_k8s_cluster}
*/
export class K8SCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ah_k8s_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SCluster to import
  * @param importFromId The id of the existing K8SCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ah_k8s_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/advancedhosting/ah/0.3.6/docs/resources/k8s_cluster ah_k8s_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SClusterConfig
  */
  public constructor(scope: Construct, id: string, config: K8SClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ah_k8s_cluster',
      terraformGeneratorMetadata: {
        providerName: 'ah',
        providerVersion: '0.3.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._k8SVersion = config.k8SVersion;
    this._name = config.name;
    this._nodePools.internalValue = config.nodePools;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
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

  // k8s_version - computed: false, optional: false, required: true
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
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

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // private_network - computed: true, optional: false, required: false
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // node_pools - computed: false, optional: true, required: false
  private _nodePools = new K8SClusterNodePoolsOutputReference(this, "node_pools");
  public get nodePools() {
    return this._nodePools;
  }
  public putNodePools(value: K8SClusterNodePools) {
    this._nodePools.internalValue = value;
  }
  public resetNodePools() {
    this._nodePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolsInput() {
    return this._nodePools.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      k8s_version: cdktf.stringToTerraform(this._k8SVersion),
      name: cdktf.stringToTerraform(this._name),
      node_pools: k8SClusterNodePoolsToTerraform(this._nodePools.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
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
      k8s_version: {
        value: cdktf.stringToHclTerraform(this._k8SVersion),
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
      node_pools: {
        value: k8SClusterNodePoolsToHclTerraform(this._nodePools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterNodePoolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
