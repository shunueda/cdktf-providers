// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * key of the custom rule should only contain : a-z, 0-9, \_
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#custom_key Rule#custom_key}
  */
  readonly customKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#id Rule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#markdown_description Rule#markdown_description}
  */
  readonly markdownDescription: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Parameters as semi-colon list of =, for example 'params=key1=v1;key2=v2' (Only for custom rule)
  *   - parameter order: expression=value;filePattern=value;message=value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#params Rule#params}
  */
  readonly params?: string;
  /**
  * If set to true and if the rule has been deactivated (status 'REMOVED'), a status 409 will be returned
  *   - Possible values - true, false, yes, no
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#prevent_reactivation Rule#prevent_reactivation}
  */
  readonly preventReactivation?: string;
  /**
  * Rule severity
  *   - Possible values - INFO, MINOR, MAJOR, CRITICAL, BLOCKER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#severity Rule#severity}
  */
  readonly severity?: string;
  /**
  * Rule status
  *   - Possible values - BETA, DEPRECATED, READY, REMOVED
  *   - Default value - READY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#status Rule#status}
  */
  readonly status?: string;
  /**
  * Key of the template rule in order to create a custom rule (mandatory for custom rule)
  *   - [Example values](https://docs.sonarqube.org/latest/user-guide/rules/#header-4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#template_key Rule#template_key}
  */
  readonly templateKey: string;
  /**
  * Rule type
  *   - Possible values - CODE_SMELL, BUG, VULNERABILITY, SECURITY_HOTSPOT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#type Rule#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule sonarqube_rule}
*/
export class Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rule to import
  * @param importFromId The id of the existing Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs/resources/rule sonarqube_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube_rule',
      terraformGeneratorMetadata: {
        providerName: 'sonarqube',
        providerVersion: '0.16.17',
        providerVersionConstraint: '0.16.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customKey = config.customKey;
    this._id = config.id;
    this._markdownDescription = config.markdownDescription;
    this._name = config.name;
    this._params = config.params;
    this._preventReactivation = config.preventReactivation;
    this._severity = config.severity;
    this._status = config.status;
    this._templateKey = config.templateKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_key - computed: false, optional: false, required: true
  private _customKey?: string; 
  public get customKey() {
    return this.getStringAttribute('custom_key');
  }
  public set customKey(value: string) {
    this._customKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyInput() {
    return this._customKey;
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

  // markdown_description - computed: false, optional: false, required: true
  private _markdownDescription?: string; 
  public get markdownDescription() {
    return this.getStringAttribute('markdown_description');
  }
  public set markdownDescription(value: string) {
    this._markdownDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get markdownDescriptionInput() {
    return this._markdownDescription;
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

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // prevent_reactivation - computed: false, optional: true, required: false
  private _preventReactivation?: string; 
  public get preventReactivation() {
    return this.getStringAttribute('prevent_reactivation');
  }
  public set preventReactivation(value: string) {
    this._preventReactivation = value;
  }
  public resetPreventReactivation() {
    this._preventReactivation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventReactivationInput() {
    return this._preventReactivation;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // template_key - computed: false, optional: false, required: true
  private _templateKey?: string; 
  public get templateKey() {
    return this.getStringAttribute('template_key');
  }
  public set templateKey(value: string) {
    this._templateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateKeyInput() {
    return this._templateKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_key: cdktf.stringToTerraform(this._customKey),
      id: cdktf.stringToTerraform(this._id),
      markdown_description: cdktf.stringToTerraform(this._markdownDescription),
      name: cdktf.stringToTerraform(this._name),
      params: cdktf.stringToTerraform(this._params),
      prevent_reactivation: cdktf.stringToTerraform(this._preventReactivation),
      severity: cdktf.stringToTerraform(this._severity),
      status: cdktf.stringToTerraform(this._status),
      template_key: cdktf.stringToTerraform(this._templateKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_key: {
        value: cdktf.stringToHclTerraform(this._customKey),
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
      markdown_description: {
        value: cdktf.stringToHclTerraform(this._markdownDescription),
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
      params: {
        value: cdktf.stringToHclTerraform(this._params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_reactivation: {
        value: cdktf.stringToHclTerraform(this._preventReactivation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_key: {
        value: cdktf.stringToHclTerraform(this._templateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
