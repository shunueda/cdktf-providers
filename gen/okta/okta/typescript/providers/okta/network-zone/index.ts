// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of asns included. Format of each array value: a string representation of an ASN numeric value. Use with type `DYNAMIC` or `DYNAMIC_V2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#asns NetworkZone#asns}
  */
  readonly asns?: string[];
  /**
  * Array of locations ISO-3166-1(2) included. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC` or `DYNAMIC_V2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#dynamic_locations NetworkZone#dynamic_locations}
  */
  readonly dynamicLocations?: string[];
  /**
  * Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#dynamic_locations_exclude NetworkZone#dynamic_locations_exclude}
  */
  readonly dynamicLocationsExclude?: string[];
  /**
  * Type of proxy being controlled by this dynamic network zone - can be one of `Any`, `TorAnonymizer` or `NotTorAnonymizer`. Use with type `DYNAMIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#dynamic_proxy_type NetworkZone#dynamic_proxy_type}
  */
  readonly dynamicProxyType?: string;
  /**
  * Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Use with type `IP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#gateways NetworkZone#gateways}
  */
  readonly gateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#id NetworkZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of ip service excluded. Use with type `DYNAMIC_V2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#ip_service_categories_exclude NetworkZone#ip_service_categories_exclude}
  */
  readonly ipServiceCategoriesExclude?: string[];
  /**
  * List of ip service included. Use with type `DYNAMIC_V2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#ip_service_categories_include NetworkZone#ip_service_categories_include}
  */
  readonly ipServiceCategoriesInclude?: string[];
  /**
  * Name of the Network Zone Resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#name NetworkZone#name}
  */
  readonly name: string;
  /**
  * Array of values in CIDR/range form depending on the way it's been declared (i.e. CIDR will contain /suffix). Please check API docs for examples. Can not be set if `usage` is set to `BLOCKLIST`. Use with type `IP`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#proxies NetworkZone#proxies}
  */
  readonly proxies?: string[];
  /**
  * Network Status - can either be `ACTIVE` or `INACTIVE` only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#status NetworkZone#status}
  */
  readonly status?: string;
  /**
  * Type of the Network Zone - can be `IP`, `DYNAMIC` or `DYNAMIC_V2` only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#type NetworkZone#type}
  */
  readonly type: string;
  /**
  * Usage of the Network Zone - can be either `POLICY` or `BLOCKLIST`. By default, it is `POLICY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#usage NetworkZone#usage}
  */
  readonly usage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone okta_network_zone}
*/
export class NetworkZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_network_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkZone to import
  * @param importFromId The id of the existing NetworkZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_network_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/network_zone okta_network_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkZoneConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_network_zone',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asns = config.asns;
    this._dynamicLocations = config.dynamicLocations;
    this._dynamicLocationsExclude = config.dynamicLocationsExclude;
    this._dynamicProxyType = config.dynamicProxyType;
    this._gateways = config.gateways;
    this._id = config.id;
    this._ipServiceCategoriesExclude = config.ipServiceCategoriesExclude;
    this._ipServiceCategoriesInclude = config.ipServiceCategoriesInclude;
    this._name = config.name;
    this._proxies = config.proxies;
    this._status = config.status;
    this._type = config.type;
    this._usage = config.usage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asns - computed: false, optional: true, required: false
  private _asns?: string[]; 
  public get asns() {
    return cdktf.Fn.tolist(this.getListAttribute('asns'));
  }
  public set asns(value: string[]) {
    this._asns = value;
  }
  public resetAsns() {
    this._asns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnsInput() {
    return this._asns;
  }

  // dynamic_locations - computed: false, optional: true, required: false
  private _dynamicLocations?: string[]; 
  public get dynamicLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_locations'));
  }
  public set dynamicLocations(value: string[]) {
    this._dynamicLocations = value;
  }
  public resetDynamicLocations() {
    this._dynamicLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicLocationsInput() {
    return this._dynamicLocations;
  }

  // dynamic_locations_exclude - computed: false, optional: true, required: false
  private _dynamicLocationsExclude?: string[]; 
  public get dynamicLocationsExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('dynamic_locations_exclude'));
  }
  public set dynamicLocationsExclude(value: string[]) {
    this._dynamicLocationsExclude = value;
  }
  public resetDynamicLocationsExclude() {
    this._dynamicLocationsExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicLocationsExcludeInput() {
    return this._dynamicLocationsExclude;
  }

  // dynamic_proxy_type - computed: false, optional: true, required: false
  private _dynamicProxyType?: string; 
  public get dynamicProxyType() {
    return this.getStringAttribute('dynamic_proxy_type');
  }
  public set dynamicProxyType(value: string) {
    this._dynamicProxyType = value;
  }
  public resetDynamicProxyType() {
    this._dynamicProxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicProxyTypeInput() {
    return this._dynamicProxyType;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways?: string[]; 
  public get gateways() {
    return cdktf.Fn.tolist(this.getListAttribute('gateways'));
  }
  public set gateways(value: string[]) {
    this._gateways = value;
  }
  public resetGateways() {
    this._gateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways;
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

  // ip_service_categories_exclude - computed: false, optional: true, required: false
  private _ipServiceCategoriesExclude?: string[]; 
  public get ipServiceCategoriesExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_service_categories_exclude'));
  }
  public set ipServiceCategoriesExclude(value: string[]) {
    this._ipServiceCategoriesExclude = value;
  }
  public resetIpServiceCategoriesExclude() {
    this._ipServiceCategoriesExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServiceCategoriesExcludeInput() {
    return this._ipServiceCategoriesExclude;
  }

  // ip_service_categories_include - computed: false, optional: true, required: false
  private _ipServiceCategoriesInclude?: string[]; 
  public get ipServiceCategoriesInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_service_categories_include'));
  }
  public set ipServiceCategoriesInclude(value: string[]) {
    this._ipServiceCategoriesInclude = value;
  }
  public resetIpServiceCategoriesInclude() {
    this._ipServiceCategoriesInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServiceCategoriesIncludeInput() {
    return this._ipServiceCategoriesInclude;
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

  // proxies - computed: false, optional: true, required: false
  private _proxies?: string[]; 
  public get proxies() {
    return cdktf.Fn.tolist(this.getListAttribute('proxies'));
  }
  public set proxies(value: string[]) {
    this._proxies = value;
  }
  public resetProxies() {
    this._proxies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies;
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

  // usage - computed: false, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._asns),
      dynamic_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynamicLocations),
      dynamic_locations_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dynamicLocationsExclude),
      dynamic_proxy_type: cdktf.stringToTerraform(this._dynamicProxyType),
      gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._gateways),
      id: cdktf.stringToTerraform(this._id),
      ip_service_categories_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipServiceCategoriesExclude),
      ip_service_categories_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipServiceCategoriesInclude),
      name: cdktf.stringToTerraform(this._name),
      proxies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxies),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      usage: cdktf.stringToTerraform(this._usage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._asns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynamicLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_locations_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dynamicLocationsExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dynamic_proxy_type: {
        value: cdktf.stringToHclTerraform(this._dynamicProxyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._gateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_service_categories_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipServiceCategoriesExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_service_categories_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipServiceCategoriesInclude),
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
      proxies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proxies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
