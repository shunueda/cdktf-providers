// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * cloudeos_clos resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#clos_id VpcConfig#clos_id}
  */
  readonly closId?: string;
  /**
  * ClosFabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#clos_name VpcConfig#clos_name}
  */
  readonly closName?: string;
  /**
  * aws/azure/gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#cloud_provider VpcConfig#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#cnps VpcConfig#cnps}
  */
  readonly cnps: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#deploy_mode VpcConfig#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#id VpcConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#region VpcConfig#region}
  */
  readonly region: string;
  /**
  * Resource Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#rg_name VpcConfig#rg_name}
  */
  readonly rgName?: string;
  /**
  * CloudEdge/CloudLeaf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#role VpcConfig#role}
  */
  readonly role: string;
  /**
  * A mapping of tags to assign to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#tags VpcConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * cloudeos_topology resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#topology_id VpcConfig#topology_id}
  */
  readonly topologyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#topology_name VpcConfig#topology_name}
  */
  readonly topologyName: string;
  /**
  * VNET name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#vnet_name VpcConfig#vnet_name}
  */
  readonly vnetName?: string;
  /**
  * cloudeos_wan resource ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#wan_id VpcConfig#wan_id}
  */
  readonly wanId?: string;
  /**
  * WanFabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#wan_name VpcConfig#wan_name}
  */
  readonly wanName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#timeouts VpcConfig#timeouts}
  */
  readonly timeouts?: VpcConfigTimeouts;
}
export interface VpcConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#create VpcConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#delete VpcConfig#delete}
  */
  readonly delete?: string;
}

export function vpcConfigTimeoutsToTerraform(struct?: VpcConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vpcConfigTimeoutsToHclTerraform(struct?: VpcConfigTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcConfigTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config cloudeos_vpc_config}
*/
export class VpcConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_vpc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcConfig to import
  * @param importFromId The id of the existing VpcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_vpc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_config cloudeos_vpc_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: VpcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_vpc_config',
      terraformGeneratorMetadata: {
        providerName: 'cloudeos',
        providerVersion: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._closId = config.closId;
    this._closName = config.closName;
    this._cloudProvider = config.cloudProvider;
    this._cnps = config.cnps;
    this._deployMode = config.deployMode;
    this._id = config.id;
    this._region = config.region;
    this._rgName = config.rgName;
    this._role = config.role;
    this._tags = config.tags;
    this._topologyId = config.topologyId;
    this._topologyName = config.topologyName;
    this._vnetName = config.vnetName;
    this._wanId = config.wanId;
    this._wanName = config.wanName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clos_id - computed: false, optional: true, required: false
  private _closId?: string; 
  public get closId() {
    return this.getStringAttribute('clos_id');
  }
  public set closId(value: string) {
    this._closId = value;
  }
  public resetClosId() {
    this._closId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closIdInput() {
    return this._closId;
  }

  // clos_name - computed: false, optional: true, required: false
  private _closName?: string; 
  public get closName() {
    return this.getStringAttribute('clos_name');
  }
  public set closName(value: string) {
    this._closName = value;
  }
  public resetClosName() {
    this._closName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closNameInput() {
    return this._closName;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cnps - computed: false, optional: false, required: true
  private _cnps?: string; 
  public get cnps() {
    return this.getStringAttribute('cnps');
  }
  public set cnps(value: string) {
    this._cnps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnpsInput() {
    return this._cnps;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
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

  // peer_rg_name - computed: true, optional: false, required: false
  public get peerRgName() {
    return this.getStringAttribute('peer_rg_name');
  }

  // peer_vnet_id - computed: true, optional: false, required: false
  public get peerVnetId() {
    return this.getStringAttribute('peer_vnet_id');
  }

  // peer_vnet_name - computed: true, optional: false, required: false
  public get peerVnetName() {
    return this.getStringAttribute('peer_vnet_name');
  }

  // peer_vpc_cidr - computed: true, optional: false, required: false
  public get peerVpcCidr() {
    return this.getStringAttribute('peer_vpc_cidr');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }

  // peervpcidr - computed: true, optional: false, required: false
  public get peervpcidr() {
    return this.getStringAttribute('peervpcidr');
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

  // rg_name - computed: false, optional: true, required: false
  private _rgName?: string; 
  public get rgName() {
    return this.getStringAttribute('rg_name');
  }
  public set rgName(value: string) {
    this._rgName = value;
  }
  public resetRgName() {
    this._rgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rgNameInput() {
    return this._rgName;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // tf_id - computed: true, optional: false, required: false
  public get tfId() {
    return this.getStringAttribute('tf_id');
  }

  // topology_id - computed: false, optional: true, required: false
  private _topologyId?: string; 
  public get topologyId() {
    return this.getStringAttribute('topology_id');
  }
  public set topologyId(value: string) {
    this._topologyId = value;
  }
  public resetTopologyId() {
    this._topologyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyIdInput() {
    return this._topologyId;
  }

  // topology_name - computed: false, optional: false, required: true
  private _topologyName?: string; 
  public get topologyName() {
    return this.getStringAttribute('topology_name');
  }
  public set topologyName(value: string) {
    this._topologyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyNameInput() {
    return this._topologyName;
  }

  // vnet_name - computed: false, optional: true, required: false
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  public resetVnetName() {
    this._vnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }

  // wan_id - computed: false, optional: true, required: false
  private _wanId?: string; 
  public get wanId() {
    return this.getStringAttribute('wan_id');
  }
  public set wanId(value: string) {
    this._wanId = value;
  }
  public resetWanId() {
    this._wanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanIdInput() {
    return this._wanId;
  }

  // wan_name - computed: false, optional: true, required: false
  private _wanName?: string; 
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
  public set wanName(value: string) {
    this._wanName = value;
  }
  public resetWanName() {
    this._wanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNameInput() {
    return this._wanName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcConfigTimeouts) {
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
      clos_id: cdktf.stringToTerraform(this._closId),
      clos_name: cdktf.stringToTerraform(this._closName),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cnps: cdktf.stringToTerraform(this._cnps),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      rg_name: cdktf.stringToTerraform(this._rgName),
      role: cdktf.stringToTerraform(this._role),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topology_id: cdktf.stringToTerraform(this._topologyId),
      topology_name: cdktf.stringToTerraform(this._topologyName),
      vnet_name: cdktf.stringToTerraform(this._vnetName),
      wan_id: cdktf.stringToTerraform(this._wanId),
      wan_name: cdktf.stringToTerraform(this._wanName),
      timeouts: vpcConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clos_id: {
        value: cdktf.stringToHclTerraform(this._closId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clos_name: {
        value: cdktf.stringToHclTerraform(this._closName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cnps: {
        value: cdktf.stringToHclTerraform(this._cnps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rg_name: {
        value: cdktf.stringToHclTerraform(this._rgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      topology_id: {
        value: cdktf.stringToHclTerraform(this._topologyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topology_name: {
        value: cdktf.stringToHclTerraform(this._topologyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_name: {
        value: cdktf.stringToHclTerraform(this._vnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_id: {
        value: cdktf.stringToHclTerraform(this._wanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_name: {
        value: cdktf.stringToHclTerraform(this._wanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
