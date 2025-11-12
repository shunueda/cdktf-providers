// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIntegrationAzureActivityLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#additional_tags CloudIntegrationAzureActivityLog#additional_tags}
  */
  readonly additionalTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#category_filter CloudIntegrationAzureActivityLog#category_filter}
  */
  readonly categoryFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#client_id CloudIntegrationAzureActivityLog#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#client_secret CloudIntegrationAzureActivityLog#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#force_save CloudIntegrationAzureActivityLog#force_save}
  */
  readonly forceSave?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#id CloudIntegrationAzureActivityLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#name CloudIntegrationAzureActivityLog#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#service CloudIntegrationAzureActivityLog#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#service_refresh_rate_in_minutes CloudIntegrationAzureActivityLog#service_refresh_rate_in_minutes}
  */
  readonly serviceRefreshRateInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#tenant CloudIntegrationAzureActivityLog#tenant}
  */
  readonly tenant: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log wavefront_cloud_integration_azure_activity_log}
*/
export class CloudIntegrationAzureActivityLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_cloud_integration_azure_activity_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudIntegrationAzureActivityLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIntegrationAzureActivityLog to import
  * @param importFromId The id of the existing CloudIntegrationAzureActivityLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIntegrationAzureActivityLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_cloud_integration_azure_activity_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_azure_activity_log wavefront_cloud_integration_azure_activity_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIntegrationAzureActivityLogConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIntegrationAzureActivityLogConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_cloud_integration_azure_activity_log',
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
    this._categoryFilter = config.categoryFilter;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._forceSave = config.forceSave;
    this._id = config.id;
    this._name = config.name;
    this._service = config.service;
    this._serviceRefreshRateInMinutes = config.serviceRefreshRateInMinutes;
    this._tenant = config.tenant;
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

  // category_filter - computed: false, optional: true, required: false
  private _categoryFilter?: string[]; 
  public get categoryFilter() {
    return this.getListAttribute('category_filter');
  }
  public set categoryFilter(value: string[]) {
    this._categoryFilter = value;
  }
  public resetCategoryFilter() {
    this._categoryFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryFilterInput() {
    return this._categoryFilter;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
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

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalTags),
      category_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._categoryFilter),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      force_save: cdktf.booleanToTerraform(this._forceSave),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.stringToTerraform(this._service),
      service_refresh_rate_in_minutes: cdktf.numberToTerraform(this._serviceRefreshRateInMinutes),
      tenant: cdktf.stringToTerraform(this._tenant),
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
      category_filter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._categoryFilter),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
