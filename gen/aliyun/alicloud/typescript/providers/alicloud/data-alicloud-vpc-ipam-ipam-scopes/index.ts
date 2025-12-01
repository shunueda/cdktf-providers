// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpcIpamIpamScopesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#id DataAlicloudVpcIpamIpamScopes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#ids DataAlicloudVpcIpamIpamScopes#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#ipam_id DataAlicloudVpcIpamIpamScopes#ipam_id}
  */
  readonly ipamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#ipam_scope_id DataAlicloudVpcIpamIpamScopes#ipam_scope_id}
  */
  readonly ipamScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#ipam_scope_name DataAlicloudVpcIpamIpamScopes#ipam_scope_name}
  */
  readonly ipamScopeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#ipam_scope_type DataAlicloudVpcIpamIpamScopes#ipam_scope_type}
  */
  readonly ipamScopeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#name_regex DataAlicloudVpcIpamIpamScopes#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#output_file DataAlicloudVpcIpamIpamScopes#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#resource_group_id DataAlicloudVpcIpamIpamScopes#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#tags DataAlicloudVpcIpamIpamScopes#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAlicloudVpcIpamIpamScopesScopes {
}

export function dataAlicloudVpcIpamIpamScopesScopesToTerraform(struct?: DataAlicloudVpcIpamIpamScopesScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpcIpamIpamScopesScopesToHclTerraform(struct?: DataAlicloudVpcIpamIpamScopesScopes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpcIpamIpamScopesScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpcIpamIpamScopesScopes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpcIpamIpamScopesScopes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipam_id - computed: true, optional: false, required: false
  public get ipamId() {
    return this.getStringAttribute('ipam_id');
  }

  // ipam_scope_description - computed: true, optional: false, required: false
  public get ipamScopeDescription() {
    return this.getStringAttribute('ipam_scope_description');
  }

  // ipam_scope_id - computed: true, optional: false, required: false
  public get ipamScopeId() {
    return this.getStringAttribute('ipam_scope_id');
  }

  // ipam_scope_name - computed: true, optional: false, required: false
  public get ipamScopeName() {
    return this.getStringAttribute('ipam_scope_name');
  }

  // ipam_scope_type - computed: true, optional: false, required: false
  public get ipamScopeType() {
    return this.getStringAttribute('ipam_scope_type');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
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

export class DataAlicloudVpcIpamIpamScopesScopesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpcIpamIpamScopesScopesOutputReference {
    return new DataAlicloudVpcIpamIpamScopesScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes alicloud_vpc_ipam_ipam_scopes}
*/
export class DataAlicloudVpcIpamIpamScopes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_ipam_ipam_scopes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpcIpamIpamScopes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpcIpamIpamScopes to import
  * @param importFromId The id of the existing DataAlicloudVpcIpamIpamScopes that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpcIpamIpamScopes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_ipam_ipam_scopes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/vpc_ipam_ipam_scopes alicloud_vpc_ipam_ipam_scopes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpcIpamIpamScopesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpcIpamIpamScopesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_ipam_ipam_scopes',
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
    this._id = config.id;
    this._ids = config.ids;
    this._ipamId = config.ipamId;
    this._ipamScopeId = config.ipamScopeId;
    this._ipamScopeName = config.ipamScopeName;
    this._ipamScopeType = config.ipamScopeType;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._resourceGroupId = config.resourceGroupId;
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

  // ipam_id - computed: false, optional: true, required: false
  private _ipamId?: string; 
  public get ipamId() {
    return this.getStringAttribute('ipam_id');
  }
  public set ipamId(value: string) {
    this._ipamId = value;
  }
  public resetIpamId() {
    this._ipamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamIdInput() {
    return this._ipamId;
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

  // ipam_scope_name - computed: false, optional: true, required: false
  private _ipamScopeName?: string; 
  public get ipamScopeName() {
    return this.getStringAttribute('ipam_scope_name');
  }
  public set ipamScopeName(value: string) {
    this._ipamScopeName = value;
  }
  public resetIpamScopeName() {
    this._ipamScopeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamScopeNameInput() {
    return this._ipamScopeName;
  }

  // ipam_scope_type - computed: false, optional: true, required: false
  private _ipamScopeType?: string; 
  public get ipamScopeType() {
    return this.getStringAttribute('ipam_scope_type');
  }
  public set ipamScopeType(value: string) {
    this._ipamScopeType = value;
  }
  public resetIpamScopeType() {
    this._ipamScopeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamScopeTypeInput() {
    return this._ipamScopeType;
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

  // scopes - computed: true, optional: false, required: false
  private _scopes = new DataAlicloudVpcIpamIpamScopesScopesList(this, "scopes", false);
  public get scopes() {
    return this._scopes;
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
      ipam_id: cdktf.stringToTerraform(this._ipamId),
      ipam_scope_id: cdktf.stringToTerraform(this._ipamScopeId),
      ipam_scope_name: cdktf.stringToTerraform(this._ipamScopeName),
      ipam_scope_type: cdktf.stringToTerraform(this._ipamScopeType),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
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
      ipam_id: {
        value: cdktf.stringToHclTerraform(this._ipamId),
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
      ipam_scope_name: {
        value: cdktf.stringToHclTerraform(this._ipamScopeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_scope_type: {
        value: cdktf.stringToHclTerraform(this._ipamScopeType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
