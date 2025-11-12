// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementNatRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#comments ManagementNatRule#comments}
  */
  readonly comments?: string;
  /**
  * Enable/Disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#enabled ManagementNatRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#id ManagementNatRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#ignore_errors ManagementNatRule#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#ignore_warnings ManagementNatRule#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Which Gateways identified by the name or UID to install the policy on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#install_on ManagementNatRule#install_on}
  */
  readonly installOn?: string[];
  /**
  * Nat method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#method ManagementNatRule#method}
  */
  readonly method?: string;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#name ManagementNatRule#name}
  */
  readonly name?: string;
  /**
  * Original destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#original_destination ManagementNatRule#original_destination}
  */
  readonly originalDestination?: string;
  /**
  * Original service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#original_service ManagementNatRule#original_service}
  */
  readonly originalService?: string;
  /**
  * Original source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#original_source ManagementNatRule#original_source}
  */
  readonly originalSource?: string;
  /**
  * Name of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#package ManagementNatRule#package}
  */
  readonly package: string;
  /**
  * Position in the rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#position ManagementNatRule#position}
  */
  readonly position: { [key: string]: string };
  /**
  * Translated destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#translated_destination ManagementNatRule#translated_destination}
  */
  readonly translatedDestination?: string;
  /**
  * Translated service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#translated_service ManagementNatRule#translated_service}
  */
  readonly translatedService?: string;
  /**
  * Translated source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#translated_source ManagementNatRule#translated_source}
  */
  readonly translatedSource?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule checkpoint_management_nat_rule}
*/
export class ManagementNatRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_nat_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementNatRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementNatRule to import
  * @param importFromId The id of the existing ManagementNatRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementNatRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_nat_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_nat_rule checkpoint_management_nat_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementNatRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementNatRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_nat_rule',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments = config.comments;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._installOn = config.installOn;
    this._method = config.method;
    this._name = config.name;
    this._originalDestination = config.originalDestination;
    this._originalService = config.originalService;
    this._originalSource = config.originalSource;
    this._package = config.package;
    this._position = config.position;
    this._translatedDestination = config.translatedDestination;
    this._translatedService = config.translatedService;
    this._translatedSource = config.translatedSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_generated - computed: true, optional: false, required: false
  public get autoGenerated() {
    return this.getBooleanAttribute('auto_generated');
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // install_on - computed: false, optional: true, required: false
  private _installOn?: string[]; 
  public get installOn() {
    return cdktf.Fn.tolist(this.getListAttribute('install_on'));
  }
  public set installOn(value: string[]) {
    this._installOn = value;
  }
  public resetInstallOn() {
    this._installOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installOnInput() {
    return this._installOn;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // original_destination - computed: false, optional: true, required: false
  private _originalDestination?: string; 
  public get originalDestination() {
    return this.getStringAttribute('original_destination');
  }
  public set originalDestination(value: string) {
    this._originalDestination = value;
  }
  public resetOriginalDestination() {
    this._originalDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDestinationInput() {
    return this._originalDestination;
  }

  // original_service - computed: false, optional: true, required: false
  private _originalService?: string; 
  public get originalService() {
    return this.getStringAttribute('original_service');
  }
  public set originalService(value: string) {
    this._originalService = value;
  }
  public resetOriginalService() {
    this._originalService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalServiceInput() {
    return this._originalService;
  }

  // original_source - computed: false, optional: true, required: false
  private _originalSource?: string; 
  public get originalSource() {
    return this.getStringAttribute('original_source');
  }
  public set originalSource(value: string) {
    this._originalSource = value;
  }
  public resetOriginalSource() {
    this._originalSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalSourceInput() {
    return this._originalSource;
  }

  // package - computed: false, optional: false, required: true
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // position - computed: false, optional: false, required: true
  private _position?: { [key: string]: string }; 
  public get position() {
    return this.getStringMapAttribute('position');
  }
  public set position(value: { [key: string]: string }) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // translated_destination - computed: false, optional: true, required: false
  private _translatedDestination?: string; 
  public get translatedDestination() {
    return this.getStringAttribute('translated_destination');
  }
  public set translatedDestination(value: string) {
    this._translatedDestination = value;
  }
  public resetTranslatedDestination() {
    this._translatedDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedDestinationInput() {
    return this._translatedDestination;
  }

  // translated_service - computed: false, optional: true, required: false
  private _translatedService?: string; 
  public get translatedService() {
    return this.getStringAttribute('translated_service');
  }
  public set translatedService(value: string) {
    this._translatedService = value;
  }
  public resetTranslatedService() {
    this._translatedService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedServiceInput() {
    return this._translatedService;
  }

  // translated_source - computed: false, optional: true, required: false
  private _translatedSource?: string; 
  public get translatedSource() {
    return this.getStringAttribute('translated_source');
  }
  public set translatedSource(value: string) {
    this._translatedSource = value;
  }
  public resetTranslatedSource() {
    this._translatedSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedSourceInput() {
    return this._translatedSource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      install_on: cdktf.listMapper(cdktf.stringToTerraform, false)(this._installOn),
      method: cdktf.stringToTerraform(this._method),
      name: cdktf.stringToTerraform(this._name),
      original_destination: cdktf.stringToTerraform(this._originalDestination),
      original_service: cdktf.stringToTerraform(this._originalService),
      original_source: cdktf.stringToTerraform(this._originalSource),
      package: cdktf.stringToTerraform(this._package),
      position: cdktf.hashMapper(cdktf.stringToTerraform)(this._position),
      translated_destination: cdktf.stringToTerraform(this._translatedDestination),
      translated_service: cdktf.stringToTerraform(this._translatedService),
      translated_source: cdktf.stringToTerraform(this._translatedSource),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      install_on: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._installOn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      original_destination: {
        value: cdktf.stringToHclTerraform(this._originalDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_service: {
        value: cdktf.stringToHclTerraform(this._originalService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_source: {
        value: cdktf.stringToHclTerraform(this._originalSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package: {
        value: cdktf.stringToHclTerraform(this._package),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._position),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      translated_destination: {
        value: cdktf.stringToHclTerraform(this._translatedDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_service: {
        value: cdktf.stringToHclTerraform(this._translatedService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_source: {
        value: cdktf.stringToHclTerraform(this._translatedSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
