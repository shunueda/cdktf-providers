// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpCloudConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * the GCP credential configuration file content (JSON)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration#credential_configuration_file_content GcpCloudConfiguration#credential_configuration_file_content}
  */
  readonly credentialConfigurationFileContent: string;
  /**
  * the GCP project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration#gcp_project_id GcpCloudConfiguration#gcp_project_id}
  */
  readonly gcpProjectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration#id GcpCloudConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name for the cloud configuration for insights
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration#name GcpCloudConfiguration#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration env0_gcp_cloud_configuration}
*/
export class GcpCloudConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_gcp_cloud_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpCloudConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpCloudConfiguration to import
  * @param importFromId The id of the existing GcpCloudConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpCloudConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_gcp_cloud_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/resources/gcp_cloud_configuration env0_gcp_cloud_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpCloudConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GcpCloudConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_gcp_cloud_configuration',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialConfigurationFileContent = config.credentialConfigurationFileContent;
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_configuration_file_content - computed: false, optional: false, required: true
  private _credentialConfigurationFileContent?: string; 
  public get credentialConfigurationFileContent() {
    return this.getStringAttribute('credential_configuration_file_content');
  }
  public set credentialConfigurationFileContent(value: string) {
    this._credentialConfigurationFileContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialConfigurationFileContentInput() {
    return this._credentialConfigurationFileContent;
  }

  // gcp_project_id - computed: false, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getBooleanAttribute('health');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_configuration_file_content: cdktf.stringToTerraform(this._credentialConfigurationFileContent),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_configuration_file_content: {
        value: cdktf.stringToHclTerraform(this._credentialConfigurationFileContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
