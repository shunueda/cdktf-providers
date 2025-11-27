// https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * GCP credentials.json from ServiceAccount with credentials for CAST AI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#credentials_json GkeCluster#credentials_json}
  */
  readonly credentialsJson?: string;
  /**
  * Should CAST AI remove nodes managed by CAST.AI on disconnect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#delete_nodes_on_disconnect GkeCluster#delete_nodes_on_disconnect}
  */
  readonly deleteNodesOnDisconnect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#id GkeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * GCP cluster zone in case of zonal or region in case of regional cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#location GkeCluster#location}
  */
  readonly location: string;
  /**
  * GKE cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#name GkeCluster#name}
  */
  readonly name: string;
  /**
  * GCP project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#project_id GkeCluster#project_id}
  */
  readonly projectId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#timeouts GkeCluster#timeouts}
  */
  readonly timeouts?: GkeClusterTimeouts;
}
export interface GkeClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#create GkeCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#delete GkeCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#update GkeCluster#update}
  */
  readonly update?: string;
}

export function gkeClusterTimeoutsToTerraform(struct?: GkeClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function gkeClusterTimeoutsToHclTerraform(struct?: GkeClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster castai_gke_cluster}
*/
export class GkeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_gke_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeCluster to import
  * @param importFromId The id of the existing GkeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_gke_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/8.4.0/docs/resources/gke_cluster castai_gke_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GkeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_gke_cluster',
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
    this._credentialsJson = config.credentialsJson;
    this._deleteNodesOnDisconnect = config.deleteNodesOnDisconnect;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_token - computed: true, optional: false, required: false
  public get clusterToken() {
    return this.getStringAttribute('cluster_token');
  }

  // credentials_id - computed: true, optional: false, required: false
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }

  // credentials_json - computed: false, optional: true, required: false
  private _credentialsJson?: string; 
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }
  public set credentialsJson(value: string) {
    this._credentialsJson = value;
  }
  public resetCredentialsJson() {
    this._credentialsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsJsonInput() {
    return this._credentialsJson;
  }

  // delete_nodes_on_disconnect - computed: false, optional: true, required: false
  private _deleteNodesOnDisconnect?: boolean | cdktf.IResolvable; 
  public get deleteNodesOnDisconnect() {
    return this.getBooleanAttribute('delete_nodes_on_disconnect');
  }
  public set deleteNodesOnDisconnect(value: boolean | cdktf.IResolvable) {
    this._deleteNodesOnDisconnect = value;
  }
  public resetDeleteNodesOnDisconnect() {
    this._deleteNodesOnDisconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteNodesOnDisconnectInput() {
    return this._deleteNodesOnDisconnect;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_json: cdktf.stringToTerraform(this._credentialsJson),
      delete_nodes_on_disconnect: cdktf.booleanToTerraform(this._deleteNodesOnDisconnect),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: gkeClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_json: {
        value: cdktf.stringToHclTerraform(this._credentialsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_nodes_on_disconnect: {
        value: cdktf.booleanToHclTerraform(this._deleteNodesOnDisconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      timeouts: {
        value: gkeClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
