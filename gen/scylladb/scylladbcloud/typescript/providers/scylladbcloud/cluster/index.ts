// https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default write isolation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#alternator_write_isolation Cluster#alternator_write_isolation}
  */
  readonly alternatorWriteIsolation?: string;
  /**
  * BYOA credential ID (only for AWS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#byoa_id Cluster#byoa_id}
  */
  readonly byoaId?: number;
  /**
  * IPv4 CIDR of the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#cidr_block Cluster#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#cloud Cluster#cloud}
  */
  readonly cloud?: string;
  /**
  * Whether to enable CNAME for seed nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#enable_dns Cluster#enable_dns}
  */
  readonly enableDns?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable VPC peering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#enable_vpc_peering Cluster#enable_vpc_peering}
  */
  readonly enableVpcPeering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Node count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#node_count Cluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * The disk size in gigabytes of the node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#node_disk_size Cluster#node_disk_size}
  */
  readonly nodeDiskSize?: number;
  /**
  * Instance type of a node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#node_type Cluster#node_type}
  */
  readonly nodeType: string;
  /**
  * Region to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#region Cluster#region}
  */
  readonly region: string;
  /**
  * Scylla version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#scylla_version Cluster#scylla_version}
  */
  readonly scyllaVersion?: string;
  /**
  * Type of API interface, either CQL or ALTERNATOR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#user_api_interface Cluster#user_api_interface}
  */
  readonly userApiInterface?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
}
export interface ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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


export function clusterTimeoutsToHclTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster scylladbcloud_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scylladbcloud_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scylladbcloud_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scylladb/scylladbcloud/1.8.1/docs/resources/cluster scylladbcloud_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'scylladbcloud_cluster',
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
    this._alternatorWriteIsolation = config.alternatorWriteIsolation;
    this._byoaId = config.byoaId;
    this._cidrBlock = config.cidrBlock;
    this._cloud = config.cloud;
    this._enableDns = config.enableDns;
    this._enableVpcPeering = config.enableVpcPeering;
    this._id = config.id;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._nodeDiskSize = config.nodeDiskSize;
    this._nodeType = config.nodeType;
    this._region = config.region;
    this._scyllaVersion = config.scyllaVersion;
    this._userApiInterface = config.userApiInterface;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternator_write_isolation - computed: false, optional: true, required: false
  private _alternatorWriteIsolation?: string; 
  public get alternatorWriteIsolation() {
    return this.getStringAttribute('alternator_write_isolation');
  }
  public set alternatorWriteIsolation(value: string) {
    this._alternatorWriteIsolation = value;
  }
  public resetAlternatorWriteIsolation() {
    this._alternatorWriteIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternatorWriteIsolationInput() {
    return this._alternatorWriteIsolation;
  }

  // byoa_id - computed: false, optional: true, required: false
  private _byoaId?: number; 
  public get byoaId() {
    return this.getNumberAttribute('byoa_id');
  }
  public set byoaId(value: number) {
    this._byoaId = value;
  }
  public resetByoaId() {
    this._byoaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byoaIdInput() {
    return this._byoaId;
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }

  // datacenter - computed: true, optional: false, required: false
  public get datacenter() {
    return this.getStringAttribute('datacenter');
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

  // enable_vpc_peering - computed: false, optional: true, required: false
  private _enableVpcPeering?: boolean | cdktf.IResolvable; 
  public get enableVpcPeering() {
    return this.getBooleanAttribute('enable_vpc_peering');
  }
  public set enableVpcPeering(value: boolean | cdktf.IResolvable) {
    this._enableVpcPeering = value;
  }
  public resetEnableVpcPeering() {
    this._enableVpcPeering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpcPeeringInput() {
    return this._enableVpcPeering;
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

  // node_disk_size - computed: true, optional: true, required: false
  private _nodeDiskSize?: number; 
  public get nodeDiskSize() {
    return this.getNumberAttribute('node_disk_size');
  }
  public set nodeDiskSize(value: number) {
    this._nodeDiskSize = value;
  }
  public resetNodeDiskSize() {
    this._nodeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDiskSizeInput() {
    return this._nodeDiskSize;
  }

  // node_dns_names - computed: true, optional: false, required: false
  public get nodeDnsNames() {
    return cdktf.Fn.tolist(this.getListAttribute('node_dns_names'));
  }

  // node_private_ips - computed: true, optional: false, required: false
  public get nodePrivateIps() {
    return cdktf.Fn.tolist(this.getListAttribute('node_private_ips'));
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getNumberAttribute('request_id');
  }

  // scylla_version - computed: true, optional: true, required: false
  private _scyllaVersion?: string; 
  public get scyllaVersion() {
    return this.getStringAttribute('scylla_version');
  }
  public set scyllaVersion(value: string) {
    this._scyllaVersion = value;
  }
  public resetScyllaVersion() {
    this._scyllaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scyllaVersionInput() {
    return this._scyllaVersion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_api_interface - computed: false, optional: true, required: false
  private _userApiInterface?: string; 
  public get userApiInterface() {
    return this.getStringAttribute('user_api_interface');
  }
  public set userApiInterface(value: string) {
    this._userApiInterface = value;
  }
  public resetUserApiInterface() {
    this._userApiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userApiInterfaceInput() {
    return this._userApiInterface;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
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
      alternator_write_isolation: cdktf.stringToTerraform(this._alternatorWriteIsolation),
      byoa_id: cdktf.numberToTerraform(this._byoaId),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      cloud: cdktf.stringToTerraform(this._cloud),
      enable_dns: cdktf.booleanToTerraform(this._enableDns),
      enable_vpc_peering: cdktf.booleanToTerraform(this._enableVpcPeering),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_disk_size: cdktf.numberToTerraform(this._nodeDiskSize),
      node_type: cdktf.stringToTerraform(this._nodeType),
      region: cdktf.stringToTerraform(this._region),
      scylla_version: cdktf.stringToTerraform(this._scyllaVersion),
      user_api_interface: cdktf.stringToTerraform(this._userApiInterface),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternator_write_isolation: {
        value: cdktf.stringToHclTerraform(this._alternatorWriteIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      byoa_id: {
        value: cdktf.numberToHclTerraform(this._byoaId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dns: {
        value: cdktf.booleanToHclTerraform(this._enableDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vpc_peering: {
        value: cdktf.booleanToHclTerraform(this._enableVpcPeering),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_disk_size: {
        value: cdktf.numberToHclTerraform(this._nodeDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scylla_version: {
        value: cdktf.stringToHclTerraform(this._scyllaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_api_interface: {
        value: cdktf.stringToHclTerraform(this._userApiInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: clusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
