// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanusResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Folder id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#folder_id OceanusResource#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#id OceanusResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#name OceanusResource#name}
  */
  readonly name?: string;
  /**
  * Resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#remark OceanusResource#remark}
  */
  readonly remark?: string;
  /**
  * Resource version description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#resource_config_remark OceanusResource#resource_config_remark}
  */
  readonly resourceConfigRemark?: string;
  /**
  * Resource type, only support JAR now, value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#resource_type OceanusResource#resource_type}
  */
  readonly resourceType: number;
  /**
  * Workspace serialId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#work_space_id OceanusResource#work_space_id}
  */
  readonly workSpaceId?: string;
  /**
  * resource_loc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#resource_loc OceanusResource#resource_loc}
  */
  readonly resourceLoc: OceanusResourceResourceLoc;
}
export interface OceanusResourceResourceLocParam {
  /**
  * Resource bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#bucket OceanusResource#bucket}
  */
  readonly bucket: string;
  /**
  * Resource path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#path OceanusResource#path}
  */
  readonly path: string;
  /**
  * Resource region, if not set, use resource region, note: this field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#region OceanusResource#region}
  */
  readonly region?: string;
}

export function oceanusResourceResourceLocParamToTerraform(struct?: OceanusResourceResourceLocParamOutputReference | OceanusResourceResourceLocParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    path: cdktf.stringToTerraform(struct!.path),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function oceanusResourceResourceLocParamToHclTerraform(struct?: OceanusResourceResourceLocParamOutputReference | OceanusResourceResourceLocParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusResourceResourceLocParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanusResourceResourceLocParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusResourceResourceLocParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._path = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._path = value.path;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}
export interface OceanusResourceResourceLoc {
  /**
  * The available storage types for resource location are currently limited to 1:COS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#storage_type OceanusResource#storage_type}
  */
  readonly storageType: number;
  /**
  * param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#param OceanusResource#param}
  */
  readonly param: OceanusResourceResourceLocParam;
}

export function oceanusResourceResourceLocToTerraform(struct?: OceanusResourceResourceLocOutputReference | OceanusResourceResourceLoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    param: oceanusResourceResourceLocParamToTerraform(struct!.param),
  }
}


export function oceanusResourceResourceLocToHclTerraform(struct?: OceanusResourceResourceLocOutputReference | OceanusResourceResourceLoc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    param: {
      value: oceanusResourceResourceLocParamToHclTerraform(struct!.param),
      isBlock: true,
      type: "list",
      storageClassType: "OceanusResourceResourceLocParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OceanusResourceResourceLocOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OceanusResourceResourceLoc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._param?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.param = this._param?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OceanusResourceResourceLoc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageType = undefined;
      this._param.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageType = value.storageType;
      this._param.internalValue = value.param;
    }
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // param - computed: false, optional: false, required: true
  private _param = new OceanusResourceResourceLocParamOutputReference(this, "param");
  public get param() {
    return this._param;
  }
  public putParam(value: OceanusResourceResourceLocParam) {
    this._param.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramInput() {
    return this._param.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource tencentcloud_oceanus_resource}
*/
export class OceanusResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanusResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanusResource to import
  * @param importFromId The id of the existing OceanusResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanusResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/oceanus_resource tencentcloud_oceanus_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanusResourceConfig
  */
  public constructor(scope: Construct, id: string, config: OceanusResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_resource',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._remark = config.remark;
    this._resourceConfigRemark = config.resourceConfigRemark;
    this._resourceType = config.resourceType;
    this._workSpaceId = config.workSpaceId;
    this._resourceLoc.internalValue = config.resourceLoc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // resource_config_remark - computed: false, optional: true, required: false
  private _resourceConfigRemark?: string; 
  public get resourceConfigRemark() {
    return this.getStringAttribute('resource_config_remark');
  }
  public set resourceConfigRemark(value: string) {
    this._resourceConfigRemark = value;
  }
  public resetResourceConfigRemark() {
    this._resourceConfigRemark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceConfigRemarkInput() {
    return this._resourceConfigRemark;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: number; 
  public get resourceType() {
    return this.getNumberAttribute('resource_type');
  }
  public set resourceType(value: number) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // work_space_id - computed: false, optional: true, required: false
  private _workSpaceId?: string; 
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }
  public set workSpaceId(value: string) {
    this._workSpaceId = value;
  }
  public resetWorkSpaceId() {
    this._workSpaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workSpaceIdInput() {
    return this._workSpaceId;
  }

  // resource_loc - computed: false, optional: false, required: true
  private _resourceLoc = new OceanusResourceResourceLocOutputReference(this, "resource_loc");
  public get resourceLoc() {
    return this._resourceLoc;
  }
  public putResourceLoc(value: OceanusResourceResourceLoc) {
    this._resourceLoc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLocInput() {
    return this._resourceLoc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remark: cdktf.stringToTerraform(this._remark),
      resource_config_remark: cdktf.stringToTerraform(this._resourceConfigRemark),
      resource_type: cdktf.numberToTerraform(this._resourceType),
      work_space_id: cdktf.stringToTerraform(this._workSpaceId),
      resource_loc: oceanusResourceResourceLocToTerraform(this._resourceLoc.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_config_remark: {
        value: cdktf.stringToHclTerraform(this._resourceConfigRemark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.numberToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      work_space_id: {
        value: cdktf.stringToHclTerraform(this._workSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_loc: {
        value: oceanusResourceResourceLocToHclTerraform(this._resourceLoc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OceanusResourceResourceLocList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
