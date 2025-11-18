// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/log_managements
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecLogManagementsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/log_managements#id DataAquasecLogManagements#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the log-management configuration to look up.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/log_managements#name DataAquasecLogManagements#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/log_managements aquasec_log_managements}
*/
export class DataAquasecLogManagements extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_log_managements";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecLogManagements resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecLogManagements to import
  * @param importFromId The id of the existing DataAquasecLogManagements that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/log_managements#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecLogManagements to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_log_managements", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/log_managements aquasec_log_managements} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecLogManagementsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecLogManagementsConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_log_managements',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit - computed: true, optional: false, required: false
  public get audit() {
    return this.getStringAttribute('audit');
  }

  // audit_filter - computed: true, optional: false, required: false
  public get auditFilter() {
    return this.getStringAttribute('audit_filter');
  }

  // authentication_option - computed: true, optional: false, required: false
  public get authenticationOption() {
    return this.getStringAttribute('authentication_option');
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
  }

  // credentials_json - computed: true, optional: false, required: false
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }

  // displayname - computed: true, optional: false, required: false
  public get displayname() {
    return this.getStringAttribute('displayname');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // enable_alphanumeric_sorting - computed: true, optional: false, required: false
  public get enableAlphanumericSorting() {
    return this.getBooleanAttribute('enable_alphanumeric_sorting');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // hasnewlabel - computed: true, optional: false, required: false
  public get hasnewlabel() {
    return this.getBooleanAttribute('hasnewlabel');
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

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getStringAttribute('index');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // keyid - computed: true, optional: false, required: false
  public get keyid() {
    return this.getStringAttribute('keyid');
  }

  // learnmore - computed: true, optional: false, required: false
  public get learnmore() {
    return this.getStringAttribute('learnmore');
  }

  // loggroup - computed: true, optional: false, required: false
  public get loggroup() {
    return this.getStringAttribute('loggroup');
  }

  // logname - computed: true, optional: false, required: false
  public get logname() {
    return this.getStringAttribute('logname');
  }

  // logo - computed: true, optional: false, required: false
  public get logo() {
    return this.getStringAttribute('logo');
  }

  // logofull - computed: true, optional: false, required: false
  public get logofull() {
    return this.getStringAttribute('logofull');
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // projectid - computed: true, optional: false, required: false
  public get projectid() {
    return this.getStringAttribute('projectid');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    return this.getStringAttribute('rule');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // sourcetype - computed: true, optional: false, required: false
  public get sourcetype() {
    return this.getStringAttribute('sourcetype');
  }

  // stream_name - computed: true, optional: false, required: false
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // verify_cert - computed: true, optional: false, required: false
  public get verifyCert() {
    return this.getBooleanAttribute('verify_cert');
  }

  // workspace - computed: true, optional: false, required: false
  public get workspace() {
    return this.getStringAttribute('workspace');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
