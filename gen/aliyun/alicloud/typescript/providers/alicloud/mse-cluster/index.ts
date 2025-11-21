// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MseClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#acl_entry_list MseCluster#acl_entry_list}
  */
  readonly aclEntryList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#cluster_alias_name MseCluster#cluster_alias_name}
  */
  readonly clusterAliasName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#cluster_specification MseCluster#cluster_specification}
  */
  readonly clusterSpecification: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#cluster_type MseCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#cluster_version MseCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#connection_type MseCluster#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#disk_type MseCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#id MseCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#instance_count MseCluster#instance_count}
  */
  readonly instanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#mse_version MseCluster#mse_version}
  */
  readonly mseVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#net_type MseCluster#net_type}
  */
  readonly netType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#payment_type MseCluster#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#private_slb_specification MseCluster#private_slb_specification}
  */
  readonly privateSlbSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#pub_network_flow MseCluster#pub_network_flow}
  */
  readonly pubNetworkFlow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#pub_slb_specification MseCluster#pub_slb_specification}
  */
  readonly pubSlbSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#request_pars MseCluster#request_pars}
  */
  readonly requestPars?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#resource_group_id MseCluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#tags MseCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#version_code MseCluster#version_code}
  */
  readonly versionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#vpc_id MseCluster#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#vswitch_id MseCluster#vswitch_id}
  */
  readonly vswitchId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#timeouts MseCluster#timeouts}
  */
  readonly timeouts?: MseClusterTimeouts;
}
export interface MseClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#create MseCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#delete MseCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#update MseCluster#update}
  */
  readonly update?: string;
}

