// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpcIpamIpamPoolAllocationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#cidr DataAlicloudVpcIpamIpamPoolAllocations#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#id DataAlicloudVpcIpamIpamPoolAllocations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#ids DataAlicloudVpcIpamIpamPoolAllocations#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#ipam_pool_allocation_id DataAlicloudVpcIpamIpamPoolAllocations#ipam_pool_allocation_id}
  */
  readonly ipamPoolAllocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#ipam_pool_allocation_name DataAlicloudVpcIpamIpamPoolAllocations#ipam_pool_allocation_name}
  */
  readonly ipamPoolAllocationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#ipam_pool_id DataAlicloudVpcIpamIpamPoolAllocations#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#name_regex DataAlicloudVpcIpamIpamPoolAllocations#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#output_file DataAlicloudVpcIpamIpamPoolAllocations#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudVpcIpamIpamPoolAllocationsAllocations {
}

export function dataAlicloudVpcIpamIpamPoolAllocationsAllocationsToTerraform(struct?: DataAlicloudVpcIpamIpamPoolAllocationsAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpcIpamIpamPoolAllocationsAllocationsToHclTerraform(struct?: DataAlicloudVpcIpamIpamPoolAllocationsAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpcIpamIpamPoolAllocationsAllocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpcIpamIpamPoolAllocationsAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpcIpamIpamPoolAllocationsAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam_pool_allocation_description - computed: true, optional: false, required: false
  public get ipamPoolAllocationDescription() {
    return this.getStringAttribute('ipam_pool_allocation_description');
  }

  // ipam_pool_allocation_id - computed: true, optional: false, required: false
  public get ipamPoolAllocationId() {
    return this.getStringAttribute('ipam_pool_allocation_id');
  }

  // ipam_pool_allocation_name - computed: true, optional: false, required: false
  public get ipamPoolAllocationName() {
    return this.getStringAttribute('ipam_pool_allocation_name');
  }

  // ipam_pool_id - computed: true, optional: false, required: false
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_owner_id - computed: true, optional: false, required: false
  public get resourceOwnerId() {
    return this.getNumberAttribute('resource_owner_id');
  }

  // resource_region_id - computed: true, optional: false, required: false
  public get resourceRegionId() {
    return this.getStringAttribute('resource_region_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // source_cidr - computed: true, optional: false, required: false
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
}

export class DataAlicloudVpcIpamIpamPoolAllocationsAllocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpcIpamIpamPoolAllocationsAllocationsOutputReference {
    return new DataAlicloudVpcIpamIpamPoolAllocationsAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations alicloud_vpc_ipam_ipam_pool_allocations}
*/
export class DataAlicloudVpcIpamIpamPoolAllocations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_ipam_ipam_pool_allocations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpcIpamIpamPoolAllocations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpcIpamIpamPoolAllocations to import
  * @param importFromId The id of the existing DataAlicloudVpcIpamIpamPoolAllocations that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpcIpamIpamPoolAllocations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_ipam_ipam_pool_allocations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/vpc_ipam_ipam_pool_allocations alicloud_vpc_ipam_ipam_pool_allocations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpcIpamIpamPoolAllocationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpcIpamIpamPoolAllocationsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_ipam_ipam_pool_allocations',
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
    this._cidr = config.cidr;
    this._id = config.id;
    this._ids = config.ids;
    this._ipamPoolAllocationId = config.ipamPoolAllocationId;
    this._ipamPoolAllocationName = config.ipamPoolAllocationName;
    this._ipamPoolId = config.ipamPoolId;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocations - computed: true, optional: false, required: false
  private _allocations = new DataAlicloudVpcIpamIpamPoolAllocationsAllocationsList(this, "allocations", false);
  public get allocations() {
    return this._allocations;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // ipam_pool_allocation_id - computed: false, optional: true, required: false
  private _ipamPoolAllocationId?: string; 
  public get ipamPoolAllocationId() {
    return this.getStringAttribute('ipam_pool_allocation_id');
  }
  public set ipamPoolAllocationId(value: string) {
    this._ipamPoolAllocationId = value;
  }
  public resetIpamPoolAllocationId() {
    this._ipamPoolAllocationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolAllocationIdInput() {
    return this._ipamPoolAllocationId;
  }

  // ipam_pool_allocation_name - computed: false, optional: true, required: false
  private _ipamPoolAllocationName?: string; 
  public get ipamPoolAllocationName() {
    return this.getStringAttribute('ipam_pool_allocation_name');
  }
  public set ipamPoolAllocationName(value: string) {
    this._ipamPoolAllocationName = value;
  }
  public resetIpamPoolAllocationName() {
    this._ipamPoolAllocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolAllocationNameInput() {
    return this._ipamPoolAllocationName;
  }

  // ipam_pool_id - computed: false, optional: false, required: true
  private _ipamPoolId?: string; 
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      ipam_pool_allocation_id: cdktf.stringToTerraform(this._ipamPoolAllocationId),
      ipam_pool_allocation_name: cdktf.stringToTerraform(this._ipamPoolAllocationName),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipam_pool_allocation_id: {
        value: cdktf.stringToHclTerraform(this._ipamPoolAllocationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_allocation_name: {
        value: cdktf.stringToHclTerraform(this._ipamPoolAllocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipamPoolId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
