// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_keytab
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCdpEnvironmentsKeytabConfig extends cdktf.TerraformMetaArguments {
  /**
  * The CRN of the user or machine user to retrieve the keytab for. If it is not included, it defaults to the user making the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_keytab#actor_crn DataCdpEnvironmentsKeytab#actor_crn}
  */
  readonly actorCrn?: string;
  /**
  * The name or CRN of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_keytab#environment DataCdpEnvironmentsKeytab#environment}
  */
  readonly environment: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_keytab cdp_environments_keytab}
*/
export class DataCdpEnvironmentsKeytab extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_keytab";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCdpEnvironmentsKeytab resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCdpEnvironmentsKeytab to import
  * @param importFromId The id of the existing DataCdpEnvironmentsKeytab that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_keytab#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCdpEnvironmentsKeytab to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_keytab", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/data-sources/environments_keytab cdp_environments_keytab} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCdpEnvironmentsKeytabConfig
  */
  public constructor(scope: Construct, id: string, config: DataCdpEnvironmentsKeytabConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_keytab',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actorCrn = config.actorCrn;
    this._environment = config.environment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actor_crn - computed: false, optional: true, required: false
  private _actorCrn?: string; 
  public get actorCrn() {
    return this.getStringAttribute('actor_crn');
  }
  public set actorCrn(value: string) {
    this._actorCrn = value;
  }
  public resetActorCrn() {
    this._actorCrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actorCrnInput() {
    return this._actorCrn;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // keytab - computed: true, optional: false, required: false
  public get keytab() {
    return this.getStringAttribute('keytab');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actor_crn: cdktf.stringToTerraform(this._actorCrn),
      environment: cdktf.stringToTerraform(this._environment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actor_crn: {
        value: cdktf.stringToHclTerraform(this._actorCrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
