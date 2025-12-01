// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamIpamPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#allocation_default_cidr_mask VpcIpamIpamPool#allocation_default_cidr_mask}
  */
  readonly allocationDefaultCidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#allocation_max_cidr_mask VpcIpamIpamPool#allocation_max_cidr_mask}
  */
  readonly allocationMaxCidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#allocation_min_cidr_mask VpcIpamIpamPool#allocation_min_cidr_mask}
  */
  readonly allocationMinCidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#auto_import VpcIpamIpamPool#auto_import}
  */
  readonly autoImport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#clear_allocation_default_cidr_mask VpcIpamIpamPool#clear_allocation_default_cidr_mask}
  */
  readonly clearAllocationDefaultCidrMask?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#id VpcIpamIpamPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#ip_version VpcIpamIpamPool#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#ipam_pool_description VpcIpamIpamPool#ipam_pool_description}
  */
  readonly ipamPoolDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#ipam_pool_name VpcIpamIpamPool#ipam_pool_name}
  */
  readonly ipamPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#ipam_scope_id VpcIpamIpamPool#ipam_scope_id}
  */
  readonly ipamScopeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#pool_region_id VpcIpamIpamPool#pool_region_id}
  */
  readonly poolRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#resource_group_id VpcIpamIpamPool#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#source_ipam_pool_id VpcIpamIpamPool#source_ipam_pool_id}
  */
  readonly sourceIpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#tags VpcIpamIpamPool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#timeouts VpcIpamIpamPool#timeouts}
  */
  readonly timeouts?: VpcIpamIpamPoolTimeouts;
}
export interface VpcIpamIpamPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#create VpcIpamIpamPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#delete VpcIpamIpamPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#update VpcIpamIpamPool#update}
  */
  readonly update?: string;
}

