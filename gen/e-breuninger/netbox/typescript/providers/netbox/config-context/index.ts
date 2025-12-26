// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#cluster_groups ConfigContext#cluster_groups}
  */
  readonly clusterGroups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#cluster_types ConfigContext#cluster_types}
  */
  readonly clusterTypes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#clusters ConfigContext#clusters}
  */
  readonly clusters?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#data ConfigContext#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#description ConfigContext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#device_types ConfigContext#device_types}
  */
  readonly deviceTypes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#id ConfigContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#locations ConfigContext#locations}
  */
  readonly locations?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#name ConfigContext#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#platforms ConfigContext#platforms}
  */
  readonly platforms?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#regions ConfigContext#regions}
  */
  readonly regions?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#roles ConfigContext#roles}
  */
  readonly roles?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#site_groups ConfigContext#site_groups}
  */
  readonly siteGroups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#sites ConfigContext#sites}
  */
  readonly sites?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#tags ConfigContext#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#tenant_groups ConfigContext#tenant_groups}
  */
  readonly tenantGroups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#tenants ConfigContext#tenants}
  */
  readonly tenants?: number[];
  /**
  * Defaults to `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#weight ConfigContext#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context netbox_config_context}
*/
export class ConfigContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_config_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigContext to import
  * @param importFromId The id of the existing ConfigContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_config_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.1/docs/resources/config_context netbox_config_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigContextConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigContextConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_config_context',
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
    this._clusterGroups = config.clusterGroups;
    this._clusterTypes = config.clusterTypes;
    this._clusters = config.clusters;
    this._data = config.data;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._id = config.id;
    this._locations = config.locations;
    this._name = config.name;
    this._platforms = config.platforms;
    this._regions = config.regions;
    this._roles = config.roles;
    this._siteGroups = config.siteGroups;
    this._sites = config.sites;
    this._tags = config.tags;
    this._tenantGroups = config.tenantGroups;
    this._tenants = config.tenants;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_groups - computed: false, optional: true, required: false
  private _clusterGroups?: number[]; 
  public get clusterGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cluster_groups')));
  }
  public set clusterGroups(value: number[]) {
    this._clusterGroups = value;
  }
  public resetClusterGroups() {
    this._clusterGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupsInput() {
    return this._clusterGroups;
  }

  // cluster_types - computed: false, optional: true, required: false
  private _clusterTypes?: number[]; 
  public get clusterTypes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cluster_types')));
  }
  public set clusterTypes(value: number[]) {
    this._clusterTypes = value;
  }
  public resetClusterTypes() {
    this._clusterTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypesInput() {
    return this._clusterTypes;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters?: number[]; 
  public get clusters() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('clusters')));
  }
  public set clusters(value: number[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
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

  // device_types - computed: false, optional: true, required: false
  private _deviceTypes?: number[]; 
  public get deviceTypes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('device_types')));
  }
  public set deviceTypes(value: number[]) {
    this._deviceTypes = value;
  }
  public resetDeviceTypes() {
    this._deviceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
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

  // locations - computed: false, optional: true, required: false
  private _locations?: number[]; 
  public get locations() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('locations')));
  }
  public set locations(value: number[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
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

  // platforms - computed: false, optional: true, required: false
  private _platforms?: number[]; 
  public get platforms() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('platforms')));
  }
  public set platforms(value: number[]) {
    this._platforms = value;
  }
  public resetPlatforms() {
    this._platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformsInput() {
    return this._platforms;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: number[]; 
  public get regions() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('regions')));
  }
  public set regions(value: number[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: number[]; 
  public get roles() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('roles')));
  }
  public set roles(value: number[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // site_groups - computed: false, optional: true, required: false
  private _siteGroups?: number[]; 
  public get siteGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('site_groups')));
  }
  public set siteGroups(value: number[]) {
    this._siteGroups = value;
  }
  public resetSiteGroups() {
    this._siteGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteGroupsInput() {
    return this._siteGroups;
  }

  // sites - computed: false, optional: true, required: false
  private _sites?: number[]; 
  public get sites() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sites')));
  }
  public set sites(value: number[]) {
    this._sites = value;
  }
  public resetSites() {
    this._sites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitesInput() {
    return this._sites;
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

  // tenant_groups - computed: false, optional: true, required: false
  private _tenantGroups?: number[]; 
  public get tenantGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tenant_groups')));
  }
  public set tenantGroups(value: number[]) {
    this._tenantGroups = value;
  }
  public resetTenantGroups() {
    this._tenantGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantGroupsInput() {
    return this._tenantGroups;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants?: number[]; 
  public get tenants() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tenants')));
  }
  public set tenants(value: number[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._clusterGroups),
      cluster_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._clusterTypes),
      clusters: cdktf.listMapper(cdktf.numberToTerraform, false)(this._clusters),
      data: cdktf.stringToTerraform(this._data),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceTypes),
      id: cdktf.stringToTerraform(this._id),
      locations: cdktf.listMapper(cdktf.numberToTerraform, false)(this._locations),
      name: cdktf.stringToTerraform(this._name),
      platforms: cdktf.listMapper(cdktf.numberToTerraform, false)(this._platforms),
      regions: cdktf.listMapper(cdktf.numberToTerraform, false)(this._regions),
      roles: cdktf.listMapper(cdktf.numberToTerraform, false)(this._roles),
      site_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._siteGroups),
      sites: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sites),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenant_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tenantGroups),
      tenants: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tenants),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._clusterGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      cluster_types: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._clusterTypes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      clusters: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._clusters),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platforms: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._platforms),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      site_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._siteGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      sites: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sites),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tenant_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tenantGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
