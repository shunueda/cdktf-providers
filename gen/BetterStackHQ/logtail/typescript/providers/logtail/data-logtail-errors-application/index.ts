// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/errors_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogtailErrorsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application name. Must be unique within your team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/errors_application#name DataLogtailErrorsApplication#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/errors_application logtail_errors_application}
*/
export class DataLogtailErrorsApplication extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_errors_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogtailErrorsApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogtailErrorsApplication to import
  * @param importFromId The id of the existing DataLogtailErrorsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/errors_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogtailErrorsApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_errors_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/errors_application logtail_errors_application} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogtailErrorsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: DataLogtailErrorsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'logtail_errors_application',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.1',
        providerVersionConstraint: '0.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_group_id - computed: true, optional: false, required: false
  public get applicationGroupId() {
    return this.getNumberAttribute('application_group_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // data_region - computed: true, optional: false, required: false
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }

  // errors_retention - computed: true, optional: false, required: false
  public get errorsRetention() {
    return this.getNumberAttribute('errors_retention');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingesting_host - computed: true, optional: false, required: false
  public get ingestingHost() {
    return this.getStringAttribute('ingesting_host');
  }

  // ingesting_paused - computed: true, optional: false, required: false
  public get ingestingPaused() {
    return this.getBooleanAttribute('ingesting_paused');
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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // table_name - computed: true, optional: false, required: false
  public get tableName() {
    return this.getStringAttribute('table_name');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
