// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#description ExternalLink#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#id ExternalLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#is_log_integration ExternalLink#is_log_integration}
  */
  readonly isLogIntegration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#metric_filter_regex ExternalLink#metric_filter_regex}
  */
  readonly metricFilterRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#name ExternalLink#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#point_tag_filter_regexes ExternalLink#point_tag_filter_regexes}
  */
  readonly pointTagFilterRegexes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#source_filter_regex ExternalLink#source_filter_regex}
  */
  readonly sourceFilterRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#template ExternalLink#template}
  */
  readonly template: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link wavefront_external_link}
*/
export class ExternalLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_external_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalLink to import
  * @param importFromId The id of the existing ExternalLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_external_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/resources/external_link wavefront_external_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalLinkConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_external_link',
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
    this._description = config.description;
    this._id = config.id;
    this._isLogIntegration = config.isLogIntegration;
    this._metricFilterRegex = config.metricFilterRegex;
    this._name = config.name;
    this._pointTagFilterRegexes = config.pointTagFilterRegexes;
    this._sourceFilterRegex = config.sourceFilterRegex;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // is_log_integration - computed: false, optional: true, required: false
  private _isLogIntegration?: boolean | cdktf.IResolvable; 
  public get isLogIntegration() {
    return this.getBooleanAttribute('is_log_integration');
  }
  public set isLogIntegration(value: boolean | cdktf.IResolvable) {
    this._isLogIntegration = value;
  }
  public resetIsLogIntegration() {
    this._isLogIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLogIntegrationInput() {
    return this._isLogIntegration;
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

  // point_tag_filter_regexes - computed: false, optional: true, required: false
  private _pointTagFilterRegexes?: { [key: string]: string }; 
  public get pointTagFilterRegexes() {
    return this.getStringMapAttribute('point_tag_filter_regexes');
  }
  public set pointTagFilterRegexes(value: { [key: string]: string }) {
    this._pointTagFilterRegexes = value;
  }
  public resetPointTagFilterRegexes() {
    this._pointTagFilterRegexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointTagFilterRegexesInput() {
    return this._pointTagFilterRegexes;
  }

  // source_filter_regex - computed: false, optional: true, required: false
  private _sourceFilterRegex?: string; 
  public get sourceFilterRegex() {
    return this.getStringAttribute('source_filter_regex');
  }
  public set sourceFilterRegex(value: string) {
    this._sourceFilterRegex = value;
  }
  public resetSourceFilterRegex() {
    this._sourceFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFilterRegexInput() {
    return this._sourceFilterRegex;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_log_integration: cdktf.booleanToTerraform(this._isLogIntegration),
      metric_filter_regex: cdktf.stringToTerraform(this._metricFilterRegex),
      name: cdktf.stringToTerraform(this._name),
      point_tag_filter_regexes: cdktf.hashMapper(cdktf.stringToTerraform)(this._pointTagFilterRegexes),
      source_filter_regex: cdktf.stringToTerraform(this._sourceFilterRegex),
      template: cdktf.stringToTerraform(this._template),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_log_integration: {
        value: cdktf.booleanToHclTerraform(this._isLogIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      point_tag_filter_regexes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._pointTagFilterRegexes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      source_filter_regex: {
        value: cdktf.stringToHclTerraform(this._sourceFilterRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
