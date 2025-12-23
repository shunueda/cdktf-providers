// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PoolgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#cloud_config_cksum Poolgroup#cloud_config_cksum}
  */
  readonly cloudConfigCksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#cloud_ref Poolgroup#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#created_by Poolgroup#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#deactivate_primary_pool_on_down Poolgroup#deactivate_primary_pool_on_down}
  */
  readonly deactivatePrimaryPoolOnDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#deployment_policy_ref Poolgroup#deployment_policy_ref}
  */
  readonly deploymentPolicyRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#description Poolgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#id Poolgroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#implicit_priority_labels Poolgroup#implicit_priority_labels}
  */
  readonly implicitPriorityLabels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#min_servers Poolgroup#min_servers}
  */
  readonly minServers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#name Poolgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#priority_labels_ref Poolgroup#priority_labels_ref}
  */
  readonly priorityLabelsRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#service_metadata Poolgroup#service_metadata}
  */
  readonly serviceMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#tenant_ref Poolgroup#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#uuid Poolgroup#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#configpb_attributes Poolgroup#configpb_attributes}
  */
  readonly configpbAttributes?: PoolgroupConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * fail_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#fail_action Poolgroup#fail_action}
  */
  readonly failAction?: PoolgroupFailAction[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#markers Poolgroup#markers}
  */
  readonly markers?: PoolgroupMarkers[] | cdktf.IResolvable;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#members Poolgroup#members}
  */
  readonly members?: PoolgroupMembers[] | cdktf.IResolvable;
}
export interface PoolgroupConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#version Poolgroup#version}
  */
  readonly version?: string;
}

