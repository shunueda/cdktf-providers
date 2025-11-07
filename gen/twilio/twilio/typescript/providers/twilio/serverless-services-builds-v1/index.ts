// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerlessServicesBuildsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1#asset_versions ServerlessServicesBuildsV1#asset_versions}
  */
  readonly assetVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1#dependencies ServerlessServicesBuildsV1#dependencies}
  */
  readonly dependencies?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1#function_versions ServerlessServicesBuildsV1#function_versions}
  */
  readonly functionVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1#id ServerlessServicesBuildsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1#runtime ServerlessServicesBuildsV1#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1#service_sid ServerlessServicesBuildsV1#service_sid}
  */
  readonly serviceSid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1 twilio_serverless_services_builds_v1}
*/
export class ServerlessServicesBuildsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_serverless_services_builds_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerlessServicesBuildsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerlessServicesBuildsV1 to import
  * @param importFromId The id of the existing ServerlessServicesBuildsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerlessServicesBuildsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_serverless_services_builds_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/serverless_services_builds_v1 twilio_serverless_services_builds_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerlessServicesBuildsV1Config
  */
  public constructor(scope: Construct, id: string, config: ServerlessServicesBuildsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_serverless_services_builds_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetVersions = config.assetVersions;
    this._dependencies = config.dependencies;
    this._functionVersions = config.functionVersions;
    this._id = config.id;
    this._runtime = config.runtime;
    this._serviceSid = config.serviceSid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_versions - computed: true, optional: true, required: false
  private _assetVersions?: string[]; 
  public get assetVersions() {
    return this.getListAttribute('asset_versions');
  }
  public set assetVersions(value: string[]) {
    this._assetVersions = value;
  }
  public resetAssetVersions() {
    this._assetVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetVersionsInput() {
    return this._assetVersions;
  }

  // dependencies - computed: true, optional: true, required: false
  private _dependencies?: string; 
  public get dependencies() {
    return this.getStringAttribute('dependencies');
  }
  public set dependencies(value: string) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // function_versions - computed: true, optional: true, required: false
  private _functionVersions?: string[]; 
  public get functionVersions() {
    return this.getListAttribute('function_versions');
  }
  public set functionVersions(value: string[]) {
    this._functionVersions = value;
  }
  public resetFunctionVersions() {
    this._functionVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionsInput() {
    return this._functionVersions;
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

  // runtime - computed: true, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetVersions),
      dependencies: cdktf.stringToTerraform(this._dependencies),
      function_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functionVersions),
      id: cdktf.stringToTerraform(this._id),
      runtime: cdktf.stringToTerraform(this._runtime),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dependencies: {
        value: cdktf.stringToHclTerraform(this._dependencies),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functionVersions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
