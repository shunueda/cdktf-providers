// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#account VpcStatus#account}
  */
  readonly account: string;
  /**
  * CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#cidr_block VpcStatus#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * ClosFabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#clos_name VpcStatus#clos_name}
  */
  readonly closName?: string;
  /**
  * aws/azure/gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#cloud_provider VpcStatus#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#cnps VpcStatus#cnps}
  */
  readonly cnps: string;
  /**
  * Deployment mode for the resources: provision or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#deploy_mode VpcStatus#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#id VpcStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Internet gateway id 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#igw VpcStatus#igw}
  */
  readonly igw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#region VpcStatus#region}
  */
  readonly region: string;
  /**
  * Resource group needed by Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#resource_group VpcStatus#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#rg_name VpcStatus#rg_name}
  */
  readonly rgName?: string;
  /**
  * CloudEdge/CloudLeaf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#role VpcStatus#role}
  */
  readonly role: string;
  /**
  * Security group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#security_group_id VpcStatus#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * A mapping of tags to assign to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#tags VpcStatus#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#tf_id VpcStatus#tf_id}
  */
  readonly tfId: string;
  /**
  * Base topology name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#topology_name VpcStatus#topology_name}
  */
  readonly topologyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#vnet_name VpcStatus#vnet_name}
  */
  readonly vnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#vpc_id VpcStatus#vpc_id}
  */
  readonly vpcId: string;
  /**
  * WanFabric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#wan_name VpcStatus#wan_name}
  */
  readonly wanName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#timeouts VpcStatus#timeouts}
  */
  readonly timeouts?: VpcStatusTimeouts;
}
export interface VpcStatusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#delete VpcStatus#delete}
  */
  readonly delete?: string;
}

export function vpcStatusTimeoutsToTerraform(struct?: VpcStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vpcStatusTimeoutsToHclTerraform(struct?: VpcStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VpcStatusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcStatusTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcStatusTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status cloudeos_vpc_status}
*/
export class VpcStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_vpc_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcStatus to import
  * @param importFromId The id of the existing VpcStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_vpc_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/vpc_status cloudeos_vpc_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcStatusConfig
  */
  public constructor(scope: Construct, id: string, config: VpcStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_vpc_status',
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
    this._account = config.account;
    this._cidrBlock = config.cidrBlock;
    this._closName = config.closName;
    this._cloudProvider = config.cloudProvider;
    this._cnps = config.cnps;
    this._deployMode = config.deployMode;
    this._id = config.id;
    this._igw = config.igw;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._rgName = config.rgName;
    this._role = config.role;
    this._securityGroupId = config.securityGroupId;
    this._tags = config.tags;
    this._tfId = config.tfId;
    this._topologyName = config.topologyName;
    this._vnetName = config.vnetName;
    this._vpcId = config.vpcId;
    this._wanName = config.wanName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // cidr_block - computed: false, optional: true, required: false
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

  // deploy_mode - computed: false, optional: true, required: false
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

  // igw - computed: false, optional: true, required: false
  private _igw?: string; 
  public get igw() {
    return this.getStringAttribute('igw');
  }
  public set igw(value: string) {
    this._igw = value;
  }
  public resetIgw() {
    this._igw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igwInput() {
    return this._igw;
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

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
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

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
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

  // tf_id - computed: false, optional: false, required: true
  private _tfId?: string; 
  public get tfId() {
    return this.getStringAttribute('tf_id');
  }
  public set tfId(value: string) {
    this._tfId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tfIdInput() {
    return this._tfId;
  }

  // topology_name - computed: false, optional: true, required: false
  private _topologyName?: string; 
  public get topologyName() {
    return this.getStringAttribute('topology_name');
  }
  public set topologyName(value: string) {
    this._topologyName = value;
  }
  public resetTopologyName() {
    this._topologyName = undefined;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
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
  private _timeouts = new VpcStatusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcStatusTimeouts) {
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
      account: cdktf.stringToTerraform(this._account),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      clos_name: cdktf.stringToTerraform(this._closName),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cnps: cdktf.stringToTerraform(this._cnps),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      id: cdktf.stringToTerraform(this._id),
      igw: cdktf.stringToTerraform(this._igw),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      rg_name: cdktf.stringToTerraform(this._rgName),
      role: cdktf.stringToTerraform(this._role),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tf_id: cdktf.stringToTerraform(this._tfId),
      topology_name: cdktf.stringToTerraform(this._topologyName),
      vnet_name: cdktf.stringToTerraform(this._vnetName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wan_name: cdktf.stringToTerraform(this._wanName),
      timeouts: vpcStatusTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
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
      igw: {
        value: cdktf.stringToHclTerraform(this._igw),
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
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
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
      tf_id: {
        value: cdktf.stringToHclTerraform(this._tfId),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
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
        value: vpcStatusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcStatusTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
