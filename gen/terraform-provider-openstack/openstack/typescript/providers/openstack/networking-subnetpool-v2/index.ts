// https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingSubnetpoolV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#address_scope_id NetworkingSubnetpoolV2#address_scope_id}
  */
  readonly addressScopeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#default_prefixlen NetworkingSubnetpoolV2#default_prefixlen}
  */
  readonly defaultPrefixlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#default_quota NetworkingSubnetpoolV2#default_quota}
  */
  readonly defaultQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#description NetworkingSubnetpoolV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#id NetworkingSubnetpoolV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#ip_version NetworkingSubnetpoolV2#ip_version}
  */
  readonly ipVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#is_default NetworkingSubnetpoolV2#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#max_prefixlen NetworkingSubnetpoolV2#max_prefixlen}
  */
  readonly maxPrefixlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#min_prefixlen NetworkingSubnetpoolV2#min_prefixlen}
  */
  readonly minPrefixlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#name NetworkingSubnetpoolV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#prefixes NetworkingSubnetpoolV2#prefixes}
  */
  readonly prefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#project_id NetworkingSubnetpoolV2#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#region NetworkingSubnetpoolV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#shared NetworkingSubnetpoolV2#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#tags NetworkingSubnetpoolV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#value_specs NetworkingSubnetpoolV2#value_specs}
  */
  readonly valueSpecs?: { [key: string]: string };
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#timeouts NetworkingSubnetpoolV2#timeouts}
  */
  readonly timeouts?: NetworkingSubnetpoolV2Timeouts;
}
export interface NetworkingSubnetpoolV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#create NetworkingSubnetpoolV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#delete NetworkingSubnetpoolV2#delete}
  */
  readonly delete?: string;
}

export function networkingSubnetpoolV2TimeoutsToTerraform(struct?: NetworkingSubnetpoolV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function networkingSubnetpoolV2TimeoutsToHclTerraform(struct?: NetworkingSubnetpoolV2Timeouts | cdktf.IResolvable): any {
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

export class NetworkingSubnetpoolV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingSubnetpoolV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkingSubnetpoolV2Timeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2 openstack_networking_subnetpool_v2}
*/
export class NetworkingSubnetpoolV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openstack_networking_subnetpool_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingSubnetpoolV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingSubnetpoolV2 to import
  * @param importFromId The id of the existing NetworkingSubnetpoolV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingSubnetpoolV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openstack_networking_subnetpool_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/3.3.2/docs/resources/networking_subnetpool_v2 openstack_networking_subnetpool_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingSubnetpoolV2Config
  */
  public constructor(scope: Construct, id: string, config: NetworkingSubnetpoolV2Config) {
    super(scope, id, {
      terraformResourceType: 'openstack_networking_subnetpool_v2',
      terraformGeneratorMetadata: {
        providerName: 'openstack',
        providerVersion: '3.3.2'
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
    this._prefixes = config.prefixes;
    this._projectId = config.projectId;
    this._region = config.region;
    this._shared = config.shared;
    this._tags = config.tags;
    this._valueSpecs = config.valueSpecs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_scope_id - computed: false, optional: true, required: false
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

  // default_quota - computed: false, optional: true, required: false
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

  // is_default - computed: false, optional: true, required: false
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

  // prefixes - computed: false, optional: false, required: true
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
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

  // shared - computed: false, optional: true, required: false
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

  // value_specs - computed: false, optional: true, required: false
  private _valueSpecs?: { [key: string]: string }; 
  public get valueSpecs() {
    return this.getStringMapAttribute('value_specs');
  }
  public set valueSpecs(value: { [key: string]: string }) {
    this._valueSpecs = value;
  }
  public resetValueSpecs() {
    this._valueSpecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSpecsInput() {
    return this._valueSpecs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkingSubnetpoolV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkingSubnetpoolV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixes),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      shared: cdktf.booleanToTerraform(this._shared),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      value_specs: cdktf.hashMapper(cdktf.stringToTerraform)(this._valueSpecs),
      timeouts: networkingSubnetpoolV2TimeoutsToTerraform(this._timeouts.internalValue),
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
      prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      value_specs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._valueSpecs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: networkingSubnetpoolV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingSubnetpoolV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
