// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IgmpInterfacePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#annotation IgmpInterfacePolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#control IgmpInterfacePolicy#control}
  */
  readonly control?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#description IgmpInterfacePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#group_timeout IgmpInterfacePolicy#group_timeout}
  */
  readonly groupTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#id IgmpInterfacePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#last_member_count IgmpInterfacePolicy#last_member_count}
  */
  readonly lastMemberCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#last_member_response_time IgmpInterfacePolicy#last_member_response_time}
  */
  readonly lastMemberResponseTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#maximum_mulitcast_entries IgmpInterfacePolicy#maximum_mulitcast_entries}
  */
  readonly maximumMulitcastEntries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#name IgmpInterfacePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#name_alias IgmpInterfacePolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#querier_timeout IgmpInterfacePolicy#querier_timeout}
  */
  readonly querierTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#query_interval IgmpInterfacePolicy#query_interval}
  */
  readonly queryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#report_policy_route_map IgmpInterfacePolicy#report_policy_route_map}
  */
  readonly reportPolicyRouteMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#reserved_mulitcast_entries IgmpInterfacePolicy#reserved_mulitcast_entries}
  */
  readonly reservedMulitcastEntries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#response_interval IgmpInterfacePolicy#response_interval}
  */
  readonly responseInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#robustness_variable IgmpInterfacePolicy#robustness_variable}
  */
  readonly robustnessVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#startup_query_count IgmpInterfacePolicy#startup_query_count}
  */
  readonly startupQueryCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#startup_query_interval IgmpInterfacePolicy#startup_query_interval}
  */
  readonly startupQueryInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#state_limit_route_map IgmpInterfacePolicy#state_limit_route_map}
  */
  readonly stateLimitRouteMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#static_report_route_map IgmpInterfacePolicy#static_report_route_map}
  */
  readonly staticReportRouteMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#tenant_dn IgmpInterfacePolicy#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#version IgmpInterfacePolicy#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy aci_igmp_interface_policy}
