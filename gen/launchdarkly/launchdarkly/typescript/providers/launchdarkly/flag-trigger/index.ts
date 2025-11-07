// https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlagTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the trigger is currently active or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#enabled FlagTrigger#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The unique key of the environment the flag trigger will work in. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#env_key FlagTrigger#env_key}
  */
  readonly envKey: string;
  /**
  * The unique key of the associated flag. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#flag_key FlagTrigger#flag_key}
  */
  readonly flagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#id FlagTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique identifier of the integration you intend to set your trigger up with. Currently supported are `generic-trigger`, `datadog`, `dynatrace`, `dynatrace-cloud-automation`, `honeycomb`, `new-relic-apm`, and `signalfx`. `generic-trigger` should be used for integrations not explicitly supported. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#integration_key FlagTrigger#integration_key}
  */
  readonly integrationKey: string;
  /**
  * The unique key of the project encompassing the associated flag. A change in this field will force the destruction of the existing resource and the creation of a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#project_key FlagTrigger#project_key}
  */
  readonly projectKey: string;
  /**
  * instructions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#instructions FlagTrigger#instructions}
  */
  readonly instructions: FlagTriggerInstructions;
}
export interface FlagTriggerInstructions {
  /**
  * The action to perform when triggering. Currently supported flag actions are `turnFlagOn` and `turnFlagOff`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#kind FlagTrigger#kind}
  */
  readonly kind: string;
}

export function flagTriggerInstructionsToTerraform(struct?: FlagTriggerInstructionsOutputReference | FlagTriggerInstructions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function flagTriggerInstructionsToHclTerraform(struct?: FlagTriggerInstructionsOutputReference | FlagTriggerInstructions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlagTriggerInstructionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlagTriggerInstructions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlagTriggerInstructions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind = value.kind;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger launchdarkly_flag_trigger}
*/
export class FlagTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "launchdarkly_flag_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlagTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlagTrigger to import
  * @param importFromId The id of the existing FlagTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlagTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "launchdarkly_flag_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/launchdarkly/launchdarkly/2.25.3/docs/resources/flag_trigger launchdarkly_flag_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlagTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: FlagTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'launchdarkly_flag_trigger',
      terraformGeneratorMetadata: {
        providerName: 'launchdarkly',
        providerVersion: '2.25.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._envKey = config.envKey;
    this._flagKey = config.flagKey;
    this._id = config.id;
    this._integrationKey = config.integrationKey;
    this._projectKey = config.projectKey;
    this._instructions.internalValue = config.instructions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // env_key - computed: false, optional: false, required: true
  private _envKey?: string; 
  public get envKey() {
    return this.getStringAttribute('env_key');
  }
  public set envKey(value: string) {
    this._envKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envKeyInput() {
    return this._envKey;
  }

  // flag_key - computed: false, optional: false, required: true
  private _flagKey?: string; 
  public get flagKey() {
    return this.getStringAttribute('flag_key');
  }
  public set flagKey(value: string) {
    this._flagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flagKeyInput() {
    return this._flagKey;
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

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
  }

  // maintainer_id - computed: true, optional: false, required: false
  public get maintainerId() {
    return this.getStringAttribute('maintainer_id');
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // trigger_url - computed: true, optional: false, required: false
  public get triggerUrl() {
    return this.getStringAttribute('trigger_url');
  }

  // instructions - computed: false, optional: false, required: true
  private _instructions = new FlagTriggerInstructionsOutputReference(this, "instructions");
  public get instructions() {
    return this._instructions;
  }
  public putInstructions(value: FlagTriggerInstructions) {
    this._instructions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      env_key: cdktf.stringToTerraform(this._envKey),
      flag_key: cdktf.stringToTerraform(this._flagKey),
      id: cdktf.stringToTerraform(this._id),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      project_key: cdktf.stringToTerraform(this._projectKey),
      instructions: flagTriggerInstructionsToTerraform(this._instructions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      env_key: {
        value: cdktf.stringToHclTerraform(this._envKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flag_key: {
        value: cdktf.stringToHclTerraform(this._flagKey),
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
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instructions: {
        value: flagTriggerInstructionsToHclTerraform(this._instructions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlagTriggerInstructionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
