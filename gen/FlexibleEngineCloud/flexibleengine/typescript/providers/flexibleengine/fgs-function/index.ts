// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FgsFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#agency FgsFunction#agency}
  */
  readonly agency?: string;
  /**
  * schema: Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#app FgsFunction#app}
  */
  readonly app?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#app_agency FgsFunction#app_agency}
  */
  readonly appAgency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#code_filename FgsFunction#code_filename}
  */
  readonly codeFilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#code_type FgsFunction#code_type}
  */
  readonly codeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#code_url FgsFunction#code_url}
  */
  readonly codeUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#depend_list FgsFunction#depend_list}
  */
  readonly dependList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#description FgsFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#dns_list FgsFunction#dns_list}
  */
  readonly dnsList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#encrypted_user_data FgsFunction#encrypted_user_data}
  */
  readonly encryptedUserData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#enterprise_project_id FgsFunction#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#func_code FgsFunction#func_code}
  */
  readonly funcCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#functiongraph_version FgsFunction#functiongraph_version}
  */
  readonly functiongraphVersion?: string;
  /**
  * schema: Required; The entry point of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#handler FgsFunction#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#id FgsFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#initializer_handler FgsFunction#initializer_handler}
  */
  readonly initializerHandler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#initializer_timeout FgsFunction#initializer_timeout}
  */
  readonly initializerTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#log_group_id FgsFunction#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#log_group_name FgsFunction#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#log_stream_id FgsFunction#log_stream_id}
  */
  readonly logStreamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#log_stream_name FgsFunction#log_stream_name}
  */
  readonly logStreamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#max_instance_num FgsFunction#max_instance_num}
  */
  readonly maxInstanceNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#memory_size FgsFunction#memory_size}
  */
  readonly memorySize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#mount_user_group_id FgsFunction#mount_user_group_id}
  */
  readonly mountUserGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#mount_user_id FgsFunction#mount_user_id}
  */
  readonly mountUserId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#network_id FgsFunction#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#package FgsFunction#package}
  */
  readonly package?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#region FgsFunction#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#runtime FgsFunction#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#tags FgsFunction#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#timeout FgsFunction#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#user_data FgsFunction#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#vpc_id FgsFunction#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#xrole FgsFunction#xrole}
  */
  readonly xrole?: string;
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#custom_image FgsFunction#custom_image}
  */
  readonly customImage?: FgsFunctionCustomImage;
  /**
  * func_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#func_mounts FgsFunction#func_mounts}
  */
  readonly funcMounts?: FgsFunctionFuncMounts[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#timeouts FgsFunction#timeouts}
  */
  readonly timeouts?: FgsFunctionTimeouts;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#versions FgsFunction#versions}
  */
  readonly versions?: FgsFunctionVersions[] | cdktf.IResolvable;
}
export interface FgsFunctionCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#url FgsFunction#url}
  */
  readonly url: string;
}

export function fgsFunctionCustomImageToTerraform(struct?: FgsFunctionCustomImageOutputReference | FgsFunctionCustomImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function fgsFunctionCustomImageToHclTerraform(struct?: FgsFunctionCustomImageOutputReference | FgsFunctionCustomImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class FgsFunctionCustomImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsFunctionCustomImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionCustomImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface FgsFunctionFuncMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#local_mount_path FgsFunction#local_mount_path}
  */
  readonly localMountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#mount_resource FgsFunction#mount_resource}
  */
  readonly mountResource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#mount_share_path FgsFunction#mount_share_path}
  */
  readonly mountSharePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#mount_type FgsFunction#mount_type}
  */
  readonly mountType: string;
}

export function fgsFunctionFuncMountsToTerraform(struct?: FgsFunctionFuncMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
    mount_resource: cdktf.stringToTerraform(struct!.mountResource),
    mount_share_path: cdktf.stringToTerraform(struct!.mountSharePath),
    mount_type: cdktf.stringToTerraform(struct!.mountType),
  }
}


