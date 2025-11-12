// https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SettingsProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the cluster to create the resource into. If omitted, resource will be created on the replica hit by the query.
  * This field must be left null when using a ClickHouse Cloud cluster.
  * When using a self hosted ClickHouse instance, this field should only be set when there is more than one replica and you are not using 'replicated' storage for user_directory.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile#cluster_name SettingsProfile#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * List of setting profile names to inherit from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile#inherit_from SettingsProfile#inherit_from}
  */
  readonly inheritFrom?: string[];
  /**
  * Name of the settings profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile#name SettingsProfile#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile clickhousedbops_settings_profile}
*/
export class SettingsProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhousedbops_settings_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SettingsProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SettingsProfile to import
  * @param importFromId The id of the existing SettingsProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SettingsProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhousedbops_settings_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.2/docs/resources/settings_profile clickhousedbops_settings_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SettingsProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SettingsProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhousedbops_settings_profile',
      terraformGeneratorMetadata: {
        providerName: 'clickhousedbops',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._inheritFrom = config.inheritFrom;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherit_from - computed: false, optional: true, required: false
  private _inheritFrom?: string[]; 
  public get inheritFrom() {
    return this.getListAttribute('inherit_from');
  }
  public set inheritFrom(value: string[]) {
    this._inheritFrom = value;
  }
  public resetInheritFrom() {
    this._inheritFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromInput() {
    return this._inheritFrom;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      inherit_from: cdktf.listMapper(cdktf.stringToTerraform, false)(this._inheritFrom),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherit_from: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._inheritFrom),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
