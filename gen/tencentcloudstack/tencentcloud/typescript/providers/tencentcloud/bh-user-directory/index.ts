// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BhUserDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Directory ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#dir_id BhUserDirectory#dir_id}
  */
  readonly dirId: number;
  /**
  * Directory name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#dir_name BhUserDirectory#dir_name}
  */
  readonly dirName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#id BhUserDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IOA associated user source type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#source BhUserDirectory#source}
  */
  readonly source: number;
  /**
  * IOA associated user source name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#source_name BhUserDirectory#source_name}
  */
  readonly sourceName: string;
  /**
  * user_org_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#user_org_set BhUserDirectory#user_org_set}
  */
  readonly userOrgSet: BhUserDirectoryUserOrgSet[] | cdktf.IResolvable;
}
export interface BhUserDirectoryUserOrgSet {
  /**
  * IOA user organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#org_id BhUserDirectory#org_id}
  */
  readonly orgId: number;
  /**
  * IOA user organization ID path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#org_id_path BhUserDirectory#org_id_path}
  */
  readonly orgIdPath: string;
  /**
  * IOA user organization name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#org_name BhUserDirectory#org_name}
  */
  readonly orgName: string;
  /**
  * IOA user organization name path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#org_name_path BhUserDirectory#org_name_path}
  */
  readonly orgNamePath: string;
  /**
  * Number of users under the IOA user organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#user_total BhUserDirectory#user_total}
  */
  readonly userTotal?: number;
}

export function bhUserDirectoryUserOrgSetToTerraform(struct?: BhUserDirectoryUserOrgSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_id: cdktf.numberToTerraform(struct!.orgId),
    org_id_path: cdktf.stringToTerraform(struct!.orgIdPath),
    org_name: cdktf.stringToTerraform(struct!.orgName),
    org_name_path: cdktf.stringToTerraform(struct!.orgNamePath),
    user_total: cdktf.numberToTerraform(struct!.userTotal),
  }
}


export function bhUserDirectoryUserOrgSetToHclTerraform(struct?: BhUserDirectoryUserOrgSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_id: {
      value: cdktf.numberToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    org_id_path: {
      value: cdktf.stringToHclTerraform(struct!.orgIdPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_name: {
      value: cdktf.stringToHclTerraform(struct!.orgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_name_path: {
      value: cdktf.stringToHclTerraform(struct!.orgNamePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_total: {
      value: cdktf.numberToHclTerraform(struct!.userTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BhUserDirectoryUserOrgSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BhUserDirectoryUserOrgSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._orgIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgIdPath = this._orgIdPath;
    }
    if (this._orgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgName = this._orgName;
    }
    if (this._orgNamePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgNamePath = this._orgNamePath;
    }
    if (this._userTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTotal = this._userTotal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BhUserDirectoryUserOrgSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgId = undefined;
      this._orgIdPath = undefined;
      this._orgName = undefined;
      this._orgNamePath = undefined;
      this._userTotal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgId = value.orgId;
      this._orgIdPath = value.orgIdPath;
      this._orgName = value.orgName;
      this._orgNamePath = value.orgNamePath;
      this._userTotal = value.userTotal;
    }
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: number; 
  public get orgId() {
    return this.getNumberAttribute('org_id');
  }
  public set orgId(value: number) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // org_id_path - computed: false, optional: false, required: true
  private _orgIdPath?: string; 
  public get orgIdPath() {
    return this.getStringAttribute('org_id_path');
  }
  public set orgIdPath(value: string) {
    this._orgIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdPathInput() {
    return this._orgIdPath;
  }

  // org_name - computed: false, optional: false, required: true
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // org_name_path - computed: false, optional: false, required: true
  private _orgNamePath?: string; 
  public get orgNamePath() {
    return this.getStringAttribute('org_name_path');
  }
  public set orgNamePath(value: string) {
    this._orgNamePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNamePathInput() {
    return this._orgNamePath;
  }

  // user_total - computed: false, optional: true, required: false
  private _userTotal?: number; 
  public get userTotal() {
    return this.getNumberAttribute('user_total');
  }
  public set userTotal(value: number) {
    this._userTotal = value;
  }
  public resetUserTotal() {
    this._userTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTotalInput() {
    return this._userTotal;
  }
}

export class BhUserDirectoryUserOrgSetList extends cdktf.ComplexList {
  public internalValue? : BhUserDirectoryUserOrgSet[] | cdktf.IResolvable

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
  public get(index: number): BhUserDirectoryUserOrgSetOutputReference {
    return new BhUserDirectoryUserOrgSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory tencentcloud_bh_user_directory}
*/
export class BhUserDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_user_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BhUserDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BhUserDirectory to import
  * @param importFromId The id of the existing BhUserDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BhUserDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_user_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_user_directory tencentcloud_bh_user_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BhUserDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: BhUserDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_user_directory',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dirId = config.dirId;
    this._dirName = config.dirName;
    this._id = config.id;
    this._source = config.source;
    this._sourceName = config.sourceName;
    this._userOrgSet.internalValue = config.userOrgSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dir_id - computed: false, optional: false, required: true
  private _dirId?: number; 
  public get dirId() {
    return this.getNumberAttribute('dir_id');
  }
  public set dirId(value: number) {
    this._dirId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirIdInput() {
    return this._dirId;
  }

  // dir_name - computed: false, optional: false, required: true
  private _dirName?: string; 
  public get dirName() {
    return this.getStringAttribute('dir_name');
  }
  public set dirName(value: string) {
    this._dirName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dirNameInput() {
    return this._dirName;
  }

  // directory_id - computed: true, optional: false, required: false
  public get directoryId() {
    return this.getNumberAttribute('directory_id');
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

  // source - computed: false, optional: false, required: true
  private _source?: number; 
  public get source() {
    return this.getNumberAttribute('source');
  }
  public set source(value: number) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }

  // user_org_set - computed: false, optional: false, required: true
  private _userOrgSet = new BhUserDirectoryUserOrgSetList(this, "user_org_set", false);
  public get userOrgSet() {
    return this._userOrgSet;
  }
  public putUserOrgSet(value: BhUserDirectoryUserOrgSet[] | cdktf.IResolvable) {
    this._userOrgSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOrgSetInput() {
    return this._userOrgSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dir_id: cdktf.numberToTerraform(this._dirId),
      dir_name: cdktf.stringToTerraform(this._dirName),
      id: cdktf.stringToTerraform(this._id),
      source: cdktf.numberToTerraform(this._source),
      source_name: cdktf.stringToTerraform(this._sourceName),
      user_org_set: cdktf.listMapper(bhUserDirectoryUserOrgSetToTerraform, true)(this._userOrgSet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dir_id: {
        value: cdktf.numberToHclTerraform(this._dirId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dir_name: {
        value: cdktf.stringToHclTerraform(this._dirName),
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
      source: {
        value: cdktf.numberToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_org_set: {
        value: cdktf.listMapperHcl(bhUserDirectoryUserOrgSetToHclTerraform, true)(this._userOrgSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BhUserDirectoryUserOrgSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
