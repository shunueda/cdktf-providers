// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#custom_fields Prefix#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#description Prefix#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#id Prefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#is_pool Prefix#is_pool}
  */
  readonly isPool?: boolean | cdktf.IResolvable;
  /**
  * Conflicts with `site_id`, `site_group_id` and `region_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#location_id Prefix#location_id}
  */
  readonly locationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#mark_utilized Prefix#mark_utilized}
  */
  readonly markUtilized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#prefix Prefix#prefix}
  */
  readonly prefix: string;
  /**
  * Conflicts with `location_id`, `site_id` and `site_group_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#region_id Prefix#region_id}
  */
  readonly regionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#role_id Prefix#role_id}
  */
  readonly roleId?: number;
  /**
  * Conflicts with `location_id`, `site_id` and `region_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#site_group_id Prefix#site_group_id}
  */
  readonly siteGroupId?: number;
  /**
  * Conflicts with `location_id`, `site_group_id` and `region_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#site_id Prefix#site_id}
  */
  readonly siteId?: number;
  /**
  * Valid values are `active`, `container`, `reserved` and `deprecated`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#status Prefix#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#tags Prefix#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#tenant_id Prefix#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#vlan_id Prefix#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#vrf_id Prefix#vrf_id}
  */
  readonly vrfId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix netbox_prefix}
*/
export class Prefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Prefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Prefix to import
  * @param importFromId The id of the existing Prefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Prefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/prefix netbox_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrefixConfig
  */
  public constructor(scope: Construct, id: string, config: PrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_prefix',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.1',
        providerVersionConstraint: '5.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customFields = config.customFields;
    this._description = config.description;
    this._id = config.id;
    this._isPool = config.isPool;
    this._locationId = config.locationId;
    this._markUtilized = config.markUtilized;
    this._prefix = config.prefix;
    this._regionId = config.regionId;
    this._roleId = config.roleId;
    this._siteGroupId = config.siteGroupId;
    this._siteId = config.siteId;
    this._status = config.status;
    this._tags = config.tags;
    this._tenantId = config.tenantId;
    this._vlanId = config.vlanId;
    this._vrfId = config.vrfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_fields - computed: false, optional: true, required: false
  private _customFields?: { [key: string]: string }; 
  public get customFields() {
    return this.getStringMapAttribute('custom_fields');
  }
  public set customFields(value: { [key: string]: string }) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
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

  // is_pool - computed: false, optional: true, required: false
  private _isPool?: boolean | cdktf.IResolvable; 
  public get isPool() {
    return this.getBooleanAttribute('is_pool');
  }
  public set isPool(value: boolean | cdktf.IResolvable) {
    this._isPool = value;
  }
  public resetIsPool() {
    this._isPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPoolInput() {
    return this._isPool;
  }

  // location_id - computed: false, optional: true, required: false
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // mark_utilized - computed: false, optional: true, required: false
  private _markUtilized?: boolean | cdktf.IResolvable; 
  public get markUtilized() {
    return this.getBooleanAttribute('mark_utilized');
  }
  public set markUtilized(value: boolean | cdktf.IResolvable) {
    this._markUtilized = value;
  }
  public resetMarkUtilized() {
    this._markUtilized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markUtilizedInput() {
    return this._markUtilized;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // role_id - computed: false, optional: true, required: false
  private _roleId?: number; 
  public get roleId() {
    return this.getNumberAttribute('role_id');
  }
  public set roleId(value: number) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // site_group_id - computed: false, optional: true, required: false
  private _siteGroupId?: number; 
  public get siteGroupId() {
    return this.getNumberAttribute('site_group_id');
  }
  public set siteGroupId(value: number) {
    this._siteGroupId = value;
  }
  public resetSiteGroupId() {
    this._siteGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteGroupIdInput() {
    return this._siteGroupId;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // tags_all - computed: true, optional: false, required: false
  public get tagsAll() {
    return cdktf.Fn.tolist(this.getListAttribute('tags_all'));
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: number; 
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
  }
  public set tenantId(value: number) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vrf_id - computed: false, optional: true, required: false
  private _vrfId?: number; 
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }
  public set vrfId(value: number) {
    this._vrfId = value;
  }
  public resetVrfId() {
    this._vrfId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_pool: cdktf.booleanToTerraform(this._isPool),
      location_id: cdktf.numberToTerraform(this._locationId),
      mark_utilized: cdktf.booleanToTerraform(this._markUtilized),
      prefix: cdktf.stringToTerraform(this._prefix),
      region_id: cdktf.numberToTerraform(this._regionId),
      role_id: cdktf.numberToTerraform(this._roleId),
      site_group_id: cdktf.numberToTerraform(this._siteGroupId),
      site_id: cdktf.numberToTerraform(this._siteId),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vrf_id: cdktf.numberToTerraform(this._vrfId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_fields: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customFields),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      is_pool: {
        value: cdktf.booleanToHclTerraform(this._isPool),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mark_utilized: {
        value: cdktf.booleanToHclTerraform(this._markUtilized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_group_id: {
        value: cdktf.numberToHclTerraform(this._siteGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_id: {
        value: cdktf.numberToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_id: {
        value: cdktf.numberToHclTerraform(this._vrfId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