export function fgsFunctionFuncMountsToHclTerraform(struct?: FgsFunctionFuncMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_resource: {
      value: cdktf.stringToHclTerraform(struct!.mountResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_share_path: {
      value: cdktf.stringToHclTerraform(struct!.mountSharePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_type: {
      value: cdktf.stringToHclTerraform(struct!.mountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionFuncMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionFuncMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountPath = this._localMountPath;
    }
    if (this._mountResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountResource = this._mountResource;
    }
    if (this._mountSharePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountSharePath = this._mountSharePath;
    }
    if (this._mountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountType = this._mountType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionFuncMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localMountPath = undefined;
      this._mountResource = undefined;
      this._mountSharePath = undefined;
      this._mountType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localMountPath = value.localMountPath;
      this._mountResource = value.mountResource;
      this._mountSharePath = value.mountSharePath;
      this._mountType = value.mountType;
    }
  }

  // local_mount_path - computed: false, optional: false, required: true
  private _localMountPath?: string; 
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
  public set localMountPath(value: string) {
    this._localMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountPathInput() {
    return this._localMountPath;
  }

  // mount_resource - computed: false, optional: false, required: true
  private _mountResource?: string; 
  public get mountResource() {
    return this.getStringAttribute('mount_resource');
  }
  public set mountResource(value: string) {
    this._mountResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountResourceInput() {
    return this._mountResource;
  }

  // mount_share_path - computed: false, optional: false, required: true
  private _mountSharePath?: string; 
  public get mountSharePath() {
    return this.getStringAttribute('mount_share_path');
  }
  public set mountSharePath(value: string) {
    this._mountSharePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountSharePathInput() {
    return this._mountSharePath;
  }

  // mount_type - computed: false, optional: false, required: true
  private _mountType?: string; 
  public get mountType() {
    return this.getStringAttribute('mount_type');
  }
  public set mountType(value: string) {
    this._mountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTypeInput() {
    return this._mountType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class FgsFunctionFuncMountsList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionFuncMounts[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionFuncMountsOutputReference {
    return new FgsFunctionFuncMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FgsFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#create FgsFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#delete FgsFunction#delete}
  */
  readonly delete?: string;
}

export function fgsFunctionTimeoutsToTerraform(struct?: FgsFunctionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function fgsFunctionTimeoutsToHclTerraform(struct?: FgsFunctionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FgsFunctionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}
export interface FgsFunctionVersionsAliases {
  /**
  * The description of the version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#description FgsFunction#description}
  */
  readonly description?: string;
  /**
  * The name of the version alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
}

export function fgsFunctionVersionsAliasesToTerraform(struct?: FgsFunctionVersionsAliasesOutputReference | FgsFunctionVersionsAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function fgsFunctionVersionsAliasesToHclTerraform(struct?: FgsFunctionVersionsAliasesOutputReference | FgsFunctionVersionsAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionVersionsAliasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FgsFunctionVersionsAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionVersionsAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
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
}
export interface FgsFunctionVersions {
  /**
  * The version name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#name FgsFunction#name}
  */
  readonly name: string;
  /**
  * aliases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#aliases FgsFunction#aliases}
  */
  readonly aliases?: FgsFunctionVersionsAliases;
}

export function fgsFunctionVersionsToTerraform(struct?: FgsFunctionVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    aliases: fgsFunctionVersionsAliasesToTerraform(struct!.aliases),
  }
}


export function fgsFunctionVersionsToHclTerraform(struct?: FgsFunctionVersions | cdktf.IResolvable): any {
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
    aliases: {
      value: fgsFunctionVersionsAliasesToHclTerraform(struct!.aliases),
      isBlock: true,
      type: "list",
      storageClassType: "FgsFunctionVersionsAliasesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FgsFunctionVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FgsFunctionVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._aliases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliases = this._aliases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FgsFunctionVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._aliases.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._aliases.internalValue = value.aliases;
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

  // aliases - computed: false, optional: true, required: false
  private _aliases = new FgsFunctionVersionsAliasesOutputReference(this, "aliases");
  public get aliases() {
    return this._aliases;
  }
  public putAliases(value: FgsFunctionVersionsAliases) {
    this._aliases.internalValue = value;
  }
  public resetAliases() {
    this._aliases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases.internalValue;
  }
}

export class FgsFunctionVersionsList extends cdktf.ComplexList {
  public internalValue? : FgsFunctionVersions[] | cdktf.IResolvable

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
  public get(index: number): FgsFunctionVersionsOutputReference {
    return new FgsFunctionVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function flexibleengine_fgs_function}
*/
export class FgsFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_fgs_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FgsFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FgsFunction to import
  * @param importFromId The id of the existing FgsFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FgsFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_fgs_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/fgs_function flexibleengine_fgs_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FgsFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: FgsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_fgs_function',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agency = config.agency;
    this._app = config.app;
    this._appAgency = config.appAgency;
    this._codeFilename = config.codeFilename;
    this._codeType = config.codeType;
    this._codeUrl = config.codeUrl;
    this._dependList = config.dependList;
    this._description = config.description;
    this._dnsList = config.dnsList;
    this._encryptedUserData = config.encryptedUserData;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._funcCode = config.funcCode;
    this._functiongraphVersion = config.functiongraphVersion;
    this._handler = config.handler;
    this._id = config.id;
    this._initializerHandler = config.initializerHandler;
    this._initializerTimeout = config.initializerTimeout;
    this._logGroupId = config.logGroupId;
    this._logGroupName = config.logGroupName;
    this._logStreamId = config.logStreamId;
    this._logStreamName = config.logStreamName;
    this._maxInstanceNum = config.maxInstanceNum;
    this._memorySize = config.memorySize;
    this._mountUserGroupId = config.mountUserGroupId;
    this._mountUserId = config.mountUserId;
    this._name = config.name;
    this._networkId = config.networkId;
    this._package = config.package;
    this._region = config.region;
    this._runtime = config.runtime;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._userData = config.userData;
    this._vpcId = config.vpcId;
    this._xrole = config.xrole;
    this._customImage.internalValue = config.customImage;
    this._funcMounts.internalValue = config.funcMounts;
    this._timeouts.internalValue = config.timeouts;
    this._versions.internalValue = config.versions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agency - computed: false, optional: true, required: false
  private _agency?: string; 
  public get agency() {
    return this.getStringAttribute('agency');
  }
  public set agency(value: string) {
    this._agency = value;
  }
  public resetAgency() {
    this._agency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agencyInput() {
    return this._agency;
  }

  // app - computed: false, optional: true, required: false
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  public resetApp() {
    this._app = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // app_agency - computed: true, optional: true, required: false
  private _appAgency?: string; 
  public get appAgency() {
    return this.getStringAttribute('app_agency');
  }
  public set appAgency(value: string) {
    this._appAgency = value;
  }
  public resetAppAgency() {
    this._appAgency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appAgencyInput() {
    return this._appAgency;
  }

  // code_filename - computed: true, optional: true, required: false
  private _codeFilename?: string; 
  public get codeFilename() {
    return this.getStringAttribute('code_filename');
  }
  public set codeFilename(value: string) {
    this._codeFilename = value;
  }
  public resetCodeFilename() {
    this._codeFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeFilenameInput() {
    return this._codeFilename;
  }

  // code_type - computed: true, optional: true, required: false
  private _codeType?: string; 
  public get codeType() {
    return this.getStringAttribute('code_type');
  }
  public set codeType(value: string) {
    this._codeType = value;
  }
  public resetCodeType() {
    this._codeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeTypeInput() {
    return this._codeType;
  }

  // code_url - computed: false, optional: true, required: false
  private _codeUrl?: string; 
  public get codeUrl() {
    return this.getStringAttribute('code_url');
  }
  public set codeUrl(value: string) {
    this._codeUrl = value;
  }
  public resetCodeUrl() {
    this._codeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeUrlInput() {
    return this._codeUrl;
  }

  // depend_list - computed: true, optional: true, required: false
  private _dependList?: string[]; 
  public get dependList() {
    return this.getListAttribute('depend_list');
  }
  public set dependList(value: string[]) {
    this._dependList = value;
  }
  public resetDependList() {
    this._dependList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependListInput() {
    return this._dependList;
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

  // dns_list - computed: true, optional: true, required: false
  private _dnsList?: string; 
  public get dnsList() {
    return this.getStringAttribute('dns_list');
  }
  public set dnsList(value: string) {
    this._dnsList = value;
  }
  public resetDnsList() {
    this._dnsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }

  // encrypted_user_data - computed: false, optional: true, required: false
  private _encryptedUserData?: string; 
  public get encryptedUserData() {
    return this.getStringAttribute('encrypted_user_data');
  }
  public set encryptedUserData(value: string) {
    this._encryptedUserData = value;
  }
  public resetEncryptedUserData() {
    this._encryptedUserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedUserDataInput() {
    return this._encryptedUserData;
  }

  // enterprise_project_id - computed: true, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // func_code - computed: false, optional: true, required: false
  private _funcCode?: string; 
  public get funcCode() {
    return this.getStringAttribute('func_code');
  }
  public set funcCode(value: string) {
    this._funcCode = value;
  }
  public resetFuncCode() {
    this._funcCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCodeInput() {
    return this._funcCode;
  }

  // functiongraph_version - computed: true, optional: true, required: false
  private _functiongraphVersion?: string; 
  public get functiongraphVersion() {
    return this.getStringAttribute('functiongraph_version');
  }
  public set functiongraphVersion(value: string) {
    this._functiongraphVersion = value;
  }
  public resetFunctiongraphVersion() {
    this._functiongraphVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functiongraphVersionInput() {
    return this._functiongraphVersion;
  }

  // handler - computed: true, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // initializer_handler - computed: true, optional: true, required: false
  private _initializerHandler?: string; 
  public get initializerHandler() {
    return this.getStringAttribute('initializer_handler');
  }
  public set initializerHandler(value: string) {
    this._initializerHandler = value;
  }
  public resetInitializerHandler() {
    this._initializerHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializerHandlerInput() {
    return this._initializerHandler;
  }

  // initializer_timeout - computed: true, optional: true, required: false
  private _initializerTimeout?: number; 
  public get initializerTimeout() {
    return this.getNumberAttribute('initializer_timeout');
  }
  public set initializerTimeout(value: number) {
    this._initializerTimeout = value;
  }
  public resetInitializerTimeout() {
    this._initializerTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializerTimeoutInput() {
    return this._initializerTimeout;
  }

  // log_group_id - computed: true, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_group_name - computed: true, optional: true, required: false
  private _logGroupName?: string; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName;
  }

  // log_stream_id - computed: true, optional: true, required: false
  private _logStreamId?: string; 
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }
  public set logStreamId(value: string) {
    this._logStreamId = value;
  }
  public resetLogStreamId() {
    this._logStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamIdInput() {
    return this._logStreamId;
  }

  // log_stream_name - computed: true, optional: true, required: false
  private _logStreamName?: string; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName;
  }

  // max_instance_num - computed: true, optional: true, required: false
  private _maxInstanceNum?: string; 
  public get maxInstanceNum() {
    return this.getStringAttribute('max_instance_num');
  }
  public set maxInstanceNum(value: string) {
    this._maxInstanceNum = value;
  }
  public resetMaxInstanceNum() {
    this._maxInstanceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceNumInput() {
    return this._maxInstanceNum;
  }

  // memory_size - computed: false, optional: false, required: true
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // mount_user_group_id - computed: true, optional: true, required: false
  private _mountUserGroupId?: number; 
  public get mountUserGroupId() {
    return this.getNumberAttribute('mount_user_group_id');
  }
  public set mountUserGroupId(value: number) {
    this._mountUserGroupId = value;
  }
  public resetMountUserGroupId() {
    this._mountUserGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountUserGroupIdInput() {
    return this._mountUserGroupId;
  }

  // mount_user_id - computed: true, optional: true, required: false
  private _mountUserId?: number; 
  public get mountUserId() {
    return this.getNumberAttribute('mount_user_id');
  }
  public set mountUserId(value: number) {
    this._mountUserId = value;
  }
  public resetMountUserId() {
    this._mountUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountUserIdInput() {
    return this._mountUserId;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // region - computed: true, optional: true, required: false
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

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // xrole - computed: false, optional: true, required: false
  private _xrole?: string; 
  public get xrole() {
    return this.getStringAttribute('xrole');
  }
  public set xrole(value: string) {
    this._xrole = value;
  }
  public resetXrole() {
    this._xrole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xroleInput() {
    return this._xrole;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new FgsFunctionCustomImageOutputReference(this, "custom_image");
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: FgsFunctionCustomImage) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // func_mounts - computed: false, optional: true, required: false
  private _funcMounts = new FgsFunctionFuncMountsList(this, "func_mounts", false);
  public get funcMounts() {
    return this._funcMounts;
  }
  public putFuncMounts(value: FgsFunctionFuncMounts[] | cdktf.IResolvable) {
    this._funcMounts.internalValue = value;
  }
  public resetFuncMounts() {
    this._funcMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcMountsInput() {
    return this._funcMounts.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FgsFunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FgsFunctionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // versions - computed: false, optional: true, required: false
  private _versions = new FgsFunctionVersionsList(this, "versions", true);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: FgsFunctionVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agency: cdktf.stringToTerraform(this._agency),
      app: cdktf.stringToTerraform(this._app),
      app_agency: cdktf.stringToTerraform(this._appAgency),
      code_filename: cdktf.stringToTerraform(this._codeFilename),
      code_type: cdktf.stringToTerraform(this._codeType),
      code_url: cdktf.stringToTerraform(this._codeUrl),
      depend_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dependList),
      description: cdktf.stringToTerraform(this._description),
      dns_list: cdktf.stringToTerraform(this._dnsList),
      encrypted_user_data: cdktf.stringToTerraform(this._encryptedUserData),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      func_code: cdktf.stringToTerraform(this._funcCode),
      functiongraph_version: cdktf.stringToTerraform(this._functiongraphVersion),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      initializer_handler: cdktf.stringToTerraform(this._initializerHandler),
      initializer_timeout: cdktf.numberToTerraform(this._initializerTimeout),
      log_group_id: cdktf.stringToTerraform(this._logGroupId),
      log_group_name: cdktf.stringToTerraform(this._logGroupName),
      log_stream_id: cdktf.stringToTerraform(this._logStreamId),
      log_stream_name: cdktf.stringToTerraform(this._logStreamName),
      max_instance_num: cdktf.stringToTerraform(this._maxInstanceNum),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      mount_user_group_id: cdktf.numberToTerraform(this._mountUserGroupId),
      mount_user_id: cdktf.numberToTerraform(this._mountUserId),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      package: cdktf.stringToTerraform(this._package),
      region: cdktf.stringToTerraform(this._region),
      runtime: cdktf.stringToTerraform(this._runtime),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      user_data: cdktf.stringToTerraform(this._userData),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      xrole: cdktf.stringToTerraform(this._xrole),
      custom_image: fgsFunctionCustomImageToTerraform(this._customImage.internalValue),
      func_mounts: cdktf.listMapper(fgsFunctionFuncMountsToTerraform, true)(this._funcMounts.internalValue),
      timeouts: fgsFunctionTimeoutsToTerraform(this._timeouts.internalValue),
      versions: cdktf.listMapper(fgsFunctionVersionsToTerraform, true)(this._versions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agency: {
        value: cdktf.stringToHclTerraform(this._agency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app: {
        value: cdktf.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_agency: {
        value: cdktf.stringToHclTerraform(this._appAgency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_filename: {
        value: cdktf.stringToHclTerraform(this._codeFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_type: {
        value: cdktf.stringToHclTerraform(this._codeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_url: {
        value: cdktf.stringToHclTerraform(this._codeUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      depend_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dependList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_list: {
        value: cdktf.stringToHclTerraform(this._dnsList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encrypted_user_data: {
        value: cdktf.stringToHclTerraform(this._encryptedUserData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      func_code: {
        value: cdktf.stringToHclTerraform(this._funcCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functiongraph_version: {
        value: cdktf.stringToHclTerraform(this._functiongraphVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handler: {
        value: cdktf.stringToHclTerraform(this._handler),
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
      initializer_handler: {
        value: cdktf.stringToHclTerraform(this._initializerHandler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initializer_timeout: {
        value: cdktf.numberToHclTerraform(this._initializerTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_group_id: {
        value: cdktf.stringToHclTerraform(this._logGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_group_name: {
        value: cdktf.stringToHclTerraform(this._logGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_id: {
        value: cdktf.stringToHclTerraform(this._logStreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stream_name: {
        value: cdktf.stringToHclTerraform(this._logStreamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instance_num: {
        value: cdktf.stringToHclTerraform(this._maxInstanceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_user_group_id: {
        value: cdktf.numberToHclTerraform(this._mountUserGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_user_id: {
        value: cdktf.numberToHclTerraform(this._mountUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package: {
        value: cdktf.stringToHclTerraform(this._package),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xrole: {
        value: cdktf.stringToHclTerraform(this._xrole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_image: {
        value: fgsFunctionCustomImageToHclTerraform(this._customImage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FgsFunctionCustomImageList",
      },
      func_mounts: {
        value: cdktf.listMapperHcl(fgsFunctionFuncMountsToHclTerraform, true)(this._funcMounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FgsFunctionFuncMountsList",
      },
      timeouts: {
        value: fgsFunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FgsFunctionTimeouts",
      },
      versions: {
        value: cdktf.listMapperHcl(fgsFunctionVersionsToHclTerraform, true)(this._versions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FgsFunctionVersionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
