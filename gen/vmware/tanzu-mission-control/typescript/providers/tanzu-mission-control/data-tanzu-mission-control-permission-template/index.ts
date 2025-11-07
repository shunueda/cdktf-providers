// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlPermissionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the credentials to get permission template for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template#credentials_name DataTanzuMissionControlPermissionTemplate#credentials_name}
  */
  readonly credentialsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template#id DataTanzuMissionControlPermissionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Tanzu capability of the credentials.
  * When tanzu_capability is set to 'MANAGED_K8S_PROVIDER' tanzu_provider must be set to 'AWS_EKS'.
  * When tanzu_capability is set to 'DATA_PROTECTION' tanzu_provider must be set to 'AWS_EC2'.
  * Valid values are: [MANAGED_K8S_PROVIDER DATA_PROTECTION]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template#tanzu_capability DataTanzuMissionControlPermissionTemplate#tanzu_capability}
  */
  readonly tanzuCapability: string;
  /**
  * The Tanzu provider of the credentials.
  * When tanzu_provider is set to 'AWS_EKS' tanzu_capability must be set to 'MANAGED_K8S_PROVIDER'.
  * When tanzu_provider is set to 'AWS_EC2' tanzu_capability must be set to 'DATA_PROTECTION'.
  * Valid values are: [AWS_EKS AWS_EC2]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template#tanzu_provider DataTanzuMissionControlPermissionTemplate#tanzu_provider}
  */
  readonly tanzuProvider: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template tanzu-mission-control_permission_template}
*/
export class DataTanzuMissionControlPermissionTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_permission_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlPermissionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlPermissionTemplate to import
  * @param importFromId The id of the existing DataTanzuMissionControlPermissionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlPermissionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_permission_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/permission_template tanzu-mission-control_permission_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlPermissionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlPermissionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_permission_template',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsName = config.credentialsName;
    this._id = config.id;
    this._tanzuCapability = config.tanzuCapability;
    this._tanzuProvider = config.tanzuProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_name - computed: false, optional: false, required: true
  private _credentialsName?: string; 
  public get credentialsName() {
    return this.getStringAttribute('credentials_name');
  }
  public set credentialsName(value: string) {
    this._credentialsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsNameInput() {
    return this._credentialsName;
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

  // tanzu_capability - computed: false, optional: false, required: true
  private _tanzuCapability?: string; 
  public get tanzuCapability() {
    return this.getStringAttribute('tanzu_capability');
  }
  public set tanzuCapability(value: string) {
    this._tanzuCapability = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tanzuCapabilityInput() {
    return this._tanzuCapability;
  }

  // tanzu_provider - computed: false, optional: false, required: true
  private _tanzuProvider?: string; 
  public get tanzuProvider() {
    return this.getStringAttribute('tanzu_provider');
  }
  public set tanzuProvider(value: string) {
    this._tanzuProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tanzuProviderInput() {
    return this._tanzuProvider;
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }

  // template_values - computed: true, optional: false, required: false
  private _templateValues = new cdktf.StringMap(this, "template_values");
  public get templateValues() {
    return this._templateValues;
  }

  // undefined_template_values - computed: true, optional: false, required: false
  private _undefinedTemplateValues = new cdktf.StringMap(this, "undefined_template_values");
  public get undefinedTemplateValues() {
    return this._undefinedTemplateValues;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_name: cdktf.stringToTerraform(this._credentialsName),
      id: cdktf.stringToTerraform(this._id),
      tanzu_capability: cdktf.stringToTerraform(this._tanzuCapability),
      tanzu_provider: cdktf.stringToTerraform(this._tanzuProvider),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_name: {
        value: cdktf.stringToHclTerraform(this._credentialsName),
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
      tanzu_capability: {
        value: cdktf.stringToHclTerraform(this._tanzuCapability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tanzu_provider: {
        value: cdktf.stringToHclTerraform(this._tanzuProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
