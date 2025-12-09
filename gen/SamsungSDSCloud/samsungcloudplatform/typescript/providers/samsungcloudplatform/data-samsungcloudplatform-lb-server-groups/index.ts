// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformLbServerGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#created_by DataSamsungcloudplatformLbServerGroups#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#id DataSamsungcloudplatformLbServerGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load balancer server group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#lb_server_group_name DataSamsungcloudplatformLbServerGroups#lb_server_group_name}
  */
  readonly lbServerGroupName?: string;
  /**
  * Load balancer Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#lb_service_name DataSamsungcloudplatformLbServerGroups#lb_service_name}
  */
  readonly lbServiceName?: string;
  /**
  * Load balancer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#load_balancer_id DataSamsungcloudplatformLbServerGroups#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Load balancer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#load_balancer_name DataSamsungcloudplatformLbServerGroups#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * Member ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#member_ip_address DataSamsungcloudplatformLbServerGroups#member_ip_address}
  */
  readonly memberIpAddress?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#page DataSamsungcloudplatformLbServerGroups#page}
  */
  readonly page?: number;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#size DataSamsungcloudplatformLbServerGroups#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#sort DataSamsungcloudplatformLbServerGroups#sort}
  */
  readonly sort?: string;
  /**
  * contents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#contents DataSamsungcloudplatformLbServerGroups#contents}
  */
  readonly contents?: DataSamsungcloudplatformLbServerGroupsContents[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformLbServerGroupsContents {
}

export function dataSamsungcloudplatformLbServerGroupsContentsToTerraform(struct?: DataSamsungcloudplatformLbServerGroupsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformLbServerGroupsContentsToHclTerraform(struct?: DataSamsungcloudplatformLbServerGroupsContents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformLbServerGroupsContentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSamsungcloudplatformLbServerGroupsContents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformLbServerGroupsContents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // lb_server_group_id - computed: true, optional: false, required: false
  public get lbServerGroupId() {
    return this.getStringAttribute('lb_server_group_id');
  }

  // lb_server_group_name - computed: true, optional: false, required: false
  public get lbServerGroupName() {
    return this.getStringAttribute('lb_server_group_name');
  }

  // lb_server_group_state - computed: true, optional: false, required: false
  public get lbServerGroupState() {
    return this.getStringAttribute('lb_server_group_state');
  }

  // lb_server_group_type - computed: true, optional: false, required: false
  public get lbServerGroupType() {
    return this.getStringAttribute('lb_server_group_type');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // load_balancer_state - computed: true, optional: false, required: false
  public get loadBalancerState() {
    return this.getStringAttribute('load_balancer_state');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // persistence - computed: true, optional: false, required: false
  public get persistence() {
    return this.getStringAttribute('persistence');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }
}

export class DataSamsungcloudplatformLbServerGroupsContentsList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformLbServerGroupsContents[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformLbServerGroupsContentsOutputReference {
    return new DataSamsungcloudplatformLbServerGroupsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups samsungcloudplatform_lb_server_groups}
*/
export class DataSamsungcloudplatformLbServerGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_lb_server_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformLbServerGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformLbServerGroups to import
  * @param importFromId The id of the existing DataSamsungcloudplatformLbServerGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformLbServerGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_lb_server_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_server_groups samsungcloudplatform_lb_server_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformLbServerGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformLbServerGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_lb_server_groups',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._lbServerGroupName = config.lbServerGroupName;
    this._lbServiceName = config.lbServiceName;
    this._loadBalancerId = config.loadBalancerId;
    this._loadBalancerName = config.loadBalancerName;
    this._memberIpAddress = config.memberIpAddress;
    this._page = config.page;
    this._size = config.size;
    this._sort = config.sort;
    this._contents.internalValue = config.contents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // lb_server_group_name - computed: false, optional: true, required: false
  private _lbServerGroupName?: string; 
  public get lbServerGroupName() {
    return this.getStringAttribute('lb_server_group_name');
  }
  public set lbServerGroupName(value: string) {
    this._lbServerGroupName = value;
  }
  public resetLbServerGroupName() {
    this._lbServerGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbServerGroupNameInput() {
    return this._lbServerGroupName;
  }

  // lb_service_name - computed: false, optional: true, required: false
  private _lbServiceName?: string; 
  public get lbServiceName() {
    return this.getStringAttribute('lb_service_name');
  }
  public set lbServiceName(value: string) {
    this._lbServiceName = value;
  }
  public resetLbServiceName() {
    this._lbServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbServiceNameInput() {
    return this._lbServiceName;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // load_balancer_name - computed: false, optional: true, required: false
  private _loadBalancerName?: string; 
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }
  public set loadBalancerName(value: string) {
    this._loadBalancerName = value;
  }
  public resetLoadBalancerName() {
    this._loadBalancerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNameInput() {
    return this._loadBalancerName;
  }

  // member_ip_address - computed: false, optional: true, required: false
  private _memberIpAddress?: string; 
  public get memberIpAddress() {
    return this.getStringAttribute('member_ip_address');
  }
  public set memberIpAddress(value: string) {
    this._memberIpAddress = value;
  }
  public resetMemberIpAddress() {
    this._memberIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIpAddressInput() {
    return this._memberIpAddress;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // contents - computed: false, optional: true, required: false
  private _contents = new DataSamsungcloudplatformLbServerGroupsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }
  public putContents(value: DataSamsungcloudplatformLbServerGroupsContents[] | cdktf.IResolvable) {
    this._contents.internalValue = value;
  }
  public resetContents() {
    this._contents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      lb_server_group_name: cdktf.stringToTerraform(this._lbServerGroupName),
      lb_service_name: cdktf.stringToTerraform(this._lbServiceName),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      member_ip_address: cdktf.stringToTerraform(this._memberIpAddress),
      page: cdktf.numberToTerraform(this._page),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.stringToTerraform(this._sort),
      contents: cdktf.listMapper(dataSamsungcloudplatformLbServerGroupsContentsToTerraform, true)(this._contents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      lb_server_group_name: {
        value: cdktf.stringToHclTerraform(this._lbServerGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_service_name: {
        value: cdktf.stringToHclTerraform(this._lbServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_name: {
        value: cdktf.stringToHclTerraform(this._loadBalancerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_ip_address: {
        value: cdktf.stringToHclTerraform(this._memberIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contents: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformLbServerGroupsContentsToHclTerraform, true)(this._contents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSamsungcloudplatformLbServerGroupsContentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
