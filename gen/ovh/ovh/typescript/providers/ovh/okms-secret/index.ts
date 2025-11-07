// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OkmsSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Check-and-set guard. Only used on update operations: must equal the current secret version for the update to succeed. Ignored on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#cas OkmsSecret#cas}
  */
  readonly cas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#include_data OkmsSecret#include_data}
  */
  readonly includeData?: boolean | cdktf.IResolvable;
  /**
  * Create a secret metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#metadata OkmsSecret#metadata}
  */
  readonly metadata?: OkmsSecretMetadata;
  /**
  * Okms ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#okms_id OkmsSecret#okms_id}
  */
  readonly okmsId: string;
  /**
  * Secret path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#path OkmsSecret#path}
  */
  readonly path: string;
  /**
  * Create an OKMS secret version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#version OkmsSecret#version}
  */
  readonly version: OkmsSecretVersion;
}
export interface OkmsSecretIam {
}

export function okmsSecretIamToTerraform(struct?: OkmsSecretIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function okmsSecretIamToHclTerraform(struct?: OkmsSecretIam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OkmsSecretIamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OkmsSecretIam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OkmsSecretIam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }
}
export interface OkmsSecretMetadata {
  /**
  * The “Cas” parameter will be required for each write request if set to true. When the “cas” (Check and set) is specified, the current version of the secret is verified before updating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#cas_required OkmsSecret#cas_required}
  */
  readonly casRequired?: boolean | cdktf.IResolvable;
  /**
  * Custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#custom_metadata OkmsSecret#custom_metadata}
  */
  readonly customMetadata?: { [key: string]: string };
  /**
  * Time duration before a version is deactivated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#deactivate_version_after OkmsSecret#deactivate_version_after}
  */
  readonly deactivateVersionAfter?: string;
  /**
  * The number of versions to keep (10 default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#max_versions OkmsSecret#max_versions}
  */
  readonly maxVersions?: number;
}

export function okmsSecretMetadataToTerraform(struct?: OkmsSecretMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cas_required: cdktf.booleanToTerraform(struct!.casRequired),
    custom_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customMetadata),
    deactivate_version_after: cdktf.stringToTerraform(struct!.deactivateVersionAfter),
    max_versions: cdktf.numberToTerraform(struct!.maxVersions),
  }
}


