// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/cloud_development_environments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudDevelopmentEnvironmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The URL to allow app development from. E.g. `https://*.my-company.my-cde-provider.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/cloud_development_environments#cloud_development_environments CloudDevelopmentEnvironments#cloud_development_environments}
  */
  readonly cloudDevelopmentEnvironments?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/cloud_development_environments#id CloudDevelopmentEnvironments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/cloud_development_environments dynatrace_cloud_development_environments}
*/
export class CloudDevelopmentEnvironments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_cloud_development_environments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudDevelopmentEnvironments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudDevelopmentEnvironments to import
  * @param importFromId The id of the existing CloudDevelopmentEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/cloud_development_environments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudDevelopmentEnvironments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_cloud_development_environments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/cloud_development_environments dynatrace_cloud_development_environments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudDevelopmentEnvironmentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudDevelopmentEnvironmentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_cloud_development_environments',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudDevelopmentEnvironments = config.cloudDevelopmentEnvironments;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_development_environments - computed: false, optional: true, required: false
  private _cloudDevelopmentEnvironments?: string[]; 
  public get cloudDevelopmentEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_development_environments'));
  }
  public set cloudDevelopmentEnvironments(value: string[]) {
    this._cloudDevelopmentEnvironments = value;
  }
  public resetCloudDevelopmentEnvironments() {
    this._cloudDevelopmentEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDevelopmentEnvironmentsInput() {
    return this._cloudDevelopmentEnvironments;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_development_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudDevelopmentEnvironments),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_development_environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudDevelopmentEnvironments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
