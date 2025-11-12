// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ShortcutConfig extends cdktf.TerraformMetaArguments {
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> Item ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#item_id Shortcut#item_id}
  */
  readonly itemId: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> Name of the shortcut.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#name Shortcut#name}
  */
  readonly name: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> A string representing the full path where the shortcut is created, including either "Files" or "Tables". String length must be at most 256. Shortcut path can't start with forward slash '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#path Shortcut#path}
  */
  readonly path: string;
  /**
  * An object that contains the target datasource, and it must specify exactly one of the supported destinations: OneLake, Amazon S3, ADLS Gen2, Google Cloud Storage, S3 compatible or Dataverse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#target Shortcut#target}
  */
  readonly target: ShortcutTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#timeouts Shortcut#timeouts}
  */
  readonly timeouts?: ShortcutTimeouts;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#workspace_id Shortcut#workspace_id}
  */
  readonly workspaceId: string;
}
export interface ShortcutTargetAdlsGen2 {
  /**
  * A string representing the connection that is bound with the shortcut. The connectionId is a unique identifier used to establish a connection between the shortcut and the target datasource. To find this connection ID, first create a cloud connection to be used by the shortcut when connecting to the ADLS data location. Open the cloud connection's Settings view and copy the connection ID; this is a GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#connection_id Shortcut#connection_id}
  */
  readonly connectionId: string;
  /**
  * Specifies the location of the target ADLS container. The URI must be in the format https://[account-name].dfs.core.windows.net where [account-name] is the name of the target ADLS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#location Shortcut#location}
  */
  readonly location: string;
  /**
  * Specifies the container and subfolder within the ADLS account where the target folder is located. Must be of the format [container]/[subfolder] where [container] is the name of the container that holds the files and folders; [subfolder] is the name of the subfolder within the container (optional). For example: /mycontainer/mysubfolder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#subpath Shortcut#subpath}
  */
  readonly subpath: string;
}

export function shortcutTargetAdlsGen2ToTerraform(struct?: ShortcutTargetAdlsGen2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    location: cdktf.stringToTerraform(struct!.location),
    subpath: cdktf.stringToTerraform(struct!.subpath),
  }
}