export function poolgroupConfigpbAttributesToTerraform(struct?: PoolgroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function poolgroupConfigpbAttributesToHclTerraform(struct?: PoolgroupConfigpbAttributes | cdktf.IResolvable): any {
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

export class PoolgroupConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PoolgroupConfigpbAttributes | cdktf.IResolvable | undefined) {
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

  // version - computed: true, optional: true, required: false
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

export class PoolgroupConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : PoolgroupConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupConfigpbAttributesOutputReference {
    return new PoolgroupConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupFailActionLocalRspFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#content_type Poolgroup#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#file_content Poolgroup#file_content}
  */
  readonly fileContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#file_length Poolgroup#file_length}
  */
  readonly fileLength?: string;
}

export function poolgroupFailActionLocalRspFileToTerraform(struct?: PoolgroupFailActionLocalRspFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    file_content: cdktf.stringToTerraform(struct!.fileContent),
    file_length: cdktf.stringToTerraform(struct!.fileLength),
  }
}


export function poolgroupFailActionLocalRspFileToHclTerraform(struct?: PoolgroupFailActionLocalRspFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_content: {
      value: cdktf.stringToHclTerraform(struct!.fileContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_length: {
      value: cdktf.stringToHclTerraform(struct!.fileLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupFailActionLocalRspFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupFailActionLocalRspFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._fileContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContent = this._fileContent;
    }
    if (this._fileLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileLength = this._fileLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupFailActionLocalRspFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._fileContent = undefined;
      this._fileLength = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._fileContent = value.fileContent;
      this._fileLength = value.fileLength;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // file_content - computed: false, optional: false, required: true
  private _fileContent?: string; 
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }
  public set fileContent(value: string) {
    this._fileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentInput() {
    return this._fileContent;
  }

  // file_length - computed: true, optional: true, required: false
  private _fileLength?: string; 
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
  public set fileLength(value: string) {
    this._fileLength = value;
  }
  public resetFileLength() {
    this._fileLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileLengthInput() {
    return this._fileLength;
  }
}

export class PoolgroupFailActionLocalRspFileList extends cdktf.ComplexList {
  public internalValue? : PoolgroupFailActionLocalRspFile[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupFailActionLocalRspFileOutputReference {
    return new PoolgroupFailActionLocalRspFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupFailActionLocalRsp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#status_code Poolgroup#status_code}
  */
  readonly statusCode?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#file Poolgroup#file}
  */
  readonly file?: PoolgroupFailActionLocalRspFile[] | cdktf.IResolvable;
}

export function poolgroupFailActionLocalRspToTerraform(struct?: PoolgroupFailActionLocalRsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    file: cdktf.listMapper(poolgroupFailActionLocalRspFileToTerraform, true)(struct!.file),
  }
}


export function poolgroupFailActionLocalRspToHclTerraform(struct?: PoolgroupFailActionLocalRsp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.listMapperHcl(poolgroupFailActionLocalRspFileToHclTerraform, true)(struct!.file),
      isBlock: true,
      type: "set",
      storageClassType: "PoolgroupFailActionLocalRspFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupFailActionLocalRspOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupFailActionLocalRsp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupFailActionLocalRsp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusCode = undefined;
      this._file.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusCode = value.statusCode;
      this._file.internalValue = value.file;
    }
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // file - computed: false, optional: true, required: false
  private _file = new PoolgroupFailActionLocalRspFileList(this, "file", true);
  public get file() {
    return this._file;
  }
  public putFile(value: PoolgroupFailActionLocalRspFile[] | cdktf.IResolvable) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}

export class PoolgroupFailActionLocalRspList extends cdktf.ComplexList {
  public internalValue? : PoolgroupFailActionLocalRsp[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupFailActionLocalRspOutputReference {
    return new PoolgroupFailActionLocalRspOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupFailActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#host Poolgroup#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#path Poolgroup#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#protocol Poolgroup#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#query Poolgroup#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#status_code Poolgroup#status_code}
  */
  readonly statusCode?: string;
}

export function poolgroupFailActionRedirectToTerraform(struct?: PoolgroupFailActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function poolgroupFailActionRedirectToHclTerraform(struct?: PoolgroupFailActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupFailActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupFailActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupFailActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._path = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._path = value.path;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class PoolgroupFailActionRedirectList extends cdktf.ComplexList {
  public internalValue? : PoolgroupFailActionRedirect[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupFailActionRedirectOutputReference {
    return new PoolgroupFailActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupFailAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#type Poolgroup#type}
  */
  readonly type: string;
  /**
  * local_rsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#local_rsp Poolgroup#local_rsp}
  */
  readonly localRsp?: PoolgroupFailActionLocalRsp[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#redirect Poolgroup#redirect}
  */
  readonly redirect?: PoolgroupFailActionRedirect[] | cdktf.IResolvable;
}

export function poolgroupFailActionToTerraform(struct?: PoolgroupFailAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    local_rsp: cdktf.listMapper(poolgroupFailActionLocalRspToTerraform, true)(struct!.localRsp),
    redirect: cdktf.listMapper(poolgroupFailActionRedirectToTerraform, true)(struct!.redirect),
  }
}


export function poolgroupFailActionToHclTerraform(struct?: PoolgroupFailAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_rsp: {
      value: cdktf.listMapperHcl(poolgroupFailActionLocalRspToHclTerraform, true)(struct!.localRsp),
      isBlock: true,
      type: "set",
      storageClassType: "PoolgroupFailActionLocalRspList",
    },
    redirect: {
      value: cdktf.listMapperHcl(poolgroupFailActionRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "set",
      storageClassType: "PoolgroupFailActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupFailActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupFailAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._localRsp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRsp = this._localRsp?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupFailAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._localRsp.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._localRsp.internalValue = value.localRsp;
      this._redirect.internalValue = value.redirect;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // local_rsp - computed: false, optional: true, required: false
  private _localRsp = new PoolgroupFailActionLocalRspList(this, "local_rsp", true);
  public get localRsp() {
    return this._localRsp;
  }
  public putLocalRsp(value: PoolgroupFailActionLocalRsp[] | cdktf.IResolvable) {
    this._localRsp.internalValue = value;
  }
  public resetLocalRsp() {
    this._localRsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRspInput() {
    return this._localRsp.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new PoolgroupFailActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: PoolgroupFailActionRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class PoolgroupFailActionList extends cdktf.ComplexList {
  public internalValue? : PoolgroupFailAction[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupFailActionOutputReference {
    return new PoolgroupFailActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#key Poolgroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#values Poolgroup#values}
  */
  readonly values?: string[];
}

export function poolgroupMarkersToTerraform(struct?: PoolgroupMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function poolgroupMarkersToHclTerraform(struct?: PoolgroupMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PoolgroupMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PoolgroupMarkersList extends cdktf.ComplexList {
  public internalValue? : PoolgroupMarkers[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupMarkersOutputReference {
    return new PoolgroupMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PoolgroupMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#deployment_state Poolgroup#deployment_state}
  */
  readonly deploymentState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#pool_ref Poolgroup#pool_ref}
  */
  readonly poolRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#priority_label Poolgroup#priority_label}
  */
  readonly priorityLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#ratio Poolgroup#ratio}
  */
  readonly ratio?: string;
}

export function poolgroupMembersToTerraform(struct?: PoolgroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_state: cdktf.stringToTerraform(struct!.deploymentState),
    pool_ref: cdktf.stringToTerraform(struct!.poolRef),
    priority_label: cdktf.stringToTerraform(struct!.priorityLabel),
    ratio: cdktf.stringToTerraform(struct!.ratio),
  }
}


export function poolgroupMembersToHclTerraform(struct?: PoolgroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_state: {
      value: cdktf.stringToHclTerraform(struct!.deploymentState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_ref: {
      value: cdktf.stringToHclTerraform(struct!.poolRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_label: {
      value: cdktf.stringToHclTerraform(struct!.priorityLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ratio: {
      value: cdktf.stringToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PoolgroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PoolgroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentState !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentState = this._deploymentState;
    }
    if (this._poolRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolRef = this._poolRef;
    }
    if (this._priorityLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityLabel = this._priorityLabel;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PoolgroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentState = undefined;
      this._poolRef = undefined;
      this._priorityLabel = undefined;
      this._ratio = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentState = value.deploymentState;
      this._poolRef = value.poolRef;
      this._priorityLabel = value.priorityLabel;
      this._ratio = value.ratio;
    }
  }

  // deployment_state - computed: true, optional: true, required: false
  private _deploymentState?: string; 
  public get deploymentState() {
    return this.getStringAttribute('deployment_state');
  }
  public set deploymentState(value: string) {
    this._deploymentState = value;
  }
  public resetDeploymentState() {
    this._deploymentState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStateInput() {
    return this._deploymentState;
  }

  // pool_ref - computed: false, optional: false, required: true
  private _poolRef?: string; 
  public get poolRef() {
    return this.getStringAttribute('pool_ref');
  }
  public set poolRef(value: string) {
    this._poolRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRefInput() {
    return this._poolRef;
  }

  // priority_label - computed: true, optional: true, required: false
  private _priorityLabel?: string; 
  public get priorityLabel() {
    return this.getStringAttribute('priority_label');
  }
  public set priorityLabel(value: string) {
    this._priorityLabel = value;
  }
  public resetPriorityLabel() {
    this._priorityLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLabelInput() {
    return this._priorityLabel;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: string; 
  public get ratio() {
    return this.getStringAttribute('ratio');
  }
  public set ratio(value: string) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}

export class PoolgroupMembersList extends cdktf.ComplexList {
  public internalValue? : PoolgroupMembers[] | cdktf.IResolvable

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
  public get(index: number): PoolgroupMembersOutputReference {
    return new PoolgroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup avi_poolgroup}
*/
export class Poolgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_poolgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Poolgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Poolgroup to import
  * @param importFromId The id of the existing Poolgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Poolgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_poolgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/poolgroup avi_poolgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PoolgroupConfig
  */
  public constructor(scope: Construct, id: string, config: PoolgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_poolgroup',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConfigCksum = config.cloudConfigCksum;
    this._cloudRef = config.cloudRef;
    this._createdBy = config.createdBy;
    this._deactivatePrimaryPoolOnDown = config.deactivatePrimaryPoolOnDown;
    this._deploymentPolicyRef = config.deploymentPolicyRef;
    this._description = config.description;
    this._id = config.id;
    this._implicitPriorityLabels = config.implicitPriorityLabels;
    this._minServers = config.minServers;
    this._name = config.name;
    this._priorityLabelsRef = config.priorityLabelsRef;
    this._serviceMetadata = config.serviceMetadata;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._failAction.internalValue = config.failAction;
    this._markers.internalValue = config.markers;
    this._members.internalValue = config.members;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_config_cksum - computed: true, optional: true, required: false
  private _cloudConfigCksum?: string; 
  public get cloudConfigCksum() {
    return this.getStringAttribute('cloud_config_cksum');
  }
  public set cloudConfigCksum(value: string) {
    this._cloudConfigCksum = value;
  }
  public resetCloudConfigCksum() {
    this._cloudConfigCksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigCksumInput() {
    return this._cloudConfigCksum;
  }

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // created_by - computed: true, optional: true, required: false
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

  // deactivate_primary_pool_on_down - computed: false, optional: true, required: false
  private _deactivatePrimaryPoolOnDown?: string; 
  public get deactivatePrimaryPoolOnDown() {
    return this.getStringAttribute('deactivate_primary_pool_on_down');
  }
  public set deactivatePrimaryPoolOnDown(value: string) {
    this._deactivatePrimaryPoolOnDown = value;
  }
  public resetDeactivatePrimaryPoolOnDown() {
    this._deactivatePrimaryPoolOnDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivatePrimaryPoolOnDownInput() {
    return this._deactivatePrimaryPoolOnDown;
  }

  // deployment_policy_ref - computed: true, optional: true, required: false
  private _deploymentPolicyRef?: string; 
  public get deploymentPolicyRef() {
    return this.getStringAttribute('deployment_policy_ref');
  }
  public set deploymentPolicyRef(value: string) {
    this._deploymentPolicyRef = value;
  }
  public resetDeploymentPolicyRef() {
    this._deploymentPolicyRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentPolicyRefInput() {
    return this._deploymentPolicyRef;
  }

  // description - computed: true, optional: true, required: false
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

  // implicit_priority_labels - computed: false, optional: true, required: false
  private _implicitPriorityLabels?: string; 
  public get implicitPriorityLabels() {
    return this.getStringAttribute('implicit_priority_labels');
  }
  public set implicitPriorityLabels(value: string) {
    this._implicitPriorityLabels = value;
  }
  public resetImplicitPriorityLabels() {
    this._implicitPriorityLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitPriorityLabelsInput() {
    return this._implicitPriorityLabels;
  }

  // min_servers - computed: false, optional: true, required: false
  private _minServers?: string; 
  public get minServers() {
    return this.getStringAttribute('min_servers');
  }
  public set minServers(value: string) {
    this._minServers = value;
  }
  public resetMinServers() {
    this._minServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minServersInput() {
    return this._minServers;
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

  // priority_labels_ref - computed: true, optional: true, required: false
  private _priorityLabelsRef?: string; 
  public get priorityLabelsRef() {
    return this.getStringAttribute('priority_labels_ref');
  }
  public set priorityLabelsRef(value: string) {
    this._priorityLabelsRef = value;
  }
  public resetPriorityLabelsRef() {
    this._priorityLabelsRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLabelsRefInput() {
    return this._priorityLabelsRef;
  }

  // service_metadata - computed: true, optional: true, required: false
  private _serviceMetadata?: string; 
  public get serviceMetadata() {
    return this.getStringAttribute('service_metadata');
  }
  public set serviceMetadata(value: string) {
    this._serviceMetadata = value;
  }
  public resetServiceMetadata() {
    this._serviceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMetadataInput() {
    return this._serviceMetadata;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new PoolgroupConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: PoolgroupConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // fail_action - computed: false, optional: true, required: false
  private _failAction = new PoolgroupFailActionList(this, "fail_action", true);
  public get failAction() {
    return this._failAction;
  }
  public putFailAction(value: PoolgroupFailAction[] | cdktf.IResolvable) {
    this._failAction.internalValue = value;
  }
  public resetFailAction() {
    this._failAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failActionInput() {
    return this._failAction.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new PoolgroupMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: PoolgroupMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new PoolgroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: PoolgroupMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_config_cksum: cdktf.stringToTerraform(this._cloudConfigCksum),
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      created_by: cdktf.stringToTerraform(this._createdBy),
      deactivate_primary_pool_on_down: cdktf.stringToTerraform(this._deactivatePrimaryPoolOnDown),
      deployment_policy_ref: cdktf.stringToTerraform(this._deploymentPolicyRef),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      implicit_priority_labels: cdktf.stringToTerraform(this._implicitPriorityLabels),
      min_servers: cdktf.stringToTerraform(this._minServers),
      name: cdktf.stringToTerraform(this._name),
      priority_labels_ref: cdktf.stringToTerraform(this._priorityLabelsRef),
      service_metadata: cdktf.stringToTerraform(this._serviceMetadata),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(poolgroupConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      fail_action: cdktf.listMapper(poolgroupFailActionToTerraform, true)(this._failAction.internalValue),
      markers: cdktf.listMapper(poolgroupMarkersToTerraform, true)(this._markers.internalValue),
      members: cdktf.listMapper(poolgroupMembersToTerraform, true)(this._members.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_config_cksum: {
        value: cdktf.stringToHclTerraform(this._cloudConfigCksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deactivate_primary_pool_on_down: {
        value: cdktf.stringToHclTerraform(this._deactivatePrimaryPoolOnDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_policy_ref: {
        value: cdktf.stringToHclTerraform(this._deploymentPolicyRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      implicit_priority_labels: {
        value: cdktf.stringToHclTerraform(this._implicitPriorityLabels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_servers: {
        value: cdktf.stringToHclTerraform(this._minServers),
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
      priority_labels_ref: {
        value: cdktf.stringToHclTerraform(this._priorityLabelsRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_metadata: {
        value: cdktf.stringToHclTerraform(this._serviceMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(poolgroupConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolgroupConfigpbAttributesList",
      },
      fail_action: {
        value: cdktf.listMapperHcl(poolgroupFailActionToHclTerraform, true)(this._failAction.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PoolgroupFailActionList",
      },
      markers: {
        value: cdktf.listMapperHcl(poolgroupMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolgroupMarkersList",
      },
      members: {
        value: cdktf.listMapperHcl(poolgroupMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PoolgroupMembersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