export function mseClusterTimeoutsToTerraform(struct?: MseClusterTimeouts | cdktf.IResolvable): any {
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


export function mseClusterTimeoutsToHclTerraform(struct?: MseClusterTimeouts | cdktf.IResolvable): any {
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

export class MseClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MseClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MseClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster alicloud_mse_cluster}
*/
export class MseCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mse_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MseCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MseCluster to import
  * @param importFromId The id of the existing MseCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MseCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mse_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/mse_cluster alicloud_mse_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MseClusterConfig
  */
  public constructor(scope: Construct, id: string, config: MseClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mse_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclEntryList = config.aclEntryList;
    this._clusterAliasName = config.clusterAliasName;
    this._clusterSpecification = config.clusterSpecification;
    this._clusterType = config.clusterType;
    this._clusterVersion = config.clusterVersion;
    this._connectionType = config.connectionType;
    this._diskType = config.diskType;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._mseVersion = config.mseVersion;
    this._netType = config.netType;
    this._paymentType = config.paymentType;
    this._privateSlbSpecification = config.privateSlbSpecification;
    this._pubNetworkFlow = config.pubNetworkFlow;
    this._pubSlbSpecification = config.pubSlbSpecification;
    this._requestPars = config.requestPars;
    this._resourceGroupId = config.resourceGroupId;
    this._tags = config.tags;
    this._versionCode = config.versionCode;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_entry_list - computed: false, optional: true, required: false
  private _aclEntryList?: string[]; 
  public get aclEntryList() {
    return cdktf.Fn.tolist(this.getListAttribute('acl_entry_list'));
  }
  public set aclEntryList(value: string[]) {
    this._aclEntryList = value;
  }
  public resetAclEntryList() {
    this._aclEntryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEntryListInput() {
    return this._aclEntryList;
  }

  // app_version - computed: true, optional: false, required: false
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }

  // cluster_alias_name - computed: true, optional: true, required: false
  private _clusterAliasName?: string; 
  public get clusterAliasName() {
    return this.getStringAttribute('cluster_alias_name');
  }
  public set clusterAliasName(value: string) {
    this._clusterAliasName = value;
  }
  public resetClusterAliasName() {
    this._clusterAliasName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAliasNameInput() {
    return this._clusterAliasName;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_specification - computed: false, optional: false, required: true
  private _clusterSpecification?: string; 
  public get clusterSpecification() {
    return this.getStringAttribute('cluster_specification');
  }
  public set clusterSpecification(value: string) {
    this._clusterSpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSpecificationInput() {
    return this._clusterSpecification;
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

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion;
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
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

  // instance_count - computed: false, optional: false, required: true
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // mse_version - computed: true, optional: true, required: false
  private _mseVersion?: string; 
  public get mseVersion() {
    return this.getStringAttribute('mse_version');
  }
  public set mseVersion(value: string) {
    this._mseVersion = value;
  }
  public resetMseVersion() {
    this._mseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mseVersionInput() {
    return this._mseVersion;
  }

  // net_type - computed: false, optional: false, required: true
  private _netType?: string; 
  public get netType() {
    return this.getStringAttribute('net_type');
  }
  public set netType(value: string) {
    this._netType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netTypeInput() {
    return this._netType;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // private_slb_specification - computed: false, optional: true, required: false
  private _privateSlbSpecification?: string; 
  public get privateSlbSpecification() {
    return this.getStringAttribute('private_slb_specification');
  }
  public set privateSlbSpecification(value: string) {
    this._privateSlbSpecification = value;
  }
  public resetPrivateSlbSpecification() {
    this._privateSlbSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateSlbSpecificationInput() {
    return this._privateSlbSpecification;
  }

  // pub_network_flow - computed: false, optional: false, required: true
  private _pubNetworkFlow?: string; 
  public get pubNetworkFlow() {
    return this.getStringAttribute('pub_network_flow');
  }
  public set pubNetworkFlow(value: string) {
    this._pubNetworkFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubNetworkFlowInput() {
    return this._pubNetworkFlow;
  }

  // pub_slb_specification - computed: false, optional: true, required: false
  private _pubSlbSpecification?: string; 
  public get pubSlbSpecification() {
    return this.getStringAttribute('pub_slb_specification');
  }
  public set pubSlbSpecification(value: string) {
    this._pubSlbSpecification = value;
  }
  public resetPubSlbSpecification() {
    this._pubSlbSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSlbSpecificationInput() {
    return this._pubSlbSpecification;
  }

  // request_pars - computed: false, optional: true, required: false
  private _requestPars?: string; 
  public get requestPars() {
    return this.getStringAttribute('request_pars');
  }
  public set requestPars(value: string) {
    this._requestPars = value;
  }
  public resetRequestPars() {
    this._requestPars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParsInput() {
    return this._requestPars;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version_code - computed: true, optional: true, required: false
  private _versionCode?: string; 
  public get versionCode() {
    return this.getStringAttribute('version_code');
  }
  public set versionCode(value: string) {
    this._versionCode = value;
  }
  public resetVersionCode() {
    this._versionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCodeInput() {
    return this._versionCode;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MseClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MseClusterTimeouts) {
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
      acl_entry_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aclEntryList),
      cluster_alias_name: cdktf.stringToTerraform(this._clusterAliasName),
      cluster_specification: cdktf.stringToTerraform(this._clusterSpecification),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      disk_type: cdktf.stringToTerraform(this._diskType),
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      mse_version: cdktf.stringToTerraform(this._mseVersion),
      net_type: cdktf.stringToTerraform(this._netType),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      private_slb_specification: cdktf.stringToTerraform(this._privateSlbSpecification),
      pub_network_flow: cdktf.stringToTerraform(this._pubNetworkFlow),
      pub_slb_specification: cdktf.stringToTerraform(this._pubSlbSpecification),
      request_pars: cdktf.stringToTerraform(this._requestPars),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version_code: cdktf.stringToTerraform(this._versionCode),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      timeouts: mseClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_entry_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aclEntryList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_alias_name: {
        value: cdktf.stringToHclTerraform(this._clusterAliasName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_specification: {
        value: cdktf.stringToHclTerraform(this._clusterSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_version: {
        value: cdktf.stringToHclTerraform(this._clusterVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_type: {
        value: cdktf.stringToHclTerraform(this._diskType),
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
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mse_version: {
        value: cdktf.stringToHclTerraform(this._mseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      net_type: {
        value: cdktf.stringToHclTerraform(this._netType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_slb_specification: {
        value: cdktf.stringToHclTerraform(this._privateSlbSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pub_network_flow: {
        value: cdktf.stringToHclTerraform(this._pubNetworkFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pub_slb_specification: {
        value: cdktf.stringToHclTerraform(this._pubSlbSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_pars: {
        value: cdktf.stringToHclTerraform(this._requestPars),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
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
      version_code: {
        value: cdktf.stringToHclTerraform(this._versionCode),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mseClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MseClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
