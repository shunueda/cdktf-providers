// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIntegrationGcpBillingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#additional_tags CloudIntegrationGcpBilling#additional_tags}
  */
  readonly additionalTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#api_key CloudIntegrationGcpBilling#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#force_save CloudIntegrationGcpBilling#force_save}
  */
  readonly forceSave?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#id CloudIntegrationGcpBilling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#json_key CloudIntegrationGcpBilling#json_key}
  */
  readonly jsonKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#name CloudIntegrationGcpBilling#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#project_id CloudIntegrationGcpBilling#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#service CloudIntegrationGcpBilling#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#service_refresh_rate_in_minutes CloudIntegrationGcpBilling#service_refresh_rate_in_minutes}
  */
  readonly serviceRefreshRateInMinutes?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing wavefront_cloud_integration_gcp_billing}
*/
export class CloudIntegrationGcpBilling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_cloud_integration_gcp_billing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudIntegrationGcpBilling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIntegrationGcpBilling to import
  * @param importFromId The id of the existing CloudIntegrationGcpBilling that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIntegrationGcpBilling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_cloud_integration_gcp_billing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_gcp_billing wavefront_cloud_integration_gcp_billing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIntegrationGcpBillingConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIntegrationGcpBillingConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_cloud_integration_gcp_billing',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalTags = config.additionalTags;
    this._apiKey = config.apiKey;
    this._forceSave = config.forceSave;
    this._id = config.id;
    this._jsonKey = config.jsonKey;
    this._name = config.name;
    this._projectId = config.projectId;
    this._service = config.service;
    this._serviceRefreshRateInMinutes = config.serviceRefreshRateInMinutes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_tags - computed: false, optional: true, required: false
  private _additionalTags?: { [key: string]: string }; 
  public get additionalTags() {
    return this.getStringMapAttribute('additional_tags');
  }
  public set additionalTags(value: { [key: string]: string }) {
    this._additionalTags = value;
  }
  public resetAdditionalTags() {
    this._additionalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTagsInput() {
    return this._additionalTags;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // force_save - computed: false, optional: true, required: false
  private _forceSave?: boolean | cdktf.IResolvable; 
  public get forceSave() {
    return this.getBooleanAttribute('force_save');
  }
  public set forceSave(value: boolean | cdktf.IResolvable) {
    this._forceSave = value;
  }
  public resetForceSave() {
    this._forceSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSaveInput() {
    return this._forceSave;
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

  // json_key - computed: false, optional: false, required: true
  private _jsonKey?: string; 
  public get jsonKey() {
    return this.getStringAttribute('json_key');
  }
  public set jsonKey(value: string) {
    this._jsonKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonKeyInput() {
    return this._jsonKey;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_refresh_rate_in_minutes - computed: false, optional: true, required: false
  private _serviceRefreshRateInMinutes?: number; 
  public get serviceRefreshRateInMinutes() {
    return this.getNumberAttribute('service_refresh_rate_in_minutes');
  }
  public set serviceRefreshRateInMinutes(value: number) {
    this._serviceRefreshRateInMinutes = value;
  }
  public resetServiceRefreshRateInMinutes() {
    this._serviceRefreshRateInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRefreshRateInMinutesInput() {
    return this._serviceRefreshRateInMinutes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalTags),
      api_key: cdktf.stringToTerraform(this._apiKey),
      force_save: cdktf.booleanToTerraform(this._forceSave),
      id: cdktf.stringToTerraform(this._id),
      json_key: cdktf.stringToTerraform(this._jsonKey),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      service: cdktf.stringToTerraform(this._service),
      service_refresh_rate_in_minutes: cdktf.numberToTerraform(this._serviceRefreshRateInMinutes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_save: {
        value: cdktf.booleanToHclTerraform(this._forceSave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_key: {
        value: cdktf.stringToHclTerraform(this._jsonKey),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_refresh_rate_in_minutes: {
        value: cdktf.numberToHclTerraform(this._serviceRefreshRateInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
