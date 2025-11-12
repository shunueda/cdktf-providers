// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIntegrationCloudwatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#additional_tags CloudIntegrationCloudwatch#additional_tags}
  */
  readonly additionalTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#external_id CloudIntegrationCloudwatch#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#force_save CloudIntegrationCloudwatch#force_save}
  */
  readonly forceSave?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#id CloudIntegrationCloudwatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#instance_selection_tags CloudIntegrationCloudwatch#instance_selection_tags}
  */
  readonly instanceSelectionTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#metric_filter_regex CloudIntegrationCloudwatch#metric_filter_regex}
  */
  readonly metricFilterRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#name CloudIntegrationCloudwatch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#namespaces CloudIntegrationCloudwatch#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#point_tag_filter_regex CloudIntegrationCloudwatch#point_tag_filter_regex}
  */
  readonly pointTagFilterRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#role_arn CloudIntegrationCloudwatch#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#service CloudIntegrationCloudwatch#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#service_refresh_rate_in_minutes CloudIntegrationCloudwatch#service_refresh_rate_in_minutes}
  */
  readonly serviceRefreshRateInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#volume_selection_tags CloudIntegrationCloudwatch#volume_selection_tags}
  */
  readonly volumeSelectionTags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch wavefront_cloud_integration_cloudwatch}
*/
export class CloudIntegrationCloudwatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_cloud_integration_cloudwatch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudIntegrationCloudwatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIntegrationCloudwatch to import
  * @param importFromId The id of the existing CloudIntegrationCloudwatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIntegrationCloudwatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_cloud_integration_cloudwatch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/cloud_integration_cloudwatch wavefront_cloud_integration_cloudwatch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIntegrationCloudwatchConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIntegrationCloudwatchConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_cloud_integration_cloudwatch',
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
    this._externalId = config.externalId;
    this._forceSave = config.forceSave;
    this._id = config.id;
    this._instanceSelectionTags = config.instanceSelectionTags;
    this._metricFilterRegex = config.metricFilterRegex;
    this._name = config.name;
    this._namespaces = config.namespaces;
    this._pointTagFilterRegex = config.pointTagFilterRegex;
    this._roleArn = config.roleArn;
    this._service = config.service;
    this._serviceRefreshRateInMinutes = config.serviceRefreshRateInMinutes;
    this._volumeSelectionTags = config.volumeSelectionTags;
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

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // instance_selection_tags - computed: false, optional: true, required: false
  private _instanceSelectionTags?: { [key: string]: string }; 
  public get instanceSelectionTags() {
    return this.getStringMapAttribute('instance_selection_tags');
  }
  public set instanceSelectionTags(value: { [key: string]: string }) {
    this._instanceSelectionTags = value;
  }
  public resetInstanceSelectionTags() {
    this._instanceSelectionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSelectionTagsInput() {
    return this._instanceSelectionTags;
  }

  // metric_filter_regex - computed: false, optional: true, required: false
  private _metricFilterRegex?: string; 
  public get metricFilterRegex() {
    return this.getStringAttribute('metric_filter_regex');
  }
  public set metricFilterRegex(value: string) {
    this._metricFilterRegex = value;
  }
  public resetMetricFilterRegex() {
    this._metricFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFilterRegexInput() {
    return this._metricFilterRegex;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // point_tag_filter_regex - computed: false, optional: true, required: false
  private _pointTagFilterRegex?: string; 
  public get pointTagFilterRegex() {
    return this.getStringAttribute('point_tag_filter_regex');
  }
  public set pointTagFilterRegex(value: string) {
    this._pointTagFilterRegex = value;
  }
  public resetPointTagFilterRegex() {
    this._pointTagFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointTagFilterRegexInput() {
    return this._pointTagFilterRegex;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
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

  // volume_selection_tags - computed: false, optional: true, required: false
  private _volumeSelectionTags?: { [key: string]: string }; 
  public get volumeSelectionTags() {
    return this.getStringMapAttribute('volume_selection_tags');
  }
  public set volumeSelectionTags(value: { [key: string]: string }) {
    this._volumeSelectionTags = value;
  }
  public resetVolumeSelectionTags() {
    this._volumeSelectionTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSelectionTagsInput() {
    return this._volumeSelectionTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalTags),
      external_id: cdktf.stringToTerraform(this._externalId),
      force_save: cdktf.booleanToTerraform(this._forceSave),
      id: cdktf.stringToTerraform(this._id),
      instance_selection_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._instanceSelectionTags),
      metric_filter_regex: cdktf.stringToTerraform(this._metricFilterRegex),
      name: cdktf.stringToTerraform(this._name),
      namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namespaces),
      point_tag_filter_regex: cdktf.stringToTerraform(this._pointTagFilterRegex),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      service: cdktf.stringToTerraform(this._service),
      service_refresh_rate_in_minutes: cdktf.numberToTerraform(this._serviceRefreshRateInMinutes),
      volume_selection_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._volumeSelectionTags),
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
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      instance_selection_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._instanceSelectionTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metric_filter_regex: {
        value: cdktf.stringToHclTerraform(this._metricFilterRegex),
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
      namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      point_tag_filter_regex: {
        value: cdktf.stringToHclTerraform(this._pointTagFilterRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      volume_selection_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._volumeSelectionTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