export function vpcIpamIpamPoolTimeoutsToTerraform(struct?: VpcIpamIpamPoolTimeouts | cdktf.IResolvable): any {
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


export function vpcIpamIpamPoolTimeoutsToHclTerraform(struct?: VpcIpamIpamPoolTimeouts | cdktf.IResolvable): any {
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

export class VpcIpamIpamPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcIpamIpamPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcIpamIpamPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool alicloud_vpc_ipam_ipam_pool}
*/
export class VpcIpamIpamPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_ipam_ipam_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpamIpamPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpamIpamPool to import
  * @param importFromId The id of the existing VpcIpamIpamPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpamIpamPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_ipam_ipam_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_ipam_ipam_pool alicloud_vpc_ipam_ipam_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamIpamPoolConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamIpamPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_ipam_ipam_pool',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationDefaultCidrMask = config.allocationDefaultCidrMask;
    this._allocationMaxCidrMask = config.allocationMaxCidrMask;
    this._allocationMinCidrMask = config.allocationMinCidrMask;
    this._autoImport = config.autoImport;
    this._clearAllocationDefaultCidrMask = config.clearAllocationDefaultCidrMask;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._ipamPoolDescription = config.ipamPoolDescription;
    this._ipamPoolName = config.ipamPoolName;
    this._ipamScopeId = config.ipamScopeId;
    this._poolRegionId = config.poolRegionId;
    this._resourceGroupId = config.resourceGroupId;
    this._sourceIpamPoolId = config.sourceIpamPoolId;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_default_cidr_mask - computed: false, optional: true, required: false
  private _allocationDefaultCidrMask?: number; 
  public get allocationDefaultCidrMask() {
    return this.getNumberAttribute('allocation_default_cidr_mask');
  }
  public set allocationDefaultCidrMask(value: number) {
    this._allocationDefaultCidrMask = value;
  }
  public resetAllocationDefaultCidrMask() {
    this._allocationDefaultCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationDefaultCidrMaskInput() {
    return this._allocationDefaultCidrMask;
  }

  // allocation_max_cidr_mask - computed: true, optional: true, required: false
  private _allocationMaxCidrMask?: number; 
  public get allocationMaxCidrMask() {
    return this.getNumberAttribute('allocation_max_cidr_mask');
  }
  public set allocationMaxCidrMask(value: number) {
    this._allocationMaxCidrMask = value;
  }
  public resetAllocationMaxCidrMask() {
    this._allocationMaxCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationMaxCidrMaskInput() {
    return this._allocationMaxCidrMask;
  }

  // allocation_min_cidr_mask - computed: false, optional: true, required: false
  private _allocationMinCidrMask?: number; 
  public get allocationMinCidrMask() {
    return this.getNumberAttribute('allocation_min_cidr_mask');
  }
  public set allocationMinCidrMask(value: number) {
    this._allocationMinCidrMask = value;
  }
  public resetAllocationMinCidrMask() {
    this._allocationMinCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationMinCidrMaskInput() {
    return this._allocationMinCidrMask;
  }

  // auto_import - computed: false, optional: true, required: false
  private _autoImport?: boolean | cdktf.IResolvable; 
  public get autoImport() {
    return this.getBooleanAttribute('auto_import');
  }
  public set autoImport(value: boolean | cdktf.IResolvable) {
    this._autoImport = value;
  }
  public resetAutoImport() {
    this._autoImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoImportInput() {
    return this._autoImport;
  }

  // clear_allocation_default_cidr_mask - computed: false, optional: true, required: false
  private _clearAllocationDefaultCidrMask?: boolean | cdktf.IResolvable; 
  public get clearAllocationDefaultCidrMask() {
    return this.getBooleanAttribute('clear_allocation_default_cidr_mask');
  }
  public set clearAllocationDefaultCidrMask(value: boolean | cdktf.IResolvable) {
    this._clearAllocationDefaultCidrMask = value;
  }
  public resetClearAllocationDefaultCidrMask() {
    this._clearAllocationDefaultCidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearAllocationDefaultCidrMaskInput() {
    return this._clearAllocationDefaultCidrMask;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // ipam_pool_description - computed: false, optional: true, required: false
  private _ipamPoolDescription?: string; 
  public get ipamPoolDescription() {
    return this.getStringAttribute('ipam_pool_description');
  }
  public set ipamPoolDescription(value: string) {
    this._ipamPoolDescription = value;
  }
  public resetIpamPoolDescription() {
    this._ipamPoolDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolDescriptionInput() {
    return this._ipamPoolDescription;
  }

  // ipam_pool_name - computed: true, optional: true, required: false
  private _ipamPoolName?: string; 
  public get ipamPoolName() {
    return this.getStringAttribute('ipam_pool_name');
  }
  public set ipamPoolName(value: string) {
    this._ipamPoolName = value;
  }
  public resetIpamPoolName() {
    this._ipamPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolNameInput() {
    return this._ipamPoolName;
  }

  // ipam_scope_id - computed: false, optional: false, required: true
  private _ipamScopeId?: string; 
  public get ipamScopeId() {
    return this.getStringAttribute('ipam_scope_id');
  }
  public set ipamScopeId(value: string) {
    this._ipamScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamScopeIdInput() {
    return this._ipamScopeId;
  }

  // pool_region_id - computed: false, optional: true, required: false
  private _poolRegionId?: string; 
  public get poolRegionId() {
    return this.getStringAttribute('pool_region_id');
  }
  public set poolRegionId(value: string) {
    this._poolRegionId = value;
  }
  public resetPoolRegionId() {
    this._poolRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRegionIdInput() {
    return this._poolRegionId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
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

  // source_ipam_pool_id - computed: true, optional: true, required: false
  private _sourceIpamPoolId?: string; 
  public get sourceIpamPoolId() {
    return this.getStringAttribute('source_ipam_pool_id');
  }
  public set sourceIpamPoolId(value: string) {
    this._sourceIpamPoolId = value;
  }
  public resetSourceIpamPoolId() {
    this._sourceIpamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpamPoolIdInput() {
    return this._sourceIpamPoolId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcIpamIpamPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpamIpamPoolTimeouts) {
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
      allocation_default_cidr_mask: cdktf.numberToTerraform(this._allocationDefaultCidrMask),
      allocation_max_cidr_mask: cdktf.numberToTerraform(this._allocationMaxCidrMask),
      allocation_min_cidr_mask: cdktf.numberToTerraform(this._allocationMinCidrMask),
      auto_import: cdktf.booleanToTerraform(this._autoImport),
      clear_allocation_default_cidr_mask: cdktf.booleanToTerraform(this._clearAllocationDefaultCidrMask),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      ipam_pool_description: cdktf.stringToTerraform(this._ipamPoolDescription),
      ipam_pool_name: cdktf.stringToTerraform(this._ipamPoolName),
      ipam_scope_id: cdktf.stringToTerraform(this._ipamScopeId),
      pool_region_id: cdktf.stringToTerraform(this._poolRegionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      source_ipam_pool_id: cdktf.stringToTerraform(this._sourceIpamPoolId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: vpcIpamIpamPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_default_cidr_mask: {
        value: cdktf.numberToHclTerraform(this._allocationDefaultCidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allocation_max_cidr_mask: {
        value: cdktf.numberToHclTerraform(this._allocationMaxCidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allocation_min_cidr_mask: {
        value: cdktf.numberToHclTerraform(this._allocationMinCidrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_import: {
        value: cdktf.booleanToHclTerraform(this._autoImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clear_allocation_default_cidr_mask: {
        value: cdktf.booleanToHclTerraform(this._clearAllocationDefaultCidrMask),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_description: {
        value: cdktf.stringToHclTerraform(this._ipamPoolDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_name: {
        value: cdktf.stringToHclTerraform(this._ipamPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_scope_id: {
        value: cdktf.stringToHclTerraform(this._ipamScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_region_id: {
        value: cdktf.stringToHclTerraform(this._poolRegionId),
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
      source_ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._sourceIpamPoolId),
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
      timeouts: {
        value: vpcIpamIpamPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcIpamIpamPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
