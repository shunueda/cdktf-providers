// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3PluginImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#id Vns3PluginImages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#last_updated Vns3PluginImages#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#image Vns3PluginImages#image}
  */
  readonly image: Vns3PluginImagesImage[] | cdktf.IResolvable;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#vns3 Vns3PluginImages#vns3}
  */
  readonly vns3?: Vns3PluginImagesVns3;
}
export interface Vns3PluginImagesImage {
  /**
  * Upload docker file or zipped docker context directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#buildfile Vns3PluginImages#buildfile}
  */
  readonly buildfile?: string;
  /**
  * URL of a dockerfile that will be used to build the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#buildurl Vns3PluginImages#buildurl}
  */
  readonly buildurl?: string;
  /**
  * Comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#comment Vns3PluginImages#comment}
  */
  readonly comment?: string;
  /**
  * State of image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#created Vns3PluginImages#created}
  */
  readonly created?: string;
  /**
  * Description of deployed image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#description Vns3PluginImages#description}
  */
  readonly description?: string;
  /**
  * Id of deployed image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#id Vns3PluginImages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of deployed image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#image_name Vns3PluginImages#image_name}
  */
  readonly imageName: string;
  /**
  * Upload image file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#imagefile Vns3PluginImages#imagefile}
  */
  readonly imagefile?: string;
  /**
  * Uuid of imported image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#import_uuid Vns3PluginImages#import_uuid}
  */
  readonly importUuid?: string;
  /**
  * Local build file to create new image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#localbuild Vns3PluginImages#localbuild}
  */
  readonly localbuild?: string;
  /**
  * Local image to tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#localimage Vns3PluginImages#localimage}
  */
  readonly localimage?: string;
  /**
  * Current status of upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#status Vns3PluginImages#status}
  */
  readonly status?: string;
  /**
  * Status response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#status_msg Vns3PluginImages#status_msg}
  */
  readonly statusMsg?: string;
  /**
  * Image Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#tag_name Vns3PluginImages#tag_name}
  */
  readonly tagName?: string;
  /**
  * URL of the image file to be imported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#url Vns3PluginImages#url}
  */
  readonly url?: string;
}

