// https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SplunkbaseAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The app's third-party license URL. The license URL is available under 'Licensing' on the Splunkbase download page for the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app#acs_licensing_ack SplunkbaseApp#acs_licensing_ack}
  */
  readonly acsLicensingAck: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app#id SplunkbaseApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Splunkbase app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app#name SplunkbaseApp#name}
  */
  readonly name: string;
  /**
  * The ID of the Splunkbase app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app#splunkbase_id SplunkbaseApp#splunkbase_id}
  */
  readonly splunkbaseId: string;
  /**
  * The version of the Splunkbase app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app#version SplunkbaseApp#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app scp_splunkbase_app}
*/
export class SplunkbaseApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scp_splunkbase_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SplunkbaseApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SplunkbaseApp to import
  * @param importFromId The id of the existing SplunkbaseApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SplunkbaseApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scp_splunkbase_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk/scp/1.3.0/docs/resources/splunkbase_app scp_splunkbase_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SplunkbaseAppConfig
  */
  public constructor(scope: Construct, id: string, config: SplunkbaseAppConfig) {
    super(scope, id, {
      terraformResourceType: 'scp_splunkbase_app',
      terraformGeneratorMetadata: {
        providerName: 'scp',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acsLicensingAck = config.acsLicensingAck;
    this._id = config.id;
    this._name = config.name;
    this._splunkbaseId = config.splunkbaseId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_licensing_ack - computed: false, optional: false, required: true
  private _acsLicensingAck?: string; 
  public get acsLicensingAck() {
    return this.getStringAttribute('acs_licensing_ack');
  }
  public set acsLicensingAck(value: string) {
    this._acsLicensingAck = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acsLicensingAckInput() {
    return this._acsLicensingAck;
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

  // splunkbase_id - computed: false, optional: false, required: true
  private _splunkbaseId?: string; 
  public get splunkbaseId() {
    return this.getStringAttribute('splunkbase_id');
  }
  public set splunkbaseId(value: string) {
    this._splunkbaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkbaseIdInput() {
    return this._splunkbaseId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
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
      acs_licensing_ack: cdktf.stringToTerraform(this._acsLicensingAck),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      splunkbase_id: cdktf.stringToTerraform(this._splunkbaseId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acs_licensing_ack: {
        value: cdktf.stringToHclTerraform(this._acsLicensingAck),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      splunkbase_id: {
        value: cdktf.stringToHclTerraform(this._splunkbaseId),
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
