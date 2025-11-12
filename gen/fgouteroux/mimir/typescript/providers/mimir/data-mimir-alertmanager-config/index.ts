// generated from terraform resource schema

import { DataMimirAlertmanagerConfigGlobalList, 
DataMimirAlertmanagerConfigInhibitRuleList, 
DataMimirAlertmanagerConfigReceiverList, 
DataMimirAlertmanagerConfigRouteList, 
DataMimirAlertmanagerConfigTimeIntervalList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataMimirAlertmanagerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/data-sources/alertmanager_config#id DataMimirAlertmanagerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the alertmanager configuration. Only used for resource dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/data-sources/alertmanager_config#name DataMimirAlertmanagerConfig#name}
  */
  readonly name?: string;
  /**
  * The Organization ID. If not set, the Org ID defined in the provider block will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/data-sources/alertmanager_config#org_id DataMimirAlertmanagerConfig#org_id}
  */
  readonly orgId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/data-sources/alertmanager_config mimir_alertmanager_config}
*/
export class DataMimirAlertmanagerConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mimir_alertmanager_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMimirAlertmanagerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMimirAlertmanagerConfig to import
  * @param importFromId The id of the existing DataMimirAlertmanagerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/data-sources/alertmanager_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMimirAlertmanagerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mimir_alertmanager_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs/data-sources/alertmanager_config mimir_alertmanager_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMimirAlertmanagerConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataMimirAlertmanagerConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mimir_alertmanager_config',
      terraformGeneratorMetadata: {
        providerName: 'mimir',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
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
    this._name = config.name;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global - computed: true, optional: false, required: false
  private _global = new DataMimirAlertmanagerConfigGlobalList(this, "global", false);
  public get global() {
    return this._global;
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

  // inhibit_rule - computed: true, optional: false, required: false
  private _inhibitRule = new DataMimirAlertmanagerConfigInhibitRuleList(this, "inhibit_rule", false);
  public get inhibitRule() {
    return this._inhibitRule;
  }

  // name - computed: false, optional: true, required: false
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // receiver - computed: true, optional: false, required: false
  private _receiver = new DataMimirAlertmanagerConfigReceiverList(this, "receiver", false);
  public get receiver() {
    return this._receiver;
  }

  // route - computed: true, optional: false, required: false
  private _route = new DataMimirAlertmanagerConfigRouteList(this, "route", false);
  public get route() {
    return this._route;
  }

  // templates - computed: true, optional: false, required: false
  public get templates() {
    return this.getListAttribute('templates');
  }

  // templates_files - computed: true, optional: false, required: false
  private _templatesFiles = new cdktf.StringMap(this, "templates_files");
  public get templatesFiles() {
    return this._templatesFiles;
  }

  // time_interval - computed: true, optional: false, required: false
  private _timeInterval = new DataMimirAlertmanagerConfigTimeIntervalList(this, "time_interval", false);
  public get timeInterval() {
    return this._timeInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
