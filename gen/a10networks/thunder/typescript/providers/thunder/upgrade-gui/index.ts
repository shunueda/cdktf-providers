// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UpgradeGuiConfig extends cdktf.TerraformMetaArguments {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#file_url UpgradeGui#file_url}
  */
  readonly fileUrl?: string;
  /**
  * image file from AXAPI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#gui_upload UpgradeGui#gui_upload}
  */
  readonly guiUpload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#id UpgradeGui#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'pri': Primary image; 'sec': Secondary image;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#image UpgradeGui#image}
  */
  readonly image?: string;
  /**
  * image file from AXAPI,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#image_file UpgradeGui#image_file}
  */
  readonly imageFile?: string;
  /**
  * Local GUI image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#local UpgradeGui#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#remote_url UpgradeGui#remote_url}
  */
  readonly remoteUrl?: string;
  /**
  * Rollback to a specific local GUI image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#rollback UpgradeGui#rollback}
  */
  readonly rollback?: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#source_ip_address UpgradeGui#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * Upload GUI image from remote
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#upload UpgradeGui#upload}
  */
  readonly upload?: number;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#use_mgmt_port UpgradeGui#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#delete UpgradeGui#delete}
  */
  readonly delete?: UpgradeGuiDelete[] | cdktf.IResolvable;
}
export interface UpgradeGuiDelete {
  /**
  * Delete one local GUI image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#file UpgradeGui#file}
  */
  readonly file?: string;
}

export function upgradeGuiDeleteToTerraform(struct?: UpgradeGuiDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function upgradeGuiDeleteToHclTerraform(struct?: UpgradeGuiDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UpgradeGuiDeleteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UpgradeGuiDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UpgradeGuiDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }
}

export class UpgradeGuiDeleteList extends cdktf.ComplexList {
  public internalValue? : UpgradeGuiDelete[] | cdktf.IResolvable

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
  public get(index: number): UpgradeGuiDeleteOutputReference {
    return new UpgradeGuiDeleteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui thunder_upgrade_gui}
*/
export class UpgradeGui extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_upgrade_gui";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UpgradeGui resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UpgradeGui to import
  * @param importFromId The id of the existing UpgradeGui that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UpgradeGui to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_upgrade_gui", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/upgrade_gui thunder_upgrade_gui} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UpgradeGuiConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UpgradeGuiConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_upgrade_gui',
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
    this._fileUrl = config.fileUrl;
    this._guiUpload = config.guiUpload;
    this._id = config.id;
    this._image = config.image;
    this._imageFile = config.imageFile;
    this._local = config.local;
    this._remoteUrl = config.remoteUrl;
    this._rollback = config.rollback;
    this._sourceIpAddress = config.sourceIpAddress;
    this._upload = config.upload;
    this._useMgmtPort = config.useMgmtPort;
    this._delete.internalValue = config.delete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // gui_upload - computed: false, optional: true, required: false
  private _guiUpload?: number; 
  public get guiUpload() {
    return this.getNumberAttribute('gui_upload');
  }
  public set guiUpload(value: number) {
    this._guiUpload = value;
  }
  public resetGuiUpload() {
    this._guiUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiUploadInput() {
    return this._guiUpload;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_file - computed: false, optional: true, required: false
  private _imageFile?: string; 
  public get imageFile() {
    return this.getStringAttribute('image_file');
  }
  public set imageFile(value: string) {
    this._imageFile = value;
  }
  public resetImageFile() {
    this._imageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFileInput() {
    return this._imageFile;
  }

  // local - computed: false, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // remote_url - computed: false, optional: true, required: false
  private _remoteUrl?: string; 
  public get remoteUrl() {
    return this.getStringAttribute('remote_url');
  }
  public set remoteUrl(value: string) {
    this._remoteUrl = value;
  }
  public resetRemoteUrl() {
    this._remoteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteUrlInput() {
    return this._remoteUrl;
  }

  // rollback - computed: false, optional: true, required: false
  private _rollback?: string; 
  public get rollback() {
    return this.getStringAttribute('rollback');
  }
  public set rollback(value: string) {
    this._rollback = value;
  }
  public resetRollback() {
    this._rollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }

  // source_ip_address - computed: false, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // upload - computed: false, optional: true, required: false
  private _upload?: number; 
  public get upload() {
    return this.getNumberAttribute('upload');
  }
  public set upload(value: number) {
    this._upload = value;
  }
  public resetUpload() {
    this._upload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // delete - computed: false, optional: true, required: false
  private _delete = new UpgradeGuiDeleteList(this, "delete", false);
  public get delete() {
    return this._delete;
  }
  public putDelete(value: UpgradeGuiDelete[] | cdktf.IResolvable) {
    this._delete.internalValue = value;
  }
  public resetDelete() {
    this._delete.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_url: cdktf.stringToTerraform(this._fileUrl),
      gui_upload: cdktf.numberToTerraform(this._guiUpload),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      image_file: cdktf.stringToTerraform(this._imageFile),
      local: cdktf.stringToTerraform(this._local),
      remote_url: cdktf.stringToTerraform(this._remoteUrl),
      rollback: cdktf.stringToTerraform(this._rollback),
      source_ip_address: cdktf.stringToTerraform(this._sourceIpAddress),
      upload: cdktf.numberToTerraform(this._upload),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      delete: cdktf.listMapper(upgradeGuiDeleteToTerraform, true)(this._delete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_url: {
        value: cdktf.stringToHclTerraform(this._fileUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui_upload: {
        value: cdktf.numberToHclTerraform(this._guiUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_file: {
        value: cdktf.stringToHclTerraform(this._imageFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local: {
        value: cdktf.stringToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_url: {
        value: cdktf.stringToHclTerraform(this._remoteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollback: {
        value: cdktf.stringToHclTerraform(this._rollback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_address: {
        value: cdktf.stringToHclTerraform(this._sourceIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload: {
        value: cdktf.numberToHclTerraform(this._upload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete: {
        value: cdktf.listMapperHcl(upgradeGuiDeleteToHclTerraform, true)(this._delete.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UpgradeGuiDeleteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