export function okmsSecretMetadataToHclTerraform(struct?: OkmsSecretMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cas_required: {
      value: cdktf.booleanToHclTerraform(struct!.casRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customMetadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deactivate_version_after: {
      value: cdktf.stringToHclTerraform(struct!.deactivateVersionAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_versions: {
      value: cdktf.numberToHclTerraform(struct!.maxVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OkmsSecretMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OkmsSecretMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._casRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.casRequired = this._casRequired;
    }
    if (this._customMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMetadata = this._customMetadata;
    }
    if (this._deactivateVersionAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deactivateVersionAfter = this._deactivateVersionAfter;
    }
    if (this._maxVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersions = this._maxVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OkmsSecretMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._casRequired = undefined;
      this._customMetadata = undefined;
      this._deactivateVersionAfter = undefined;
      this._maxVersions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._casRequired = value.casRequired;
      this._customMetadata = value.customMetadata;
      this._deactivateVersionAfter = value.deactivateVersionAfter;
      this._maxVersions = value.maxVersions;
    }
  }

  // cas_required - computed: true, optional: true, required: false
  private _casRequired?: boolean | cdktf.IResolvable; 
  public get casRequired() {
    return this.getBooleanAttribute('cas_required');
  }
  public set casRequired(value: boolean | cdktf.IResolvable) {
    this._casRequired = value;
  }
  public resetCasRequired() {
    this._casRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casRequiredInput() {
    return this._casRequired;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getNumberAttribute('current_version');
  }

  // custom_metadata - computed: true, optional: true, required: false
  private _customMetadata?: { [key: string]: string }; 
  public get customMetadata() {
    return this.getStringMapAttribute('custom_metadata');
  }
  public set customMetadata(value: { [key: string]: string }) {
    this._customMetadata = value;
  }
  public resetCustomMetadata() {
    this._customMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata;
  }

  // deactivate_version_after - computed: true, optional: true, required: false
  private _deactivateVersionAfter?: string; 
  public get deactivateVersionAfter() {
    return this.getStringAttribute('deactivate_version_after');
  }
  public set deactivateVersionAfter(value: string) {
    this._deactivateVersionAfter = value;
  }
  public resetDeactivateVersionAfter() {
    this._deactivateVersionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateVersionAfterInput() {
    return this._deactivateVersionAfter;
  }

  // max_versions - computed: true, optional: true, required: false
  private _maxVersions?: number; 
  public get maxVersions() {
    return this.getNumberAttribute('max_versions');
  }
  public set maxVersions(value: number) {
    this._maxVersions = value;
  }
  public resetMaxVersions() {
    this._maxVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionsInput() {
    return this._maxVersions;
  }

  // oldest_version - computed: true, optional: false, required: false
  public get oldestVersion() {
    return this.getNumberAttribute('oldest_version');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}
export interface OkmsSecretVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#data OkmsSecret#data}
  */
  readonly data: string;
}

export function okmsSecretVersionToTerraform(struct?: OkmsSecretVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
  }
}


export function okmsSecretVersionToHclTerraform(struct?: OkmsSecretVersion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OkmsSecretVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OkmsSecretVersion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OkmsSecretVersion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // deactivated_at - computed: true, optional: false, required: false
  public get deactivatedAt() {
    return this.getStringAttribute('deactivated_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret ovh_okms_secret}
*/
export class OkmsSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_okms_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OkmsSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OkmsSecret to import
  * @param importFromId The id of the existing OkmsSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OkmsSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_okms_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/okms_secret ovh_okms_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OkmsSecretConfig
  */
  public constructor(scope: Construct, id: string, config: OkmsSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_okms_secret',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cas = config.cas;
    this._includeData = config.includeData;
    this._metadata.internalValue = config.metadata;
    this._okmsId = config.okmsId;
    this._path = config.path;
    this._version.internalValue = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cas - computed: false, optional: true, required: false
  private _cas?: number; 
  public get cas() {
    return this.getNumberAttribute('cas');
  }
  public set cas(value: number) {
    this._cas = value;
  }
  public resetCas() {
    this._cas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casInput() {
    return this._cas;
  }

  // iam - computed: true, optional: false, required: false
  private _iam = new OkmsSecretIamOutputReference(this, "iam");
  public get iam() {
    return this._iam;
  }

  // include_data - computed: true, optional: true, required: false
  private _includeData?: boolean | cdktf.IResolvable; 
  public get includeData() {
    return this.getBooleanAttribute('include_data');
  }
  public set includeData(value: boolean | cdktf.IResolvable) {
    this._includeData = value;
  }
  public resetIncludeData() {
    this._includeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDataInput() {
    return this._includeData;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new OkmsSecretMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: OkmsSecretMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // okms_id - computed: false, optional: false, required: true
  private _okmsId?: string; 
  public get okmsId() {
    return this.getStringAttribute('okms_id');
  }
  public set okmsId(value: string) {
    this._okmsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get okmsIdInput() {
    return this._okmsId;
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

  // version - computed: false, optional: false, required: true
  private _version = new OkmsSecretVersionOutputReference(this, "version");
  public get version() {
    return this._version;
  }
  public putVersion(value: OkmsSecretVersion) {
    this._version.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cas: cdktf.numberToTerraform(this._cas),
      include_data: cdktf.booleanToTerraform(this._includeData),
      metadata: okmsSecretMetadataToTerraform(this._metadata.internalValue),
      okms_id: cdktf.stringToTerraform(this._okmsId),
      path: cdktf.stringToTerraform(this._path),
      version: okmsSecretVersionToTerraform(this._version.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cas: {
        value: cdktf.numberToHclTerraform(this._cas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      include_data: {
        value: cdktf.booleanToHclTerraform(this._includeData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metadata: {
        value: okmsSecretMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OkmsSecretMetadata",
      },
      okms_id: {
        value: cdktf.stringToHclTerraform(this._okmsId),
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
      version: {
        value: okmsSecretVersionToHclTerraform(this._version.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OkmsSecretVersion",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
