// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlobstoreFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blobstore name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file#name BlobstoreFile#name}
  */
  readonly name: string;
  /**
  * The path to the blobstore contents. This can be an absolute path to anywhere on the system nxrm has access to or it can be a path relative to the sonatype-work directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file#path BlobstoreFile#path}
  */
  readonly path?: string;
  /**
  * soft_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file#soft_quota BlobstoreFile#soft_quota}
  */
  readonly softQuota?: BlobstoreFileSoftQuota;
}
export interface BlobstoreFileSoftQuota {
  /**
  * The limit in Bytes. Minimum value is 1000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file#limit BlobstoreFile#limit}
  */
  readonly limit: number;
  /**
  * The type to use such as spaceRemainingQuota, or spaceUsedQuota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file#type BlobstoreFile#type}
  */
  readonly type: string;
}

export function blobstoreFileSoftQuotaToTerraform(struct?: BlobstoreFileSoftQuotaOutputReference | BlobstoreFileSoftQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function blobstoreFileSoftQuotaToHclTerraform(struct?: BlobstoreFileSoftQuotaOutputReference | BlobstoreFileSoftQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlobstoreFileSoftQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreFileSoftQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlobstoreFileSoftQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._type = value.type;
    }
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file nexus_blobstore_file}
*/
export class BlobstoreFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_blobstore_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlobstoreFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlobstoreFile to import
  * @param importFromId The id of the existing BlobstoreFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlobstoreFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_blobstore_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_file nexus_blobstore_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlobstoreFileConfig
  */
  public constructor(scope: Construct, id: string, config: BlobstoreFileConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_blobstore_file',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._path = config.path;
    this._softQuota.internalValue = config.softQuota;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_space_in_bytes - computed: true, optional: false, required: false
  public get availableSpaceInBytes() {
    return this.getNumberAttribute('available_space_in_bytes');
  }

  // blob_count - computed: true, optional: false, required: false
  public get blobCount() {
    return this.getNumberAttribute('blob_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // path - computed: false, optional: true, required: false
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

  // total_size_in_bytes - computed: true, optional: false, required: false
  public get totalSizeInBytes() {
    return this.getNumberAttribute('total_size_in_bytes');
  }

  // soft_quota - computed: false, optional: true, required: false
  private _softQuota = new BlobstoreFileSoftQuotaOutputReference(this, "soft_quota");
  public get softQuota() {
    return this._softQuota;
  }
  public putSoftQuota(value: BlobstoreFileSoftQuota) {
    this._softQuota.internalValue = value;
  }
  public resetSoftQuota() {
    this._softQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softQuotaInput() {
    return this._softQuota.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      soft_quota: blobstoreFileSoftQuotaToTerraform(this._softQuota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      soft_quota: {
        value: blobstoreFileSoftQuotaToHclTerraform(this._softQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlobstoreFileSoftQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
