// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetboxPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given. Conflicts with `prefix`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#cidr DataNetboxPrefix#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#custom_fields DataNetboxPrefix#custom_fields}
  */
  readonly customFields?: { [key: string]: string };
  /**
  * Description to include in the data source filter. At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#description DataNetboxPrefix#description}
  */
  readonly description?: string;
  /**
  * The IP family of the prefix. One of 4 or 6. At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#family DataNetboxPrefix#family}
  */
  readonly family?: number;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given. Conflicts with `cidr`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#prefix DataNetboxPrefix#prefix}
  */
  readonly prefix?: string;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#role_id DataNetboxPrefix#role_id}
  */
  readonly roleId?: number;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#site_id DataNetboxPrefix#site_id}
  */
  readonly siteId?: number;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#status DataNetboxPrefix#status}
  */
  readonly status?: string;
  /**
  * Tag to include in the data source filter (must match the tag's slug). At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#tag DataNetboxPrefix#tag}
  */
  readonly tag?: string;
  /**
  * Tag to exclude from the data source filter (must match the tag's slug).
  * Refer to [Netbox's documentation](https://demo.netbox.dev/static/docs/rest-api/filtering/#lookup-expressions)
  * for more information on available lookup expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#tag__n DataNetboxPrefix#tag__n}
  */
  readonly tagN?: string;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#tenant_id DataNetboxPrefix#tenant_id}
  */
  readonly tenantId?: number;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#vlan_id DataNetboxPrefix#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#vlan_vid DataNetboxPrefix#vlan_vid}
  */
  readonly vlanVid?: number;
  /**
  * At least one of `description`, `family`, `prefix`, `vlan_vid`, `vrf_id`, `vlan_id`, `tenant_id`, `site_id`, `role_id`, `cidr`, `tag` or `status` must be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#vrf_id DataNetboxPrefix#vrf_id}
  */
  readonly vrfId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix netbox_prefix}
*/
export class DataNetboxPrefix extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetboxPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetboxPrefix to import
  * @param importFromId The id of the existing DataNetboxPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetboxPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/data-sources/prefix netbox_prefix} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetboxPrefixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetboxPrefixConfig = {}) {
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
    this._cidr = config.cidr;
    this._customFields = config.customFields;
    this._description = config.description;
    this._family = config.family;
    this._prefix = config.prefix;
    this._roleId = config.roleId;
    this._siteId = config.siteId;
    this._status = config.status;
    this._tag = config.tag;
    this._tagN = config.tagN;
    this._tenantId = config.tenantId;
    this._vlanId = config.vlanId;
    this._vlanVid = config.vlanVid;
    this._vrfId = config.vrfId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

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

  // family - computed: true, optional: true, required: false
  private _family?: number; 
  public get family() {
    return this.getNumberAttribute('family');
  }
  public set family(value: number) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // role_id - computed: true, optional: true, required: false
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

  // site_group_id - computed: true, optional: false, required: false
  public get siteGroupId() {
    return this.getNumberAttribute('site_group_id');
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag__n - computed: false, optional: true, required: false
  private _tagN?: string; 
  public get tagN() {
    return this.getStringAttribute('tag__n');
  }
  public set tagN(value: string) {
    this._tagN = value;
  }
  public resetTagN() {
    this._tagN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNInput() {
    return this._tagN;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // vlan_vid - computed: false, optional: true, required: false
  private _vlanVid?: number; 
  public get vlanVid() {
    return this.getNumberAttribute('vlan_vid');
  }
  public set vlanVid(value: number) {
    this._vlanVid = value;
  }
  public resetVlanVid() {
    this._vlanVid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanVidInput() {
    return this._vlanVid;
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
      cidr: cdktf.stringToTerraform(this._cidr),
      custom_fields: cdktf.hashMapper(cdktf.stringToTerraform)(this._customFields),
      description: cdktf.stringToTerraform(this._description),
      family: cdktf.numberToTerraform(this._family),
      prefix: cdktf.stringToTerraform(this._prefix),
      role_id: cdktf.numberToTerraform(this._roleId),
      site_id: cdktf.numberToTerraform(this._siteId),
      status: cdktf.stringToTerraform(this._status),
      tag: cdktf.stringToTerraform(this._tag),
      tag__n: cdktf.stringToTerraform(this._tagN),
      tenant_id: cdktf.numberToTerraform(this._tenantId),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_vid: cdktf.numberToTerraform(this._vlanVid),
      vrf_id: cdktf.numberToTerraform(this._vrfId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      family: {
        value: cdktf.numberToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_id: {
        value: cdktf.numberToHclTerraform(this._roleId),
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
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag__n: {
        value: cdktf.stringToHclTerraform(this._tagN),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vlan_vid: {
        value: cdktf.numberToHclTerraform(this._vlanVid),
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
