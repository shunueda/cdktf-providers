// https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Serverless cluster id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#cluster_id ServerlessCluster#cluster_id}
  */
  readonly clusterId?: number;
  /**
  * Whether to enable CNAME for seed nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#enable_dns ServerlessCluster#enable_dns}
  */
  readonly enableDns?: boolean | cdktf.IResolvable;
  /**
  * Whether a cluster is in a free tier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#free_tier ServerlessCluster#free_tier}
  */
  readonly freeTier?: boolean | cdktf.IResolvable;
  /**
  * Hours for cluster to last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#hours ServerlessCluster#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#id ServerlessCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Serverless cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#name ServerlessCluster#name}
  */
  readonly name: string;
  /**
  * Processing units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#units ServerlessCluster#units}
  */
  readonly units?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#timeouts ServerlessCluster#timeouts}
  */
  readonly timeouts?: ServerlessClusterTimeouts;
}
export interface ServerlessClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#create ServerlessCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#delete ServerlessCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#update ServerlessCluster#update}
  */
  readonly update?: string;
}

export function serverlessClusterTimeoutsToTerraform(struct?: ServerlessClusterTimeouts | cdktf.IResolvable): any {
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


export function serverlessClusterTimeoutsToHclTerraform(struct?: ServerlessClusterTimeouts | cdktf.IResolvable): any {
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

export class ServerlessClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerlessClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServerlessClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster scylladbcloud_serverless_cluster}
*/
export class ServerlessCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scylladbcloud_serverless_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessCluster to import
  * @param importFromId The id of the existing ServerlessCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scylladbcloud_serverless_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/serverless_cluster scylladbcloud_serverless_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ServerlessClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'scylladbcloud_serverless_cluster',
      terraformGeneratorMetadata: {
        providerName: 'scylladbcloud',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._enableDns = config.enableDns;
    this._freeTier = config.freeTier;
    this._hours = config.hours;
    this._id = config.id;
    this._name = config.name;
    this._units = config.units;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: number; 
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }
  public set clusterId(value: number) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // enable_dns - computed: false, optional: true, required: false
  private _enableDns?: boolean | cdktf.IResolvable; 
  public get enableDns() {
    return this.getBooleanAttribute('enable_dns');
  }
  public set enableDns(value: boolean | cdktf.IResolvable) {
    this._enableDns = value;
  }
  public resetEnableDns() {
    this._enableDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnsInput() {
    return this._enableDns;
  }

  // free_tier - computed: false, optional: true, required: false
  private _freeTier?: boolean | cdktf.IResolvable; 
  public get freeTier() {
    return this.getBooleanAttribute('free_tier');
  }
  public set freeTier(value: boolean | cdktf.IResolvable) {
    this._freeTier = value;
  }
  public resetFreeTier() {
    this._freeTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeTierInput() {
    return this._freeTier;
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
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

  // units - computed: false, optional: true, required: false
  private _units?: number; 
  public get units() {
    return this.getNumberAttribute('units');
  }
  public set units(value: number) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerlessClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerlessClusterTimeouts) {
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
      cluster_id: cdktf.numberToTerraform(this._clusterId),
      enable_dns: cdktf.booleanToTerraform(this._enableDns),
      free_tier: cdktf.booleanToTerraform(this._freeTier),
      hours: cdktf.numberToTerraform(this._hours),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      units: cdktf.numberToTerraform(this._units),
      timeouts: serverlessClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.numberToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_dns: {
        value: cdktf.booleanToHclTerraform(this._enableDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      free_tier: {
        value: cdktf.booleanToHclTerraform(this._freeTier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hours: {
        value: cdktf.numberToHclTerraform(this._hours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      units: {
        value: cdktf.numberToHclTerraform(this._units),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: serverlessClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerlessClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
