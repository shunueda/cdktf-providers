// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformLbProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The person who created the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#created_by DataSamsungcloudplatformLbProfiles#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#id DataSamsungcloudplatformLbProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Load balancer profile category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#lb_profile_category DataSamsungcloudplatformLbProfiles#lb_profile_category}
  */
  readonly lbProfileCategory?: string;
  /**
  * Load balancer profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#lb_profile_name DataSamsungcloudplatformLbProfiles#lb_profile_name}
  */
  readonly lbProfileName?: string;
  /**
  * Load balancer service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#lb_service_name DataSamsungcloudplatformLbProfiles#lb_service_name}
  */
  readonly lbServiceName?: string;
  /**
  * Load balancer id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#load_balancer_id DataSamsungcloudplatformLbProfiles#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Load balancer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#load_balancer_name DataSamsungcloudplatformLbProfiles#load_balancer_name}
  */
  readonly loadBalancerName?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#page DataSamsungcloudplatformLbProfiles#page}
  */
  readonly page?: number;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#size DataSamsungcloudplatformLbProfiles#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#sort DataSamsungcloudplatformLbProfiles#sort}
  */
  readonly sort?: string;
}
export interface DataSamsungcloudplatformLbProfilesContents {
}

export function dataSamsungcloudplatformLbProfilesContentsToTerraform(struct?: DataSamsungcloudplatformLbProfilesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformLbProfilesContentsToHclTerraform(struct?: DataSamsungcloudplatformLbProfilesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformLbProfilesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformLbProfilesContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformLbProfilesContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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

  // lb_profile_category - computed: true, optional: false, required: false
  public get lbProfileCategory() {
    return this.getStringAttribute('lb_profile_category');
  }

  // lb_profile_name - computed: true, optional: false, required: false
  public get lbProfileName() {
    return this.getStringAttribute('lb_profile_name');
  }

  // lb_profile_state - computed: true, optional: false, required: false
  public get lbProfileState() {
    return this.getStringAttribute('lb_profile_state');
  }

  // lb_profile_type - computed: true, optional: false, required: false
  public get lbProfileType() {
    return this.getStringAttribute('lb_profile_type');
  }

  // lb_service_names - computed: true, optional: false, required: false
  public get lbServiceNames() {
    return this.getListAttribute('lb_service_names');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
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

export class DataSamsungcloudplatformLbProfilesContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformLbProfilesContentsOutputReference {
    return new DataSamsungcloudplatformLbProfilesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles samsungcloudplatform_lb_profiles}
*/
export class DataSamsungcloudplatformLbProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_lb_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformLbProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformLbProfiles to import
  * @param importFromId The id of the existing DataSamsungcloudplatformLbProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformLbProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_lb_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/lb_profiles samsungcloudplatform_lb_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformLbProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformLbProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_lb_profiles',
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
    this._lbProfileCategory = config.lbProfileCategory;
    this._lbProfileName = config.lbProfileName;
    this._lbServiceName = config.lbServiceName;
    this._loadBalancerId = config.loadBalancerId;
    this._loadBalancerName = config.loadBalancerName;
    this._page = config.page;
    this._size = config.size;
    this._sort = config.sort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformLbProfilesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

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

  // lb_profile_category - computed: false, optional: true, required: false
  private _lbProfileCategory?: string; 
  public get lbProfileCategory() {
    return this.getStringAttribute('lb_profile_category');
  }
  public set lbProfileCategory(value: string) {
    this._lbProfileCategory = value;
  }
  public resetLbProfileCategory() {
    this._lbProfileCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbProfileCategoryInput() {
    return this._lbProfileCategory;
  }

  // lb_profile_name - computed: false, optional: true, required: false
  private _lbProfileName?: string; 
  public get lbProfileName() {
    return this.getStringAttribute('lb_profile_name');
  }
  public set lbProfileName(value: string) {
    this._lbProfileName = value;
  }
  public resetLbProfileName() {
    this._lbProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbProfileNameInput() {
    return this._lbProfileName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      lb_profile_category: cdktf.stringToTerraform(this._lbProfileCategory),
      lb_profile_name: cdktf.stringToTerraform(this._lbProfileName),
      lb_service_name: cdktf.stringToTerraform(this._lbServiceName),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
      page: cdktf.numberToTerraform(this._page),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.stringToTerraform(this._sort),
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
      lb_profile_category: {
        value: cdktf.stringToHclTerraform(this._lbProfileCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_profile_name: {
        value: cdktf.stringToHclTerraform(this._lbProfileName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