export function vns3PluginImagesImageToTerraform(struct?: Vns3PluginImagesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buildfile: cdktf.stringToTerraform(struct!.buildfile),
    buildurl: cdktf.stringToTerraform(struct!.buildurl),
    comment: cdktf.stringToTerraform(struct!.comment),
    created: cdktf.stringToTerraform(struct!.created),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    imagefile: cdktf.stringToTerraform(struct!.imagefile),
    import_uuid: cdktf.stringToTerraform(struct!.importUuid),
    localbuild: cdktf.stringToTerraform(struct!.localbuild),
    localimage: cdktf.stringToTerraform(struct!.localimage),
    status: cdktf.stringToTerraform(struct!.status),
    status_msg: cdktf.stringToTerraform(struct!.statusMsg),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function vns3PluginImagesImageToHclTerraform(struct?: Vns3PluginImagesImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buildfile: {
      value: cdktf.stringToHclTerraform(struct!.buildfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buildurl: {
      value: cdktf.stringToHclTerraform(struct!.buildurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagefile: {
      value: cdktf.stringToHclTerraform(struct!.imagefile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_uuid: {
      value: cdktf.stringToHclTerraform(struct!.importUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localbuild: {
      value: cdktf.stringToHclTerraform(struct!.localbuild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localimage: {
      value: cdktf.stringToHclTerraform(struct!.localimage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_msg: {
      value: cdktf.stringToHclTerraform(struct!.statusMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3PluginImagesImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Vns3PluginImagesImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildfile = this._buildfile;
    }
    if (this._buildurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildurl = this._buildurl;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imagefile !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagefile = this._imagefile;
    }
    if (this._importUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.importUuid = this._importUuid;
    }
    if (this._localbuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.localbuild = this._localbuild;
    }
    if (this._localimage !== undefined) {
      hasAnyValues = true;
      internalValueResult.localimage = this._localimage;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusMsg = this._statusMsg;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3PluginImagesImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildfile = undefined;
      this._buildurl = undefined;
      this._comment = undefined;
      this._created = undefined;
      this._description = undefined;
      this._id = undefined;
      this._imageName = undefined;
      this._imagefile = undefined;
      this._importUuid = undefined;
      this._localbuild = undefined;
      this._localimage = undefined;
      this._status = undefined;
      this._statusMsg = undefined;
      this._tagName = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildfile = value.buildfile;
      this._buildurl = value.buildurl;
      this._comment = value.comment;
      this._created = value.created;
      this._description = value.description;
      this._id = value.id;
      this._imageName = value.imageName;
      this._imagefile = value.imagefile;
      this._importUuid = value.importUuid;
      this._localbuild = value.localbuild;
      this._localimage = value.localimage;
      this._status = value.status;
      this._statusMsg = value.statusMsg;
      this._tagName = value.tagName;
      this._url = value.url;
    }
  }

  // buildfile - computed: false, optional: true, required: false
  private _buildfile?: string; 
  public get buildfile() {
    return this.getStringAttribute('buildfile');
  }
  public set buildfile(value: string) {
    this._buildfile = value;
  }
  public resetBuildfile() {
    this._buildfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildfileInput() {
    return this._buildfile;
  }

  // buildurl - computed: false, optional: true, required: false
  private _buildurl?: string; 
  public get buildurl() {
    return this.getStringAttribute('buildurl');
  }
  public set buildurl(value: string) {
    this._buildurl = value;
  }
  public resetBuildurl() {
    this._buildurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildurlInput() {
    return this._buildurl;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // imagefile - computed: false, optional: true, required: false
  private _imagefile?: string; 
  public get imagefile() {
    return this.getStringAttribute('imagefile');
  }
  public set imagefile(value: string) {
    this._imagefile = value;
  }
  public resetImagefile() {
    this._imagefile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagefileInput() {
    return this._imagefile;
  }

  // import_id - computed: true, optional: false, required: false
  public get importId() {
    return this.getStringAttribute('import_id');
  }

  // import_uuid - computed: true, optional: true, required: false
  private _importUuid?: string; 
  public get importUuid() {
    return this.getStringAttribute('import_uuid');
  }
  public set importUuid(value: string) {
    this._importUuid = value;
  }
  public resetImportUuid() {
    this._importUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importUuidInput() {
    return this._importUuid;
  }

  // localbuild - computed: false, optional: true, required: false
  private _localbuild?: string; 
  public get localbuild() {
    return this.getStringAttribute('localbuild');
  }
  public set localbuild(value: string) {
    this._localbuild = value;
  }
  public resetLocalbuild() {
    this._localbuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localbuildInput() {
    return this._localbuild;
  }

  // localimage - computed: false, optional: true, required: false
  private _localimage?: string; 
  public get localimage() {
    return this.getStringAttribute('localimage');
  }
  public set localimage(value: string) {
    this._localimage = value;
  }
  public resetLocalimage() {
    this._localimage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localimageInput() {
    return this._localimage;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_msg - computed: true, optional: true, required: false
  private _statusMsg?: string; 
  public get statusMsg() {
    return this.getStringAttribute('status_msg');
  }
  public set statusMsg(value: string) {
    this._statusMsg = value;
  }
  public resetStatusMsg() {
    this._statusMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusMsgInput() {
    return this._statusMsg;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class Vns3PluginImagesImageList extends cdktf.ComplexList {
  public internalValue? : Vns3PluginImagesImage[] | cdktf.IResolvable

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
  public get(index: number): Vns3PluginImagesImageOutputReference {
    return new Vns3PluginImagesImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Vns3PluginImagesVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#api_token Vns3PluginImages#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#host Vns3PluginImages#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#password Vns3PluginImages#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#timeout Vns3PluginImages#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#username Vns3PluginImages#username}
  */
  readonly username?: string;
}

export function vns3PluginImagesVns3ToTerraform(struct?: Vns3PluginImagesVns3OutputReference | Vns3PluginImagesVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vns3PluginImagesVns3ToHclTerraform(struct?: Vns3PluginImagesVns3OutputReference | Vns3PluginImagesVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3PluginImagesVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3PluginImagesVns3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3PluginImagesVns3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._host = undefined;
      this._password = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._host = value.host;
      this._password = value.password;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images cohesivenet_vns3_plugin_images}
*/
export class Vns3PluginImages extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_plugin_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3PluginImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3PluginImages to import
  * @param importFromId The id of the existing Vns3PluginImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3PluginImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_plugin_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_plugin_images cohesivenet_vns3_plugin_images} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3PluginImagesConfig
  */
  public constructor(scope: Construct, id: string, config: Vns3PluginImagesConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_plugin_images',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
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
    this._lastUpdated = config.lastUpdated;
    this._image.internalValue = config.image;
    this._vns3.internalValue = config.vns3;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // image - computed: false, optional: false, required: true
  private _image = new Vns3PluginImagesImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: Vns3PluginImagesImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3PluginImagesVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3PluginImagesVns3) {
    this._vns3.internalValue = value;
  }
  public resetVns3() {
    this._vns3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      image: cdktf.listMapper(vns3PluginImagesImageToTerraform, true)(this._image.internalValue),
      vns3: vns3PluginImagesVns3ToTerraform(this._vns3.internalValue),
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
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.listMapperHcl(vns3PluginImagesImageToHclTerraform, true)(this._image.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Vns3PluginImagesImageList",
      },
      vns3: {
        value: vns3PluginImagesVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3PluginImagesVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
