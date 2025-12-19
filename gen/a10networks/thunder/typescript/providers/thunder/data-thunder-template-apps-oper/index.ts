// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderTemplateAppsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#id DataThunderTemplateAppsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#oper DataThunderTemplateAppsOper#oper}
  */
  readonly oper?: DataThunderTemplateAppsOperOper;
}
export interface DataThunderTemplateAppsOperOperAvailableSupportedAcos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#version DataThunderTemplateAppsOper#version}
  */
  readonly version?: string;
}

export function dataThunderTemplateAppsOperOperAvailableSupportedAcosToTerraform(struct?: DataThunderTemplateAppsOperOperAvailableSupportedAcos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataThunderTemplateAppsOperOperAvailableSupportedAcosToHclTerraform(struct?: DataThunderTemplateAppsOperOperAvailableSupportedAcos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTemplateAppsOperOperAvailableSupportedAcosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderTemplateAppsOperOperAvailableSupportedAcos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTemplateAppsOperOperAvailableSupportedAcos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataThunderTemplateAppsOperOperAvailableSupportedAcosList extends cdktf.ComplexList {
  public internalValue? : DataThunderTemplateAppsOperOperAvailableSupportedAcos[] | cdktf.IResolvable

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
  public get(index: number): DataThunderTemplateAppsOperOperAvailableSupportedAcosOutputReference {
    return new DataThunderTemplateAppsOperOperAvailableSupportedAcosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderTemplateAppsOperOperAvailable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#category_name DataThunderTemplateAppsOper#category_name}
  */
  readonly categoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#category_slug DataThunderTemplateAppsOper#category_slug}
  */
  readonly categorySlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#color DataThunderTemplateAppsOper#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#deleted DataThunderTemplateAppsOper#deleted}
  */
  readonly deleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#description DataThunderTemplateAppsOper#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#developer DataThunderTemplateAppsOper#developer}
  */
  readonly developer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#file_name DataThunderTemplateAppsOper#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#guide_url DataThunderTemplateAppsOper#guide_url}
  */
  readonly guideUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#icon DataThunderTemplateAppsOper#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#release_notes DataThunderTemplateAppsOper#release_notes}
  */
  readonly releaseNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#type DataThunderTemplateAppsOper#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#version DataThunderTemplateAppsOper#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#video_url DataThunderTemplateAppsOper#video_url}
  */
  readonly videoUrl?: string;
  /**
  * supported_acos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#supported_acos DataThunderTemplateAppsOper#supported_acos}
  */
  readonly supportedAcos?: DataThunderTemplateAppsOperOperAvailableSupportedAcos[] | cdktf.IResolvable;
}

export function dataThunderTemplateAppsOperOperAvailableToTerraform(struct?: DataThunderTemplateAppsOperOperAvailable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_name: cdktf.stringToTerraform(struct!.categoryName),
    category_slug: cdktf.stringToTerraform(struct!.categorySlug),
    color: cdktf.stringToTerraform(struct!.color),
    deleted: cdktf.stringToTerraform(struct!.deleted),
    description: cdktf.stringToTerraform(struct!.description),
    developer: cdktf.stringToTerraform(struct!.developer),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    guide_url: cdktf.stringToTerraform(struct!.guideUrl),
    icon: cdktf.stringToTerraform(struct!.icon),
    release_notes: cdktf.stringToTerraform(struct!.releaseNotes),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    video_url: cdktf.stringToTerraform(struct!.videoUrl),
    supported_acos: cdktf.listMapper(dataThunderTemplateAppsOperOperAvailableSupportedAcosToTerraform, true)(struct!.supportedAcos),
  }
}


export function dataThunderTemplateAppsOperOperAvailableToHclTerraform(struct?: DataThunderTemplateAppsOperOperAvailable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_name: {
      value: cdktf.stringToHclTerraform(struct!.categoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_slug: {
      value: cdktf.stringToHclTerraform(struct!.categorySlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deleted: {
      value: cdktf.stringToHclTerraform(struct!.deleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    developer: {
      value: cdktf.stringToHclTerraform(struct!.developer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guide_url: {
      value: cdktf.stringToHclTerraform(struct!.guideUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_notes: {
      value: cdktf.stringToHclTerraform(struct!.releaseNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    video_url: {
      value: cdktf.stringToHclTerraform(struct!.videoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_acos: {
      value: cdktf.listMapperHcl(dataThunderTemplateAppsOperOperAvailableSupportedAcosToHclTerraform, true)(struct!.supportedAcos),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderTemplateAppsOperOperAvailableSupportedAcosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTemplateAppsOperOperAvailableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderTemplateAppsOperOperAvailable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryName = this._categoryName;
    }
    if (this._categorySlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorySlug = this._categorySlug;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._developer !== undefined) {
      hasAnyValues = true;
      internalValueResult.developer = this._developer;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._guideUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.guideUrl = this._guideUrl;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._releaseNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseNotes = this._releaseNotes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._videoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoUrl = this._videoUrl;
    }
    if (this._supportedAcos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedAcos = this._supportedAcos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTemplateAppsOperOperAvailable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryName = undefined;
      this._categorySlug = undefined;
      this._color = undefined;
      this._deleted = undefined;
      this._description = undefined;
      this._developer = undefined;
      this._fileName = undefined;
      this._guideUrl = undefined;
      this._icon = undefined;
      this._releaseNotes = undefined;
      this._type = undefined;
      this._version = undefined;
      this._videoUrl = undefined;
      this._supportedAcos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryName = value.categoryName;
      this._categorySlug = value.categorySlug;
      this._color = value.color;
      this._deleted = value.deleted;
      this._description = value.description;
      this._developer = value.developer;
      this._fileName = value.fileName;
      this._guideUrl = value.guideUrl;
      this._icon = value.icon;
      this._releaseNotes = value.releaseNotes;
      this._type = value.type;
      this._version = value.version;
      this._videoUrl = value.videoUrl;
      this._supportedAcos.internalValue = value.supportedAcos;
    }
  }

  // category_name - computed: false, optional: true, required: false
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  public resetCategoryName() {
    this._categoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // category_slug - computed: false, optional: true, required: false
  private _categorySlug?: string; 
  public get categorySlug() {
    return this.getStringAttribute('category_slug');
  }
  public set categorySlug(value: string) {
    this._categorySlug = value;
  }
  public resetCategorySlug() {
    this._categorySlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorySlugInput() {
    return this._categorySlug;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // deleted - computed: false, optional: true, required: false
  private _deleted?: string; 
  public get deleted() {
    return this.getStringAttribute('deleted');
  }
  public set deleted(value: string) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // developer - computed: false, optional: true, required: false
  private _developer?: string; 
  public get developer() {
    return this.getStringAttribute('developer');
  }
  public set developer(value: string) {
    this._developer = value;
  }
  public resetDeveloper() {
    this._developer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerInput() {
    return this._developer;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // guide_url - computed: false, optional: true, required: false
  private _guideUrl?: string; 
  public get guideUrl() {
    return this.getStringAttribute('guide_url');
  }
  public set guideUrl(value: string) {
    this._guideUrl = value;
  }
  public resetGuideUrl() {
    this._guideUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guideUrlInput() {
    return this._guideUrl;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // release_notes - computed: false, optional: true, required: false
  private _releaseNotes?: string; 
  public get releaseNotes() {
    return this.getStringAttribute('release_notes');
  }
  public set releaseNotes(value: string) {
    this._releaseNotes = value;
  }
  public resetReleaseNotes() {
    this._releaseNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNotesInput() {
    return this._releaseNotes;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // video_url - computed: false, optional: true, required: false
  private _videoUrl?: string; 
  public get videoUrl() {
    return this.getStringAttribute('video_url');
  }
  public set videoUrl(value: string) {
    this._videoUrl = value;
  }
  public resetVideoUrl() {
    this._videoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoUrlInput() {
    return this._videoUrl;
  }

  // supported_acos - computed: false, optional: true, required: false
  private _supportedAcos = new DataThunderTemplateAppsOperOperAvailableSupportedAcosList(this, "supported_acos", false);
  public get supportedAcos() {
    return this._supportedAcos;
  }
  public putSupportedAcos(value: DataThunderTemplateAppsOperOperAvailableSupportedAcos[] | cdktf.IResolvable) {
    this._supportedAcos.internalValue = value;
  }
  public resetSupportedAcos() {
    this._supportedAcos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedAcosInput() {
    return this._supportedAcos.internalValue;
  }
}

export class DataThunderTemplateAppsOperOperAvailableList extends cdktf.ComplexList {
  public internalValue? : DataThunderTemplateAppsOperOperAvailable[] | cdktf.IResolvable

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
  public get(index: number): DataThunderTemplateAppsOperOperAvailableOutputReference {
    return new DataThunderTemplateAppsOperOperAvailableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderTemplateAppsOperOperInstalledSupportedAcos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#version DataThunderTemplateAppsOper#version}
  */
  readonly version?: string;
}

export function dataThunderTemplateAppsOperOperInstalledSupportedAcosToTerraform(struct?: DataThunderTemplateAppsOperOperInstalledSupportedAcos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataThunderTemplateAppsOperOperInstalledSupportedAcosToHclTerraform(struct?: DataThunderTemplateAppsOperOperInstalledSupportedAcos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTemplateAppsOperOperInstalledSupportedAcosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderTemplateAppsOperOperInstalledSupportedAcos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTemplateAppsOperOperInstalledSupportedAcos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class DataThunderTemplateAppsOperOperInstalledSupportedAcosList extends cdktf.ComplexList {
  public internalValue? : DataThunderTemplateAppsOperOperInstalledSupportedAcos[] | cdktf.IResolvable

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
  public get(index: number): DataThunderTemplateAppsOperOperInstalledSupportedAcosOutputReference {
    return new DataThunderTemplateAppsOperOperInstalledSupportedAcosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderTemplateAppsOperOperInstalled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#category_name DataThunderTemplateAppsOper#category_name}
  */
  readonly categoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#category_slug DataThunderTemplateAppsOper#category_slug}
  */
  readonly categorySlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#color DataThunderTemplateAppsOper#color}
  */
  readonly color?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#deleted DataThunderTemplateAppsOper#deleted}
  */
  readonly deleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#description DataThunderTemplateAppsOper#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#developer DataThunderTemplateAppsOper#developer}
  */
  readonly developer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#file_name DataThunderTemplateAppsOper#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#guide_url DataThunderTemplateAppsOper#guide_url}
  */
  readonly guideUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#icon DataThunderTemplateAppsOper#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#release_notes DataThunderTemplateAppsOper#release_notes}
  */
  readonly releaseNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#type DataThunderTemplateAppsOper#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#version DataThunderTemplateAppsOper#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#video_url DataThunderTemplateAppsOper#video_url}
  */
  readonly videoUrl?: string;
  /**
  * supported_acos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#supported_acos DataThunderTemplateAppsOper#supported_acos}
  */
  readonly supportedAcos?: DataThunderTemplateAppsOperOperInstalledSupportedAcos[] | cdktf.IResolvable;
}

export function dataThunderTemplateAppsOperOperInstalledToTerraform(struct?: DataThunderTemplateAppsOperOperInstalled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_name: cdktf.stringToTerraform(struct!.categoryName),
    category_slug: cdktf.stringToTerraform(struct!.categorySlug),
    color: cdktf.stringToTerraform(struct!.color),
    deleted: cdktf.stringToTerraform(struct!.deleted),
    description: cdktf.stringToTerraform(struct!.description),
    developer: cdktf.stringToTerraform(struct!.developer),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    guide_url: cdktf.stringToTerraform(struct!.guideUrl),
    icon: cdktf.stringToTerraform(struct!.icon),
    release_notes: cdktf.stringToTerraform(struct!.releaseNotes),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    video_url: cdktf.stringToTerraform(struct!.videoUrl),
    supported_acos: cdktf.listMapper(dataThunderTemplateAppsOperOperInstalledSupportedAcosToTerraform, true)(struct!.supportedAcos),
  }
}


export function dataThunderTemplateAppsOperOperInstalledToHclTerraform(struct?: DataThunderTemplateAppsOperOperInstalled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_name: {
      value: cdktf.stringToHclTerraform(struct!.categoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_slug: {
      value: cdktf.stringToHclTerraform(struct!.categorySlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deleted: {
      value: cdktf.stringToHclTerraform(struct!.deleted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    developer: {
      value: cdktf.stringToHclTerraform(struct!.developer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guide_url: {
      value: cdktf.stringToHclTerraform(struct!.guideUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    release_notes: {
      value: cdktf.stringToHclTerraform(struct!.releaseNotes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    video_url: {
      value: cdktf.stringToHclTerraform(struct!.videoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_acos: {
      value: cdktf.listMapperHcl(dataThunderTemplateAppsOperOperInstalledSupportedAcosToHclTerraform, true)(struct!.supportedAcos),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderTemplateAppsOperOperInstalledSupportedAcosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTemplateAppsOperOperInstalledOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderTemplateAppsOperOperInstalled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryName = this._categoryName;
    }
    if (this._categorySlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.categorySlug = this._categorySlug;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._deleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleted = this._deleted;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._developer !== undefined) {
      hasAnyValues = true;
      internalValueResult.developer = this._developer;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._guideUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.guideUrl = this._guideUrl;
    }
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._releaseNotes !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseNotes = this._releaseNotes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._videoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoUrl = this._videoUrl;
    }
    if (this._supportedAcos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedAcos = this._supportedAcos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTemplateAppsOperOperInstalled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryName = undefined;
      this._categorySlug = undefined;
      this._color = undefined;
      this._deleted = undefined;
      this._description = undefined;
      this._developer = undefined;
      this._fileName = undefined;
      this._guideUrl = undefined;
      this._icon = undefined;
      this._releaseNotes = undefined;
      this._type = undefined;
      this._version = undefined;
      this._videoUrl = undefined;
      this._supportedAcos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryName = value.categoryName;
      this._categorySlug = value.categorySlug;
      this._color = value.color;
      this._deleted = value.deleted;
      this._description = value.description;
      this._developer = value.developer;
      this._fileName = value.fileName;
      this._guideUrl = value.guideUrl;
      this._icon = value.icon;
      this._releaseNotes = value.releaseNotes;
      this._type = value.type;
      this._version = value.version;
      this._videoUrl = value.videoUrl;
      this._supportedAcos.internalValue = value.supportedAcos;
    }
  }

  // category_name - computed: false, optional: true, required: false
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  public resetCategoryName() {
    this._categoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // category_slug - computed: false, optional: true, required: false
  private _categorySlug?: string; 
  public get categorySlug() {
    return this.getStringAttribute('category_slug');
  }
  public set categorySlug(value: string) {
    this._categorySlug = value;
  }
  public resetCategorySlug() {
    this._categorySlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categorySlugInput() {
    return this._categorySlug;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // deleted - computed: false, optional: true, required: false
  private _deleted?: string; 
  public get deleted() {
    return this.getStringAttribute('deleted');
  }
  public set deleted(value: string) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // developer - computed: false, optional: true, required: false
  private _developer?: string; 
  public get developer() {
    return this.getStringAttribute('developer');
  }
  public set developer(value: string) {
    this._developer = value;
  }
  public resetDeveloper() {
    this._developer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerInput() {
    return this._developer;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // guide_url - computed: false, optional: true, required: false
  private _guideUrl?: string; 
  public get guideUrl() {
    return this.getStringAttribute('guide_url');
  }
  public set guideUrl(value: string) {
    this._guideUrl = value;
  }
  public resetGuideUrl() {
    this._guideUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guideUrlInput() {
    return this._guideUrl;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // release_notes - computed: false, optional: true, required: false
  private _releaseNotes?: string; 
  public get releaseNotes() {
    return this.getStringAttribute('release_notes');
  }
  public set releaseNotes(value: string) {
    this._releaseNotes = value;
  }
  public resetReleaseNotes() {
    this._releaseNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNotesInput() {
    return this._releaseNotes;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // video_url - computed: false, optional: true, required: false
  private _videoUrl?: string; 
  public get videoUrl() {
    return this.getStringAttribute('video_url');
  }
  public set videoUrl(value: string) {
    this._videoUrl = value;
  }
  public resetVideoUrl() {
    this._videoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoUrlInput() {
    return this._videoUrl;
  }

  // supported_acos - computed: false, optional: true, required: false
  private _supportedAcos = new DataThunderTemplateAppsOperOperInstalledSupportedAcosList(this, "supported_acos", false);
  public get supportedAcos() {
    return this._supportedAcos;
  }
  public putSupportedAcos(value: DataThunderTemplateAppsOperOperInstalledSupportedAcos[] | cdktf.IResolvable) {
    this._supportedAcos.internalValue = value;
  }
  public resetSupportedAcos() {
    this._supportedAcos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedAcosInput() {
    return this._supportedAcos.internalValue;
  }
}

export class DataThunderTemplateAppsOperOperInstalledList extends cdktf.ComplexList {
  public internalValue? : DataThunderTemplateAppsOperOperInstalled[] | cdktf.IResolvable

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
  public get(index: number): DataThunderTemplateAppsOperOperInstalledOutputReference {
    return new DataThunderTemplateAppsOperOperInstalledOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderTemplateAppsOperOper {
  /**
  * available block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#available DataThunderTemplateAppsOper#available}
  */
  readonly available?: DataThunderTemplateAppsOperOperAvailable[] | cdktf.IResolvable;
  /**
  * installed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#installed DataThunderTemplateAppsOper#installed}
  */
  readonly installed?: DataThunderTemplateAppsOperOperInstalled[] | cdktf.IResolvable;
}

export function dataThunderTemplateAppsOperOperToTerraform(struct?: DataThunderTemplateAppsOperOperOutputReference | DataThunderTemplateAppsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    available: cdktf.listMapper(dataThunderTemplateAppsOperOperAvailableToTerraform, true)(struct!.available),
    installed: cdktf.listMapper(dataThunderTemplateAppsOperOperInstalledToTerraform, true)(struct!.installed),
  }
}


export function dataThunderTemplateAppsOperOperToHclTerraform(struct?: DataThunderTemplateAppsOperOperOutputReference | DataThunderTemplateAppsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    available: {
      value: cdktf.listMapperHcl(dataThunderTemplateAppsOperOperAvailableToHclTerraform, true)(struct!.available),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderTemplateAppsOperOperAvailableList",
    },
    installed: {
      value: cdktf.listMapperHcl(dataThunderTemplateAppsOperOperInstalledToHclTerraform, true)(struct!.installed),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderTemplateAppsOperOperInstalledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderTemplateAppsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderTemplateAppsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._available?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.available = this._available?.internalValue;
    }
    if (this._installed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installed = this._installed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderTemplateAppsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._available.internalValue = undefined;
      this._installed.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._available.internalValue = value.available;
      this._installed.internalValue = value.installed;
    }
  }

  // available - computed: false, optional: true, required: false
  private _available = new DataThunderTemplateAppsOperOperAvailableList(this, "available", false);
  public get available() {
    return this._available;
  }
  public putAvailable(value: DataThunderTemplateAppsOperOperAvailable[] | cdktf.IResolvable) {
    this._available.internalValue = value;
  }
  public resetAvailable() {
    this._available.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInput() {
    return this._available.internalValue;
  }

  // installed - computed: false, optional: true, required: false
  private _installed = new DataThunderTemplateAppsOperOperInstalledList(this, "installed", false);
  public get installed() {
    return this._installed;
  }
  public putInstalled(value: DataThunderTemplateAppsOperOperInstalled[] | cdktf.IResolvable) {
    this._installed.internalValue = value;
  }
  public resetInstalled() {
    this._installed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installedInput() {
    return this._installed.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper thunder_template_apps_oper}
*/
export class DataThunderTemplateAppsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_apps_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderTemplateAppsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderTemplateAppsOper to import
  * @param importFromId The id of the existing DataThunderTemplateAppsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderTemplateAppsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_apps_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/template_apps_oper thunder_template_apps_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderTemplateAppsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderTemplateAppsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_apps_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderTemplateAppsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderTemplateAppsOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderTemplateAppsOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderTemplateAppsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderTemplateAppsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
