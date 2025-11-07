// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtPolicyTier1GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#description DataNsxtPolicyTier1Gateway#description}
  */
  readonly description?: string;
  /**
  * Display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#display_name DataNsxtPolicyTier1Gateway#display_name}
  */
  readonly displayName?: string;
  /**
  * The path of the edge cluster connected to this Tier1 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#edge_cluster_path DataNsxtPolicyTier1Gateway#edge_cluster_path}
  */
  readonly edgeClusterPath?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#id DataNsxtPolicyTier1Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#context DataNsxtPolicyTier1Gateway#context}
  */
  readonly context?: DataNsxtPolicyTier1GatewayContext;
}
export interface DataNsxtPolicyTier1GatewayContext {
  /**
  * Search among global resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#from_global DataNsxtPolicyTier1Gateway#from_global}
  */
  readonly fromGlobal?: boolean | cdktf.IResolvable;
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#project_id DataNsxtPolicyTier1Gateway#project_id}
  */
  readonly projectId?: string;
}

export function dataNsxtPolicyTier1GatewayContextToTerraform(struct?: DataNsxtPolicyTier1GatewayContextOutputReference | DataNsxtPolicyTier1GatewayContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_global: cdktf.booleanToTerraform(struct!.fromGlobal),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataNsxtPolicyTier1GatewayContextToHclTerraform(struct?: DataNsxtPolicyTier1GatewayContextOutputReference | DataNsxtPolicyTier1GatewayContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_global: {
      value: cdktf.booleanToHclTerraform(struct!.fromGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNsxtPolicyTier1GatewayContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNsxtPolicyTier1GatewayContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromGlobal = this._fromGlobal;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNsxtPolicyTier1GatewayContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fromGlobal = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fromGlobal = value.fromGlobal;
      this._projectId = value.projectId;
    }
  }

  // from_global - computed: false, optional: true, required: false
  private _fromGlobal?: boolean | cdktf.IResolvable; 
  public get fromGlobal() {
    return this.getBooleanAttribute('from_global');
  }
  public set fromGlobal(value: boolean | cdktf.IResolvable) {
    this._fromGlobal = value;
  }
  public resetFromGlobal() {
    this._fromGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromGlobalInput() {
    return this._fromGlobal;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway nsxt_policy_tier1_gateway}
*/
export class DataNsxtPolicyTier1Gateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier1_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtPolicyTier1Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtPolicyTier1Gateway to import
  * @param importFromId The id of the existing DataNsxtPolicyTier1Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtPolicyTier1Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier1_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_tier1_gateway nsxt_policy_tier1_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtPolicyTier1GatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNsxtPolicyTier1GatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier1_gateway',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._edgeClusterPath = config.edgeClusterPath;
    this._id = config.id;
    this._context.internalValue = config.context;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // edge_cluster_path - computed: true, optional: true, required: false
  private _edgeClusterPath?: string; 
  public get edgeClusterPath() {
    return this.getStringAttribute('edge_cluster_path');
  }
  public set edgeClusterPath(value: string) {
    this._edgeClusterPath = value;
  }
  public resetEdgeClusterPath() {
    this._edgeClusterPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterPathInput() {
    return this._edgeClusterPath;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // context - computed: false, optional: true, required: false
  private _context = new DataNsxtPolicyTier1GatewayContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: DataNsxtPolicyTier1GatewayContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      edge_cluster_path: cdktf.stringToTerraform(this._edgeClusterPath),
      id: cdktf.stringToTerraform(this._id),
      context: dataNsxtPolicyTier1GatewayContextToTerraform(this._context.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cluster_path: {
        value: cdktf.stringToHclTerraform(this._edgeClusterPath),
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
      context: {
        value: dataNsxtPolicyTier1GatewayContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNsxtPolicyTier1GatewayContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