*/
export class IgmpInterfacePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_igmp_interface_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IgmpInterfacePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IgmpInterfacePolicy to import
  * @param importFromId The id of the existing IgmpInterfacePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IgmpInterfacePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_igmp_interface_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/igmp_interface_policy aci_igmp_interface_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IgmpInterfacePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IgmpInterfacePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_igmp_interface_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._control = config.control;
    this._description = config.description;
    this._groupTimeout = config.groupTimeout;
    this._id = config.id;
    this._lastMemberCount = config.lastMemberCount;
    this._lastMemberResponseTime = config.lastMemberResponseTime;
    this._maximumMulitcastEntries = config.maximumMulitcastEntries;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._querierTimeout = config.querierTimeout;
    this._queryInterval = config.queryInterval;
    this._reportPolicyRouteMap = config.reportPolicyRouteMap;
    this._reservedMulitcastEntries = config.reservedMulitcastEntries;
    this._responseInterval = config.responseInterval;
    this._robustnessVariable = config.robustnessVariable;
    this._startupQueryCount = config.startupQueryCount;
    this._startupQueryInterval = config.startupQueryInterval;
    this._stateLimitRouteMap = config.stateLimitRouteMap;
    this._staticReportRouteMap = config.staticReportRouteMap;
    this._tenantDn = config.tenantDn;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // control - computed: true, optional: true, required: false
  private _control?: string[]; 
  public get control() {
    return this.getListAttribute('control');
  }
  public set control(value: string[]) {
    this._control = value;
  }
  public resetControl() {
    this._control = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlInput() {
    return this._control;
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

  // group_timeout - computed: true, optional: true, required: false
  private _groupTimeout?: string; 
  public get groupTimeout() {
    return this.getStringAttribute('group_timeout');
  }
  public set groupTimeout(value: string) {
    this._groupTimeout = value;
  }
  public resetGroupTimeout() {
    this._groupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTimeoutInput() {
    return this._groupTimeout;
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

  // last_member_count - computed: true, optional: true, required: false
  private _lastMemberCount?: string; 
  public get lastMemberCount() {
    return this.getStringAttribute('last_member_count');
  }
  public set lastMemberCount(value: string) {
    this._lastMemberCount = value;
  }
  public resetLastMemberCount() {
    this._lastMemberCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberCountInput() {
    return this._lastMemberCount;
  }

  // last_member_response_time - computed: true, optional: true, required: false
  private _lastMemberResponseTime?: string; 
  public get lastMemberResponseTime() {
    return this.getStringAttribute('last_member_response_time');
  }
  public set lastMemberResponseTime(value: string) {
    this._lastMemberResponseTime = value;
  }
  public resetLastMemberResponseTime() {
    this._lastMemberResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMemberResponseTimeInput() {
    return this._lastMemberResponseTime;
  }

  // maximum_mulitcast_entries - computed: true, optional: true, required: false
  private _maximumMulitcastEntries?: string; 
  public get maximumMulitcastEntries() {
    return this.getStringAttribute('maximum_mulitcast_entries');
  }
  public set maximumMulitcastEntries(value: string) {
    this._maximumMulitcastEntries = value;
  }
  public resetMaximumMulitcastEntries() {
    this._maximumMulitcastEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMulitcastEntriesInput() {
    return this._maximumMulitcastEntries;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // querier_timeout - computed: true, optional: true, required: false
  private _querierTimeout?: string; 
  public get querierTimeout() {
    return this.getStringAttribute('querier_timeout');
  }
  public set querierTimeout(value: string) {
    this._querierTimeout = value;
  }
  public resetQuerierTimeout() {
    this._querierTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querierTimeoutInput() {
    return this._querierTimeout;
  }

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: string; 
  public get queryInterval() {
    return this.getStringAttribute('query_interval');
  }
  public set queryInterval(value: string) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // report_policy_route_map - computed: true, optional: true, required: false
  private _reportPolicyRouteMap?: string; 
  public get reportPolicyRouteMap() {
    return this.getStringAttribute('report_policy_route_map');
  }
  public set reportPolicyRouteMap(value: string) {
    this._reportPolicyRouteMap = value;
  }
  public resetReportPolicyRouteMap() {
    this._reportPolicyRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportPolicyRouteMapInput() {
    return this._reportPolicyRouteMap;
  }

  // reserved_mulitcast_entries - computed: true, optional: true, required: false
  private _reservedMulitcastEntries?: string; 
  public get reservedMulitcastEntries() {
    return this.getStringAttribute('reserved_mulitcast_entries');
  }
  public set reservedMulitcastEntries(value: string) {
    this._reservedMulitcastEntries = value;
  }
  public resetReservedMulitcastEntries() {
    this._reservedMulitcastEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMulitcastEntriesInput() {
    return this._reservedMulitcastEntries;
  }

  // response_interval - computed: true, optional: true, required: false
  private _responseInterval?: string; 
  public get responseInterval() {
    return this.getStringAttribute('response_interval');
  }
  public set responseInterval(value: string) {
    this._responseInterval = value;
  }
  public resetResponseInterval() {
    this._responseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseIntervalInput() {
    return this._responseInterval;
  }

  // robustness_variable - computed: true, optional: true, required: false
  private _robustnessVariable?: string; 
  public get robustnessVariable() {
    return this.getStringAttribute('robustness_variable');
  }
  public set robustnessVariable(value: string) {
    this._robustnessVariable = value;
  }
  public resetRobustnessVariable() {
    this._robustnessVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robustnessVariableInput() {
    return this._robustnessVariable;
  }

  // startup_query_count - computed: true, optional: true, required: false
  private _startupQueryCount?: string; 
  public get startupQueryCount() {
    return this.getStringAttribute('startup_query_count');
  }
  public set startupQueryCount(value: string) {
    this._startupQueryCount = value;
  }
  public resetStartupQueryCount() {
    this._startupQueryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupQueryCountInput() {
    return this._startupQueryCount;
  }

  // startup_query_interval - computed: true, optional: true, required: false
  private _startupQueryInterval?: string; 
  public get startupQueryInterval() {
    return this.getStringAttribute('startup_query_interval');
  }
  public set startupQueryInterval(value: string) {
    this._startupQueryInterval = value;
  }
  public resetStartupQueryInterval() {
    this._startupQueryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupQueryIntervalInput() {
    return this._startupQueryInterval;
  }

  // state_limit_route_map - computed: true, optional: true, required: false
  private _stateLimitRouteMap?: string; 
  public get stateLimitRouteMap() {
    return this.getStringAttribute('state_limit_route_map');
  }
  public set stateLimitRouteMap(value: string) {
    this._stateLimitRouteMap = value;
  }
  public resetStateLimitRouteMap() {
    this._stateLimitRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateLimitRouteMapInput() {
    return this._stateLimitRouteMap;
  }

  // static_report_route_map - computed: true, optional: true, required: false
  private _staticReportRouteMap?: string; 
  public get staticReportRouteMap() {
    return this.getStringAttribute('static_report_route_map');
  }
  public set staticReportRouteMap(value: string) {
    this._staticReportRouteMap = value;
  }
  public resetStaticReportRouteMap() {
    this._staticReportRouteMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticReportRouteMapInput() {
    return this._staticReportRouteMap;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      control: cdktf.listMapper(cdktf.stringToTerraform, false)(this._control),
      description: cdktf.stringToTerraform(this._description),
      group_timeout: cdktf.stringToTerraform(this._groupTimeout),
      id: cdktf.stringToTerraform(this._id),
      last_member_count: cdktf.stringToTerraform(this._lastMemberCount),
      last_member_response_time: cdktf.stringToTerraform(this._lastMemberResponseTime),
      maximum_mulitcast_entries: cdktf.stringToTerraform(this._maximumMulitcastEntries),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      querier_timeout: cdktf.stringToTerraform(this._querierTimeout),
      query_interval: cdktf.stringToTerraform(this._queryInterval),
      report_policy_route_map: cdktf.stringToTerraform(this._reportPolicyRouteMap),
      reserved_mulitcast_entries: cdktf.stringToTerraform(this._reservedMulitcastEntries),
      response_interval: cdktf.stringToTerraform(this._responseInterval),
      robustness_variable: cdktf.stringToTerraform(this._robustnessVariable),
      startup_query_count: cdktf.stringToTerraform(this._startupQueryCount),
      startup_query_interval: cdktf.stringToTerraform(this._startupQueryInterval),
      state_limit_route_map: cdktf.stringToTerraform(this._stateLimitRouteMap),
      static_report_route_map: cdktf.stringToTerraform(this._staticReportRouteMap),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._control),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_timeout: {
        value: cdktf.stringToHclTerraform(this._groupTimeout),
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
      last_member_count: {
        value: cdktf.stringToHclTerraform(this._lastMemberCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_member_response_time: {
        value: cdktf.stringToHclTerraform(this._lastMemberResponseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_mulitcast_entries: {
        value: cdktf.stringToHclTerraform(this._maximumMulitcastEntries),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      querier_timeout: {
        value: cdktf.stringToHclTerraform(this._querierTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_interval: {
        value: cdktf.stringToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_policy_route_map: {
        value: cdktf.stringToHclTerraform(this._reportPolicyRouteMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_mulitcast_entries: {
        value: cdktf.stringToHclTerraform(this._reservedMulitcastEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_interval: {
        value: cdktf.stringToHclTerraform(this._responseInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      robustness_variable: {
        value: cdktf.stringToHclTerraform(this._robustnessVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_query_count: {
        value: cdktf.stringToHclTerraform(this._startupQueryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_query_interval: {
        value: cdktf.stringToHclTerraform(this._startupQueryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_limit_route_map: {
        value: cdktf.stringToHclTerraform(this._stateLimitRouteMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_report_route_map: {
        value: cdktf.stringToHclTerraform(this._staticReportRouteMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
