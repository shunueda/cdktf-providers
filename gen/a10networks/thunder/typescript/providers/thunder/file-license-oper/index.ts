// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileLicenseOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#id FileLicenseOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#oper FileLicenseOper#oper}
  */
  readonly oper?: FileLicenseOperOper;
}
export interface FileLicenseOperOperFeatureListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#bandwidth FileLicenseOper#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#expire_date FileLicenseOper#expire_date}
  */
  readonly expireDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#feature_installed FileLicenseOper#feature_installed}
  */
  readonly featureInstalled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#notice FileLicenseOper#notice}
  */
  readonly notice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#sn FileLicenseOper#sn}
  */
  readonly sn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#temporary FileLicenseOper#temporary}
  */
  readonly temporary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#version FileLicenseOper#version}
  */
  readonly version?: string;
}

export function fileLicenseOperOperFeatureListStructToTerraform(struct?: FileLicenseOperOperFeatureListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    expire_date: cdktf.stringToTerraform(struct!.expireDate),
    feature_installed: cdktf.stringToTerraform(struct!.featureInstalled),
    notice: cdktf.stringToTerraform(struct!.notice),
    sn: cdktf.stringToTerraform(struct!.sn),
    temporary: cdktf.stringToTerraform(struct!.temporary),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fileLicenseOperOperFeatureListStructToHclTerraform(struct?: FileLicenseOperOperFeatureListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_date: {
      value: cdktf.stringToHclTerraform(struct!.expireDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_installed: {
      value: cdktf.stringToHclTerraform(struct!.featureInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notice: {
      value: cdktf.stringToHclTerraform(struct!.notice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sn: {
      value: cdktf.stringToHclTerraform(struct!.sn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary: {
      value: cdktf.stringToHclTerraform(struct!.temporary),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileLicenseOperOperFeatureListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileLicenseOperOperFeatureListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._expireDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireDate = this._expireDate;
    }
    if (this._featureInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureInstalled = this._featureInstalled;
    }
    if (this._notice !== undefined) {
      hasAnyValues = true;
      internalValueResult.notice = this._notice;
    }
    if (this._sn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sn = this._sn;
    }
    if (this._temporary !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporary = this._temporary;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileLicenseOperOperFeatureListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._expireDate = undefined;
      this._featureInstalled = undefined;
      this._notice = undefined;
      this._sn = undefined;
      this._temporary = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._expireDate = value.expireDate;
      this._featureInstalled = value.featureInstalled;
      this._notice = value.notice;
      this._sn = value.sn;
      this._temporary = value.temporary;
      this._version = value.version;
    }
  }

  // bandwidth - computed: false, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // expire_date - computed: false, optional: true, required: false
  private _expireDate?: string; 
  public get expireDate() {
    return this.getStringAttribute('expire_date');
  }
  public set expireDate(value: string) {
    this._expireDate = value;
  }
  public resetExpireDate() {
    this._expireDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireDateInput() {
    return this._expireDate;
  }

  // feature_installed - computed: false, optional: true, required: false
  private _featureInstalled?: string; 
  public get featureInstalled() {
    return this.getStringAttribute('feature_installed');
  }
  public set featureInstalled(value: string) {
    this._featureInstalled = value;
  }
  public resetFeatureInstalled() {
    this._featureInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInstalledInput() {
    return this._featureInstalled;
  }

  // notice - computed: false, optional: true, required: false
  private _notice?: string; 
  public get notice() {
    return this.getStringAttribute('notice');
  }
  public set notice(value: string) {
    this._notice = value;
  }
  public resetNotice() {
    this._notice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeInput() {
    return this._notice;
  }

  // sn - computed: false, optional: true, required: false
  private _sn?: string; 
  public get sn() {
    return this.getStringAttribute('sn');
  }
  public set sn(value: string) {
    this._sn = value;
  }
  public resetSn() {
    this._sn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snInput() {
    return this._sn;
  }

  // temporary - computed: false, optional: true, required: false
  private _temporary?: string; 
  public get temporary() {
    return this.getStringAttribute('temporary');
  }
  public set temporary(value: string) {
    this._temporary = value;
  }
  public resetTemporary() {
    this._temporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryInput() {
    return this._temporary;
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

export class FileLicenseOperOperFeatureListStructList extends cdktf.ComplexList {
  public internalValue? : FileLicenseOperOperFeatureListStruct[] | cdktf.IResolvable

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
  public get(index: number): FileLicenseOperOperFeatureListStructOutputReference {
    return new FileLicenseOperOperFeatureListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileLicenseOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#file_name FileLicenseOper#file_name}
  */
  readonly fileName?: string;
}

export function fileLicenseOperOperFileListStructToTerraform(struct?: FileLicenseOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
  }
}


export function fileLicenseOperOperFileListStructToHclTerraform(struct?: FileLicenseOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileLicenseOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileLicenseOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileLicenseOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileName = value.fileName;
    }
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
}

export class FileLicenseOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : FileLicenseOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): FileLicenseOperOperFileListStructOutputReference {
    return new FileLicenseOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileLicenseOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#host_id FileLicenseOper#host_id}
  */
  readonly hostId?: string;
  /**
  * feature_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#feature_list FileLicenseOper#feature_list}
  */
  readonly featureList?: FileLicenseOperOperFeatureListStruct[] | cdktf.IResolvable;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#file_list FileLicenseOper#file_list}
  */
  readonly fileList?: FileLicenseOperOperFileListStruct[] | cdktf.IResolvable;
}

export function fileLicenseOperOperToTerraform(struct?: FileLicenseOperOperOutputReference | FileLicenseOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_id: cdktf.stringToTerraform(struct!.hostId),
    feature_list: cdktf.listMapper(fileLicenseOperOperFeatureListStructToTerraform, true)(struct!.featureList),
    file_list: cdktf.listMapper(fileLicenseOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function fileLicenseOperOperToHclTerraform(struct?: FileLicenseOperOperOutputReference | FileLicenseOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_list: {
      value: cdktf.listMapperHcl(fileLicenseOperOperFeatureListStructToHclTerraform, true)(struct!.featureList),
      isBlock: true,
      type: "list",
      storageClassType: "FileLicenseOperOperFeatureListStructList",
    },
    file_list: {
      value: cdktf.listMapperHcl(fileLicenseOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "FileLicenseOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileLicenseOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FileLicenseOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._featureList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureList = this._featureList?.internalValue;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileLicenseOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostId = undefined;
      this._featureList.internalValue = undefined;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostId = value.hostId;
      this._featureList.internalValue = value.featureList;
      this._fileList.internalValue = value.fileList;
    }
  }

  // host_id - computed: false, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // feature_list - computed: false, optional: true, required: false
  private _featureList = new FileLicenseOperOperFeatureListStructList(this, "feature_list", false);
  public get featureList() {
    return this._featureList;
  }
  public putFeatureList(value: FileLicenseOperOperFeatureListStruct[] | cdktf.IResolvable) {
    this._featureList.internalValue = value;
  }
  public resetFeatureList() {
    this._featureList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureListInput() {
    return this._featureList.internalValue;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new FileLicenseOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: FileLicenseOperOperFileListStruct[] | cdktf.IResolvable) {
    this._fileList.internalValue = value;
  }
  public resetFileList() {
    this._fileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileListInput() {
    return this._fileList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper thunder_file_license_oper}
*/
export class FileLicenseOper extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_file_license_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FileLicenseOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FileLicenseOper to import
  * @param importFromId The id of the existing FileLicenseOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FileLicenseOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_file_license_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/file_license_oper thunder_file_license_oper} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileLicenseOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FileLicenseOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_file_license_oper',
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
  private _oper = new FileLicenseOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: FileLicenseOperOper) {
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
      oper: fileLicenseOperOperToTerraform(this._oper.internalValue),
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
        value: fileLicenseOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileLicenseOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
