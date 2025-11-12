// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationDetectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Dynatrace entity ID of the application, for example APPLICATION-4A3B43
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#application_identifier ApplicationDetectionRule#application_identifier}
  */
  readonly applicationIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#id ApplicationDetectionRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique name of the Application detection rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#name ApplicationDetectionRule#name}
  */
  readonly name?: string;
  /**
  * The order of the rule in the rules list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#order ApplicationDetectionRule#order}
  */
  readonly order?: string;
  /**
  * filter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#filter_config ApplicationDetectionRule#filter_config}
  */
  readonly filterConfig: ApplicationDetectionRuleFilterConfig;
}
export interface ApplicationDetectionRuleFilterConfig {
  /**
  * Where to look for the pattern value, possible values are `DOMAIN` or `URL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#application_match_target ApplicationDetectionRule#application_match_target}
  */
  readonly applicationMatchTarget: string;
  /**
  * The operator used for matching the application detection rule, possible values are `BEGINS_WITH`, `CONTAINS`, `ENDS_WITH`, `EQUALS`, `MATCHES`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#application_match_type ApplicationDetectionRule#application_match_type}
  */
  readonly applicationMatchType: string;
  /**
  * The value to look for with the application detection rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#pattern ApplicationDetectionRule#pattern}
  */
  readonly pattern: string;
}

export function applicationDetectionRuleFilterConfigToTerraform(struct?: ApplicationDetectionRuleFilterConfigOutputReference | ApplicationDetectionRuleFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_match_target: cdktf.stringToTerraform(struct!.applicationMatchTarget),
    application_match_type: cdktf.stringToTerraform(struct!.applicationMatchType),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function applicationDetectionRuleFilterConfigToHclTerraform(struct?: ApplicationDetectionRuleFilterConfigOutputReference | ApplicationDetectionRuleFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_match_target: {
      value: cdktf.stringToHclTerraform(struct!.applicationMatchTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_match_type: {
      value: cdktf.stringToHclTerraform(struct!.applicationMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationDetectionRuleFilterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationDetectionRuleFilterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationMatchTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationMatchTarget = this._applicationMatchTarget;
    }
    if (this._applicationMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationMatchType = this._applicationMatchType;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationDetectionRuleFilterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationMatchTarget = undefined;
      this._applicationMatchType = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationMatchTarget = value.applicationMatchTarget;
      this._applicationMatchType = value.applicationMatchType;
      this._pattern = value.pattern;
    }
  }

  // application_match_target - computed: false, optional: false, required: true
  private _applicationMatchTarget?: string; 
  public get applicationMatchTarget() {
    return this.getStringAttribute('application_match_target');
  }
  public set applicationMatchTarget(value: string) {
    this._applicationMatchTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMatchTargetInput() {
    return this._applicationMatchTarget;
  }

  // application_match_type - computed: false, optional: false, required: true
  private _applicationMatchType?: string; 
  public get applicationMatchType() {
    return this.getStringAttribute('application_match_type');
  }
  public set applicationMatchType(value: string) {
    this._applicationMatchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationMatchTypeInput() {
    return this._applicationMatchType;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule dynatrace_application_detection_rule}
*/
export class ApplicationDetectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_application_detection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationDetectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationDetectionRule to import
  * @param importFromId The id of the existing ApplicationDetectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationDetectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_application_detection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/application_detection_rule dynatrace_application_detection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationDetectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationDetectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_application_detection_rule',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationIdentifier = config.applicationIdentifier;
    this._id = config.id;
    this._name = config.name;
    this._order = config.order;
    this._filterConfig.internalValue = config.filterConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_identifier - computed: false, optional: false, required: true
  private _applicationIdentifier?: string; 
  public get applicationIdentifier() {
    return this.getStringAttribute('application_identifier');
  }
  public set applicationIdentifier(value: string) {
    this._applicationIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdentifierInput() {
    return this._applicationIdentifier;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // filter_config - computed: false, optional: false, required: true
  private _filterConfig = new ApplicationDetectionRuleFilterConfigOutputReference(this, "filter_config");
  public get filterConfig() {
    return this._filterConfig;
  }
  public putFilterConfig(value: ApplicationDetectionRuleFilterConfig) {
    this._filterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigInput() {
    return this._filterConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_identifier: cdktf.stringToTerraform(this._applicationIdentifier),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.stringToTerraform(this._order),
      filter_config: applicationDetectionRuleFilterConfigToTerraform(this._filterConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_identifier: {
        value: cdktf.stringToHclTerraform(this._applicationIdentifier),
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
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_config: {
        value: applicationDetectionRuleFilterConfigToHclTerraform(this._filterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationDetectionRuleFilterConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
