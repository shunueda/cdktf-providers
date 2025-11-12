// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultChangeSubscriptionHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of change subscriptions for which this change subscription handler should be notified. If no values are provided then it will be notified for all change subscriptions defined in the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#change_subscription DefaultChangeSubscriptionHandler#change_subscription}
  */
  readonly changeSubscription?: string[];
  /**
  * A description for this Change Subscription Handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#description DefaultChangeSubscriptionHandler#description}
  */
  readonly description?: string;
  /**
  * Indicates whether this change subscription handler is enabled within the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#enabled DefaultChangeSubscriptionHandler#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of arguments used to customize the behavior for the Third Party Change Subscription Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#extension_argument DefaultChangeSubscriptionHandler#extension_argument}
  */
  readonly extensionArgument?: string[];
  /**
  * The fully-qualified name of the Java class providing the logic for the Third Party Change Subscription Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#extension_class DefaultChangeSubscriptionHandler#extension_class}
  */
  readonly extensionClass?: string;
  /**
  * Specifies the log file in which the change notification messages will be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#log_file DefaultChangeSubscriptionHandler#log_file}
  */
  readonly logFile?: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#name DefaultChangeSubscriptionHandler#name}
  */
  readonly name: string;
  /**
  * The set of arguments used to customize the behavior for the Scripted Change Subscription Handler. Each configuration property should be given in the form 'name=value'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#script_argument DefaultChangeSubscriptionHandler#script_argument}
  */
  readonly scriptArgument?: string[];
  /**
  * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Change Subscription Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#script_class DefaultChangeSubscriptionHandler#script_class}
  */
  readonly scriptClass?: string;
}
export interface DefaultChangeSubscriptionHandlerRequiredActions {
}

export function defaultChangeSubscriptionHandlerRequiredActionsToTerraform(struct?: DefaultChangeSubscriptionHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultChangeSubscriptionHandlerRequiredActionsToHclTerraform(struct?: DefaultChangeSubscriptionHandlerRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultChangeSubscriptionHandlerRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DefaultChangeSubscriptionHandlerRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultChangeSubscriptionHandlerRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DefaultChangeSubscriptionHandlerRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DefaultChangeSubscriptionHandlerRequiredActionsOutputReference {
    return new DefaultChangeSubscriptionHandlerRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler pingdirectory_default_change_subscription_handler}
*/
export class DefaultChangeSubscriptionHandler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_change_subscription_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultChangeSubscriptionHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultChangeSubscriptionHandler to import
  * @param importFromId The id of the existing DefaultChangeSubscriptionHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultChangeSubscriptionHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_change_subscription_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_change_subscription_handler pingdirectory_default_change_subscription_handler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultChangeSubscriptionHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultChangeSubscriptionHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_change_subscription_handler',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._changeSubscription = config.changeSubscription;
    this._description = config.description;
    this._enabled = config.enabled;
    this._extensionArgument = config.extensionArgument;
    this._extensionClass = config.extensionClass;
    this._logFile = config.logFile;
    this._name = config.name;
    this._scriptArgument = config.scriptArgument;
    this._scriptClass = config.scriptClass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_subscription - computed: true, optional: true, required: false
  private _changeSubscription?: string[]; 
  public get changeSubscription() {
    return cdktf.Fn.tolist(this.getListAttribute('change_subscription'));
  }
  public set changeSubscription(value: string[]) {
    this._changeSubscription = value;
  }
  public resetChangeSubscription() {
    this._changeSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSubscriptionInput() {
    return this._changeSubscription;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
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

  // extension_argument - computed: true, optional: true, required: false
  private _extensionArgument?: string[]; 
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }
  public set extensionArgument(value: string[]) {
    this._extensionArgument = value;
  }
  public resetExtensionArgument() {
    this._extensionArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionArgumentInput() {
    return this._extensionArgument;
  }

  // extension_class - computed: true, optional: true, required: false
  private _extensionClass?: string; 
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }
  public set extensionClass(value: string) {
    this._extensionClass = value;
  }
  public resetExtensionClass() {
    this._extensionClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionClassInput() {
    return this._extensionClass;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_file - computed: true, optional: true, required: false
  private _logFile?: string; 
  public get logFile() {
    return this.getStringAttribute('log_file');
  }
  public set logFile(value: string) {
    this._logFile = value;
  }
  public resetLogFile() {
    this._logFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFileInput() {
    return this._logFile;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new DefaultChangeSubscriptionHandlerRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // script_argument - computed: true, optional: true, required: false
  private _scriptArgument?: string[]; 
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }
  public set scriptArgument(value: string[]) {
    this._scriptArgument = value;
  }
  public resetScriptArgument() {
    this._scriptArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgumentInput() {
    return this._scriptArgument;
  }

  // script_class - computed: true, optional: true, required: false
  private _scriptClass?: string; 
  public get scriptClass() {
    return this.getStringAttribute('script_class');
  }
  public set scriptClass(value: string) {
    this._scriptClass = value;
  }
  public resetScriptClass() {
    this._scriptClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptClassInput() {
    return this._scriptClass;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_subscription: cdktf.listMapper(cdktf.stringToTerraform, false)(this._changeSubscription),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extension_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extensionArgument),
      extension_class: cdktf.stringToTerraform(this._extensionClass),
      log_file: cdktf.stringToTerraform(this._logFile),
      name: cdktf.stringToTerraform(this._name),
      script_argument: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scriptArgument),
      script_class: cdktf.stringToTerraform(this._scriptClass),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_subscription: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._changeSubscription),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      extension_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extensionArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extension_class: {
        value: cdktf.stringToHclTerraform(this._extensionClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_file: {
        value: cdktf.stringToHclTerraform(this._logFile),
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
      script_argument: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scriptArgument),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      script_class: {
        value: cdktf.stringToHclTerraform(this._scriptClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
