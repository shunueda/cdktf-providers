// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudNetworkingSubnetpoolV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#address_scope_id DataNhncloudNetworkingSubnetpoolV2#address_scope_id}
  */
  readonly addressScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#default_prefixlen DataNhncloudNetworkingSubnetpoolV2#default_prefixlen}
  */
  readonly defaultPrefixlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#default_quota DataNhncloudNetworkingSubnetpoolV2#default_quota}
  */
  readonly defaultQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#description DataNhncloudNetworkingSubnetpoolV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#id DataNhncloudNetworkingSubnetpoolV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#ip_version DataNhncloudNetworkingSubnetpoolV2#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#is_default DataNhncloudNetworkingSubnetpoolV2#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#max_prefixlen DataNhncloudNetworkingSubnetpoolV2#max_prefixlen}
  */
  readonly maxPrefixlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#min_prefixlen DataNhncloudNetworkingSubnetpoolV2#min_prefixlen}
  */
  readonly minPrefixlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#name DataNhncloudNetworkingSubnetpoolV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#project_id DataNhncloudNetworkingSubnetpoolV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#region DataNhncloudNetworkingSubnetpoolV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#shared DataNhncloudNetworkingSubnetpoolV2#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#tags DataNhncloudNetworkingSubnetpoolV2#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2 nhncloud_networking_subnetpool_v2}
*/
export class DataNhncloudNetworkingSubnetpoolV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_networking_subnetpool_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudNetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudNetworkingSubnetpoolV2 to import
  * @param importFromId The id of the existing DataNhncloudNetworkingSubnetpoolV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudNetworkingSubnetpoolV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_networking_subnetpool_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/networking_subnetpool_v2 nhncloud_networking_subnetpool_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudNetworkingSubnetpoolV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudNetworkingSubnetpoolV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_networking_subnetpool_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressScopeId = config.addressScopeId;
    this._defaultPrefixlen = config.defaultPrefixlen;
    this._defaultQuota = config.defaultQuota;
    this._description = config.description;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._isDefault = config.isDefault;
    this._maxPrefixlen = config.maxPrefixlen;
    this._minPrefixlen = config.minPrefixlen;
    this._name = config.name;
    this._projectId = config.projectId;
    this._region = config.region;
    this._shared = config.shared;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_scope_id - computed: true, optional: true, required: false
  private _addressScopeId?: string; 
  public get addressScopeId() {
    return this.getStringAttribute('address_scope_id');
  }
  public set addressScopeId(value: string) {
    this._addressScopeId = value;
  }
  public resetAddressScopeId() {
    this._addressScopeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressScopeIdInput() {
    return this._addressScopeId;
  }

  // all_tags - computed: true, optional: false, required: false
  public get allTags() {
    return cdktf.Fn.tolist(this.getListAttribute('all_tags'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default_prefixlen - computed: true, optional: true, required: false
  private _defaultPrefixlen?: number; 
  public get defaultPrefixlen() {
    return this.getNumberAttribute('default_prefixlen');
  }
  public set defaultPrefixlen(value: number) {
    this._defaultPrefixlen = value;
  }
  public resetDefaultPrefixlen() {
    this._defaultPrefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrefixlenInput() {
    return this._defaultPrefixlen;
  }

  // default_quota - computed: true, optional: true, required: false
  private _defaultQuota?: number; 
  public get defaultQuota() {
    return this.getNumberAttribute('default_quota');
  }
  public set defaultQuota(value: number) {
    this._defaultQuota = value;
  }
  public resetDefaultQuota() {
    this._defaultQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuotaInput() {
    return this._defaultQuota;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: number; 
  public get ipVersion() {
    return this.getNumberAttribute('ip_version');
  }
  public set ipVersion(value: number) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // max_prefixlen - computed: true, optional: true, required: false
  private _maxPrefixlen?: number; 
  public get maxPrefixlen() {
    return this.getNumberAttribute('max_prefixlen');
  }
  public set maxPrefixlen(value: number) {
    this._maxPrefixlen = value;
  }
  public resetMaxPrefixlen() {
    this._maxPrefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrefixlenInput() {
    return this._maxPrefixlen;
  }

  // min_prefixlen - computed: true, optional: true, required: false
  private _minPrefixlen?: number; 
  public get minPrefixlen() {
    return this.getNumberAttribute('min_prefixlen');
  }
  public set minPrefixlen(value: number) {
    this._minPrefixlen = value;
  }
  public resetMinPrefixlen() {
    this._minPrefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPrefixlenInput() {
    return this._minPrefixlen;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // prefixes - computed: true, optional: false, required: false
  public get prefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('prefixes'));
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // revision_number - computed: true, optional: false, required: false
  public get revisionNumber() {
    return this.getNumberAttribute('revision_number');
  }

  // shared - computed: true, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_scope_id: cdktf.stringToTerraform(this._addressScopeId),
      default_prefixlen: cdktf.numberToTerraform(this._defaultPrefixlen),
      default_quota: cdktf.numberToTerraform(this._defaultQuota),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.numberToTerraform(this._ipVersion),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      max_prefixlen: cdktf.numberToTerraform(this._maxPrefixlen),
      min_prefixlen: cdktf.numberToTerraform(this._minPrefixlen),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      shared: cdktf.booleanToTerraform(this._shared),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_scope_id: {
        value: cdktf.stringToHclTerraform(this._addressScopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_prefixlen: {
        value: cdktf.numberToHclTerraform(this._defaultPrefixlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_quota: {
        value: cdktf.numberToHclTerraform(this._defaultQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      ip_version: {
        value: cdktf.numberToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_prefixlen: {
        value: cdktf.numberToHclTerraform(this._maxPrefixlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_prefixlen: {
        value: cdktf.numberToHclTerraform(this._minPrefixlen),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      shared: {
        value: cdktf.booleanToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
