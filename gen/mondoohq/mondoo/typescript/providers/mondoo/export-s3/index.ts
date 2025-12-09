// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExportS3Config extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Amazon S3 bucket to export data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#bucket_name ExportS3#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Credentials for the Amazon S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#credentials ExportS3#credentials}
  */
  readonly credentials: ExportS3Credentials;
  /**
  * Format of the export (JSONL or CSV), defaults to JSONL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#export_format ExportS3#export_format}
  */
  readonly exportFormat?: string;
  /**
  * Name of the export integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#name ExportS3#name}
  */
  readonly name: string;
  /**
  * AWS region where the S3 bucket is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#region ExportS3#region}
  */
  readonly region: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#space_id ExportS3#space_id}
  */
  readonly spaceId?: string;
}
export interface ExportS3CredentialsKey {
  /**
  * AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#access_key ExportS3#access_key}
  */
  readonly accessKey: string;
  /**
  * AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#secret_key ExportS3#secret_key}
  */
  readonly secretKey: string;
}

export function exportS3CredentialsKeyToTerraform(struct?: ExportS3CredentialsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function exportS3CredentialsKeyToHclTerraform(struct?: ExportS3CredentialsKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExportS3CredentialsKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExportS3CredentialsKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExportS3CredentialsKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface ExportS3Credentials {
  /**
  * AWS access key credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#key ExportS3#key}
  */
  readonly key: ExportS3CredentialsKey;
}

export function exportS3CredentialsToTerraform(struct?: ExportS3Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: exportS3CredentialsKeyToTerraform(struct!.key),
  }
}


export function exportS3CredentialsToHclTerraform(struct?: ExportS3Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: exportS3CredentialsKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "struct",
      storageClassType: "ExportS3CredentialsKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExportS3CredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExportS3Credentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExportS3Credentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key.internalValue = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key = new ExportS3CredentialsKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: ExportS3CredentialsKey) {
    this._key.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3 mondoo_export_s3}
*/
export class ExportS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_export_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExportS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExportS3 to import
  * @param importFromId The id of the existing ExportS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExportS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_export_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/export_s3 mondoo_export_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExportS3Config
  */
  public constructor(scope: Construct, id: string, config: ExportS3Config) {
    super(scope, id, {
      terraformResourceType: 'mondoo_export_s3',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.0',
        providerVersionConstraint: '0.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketName = config.bucketName;
    this._credentials.internalValue = config.credentials;
    this._exportFormat = config.exportFormat;
    this._name = config.name;
    this._region = config.region;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new ExportS3CredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: ExportS3Credentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // export_format - computed: true, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      credentials: exportS3CredentialsToTerraform(this._credentials.internalValue),
      export_format: cdktf.stringToTerraform(this._exportFormat),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: exportS3CredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExportS3Credentials",
      },
      export_format: {
        value: cdktf.stringToHclTerraform(this._exportFormat),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
