// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudMemberServerImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#id DataNcloudMemberServerImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A regex string to apply to the member server image list returned by ncloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#name_regex DataNcloudMemberServerImage#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * List of member server images to view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#no_list DataNcloudMemberServerImage#no_list}
  */
  readonly noList?: string[];
  /**
  * List of platform codes of server images to view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#platform_type_code_list DataNcloudMemberServerImage#platform_type_code_list}
  */
  readonly platformTypeCodeList?: string[];
  /**
  * Region code. Get available values using the `data ncloud_regions`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#region DataNcloudMemberServerImage#region}
  */
  readonly region?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#filter DataNcloudMemberServerImage#filter}
  */
  readonly filter?: DataNcloudMemberServerImageFilter[] | cdktf.IResolvable;
}
export interface DataNcloudMemberServerImageFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#name DataNcloudMemberServerImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#regex DataNcloudMemberServerImage#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#values DataNcloudMemberServerImage#values}
  */
  readonly values: string[];
}

export function dataNcloudMemberServerImageFilterToTerraform(struct?: DataNcloudMemberServerImageFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataNcloudMemberServerImageFilterToHclTerraform(struct?: DataNcloudMemberServerImageFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNcloudMemberServerImageFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNcloudMemberServerImageFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNcloudMemberServerImageFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataNcloudMemberServerImageFilterList extends cdktf.ComplexList {
  public internalValue? : DataNcloudMemberServerImageFilter[] | cdktf.IResolvable

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
  public get(index: number): DataNcloudMemberServerImageFilterOutputReference {
    return new DataNcloudMemberServerImageFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image ncloud_member_server_image}
*/
export class DataNcloudMemberServerImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_member_server_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudMemberServerImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudMemberServerImage to import
  * @param importFromId The id of the existing DataNcloudMemberServerImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudMemberServerImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_member_server_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/member_server_image ncloud_member_server_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudMemberServerImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudMemberServerImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_member_server_image',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
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
    this._nameRegex = config.nameRegex;
    this._noList = config.noList;
    this._platformTypeCodeList = config.platformTypeCodeList;
    this._region = config.region;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_storage_total_rows - computed: true, optional: false, required: false
  public get blockStorageTotalRows() {
    return this.getNumberAttribute('block_storage_total_rows');
  }

  // block_storage_total_size - computed: true, optional: false, required: false
  public get blockStorageTotalSize() {
    return this.getNumberAttribute('block_storage_total_size');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // no - computed: true, optional: false, required: false
  public get no() {
    return this.getStringAttribute('no');
  }

  // no_list - computed: false, optional: true, required: false
  private _noList?: string[]; 
  public get noList() {
    return this.getListAttribute('no_list');
  }
  public set noList(value: string[]) {
    this._noList = value;
  }
  public resetNoList() {
    this._noList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noListInput() {
    return this._noList;
  }

  // original_base_block_storage_disk_type - computed: true, optional: false, required: false
  public get originalBaseBlockStorageDiskType() {
    return this.getStringAttribute('original_base_block_storage_disk_type');
  }

  // original_os_information - computed: true, optional: false, required: false
  public get originalOsInformation() {
    return this.getStringAttribute('original_os_information');
  }

  // original_server_image_name - computed: true, optional: false, required: false
  public get originalServerImageName() {
    return this.getStringAttribute('original_server_image_name');
  }

  // original_server_image_product_code - computed: true, optional: false, required: false
  public get originalServerImageProductCode() {
    return this.getStringAttribute('original_server_image_product_code');
  }

  // original_server_instance_no - computed: true, optional: false, required: false
  public get originalServerInstanceNo() {
    return this.getStringAttribute('original_server_instance_no');
  }

  // original_server_name - computed: true, optional: false, required: false
  public get originalServerName() {
    return this.getStringAttribute('original_server_name');
  }

  // original_server_product_code - computed: true, optional: false, required: false
  public get originalServerProductCode() {
    return this.getStringAttribute('original_server_product_code');
  }

  // platform_type - computed: true, optional: false, required: false
  public get platformType() {
    return this.getStringAttribute('platform_type');
  }

  // platform_type_code_list - computed: false, optional: true, required: false
  private _platformTypeCodeList?: string[]; 
  public get platformTypeCodeList() {
    return this.getListAttribute('platform_type_code_list');
  }
  public set platformTypeCodeList(value: string[]) {
    this._platformTypeCodeList = value;
  }
  public resetPlatformTypeCodeList() {
    this._platformTypeCodeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformTypeCodeListInput() {
    return this._platformTypeCodeList;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataNcloudMemberServerImageFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataNcloudMemberServerImageFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      no_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._noList),
      platform_type_code_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platformTypeCodeList),
      region: cdktf.stringToTerraform(this._region),
      filter: cdktf.listMapper(dataNcloudMemberServerImageFilterToTerraform, true)(this._filter.internalValue),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._noList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      platform_type_code_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._platformTypeCodeList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataNcloudMemberServerImageFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataNcloudMemberServerImageFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