export function shortcutTargetAdlsGen2ToHclTerraform(struct?: ShortcutTargetAdlsGen2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subpath: {
      value: cdktf.stringToHclTerraform(struct!.subpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetAdlsGen2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetAdlsGen2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._subpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpath = this._subpath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetAdlsGen2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._location = undefined;
      this._subpath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._location = value.location;
      this._subpath = value.subpath;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // subpath - computed: false, optional: false, required: true
  private _subpath?: string; 
  public get subpath() {
    return this.getStringAttribute('subpath');
  }
  public set subpath(value: string) {
    this._subpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathInput() {
    return this._subpath;
  }
}
export interface ShortcutTargetAmazonS3 {
  /**
  * A string representing the connection that is bound with the shortcut. The connectionId is a unique identifier used to establish a connection between the shortcut and the target datasource. To find this connection ID, first create a cloud connection to be used by the shortcut when connecting to the Amazon S3 data location. Open the cloud connection's Settings view and copy the connection ID; this is a GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#connection_id Shortcut#connection_id}
  */
  readonly connectionId: string;
  /**
  * HTTP URL that points to the target bucket in S3. The URL should be in the format https://[bucket-name].s3.[region-code].amazonaws.com, where 'bucket-name' is the name of the S3 bucket you want to point to, and 'region-code' is the code for the region where the bucket is located. For example: https://my-s3-bucket.s3.us-west-2.amazonaws.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#location Shortcut#location}
  */
  readonly location: string;
  /**
  * Specifies a target folder or subfolder within the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#subpath Shortcut#subpath}
  */
  readonly subpath: string;
}

export function shortcutTargetAmazonS3ToTerraform(struct?: ShortcutTargetAmazonS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    location: cdktf.stringToTerraform(struct!.location),
    subpath: cdktf.stringToTerraform(struct!.subpath),
  }
}


export function shortcutTargetAmazonS3ToHclTerraform(struct?: ShortcutTargetAmazonS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subpath: {
      value: cdktf.stringToHclTerraform(struct!.subpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetAmazonS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetAmazonS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._subpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpath = this._subpath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetAmazonS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._location = undefined;
      this._subpath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._location = value.location;
      this._subpath = value.subpath;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // subpath - computed: false, optional: false, required: true
  private _subpath?: string; 
  public get subpath() {
    return this.getStringAttribute('subpath');
  }
  public set subpath(value: string) {
    this._subpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathInput() {
    return this._subpath;
  }
}
export interface ShortcutTargetAzureBlobStorage {
  /**
  * A string representing the connection that is bound with the shortcut. The connectionId is a unique identifier used to establish a connection between the shortcut and the target datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#connection_id Shortcut#connection_id}
  */
  readonly connectionId: string;
  /**
  * HTTP URL that points to the target bucket in GCS. The URL should be in the format https://[bucket-name].storage.googleapis.com, where [bucket-name] is the name of the bucket you want to point to. For example: https://my-gcs-bucket.storage.googleapis.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#location Shortcut#location}
  */
  readonly location: string;
  /**
  * Specifies a target folder or subfolder within the GCS bucket. For example: /folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#subpath Shortcut#subpath}
  */
  readonly subpath: string;
}

export function shortcutTargetAzureBlobStorageToTerraform(struct?: ShortcutTargetAzureBlobStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    location: cdktf.stringToTerraform(struct!.location),
    subpath: cdktf.stringToTerraform(struct!.subpath),
  }
}


export function shortcutTargetAzureBlobStorageToHclTerraform(struct?: ShortcutTargetAzureBlobStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subpath: {
      value: cdktf.stringToHclTerraform(struct!.subpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetAzureBlobStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetAzureBlobStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._subpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpath = this._subpath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetAzureBlobStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._location = undefined;
      this._subpath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._location = value.location;
      this._subpath = value.subpath;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // subpath - computed: false, optional: false, required: true
  private _subpath?: string; 
  public get subpath() {
    return this.getStringAttribute('subpath');
  }
  public set subpath(value: string) {
    this._subpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathInput() {
    return this._subpath;
  }
}
export interface ShortcutTargetDataverse {
  /**
  * A string representing the connection that is bound with the shortcut. The connectionId is a unique identifier used to establish a connection between the shortcut and the target datasource. To find this connection ID, first create a cloud connection to be used by the shortcut when connecting to the Dataverse data location. Open the cloud connection's Settings view and copy the connection ID; this is a GUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#connection_id Shortcut#connection_id}
  */
  readonly connectionId: string;
  /**
  * Specifies the DeltaLake folder path where the target data is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#deltalake_folder Shortcut#deltalake_folder}
  */
  readonly deltalakeFolder: string;
  /**
  * URI that indicates the Dataverse target environment's domain name. The URI should be formatted as 'https://[orgname].crm[xx].dynamics.com', where [orgname] represents the name of your Dataverse organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#environment_domain Shortcut#environment_domain}
  */
  readonly environmentDomain: string;
  /**
  * Specifies the name of the target table in Dataverse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#table_name Shortcut#table_name}
  */
  readonly tableName: string;
}

export function shortcutTargetDataverseToTerraform(struct?: ShortcutTargetDataverse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    deltalake_folder: cdktf.stringToTerraform(struct!.deltalakeFolder),
    environment_domain: cdktf.stringToTerraform(struct!.environmentDomain),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function shortcutTargetDataverseToHclTerraform(struct?: ShortcutTargetDataverse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deltalake_folder: {
      value: cdktf.stringToHclTerraform(struct!.deltalakeFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_domain: {
      value: cdktf.stringToHclTerraform(struct!.environmentDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetDataverseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetDataverse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._deltalakeFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltalakeFolder = this._deltalakeFolder;
    }
    if (this._environmentDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentDomain = this._environmentDomain;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetDataverse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._deltalakeFolder = undefined;
      this._environmentDomain = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._deltalakeFolder = value.deltalakeFolder;
      this._environmentDomain = value.environmentDomain;
      this._tableName = value.tableName;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // deltalake_folder - computed: false, optional: false, required: true
  private _deltalakeFolder?: string; 
  public get deltalakeFolder() {
    return this.getStringAttribute('deltalake_folder');
  }
  public set deltalakeFolder(value: string) {
    this._deltalakeFolder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deltalakeFolderInput() {
    return this._deltalakeFolder;
  }

  // environment_domain - computed: false, optional: false, required: true
  private _environmentDomain?: string; 
  public get environmentDomain() {
    return this.getStringAttribute('environment_domain');
  }
  public set environmentDomain(value: string) {
    this._environmentDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentDomainInput() {
    return this._environmentDomain;
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface ShortcutTargetExternalDataShare {
}

export function shortcutTargetExternalDataShareToTerraform(struct?: ShortcutTargetExternalDataShare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function shortcutTargetExternalDataShareToHclTerraform(struct?: ShortcutTargetExternalDataShare): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ShortcutTargetExternalDataShareOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetExternalDataShare | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetExternalDataShare | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
}
export interface ShortcutTargetGoogleCloudStorage {
  /**
  * A string representing the connection that is bound with the shortcut. The connectionId is a unique identifier used to establish a connection between the shortcut and the target datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#connection_id Shortcut#connection_id}
  */
  readonly connectionId: string;
  /**
  * HTTP URL that points to the target bucket in GCS. The URL should be in the format https://[bucket-name].storage.googleapis.com, where [bucket-name] is the name of the bucket you want to point to. For example: https://my-gcs-bucket.storage.googleapis.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#location Shortcut#location}
  */
  readonly location: string;
  /**
  * Specifies a target folder or subfolder within the GCS bucket. For example: /folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#subpath Shortcut#subpath}
  */
  readonly subpath: string;
}

export function shortcutTargetGoogleCloudStorageToTerraform(struct?: ShortcutTargetGoogleCloudStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    location: cdktf.stringToTerraform(struct!.location),
    subpath: cdktf.stringToTerraform(struct!.subpath),
  }
}


export function shortcutTargetGoogleCloudStorageToHclTerraform(struct?: ShortcutTargetGoogleCloudStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subpath: {
      value: cdktf.stringToHclTerraform(struct!.subpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetGoogleCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetGoogleCloudStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._subpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpath = this._subpath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetGoogleCloudStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._location = undefined;
      this._subpath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._location = value.location;
      this._subpath = value.subpath;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // subpath - computed: false, optional: false, required: true
  private _subpath?: string; 
  public get subpath() {
    return this.getStringAttribute('subpath');
  }
  public set subpath(value: string) {
    this._subpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathInput() {
    return this._subpath;
  }
}
export interface ShortcutTargetOnelake {
  /**
  * The ID of the target in OneLake. The target can be an item of Lakehouse, KQLDatabase, or Warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#item_id Shortcut#item_id}
  */
  readonly itemId: string;
  /**
  * A string representing the full path to the target folder within the Item. This path should be relative to the root of the OneLake directory structure. For example: 'Tables/myTablesFolder/someTableSubFolder'. String length must be at most 256. OneLake path can't start with forward slash '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#path Shortcut#path}
  */
  readonly path: string;
  /**
  * The ID of the target workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#workspace_id Shortcut#workspace_id}
  */
  readonly workspaceId: string;
}

export function shortcutTargetOnelakeToTerraform(struct?: ShortcutTargetOnelake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    item_id: cdktf.stringToTerraform(struct!.itemId),
    path: cdktf.stringToTerraform(struct!.path),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function shortcutTargetOnelakeToHclTerraform(struct?: ShortcutTargetOnelake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    item_id: {
      value: cdktf.stringToHclTerraform(struct!.itemId),
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
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetOnelakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetOnelake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._itemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemId = this._itemId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetOnelake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._itemId = undefined;
      this._path = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._itemId = value.itemId;
      this._path = value.path;
      this._workspaceId = value.workspaceId;
    }
  }

  // item_id - computed: false, optional: false, required: true
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface ShortcutTargetS3Compatible {
  /**
  * Specifies the target bucket within the S3 compatible location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#bucket Shortcut#bucket}
  */
  readonly bucket: string;
  /**
  * A string representing the connection that is bound with the shortcut. The connectionId is a unique identifier used to establish a connection between the shortcut and the target datasource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#connection_id Shortcut#connection_id}
  */
  readonly connectionId: string;
  /**
  * HTTP URL of the S3 compatible endpoint. This endpoint must be able to receive ListBuckets S3 API calls. The URL must be in the non-bucket specific format; no bucket should be specified here. For example: https://s3endpoint.contoso.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#location Shortcut#location}
  */
  readonly location: string;
  /**
  * Specifies a target folder or subfolder within the S3 compatible bucket. For example: /folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#subpath Shortcut#subpath}
  */
  readonly subpath: string;
}

export function shortcutTargetS3CompatibleToTerraform(struct?: ShortcutTargetS3Compatible | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    location: cdktf.stringToTerraform(struct!.location),
    subpath: cdktf.stringToTerraform(struct!.subpath),
  }
}


export function shortcutTargetS3CompatibleToHclTerraform(struct?: ShortcutTargetS3Compatible | cdktf.IResolvable): any {
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
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subpath: {
      value: cdktf.stringToHclTerraform(struct!.subpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetS3CompatibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTargetS3Compatible | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._subpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subpath = this._subpath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTargetS3Compatible | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._connectionId = undefined;
      this._location = undefined;
      this._subpath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._connectionId = value.connectionId;
      this._location = value.location;
      this._subpath = value.subpath;
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

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // subpath - computed: false, optional: false, required: true
  private _subpath?: string; 
  public get subpath() {
    return this.getStringAttribute('subpath');
  }
  public set subpath(value: string) {
    this._subpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subpathInput() {
    return this._subpath;
  }
}
export interface ShortcutTarget {
  /**
  * An object containing the properties of the target ADLS Gen2 data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#adls_gen2 Shortcut#adls_gen2}
  */
  readonly adlsGen2?: ShortcutTargetAdlsGen2;
  /**
  * An object containing the properties of the target Amazon S3 data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#amazon_s3 Shortcut#amazon_s3}
  */
  readonly amazonS3?: ShortcutTargetAmazonS3;
  /**
  * An object containing the properties of the target Google Cloud Storage data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#azure_blob_storage Shortcut#azure_blob_storage}
  */
  readonly azureBlobStorage?: ShortcutTargetAzureBlobStorage;
  /**
  * An object containing the properties of the target Dataverse data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#dataverse Shortcut#dataverse}
  */
  readonly dataverse?: ShortcutTargetDataverse;
  /**
  * An object containing the properties of the target Google Cloud Storage data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#google_cloud_storage Shortcut#google_cloud_storage}
  */
  readonly googleCloudStorage?: ShortcutTargetGoogleCloudStorage;
  /**
  * An object containing the properties of the target OneLake data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#onelake Shortcut#onelake}
  */
  readonly onelake?: ShortcutTargetOnelake;
  /**
  * An object containing the properties of the target S3 compatible data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#s3_compatible Shortcut#s3_compatible}
  */
  readonly s3Compatible?: ShortcutTargetS3Compatible;
}

export function shortcutTargetToTerraform(struct?: ShortcutTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adls_gen2: shortcutTargetAdlsGen2ToTerraform(struct!.adlsGen2),
    amazon_s3: shortcutTargetAmazonS3ToTerraform(struct!.amazonS3),
    azure_blob_storage: shortcutTargetAzureBlobStorageToTerraform(struct!.azureBlobStorage),
    dataverse: shortcutTargetDataverseToTerraform(struct!.dataverse),
    google_cloud_storage: shortcutTargetGoogleCloudStorageToTerraform(struct!.googleCloudStorage),
    onelake: shortcutTargetOnelakeToTerraform(struct!.onelake),
    s3_compatible: shortcutTargetS3CompatibleToTerraform(struct!.s3Compatible),
  }
}


export function shortcutTargetToHclTerraform(struct?: ShortcutTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adls_gen2: {
      value: shortcutTargetAdlsGen2ToHclTerraform(struct!.adlsGen2),
      isBlock: true,
      type: "struct",
      storageClassType: "ShortcutTargetAdlsGen2",
    },
    amazon_s3: {
      value: shortcutTargetAmazonS3ToHclTerraform(struct!.amazonS3),
      isBlock: true,
      type: "struct",
      storageClassType: "ShortcutTargetAmazonS3",
    },
    azure_blob_storage: {
      value: shortcutTargetAzureBlobStorageToHclTerraform(struct!.azureBlobStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "ShortcutTargetAzureBlobStorage",
    },
    dataverse: {
      value: shortcutTargetDataverseToHclTerraform(struct!.dataverse),
      isBlock: true,
      type: "struct",
      storageClassType: "ShortcutTargetDataverse",
    },
    google_cloud_storage: {
      value: shortcutTargetGoogleCloudStorageToHclTerraform(struct!.googleCloudStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "ShortcutTargetGoogleCloudStorage",
    },
    onelake: {
      value: shortcutTargetOnelakeToHclTerraform(struct!.onelake),
      isBlock: true,
      type: "struct",
      storageClassType: "ShortcutTargetOnelake",
    },
    s3_compatible: {
      value: shortcutTargetS3CompatibleToHclTerraform(struct!.s3Compatible),
      isBlock: true,
      type: "struct",
      storageClassType: "ShortcutTargetS3Compatible",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adlsGen2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adlsGen2 = this._adlsGen2?.internalValue;
    }
    if (this._amazonS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonS3 = this._amazonS3?.internalValue;
    }
    if (this._azureBlobStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorage = this._azureBlobStorage?.internalValue;
    }
    if (this._dataverse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataverse = this._dataverse?.internalValue;
    }
    if (this._googleCloudStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleCloudStorage = this._googleCloudStorage?.internalValue;
    }
    if (this._onelake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onelake = this._onelake?.internalValue;
    }
    if (this._s3Compatible?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Compatible = this._s3Compatible?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adlsGen2.internalValue = undefined;
      this._amazonS3.internalValue = undefined;
      this._azureBlobStorage.internalValue = undefined;
      this._dataverse.internalValue = undefined;
      this._googleCloudStorage.internalValue = undefined;
      this._onelake.internalValue = undefined;
      this._s3Compatible.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adlsGen2.internalValue = value.adlsGen2;
      this._amazonS3.internalValue = value.amazonS3;
      this._azureBlobStorage.internalValue = value.azureBlobStorage;
      this._dataverse.internalValue = value.dataverse;
      this._googleCloudStorage.internalValue = value.googleCloudStorage;
      this._onelake.internalValue = value.onelake;
      this._s3Compatible.internalValue = value.s3Compatible;
    }
  }

  // adls_gen2 - computed: false, optional: true, required: false
  private _adlsGen2 = new ShortcutTargetAdlsGen2OutputReference(this, "adls_gen2");
  public get adlsGen2() {
    return this._adlsGen2;
  }
  public putAdlsGen2(value: ShortcutTargetAdlsGen2) {
    this._adlsGen2.internalValue = value;
  }
  public resetAdlsGen2() {
    this._adlsGen2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adlsGen2Input() {
    return this._adlsGen2.internalValue;
  }

  // amazon_s3 - computed: false, optional: true, required: false
  private _amazonS3 = new ShortcutTargetAmazonS3OutputReference(this, "amazon_s3");
  public get amazonS3() {
    return this._amazonS3;
  }
  public putAmazonS3(value: ShortcutTargetAmazonS3) {
    this._amazonS3.internalValue = value;
  }
  public resetAmazonS3() {
    this._amazonS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonS3Input() {
    return this._amazonS3.internalValue;
  }

  // azure_blob_storage - computed: false, optional: true, required: false
  private _azureBlobStorage = new ShortcutTargetAzureBlobStorageOutputReference(this, "azure_blob_storage");
  public get azureBlobStorage() {
    return this._azureBlobStorage;
  }
  public putAzureBlobStorage(value: ShortcutTargetAzureBlobStorage) {
    this._azureBlobStorage.internalValue = value;
  }
  public resetAzureBlobStorage() {
    this._azureBlobStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageInput() {
    return this._azureBlobStorage.internalValue;
  }

  // dataverse - computed: false, optional: true, required: false
  private _dataverse = new ShortcutTargetDataverseOutputReference(this, "dataverse");
  public get dataverse() {
    return this._dataverse;
  }
  public putDataverse(value: ShortcutTargetDataverse) {
    this._dataverse.internalValue = value;
  }
  public resetDataverse() {
    this._dataverse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataverseInput() {
    return this._dataverse.internalValue;
  }

  // external_data_share - computed: true, optional: false, required: false
  private _externalDataShare = new ShortcutTargetExternalDataShareOutputReference(this, "external_data_share");
  public get externalDataShare() {
    return this._externalDataShare;
  }

  // google_cloud_storage - computed: false, optional: true, required: false
  private _googleCloudStorage = new ShortcutTargetGoogleCloudStorageOutputReference(this, "google_cloud_storage");
  public get googleCloudStorage() {
    return this._googleCloudStorage;
  }
  public putGoogleCloudStorage(value: ShortcutTargetGoogleCloudStorage) {
    this._googleCloudStorage.internalValue = value;
  }
  public resetGoogleCloudStorage() {
    this._googleCloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageInput() {
    return this._googleCloudStorage.internalValue;
  }

  // onelake - computed: false, optional: true, required: false
  private _onelake = new ShortcutTargetOnelakeOutputReference(this, "onelake");
  public get onelake() {
    return this._onelake;
  }
  public putOnelake(value: ShortcutTargetOnelake) {
    this._onelake.internalValue = value;
  }
  public resetOnelake() {
    this._onelake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onelakeInput() {
    return this._onelake.internalValue;
  }

  // s3_compatible - computed: false, optional: true, required: false
  private _s3Compatible = new ShortcutTargetS3CompatibleOutputReference(this, "s3_compatible");
  public get s3Compatible() {
    return this._s3Compatible;
  }
  public putS3Compatible(value: ShortcutTargetS3Compatible) {
    this._s3Compatible.internalValue = value;
  }
  public resetS3Compatible() {
    this._s3Compatible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompatibleInput() {
    return this._s3Compatible.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface ShortcutTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#create Shortcut#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#delete Shortcut#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#read Shortcut#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#update Shortcut#update}
  */
  readonly update?: string;
}

export function shortcutTimeoutsToTerraform(struct?: ShortcutTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function shortcutTimeoutsToHclTerraform(struct?: ShortcutTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ShortcutTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ShortcutTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ShortcutTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
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
      this._read = value.read;
      this._update = value.update;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut fabric_shortcut}
*/
export class Shortcut extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_shortcut";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Shortcut resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Shortcut to import
  * @param importFromId The id of the existing Shortcut that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Shortcut to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_shortcut", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/shortcut fabric_shortcut} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ShortcutConfig
  */
  public constructor(scope: Construct, id: string, config: ShortcutConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_shortcut',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._itemId = config.itemId;
    this._name = config.name;
    this._path = config.path;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item_id - computed: false, optional: false, required: true
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
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

  // target - computed: false, optional: false, required: true
  private _target = new ShortcutTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: ShortcutTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ShortcutTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ShortcutTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      item_id: cdktf.stringToTerraform(this._itemId),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      target: shortcutTargetToTerraform(this._target.internalValue),
      timeouts: shortcutTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      item_id: {
        value: cdktf.stringToHclTerraform(this._itemId),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: shortcutTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ShortcutTarget",
      },
      timeouts: {
        value: shortcutTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ShortcutTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
