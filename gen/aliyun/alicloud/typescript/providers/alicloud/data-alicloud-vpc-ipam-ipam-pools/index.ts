// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpcIpamIpamPoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#id DataAlicloudVpcIpamIpamPools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#ids DataAlicloudVpcIpamIpamPools#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#ipam_pool_id DataAlicloudVpcIpamIpamPools#ipam_pool_id}
  */
  readonly ipamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#ipam_pool_name DataAlicloudVpcIpamIpamPools#ipam_pool_name}
  */
  readonly ipamPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#ipam_scope_id DataAlicloudVpcIpamIpamPools#ipam_scope_id}
  */
  readonly ipamScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#name_regex DataAlicloudVpcIpamIpamPools#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#output_file DataAlicloudVpcIpamIpamPools#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#pool_region_id DataAlicloudVpcIpamIpamPools#pool_region_id}
  */
  readonly poolRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#resource_group_id DataAlicloudVpcIpamIpamPools#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#source_ipam_pool_id DataAlicloudVpcIpamIpamPools#source_ipam_pool_id}
  */
  readonly sourceIpamPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#tags DataAlicloudVpcIpamIpamPools#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAlicloudVpcIpamIpamPoolsPools {
}

export function dataAlicloudVpcIpamIpamPoolsPoolsToTerraform(struct?: DataAlicloudVpcIpamIpamPoolsPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpcIpamIpamPoolsPoolsToHclTerraform(struct?: DataAlicloudVpcIpamIpamPoolsPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpcIpamIpamPoolsPoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudVpcIpamIpamPoolsPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpcIpamIpamPoolsPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocation_default_cidr_mask - computed: true, optional: false, required: false
  public get allocationDefaultCidrMask() {
    return this.getNumberAttribute('allocation_default_cidr_mask');
  }

  // allocation_max_cidr_mask - computed: true, optional: false, required: false
  public get allocationMaxCidrMask() {
    return this.getNumberAttribute('allocation_max_cidr_mask');
  }

  // allocation_min_cidr_mask - computed: true, optional: false, required: false
  public get allocationMinCidrMask() {
    return this.getNumberAttribute('allocation_min_cidr_mask');
  }

  // auto_import - computed: true, optional: false, required: false
  public get autoImport() {
    return this.getBooleanAttribute('auto_import');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // has_sub_pool - computed: true, optional: false, required: false
  public get hasSubPool() {
    return this.getBooleanAttribute('has_sub_pool');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // ipam_id - computed: true, optional: false, required: false
  public get ipamId() {
    return this.getStringAttribute('ipam_id');
  }

  // ipam_pool_description - computed: true, optional: false, required: false
  public get ipamPoolDescription() {
    return this.getStringAttribute('ipam_pool_description');
  }

  // ipam_pool_id - computed: true, optional: false, required: false
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }

  // ipam_pool_name - computed: true, optional: false, required: false
  public get ipamPoolName() {
    return this.getStringAttribute('ipam_pool_name');
  }

  // ipam_scope_id - computed: true, optional: false, required: false
  public get ipamScopeId() {
    return this.getStringAttribute('ipam_scope_id');
  }

  // pool_depth - computed: true, optional: false, required: false
  public get poolDepth() {
    return this.getNumberAttribute('pool_depth');
  }

  // pool_region_id - computed: true, optional: false, required: false
  public get poolRegionId() {
    return this.getStringAttribute('pool_region_id');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // source_ipam_pool_id - computed: true, optional: false, required: false
  public get sourceIpamPoolId() {
    return this.getStringAttribute('source_ipam_pool_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }
}

export class DataAlicloudVpcIpamIpamPoolsPoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpcIpamIpamPoolsPoolsOutputReference {
    return new DataAlicloudVpcIpamIpamPoolsPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools alicloud_vpc_ipam_ipam_pools}
*/
export class DataAlicloudVpcIpamIpamPools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_ipam_ipam_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpcIpamIpamPools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpcIpamIpamPools to import
  * @param importFromId The id of the existing DataAlicloudVpcIpamIpamPools that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpcIpamIpamPools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_ipam_ipam_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pools alicloud_vpc_ipam_ipam_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpcIpamIpamPoolsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpcIpamIpamPoolsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_ipam_ipam_pools',
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
    this._id = config.id;
    this._ids = config.ids;
    this._ipamPoolId = config.ipamPoolId;
    this._ipamPoolName = config.ipamPoolName;
    this._ipamScopeId = config.ipamScopeId;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._poolRegionId = config.poolRegionId;
    this._resourceGroupId = config.resourceGroupId;
    this._sourceIpamPoolId = config.sourceIpamPoolId;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // ipam_pool_id - computed: false, optional: true, required: false
  private _ipamPoolId?: string; 
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  public resetIpamPoolId() {
    this._ipamPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
  }

  // ipam_pool_name - computed: false, optional: true, required: false
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

  // ipam_scope_id - computed: false, optional: true, required: false
  private _ipamScopeId?: string; 
  public get ipamScopeId() {
    return this.getStringAttribute('ipam_scope_id');
  }
  public set ipamScopeId(value: string) {
    this._ipamScopeId = value;
  }
  public resetIpamScopeId() {
    this._ipamScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamScopeIdInput() {
    return this._ipamScopeId;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
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

  // pools - computed: true, optional: false, required: false
  private _pools = new DataAlicloudVpcIpamIpamPoolsPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }

  // resource_group_id - computed: false, optional: true, required: false
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

  // source_ipam_pool_id - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      ipam_pool_name: cdktf.stringToTerraform(this._ipamPoolName),
      ipam_scope_id: cdktf.stringToTerraform(this._ipamScopeId),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      pool_region_id: cdktf.stringToTerraform(this._poolRegionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      source_ipam_pool_id: cdktf.stringToTerraform(this._sourceIpamPoolId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipamPoolId),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
