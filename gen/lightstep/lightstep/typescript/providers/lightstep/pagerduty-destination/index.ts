// https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PagerdutyDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lightstep destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination#destination_name PagerdutyDestination#destination_name}
  */
  readonly destinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination#id PagerdutyDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PagerDuty Service Integration Key. To create one follow the docs here - https://support.pagerduty.com/docs/services-and-integrations#add-integrations-to-an-existing-service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination#integration_key PagerdutyDestination#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Lightstep project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination#project_name PagerdutyDestination#project_name}
  */
  readonly projectName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination lightstep_pagerduty_destination}
*/
export class PagerdutyDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lightstep_pagerduty_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PagerdutyDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PagerdutyDestination to import
  * @param importFromId The id of the existing PagerdutyDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PagerdutyDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lightstep_pagerduty_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lightstep/lightstep/1.98.2/docs/resources/pagerduty_destination lightstep_pagerduty_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PagerdutyDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: PagerdutyDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'lightstep_pagerduty_destination',
      terraformGeneratorMetadata: {
        providerName: 'lightstep',
        providerVersion: '1.98.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationName = config.destinationName;
    this._id = config.id;
    this._integrationKey = config.integrationKey;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_name - computed: false, optional: false, required: true
  private _destinationName?: string; 
  public get destinationName() {
    return this.getStringAttribute('destination_name');
  }
  public set destinationName(value: string) {
    this._destinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNameInput() {
    return this._destinationName;
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

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_name: cdktf.stringToTerraform(this._destinationName),
      id: cdktf.stringToTerraform(this._id),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_name: {
        value: cdktf.stringToHclTerraform(this._destinationName),
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
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
