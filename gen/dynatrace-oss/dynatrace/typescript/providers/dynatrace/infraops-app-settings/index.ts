// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfraopsAppSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings#id InfraopsAppSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The threshold at which a network device interface is deemed to be saturated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings#interface_saturation_threshold InfraopsAppSettings#interface_saturation_threshold}
  */
  readonly interfaceSaturationThreshold?: number;
  /**
  * Limit the number of results returned from Grail for Host, Network device, and Extensions entities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings#invex_dql_query_limit InfraopsAppSettings#invex_dql_query_limit}
  */
  readonly invexDqlQueryLimit?: number;
  /**
  * Limit for server-side sorting in Host, Network device and Extensions inventories. Sorting is disabled when the row count exceeds the configured threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings#invex_dql_sort_limit InfraopsAppSettings#invex_dql_sort_limit}
  */
  readonly invexDqlSortLimit?: number;
  /**
  * When set to true, the app will display monitoring candidates in the Hosts table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings#show_monitoring_candidates InfraopsAppSettings#show_monitoring_candidates}
  */
  readonly showMonitoringCandidates: boolean | cdktf.IResolvable;
  /**
  * When set to true, the app will display app only hosts in the Hosts table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings#show_standalone_hosts InfraopsAppSettings#show_standalone_hosts}
  */
  readonly showStandaloneHosts: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings dynatrace_infraops_app_settings}
*/
export class InfraopsAppSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_infraops_app_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InfraopsAppSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InfraopsAppSettings to import
  * @param importFromId The id of the existing InfraopsAppSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InfraopsAppSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_infraops_app_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/infraops_app_settings dynatrace_infraops_app_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfraopsAppSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: InfraopsAppSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_infraops_app_settings',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._interfaceSaturationThreshold = config.interfaceSaturationThreshold;
    this._invexDqlQueryLimit = config.invexDqlQueryLimit;
    this._invexDqlSortLimit = config.invexDqlSortLimit;
    this._showMonitoringCandidates = config.showMonitoringCandidates;
    this._showStandaloneHosts = config.showStandaloneHosts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // interface_saturation_threshold - computed: false, optional: true, required: false
  private _interfaceSaturationThreshold?: number; 
  public get interfaceSaturationThreshold() {
    return this.getNumberAttribute('interface_saturation_threshold');
  }
  public set interfaceSaturationThreshold(value: number) {
    this._interfaceSaturationThreshold = value;
  }
  public resetInterfaceSaturationThreshold() {
    this._interfaceSaturationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSaturationThresholdInput() {
    return this._interfaceSaturationThreshold;
  }

  // invex_dql_query_limit - computed: false, optional: true, required: false
  private _invexDqlQueryLimit?: number; 
  public get invexDqlQueryLimit() {
    return this.getNumberAttribute('invex_dql_query_limit');
  }
  public set invexDqlQueryLimit(value: number) {
    this._invexDqlQueryLimit = value;
  }
  public resetInvexDqlQueryLimit() {
    this._invexDqlQueryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invexDqlQueryLimitInput() {
    return this._invexDqlQueryLimit;
  }

  // invex_dql_sort_limit - computed: false, optional: true, required: false
  private _invexDqlSortLimit?: number; 
  public get invexDqlSortLimit() {
    return this.getNumberAttribute('invex_dql_sort_limit');
  }
  public set invexDqlSortLimit(value: number) {
    this._invexDqlSortLimit = value;
  }
  public resetInvexDqlSortLimit() {
    this._invexDqlSortLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invexDqlSortLimitInput() {
    return this._invexDqlSortLimit;
  }

  // show_monitoring_candidates - computed: false, optional: false, required: true
  private _showMonitoringCandidates?: boolean | cdktf.IResolvable; 
  public get showMonitoringCandidates() {
    return this.getBooleanAttribute('show_monitoring_candidates');
  }
  public set showMonitoringCandidates(value: boolean | cdktf.IResolvable) {
    this._showMonitoringCandidates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showMonitoringCandidatesInput() {
    return this._showMonitoringCandidates;
  }

  // show_standalone_hosts - computed: false, optional: false, required: true
  private _showStandaloneHosts?: boolean | cdktf.IResolvable; 
  public get showStandaloneHosts() {
    return this.getBooleanAttribute('show_standalone_hosts');
  }
  public set showStandaloneHosts(value: boolean | cdktf.IResolvable) {
    this._showStandaloneHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showStandaloneHostsInput() {
    return this._showStandaloneHosts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      interface_saturation_threshold: cdktf.numberToTerraform(this._interfaceSaturationThreshold),
      invex_dql_query_limit: cdktf.numberToTerraform(this._invexDqlQueryLimit),
      invex_dql_sort_limit: cdktf.numberToTerraform(this._invexDqlSortLimit),
      show_monitoring_candidates: cdktf.booleanToTerraform(this._showMonitoringCandidates),
      show_standalone_hosts: cdktf.booleanToTerraform(this._showStandaloneHosts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_saturation_threshold: {
        value: cdktf.numberToHclTerraform(this._interfaceSaturationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invex_dql_query_limit: {
        value: cdktf.numberToHclTerraform(this._invexDqlQueryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invex_dql_sort_limit: {
        value: cdktf.numberToHclTerraform(this._invexDqlSortLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      show_monitoring_candidates: {
        value: cdktf.booleanToHclTerraform(this._showMonitoringCandidates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_standalone_hosts: {
        value: cdktf.booleanToHclTerraform(this._showStandaloneHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
