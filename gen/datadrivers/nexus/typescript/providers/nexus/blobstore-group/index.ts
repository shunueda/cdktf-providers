// https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlobstoreGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The policy how to fill the members. Possible values: `roundRobin` or `writeToFirst`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group#fill_policy BlobstoreGroup#fill_policy}
  */
  readonly fillPolicy: string;
  /**
  * List of the names of blob stores that are members of this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group#members BlobstoreGroup#members}
  */
  readonly members: string[];
  /**
  * Blobstore name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group#name BlobstoreGroup#name}
  */
  readonly name: string;
  /**
  * soft_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group#soft_quota BlobstoreGroup#soft_quota}
  */
  readonly softQuota?: BlobstoreGroupSoftQuota;
}
export interface BlobstoreGroupSoftQuota {
  /**
  * The limit in Bytes. Minimum value is 1000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group#limit BlobstoreGroup#limit}
  */
  readonly limit: number;
  /**
  * The type to use such as spaceRemainingQuota, or spaceUsedQuota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group#type BlobstoreGroup#type}
  */
  readonly type: string;
}

export function blobstoreGroupSoftQuotaToTerraform(struct?: BlobstoreGroupSoftQuotaOutputReference | BlobstoreGroupSoftQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function blobstoreGroupSoftQuotaToHclTerraform(struct?: BlobstoreGroupSoftQuotaOutputReference | BlobstoreGroupSoftQuota): any {
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

export class BlobstoreGroupSoftQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlobstoreGroupSoftQuota | undefined {
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

  public set internalValue(value: BlobstoreGroupSoftQuota | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group nexus_blobstore_group}
*/
export class BlobstoreGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nexus_blobstore_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlobstoreGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlobstoreGroup to import
  * @param importFromId The id of the existing BlobstoreGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlobstoreGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nexus_blobstore_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadrivers/nexus/2.6.0/docs/resources/blobstore_group nexus_blobstore_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlobstoreGroupConfig
  */
  public constructor(scope: Construct, id: string, config: BlobstoreGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'nexus_blobstore_group',
      terraformGeneratorMetadata: {
        providerName: 'nexus',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fillPolicy = config.fillPolicy;
    this._members = config.members;
    this._name = config.name;
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

  // fill_policy - computed: false, optional: false, required: true
  private _fillPolicy?: string; 
  public get fillPolicy() {
    return this.getStringAttribute('fill_policy');
  }
  public set fillPolicy(value: string) {
    this._fillPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fillPolicyInput() {
    return this._fillPolicy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // total_size_in_bytes - computed: true, optional: false, required: false
  public get totalSizeInBytes() {
    return this.getNumberAttribute('total_size_in_bytes');
  }

  // soft_quota - computed: false, optional: true, required: false
  private _softQuota = new BlobstoreGroupSoftQuotaOutputReference(this, "soft_quota");
  public get softQuota() {
    return this._softQuota;
  }
  public putSoftQuota(value: BlobstoreGroupSoftQuota) {
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
      fill_policy: cdktf.stringToTerraform(this._fillPolicy),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      name: cdktf.stringToTerraform(this._name),
      soft_quota: blobstoreGroupSoftQuotaToTerraform(this._softQuota.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fill_policy: {
        value: cdktf.stringToHclTerraform(this._fillPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      soft_quota: {
        value: blobstoreGroupSoftQuotaToHclTerraform(this._softQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlobstoreGroupSoftQuotaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
