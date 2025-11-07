// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultFailureLockoutActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to delay the response for authentication attempts even if that delay may block the thread being used to process the attempt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action#allow_blocking_delay DefaultFailureLockoutAction#allow_blocking_delay}
  */
  readonly allowBlockingDelay?: boolean | cdktf.IResolvable;
  /**
  * The length of time to delay the bind response for accounts with too many failed authentication attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action#delay DefaultFailureLockoutAction#delay}
  */
  readonly delay?: string;
  /**
  * A description for this Failure Lockout Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action#description DefaultFailureLockoutAction#description}
  */
  readonly description?: string;
  /**
  * When the `type` attribute is set to:
  *   - `delay-bind-response`: Indicates whether to generate an account status notification for cases in which a bind response is delayed because of failure lockout.
  *   - `no-operation`: Indicates whether to generate an account status notification for cases in which this failure lockout action is invoked for a bind attempt with too many outstanding authentication failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action#generate_account_status_notification DefaultFailureLockoutAction#generate_account_status_notification}
  */
  readonly generateAccountStatusNotification?: boolean | cdktf.IResolvable;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action#name DefaultFailureLockoutAction#name}
  */
  readonly name: string;
}
export interface DefaultFailureLockoutActionRequiredActions {
}

export function defaultFailureLockoutActionRequiredActionsToTerraform(struct?: DefaultFailureLockoutActionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function defaultFailureLockoutActionRequiredActionsToHclTerraform(struct?: DefaultFailureLockoutActionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DefaultFailureLockoutActionRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DefaultFailureLockoutActionRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultFailureLockoutActionRequiredActions | undefined) {
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

export class DefaultFailureLockoutActionRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): DefaultFailureLockoutActionRequiredActionsOutputReference {
    return new DefaultFailureLockoutActionRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action pingdirectory_default_failure_lockout_action}
*/
export class DefaultFailureLockoutAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_default_failure_lockout_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultFailureLockoutAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultFailureLockoutAction to import
  * @param importFromId The id of the existing DefaultFailureLockoutAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultFailureLockoutAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_default_failure_lockout_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/default_failure_lockout_action pingdirectory_default_failure_lockout_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultFailureLockoutActionConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultFailureLockoutActionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_default_failure_lockout_action',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowBlockingDelay = config.allowBlockingDelay;
    this._delay = config.delay;
    this._description = config.description;
    this._generateAccountStatusNotification = config.generateAccountStatusNotification;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_blocking_delay - computed: true, optional: true, required: false
  private _allowBlockingDelay?: boolean | cdktf.IResolvable; 
  public get allowBlockingDelay() {
    return this.getBooleanAttribute('allow_blocking_delay');
  }
  public set allowBlockingDelay(value: boolean | cdktf.IResolvable) {
    this._allowBlockingDelay = value;
  }
  public resetAllowBlockingDelay() {
    this._allowBlockingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBlockingDelayInput() {
    return this._allowBlockingDelay;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: string; 
  public get delay() {
    return this.getStringAttribute('delay');
  }
  public set delay(value: string) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // generate_account_status_notification - computed: true, optional: true, required: false
  private _generateAccountStatusNotification?: boolean | cdktf.IResolvable; 
  public get generateAccountStatusNotification() {
    return this.getBooleanAttribute('generate_account_status_notification');
  }
  public set generateAccountStatusNotification(value: boolean | cdktf.IResolvable) {
    this._generateAccountStatusNotification = value;
  }
  public resetGenerateAccountStatusNotification() {
    this._generateAccountStatusNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateAccountStatusNotificationInput() {
    return this._generateAccountStatusNotification;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _requiredActions = new DefaultFailureLockoutActionRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
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
      allow_blocking_delay: cdktf.booleanToTerraform(this._allowBlockingDelay),
      delay: cdktf.stringToTerraform(this._delay),
      description: cdktf.stringToTerraform(this._description),
      generate_account_status_notification: cdktf.booleanToTerraform(this._generateAccountStatusNotification),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_blocking_delay: {
        value: cdktf.booleanToHclTerraform(this._allowBlockingDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay: {
        value: cdktf.stringToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_account_status_notification: {
        value: cdktf.booleanToHclTerraform(this._generateAccountStatusNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
