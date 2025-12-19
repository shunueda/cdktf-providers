// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosViolationActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Blackhole the zone (in minute, 0 means infinite)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#blackhole DdosViolationActions#blackhole}
  */
  readonly blackhole?: number;
  /**
  * Blacklist-src (in min) (applied only for source action)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#blacklist_src DdosViolationActions#blacklist_src}
  */
  readonly blacklistSrc?: number;
  /**
  * Specify DDOS script to run (applied only for zone action)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#execute_script DdosViolationActions#execute_script}
  */
  readonly executeScript?: string;
  /**
  * Timeout for script execution (in seconds) (applied only for zone action)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#execute_script_timeout DdosViolationActions#execute_script_timeout}
  */
  readonly executeScriptTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#id DdosViolationActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS violation-actions name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#name DdosViolationActions#name}
  */
  readonly name: string;
  /**
  * Forces TPS to only send out notification for the violation-action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#send_notification_only DdosViolationActions#send_notification_only}
  */
  readonly sendNotificationOnly?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#user_tag DdosViolationActions#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#uuid DdosViolationActions#uuid}
  */
  readonly uuid?: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#notification DdosViolationActions#notification}
  */
  readonly notification?: DdosViolationActionsNotification[] | cdktf.IResolvable;
}
export interface DdosViolationActionsNotification {
  /**
  * Specify the notification template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#notification_template DdosViolationActions#notification_template}
  */
  readonly notificationTemplate?: string;
}

export function ddosViolationActionsNotificationToTerraform(struct?: DdosViolationActionsNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_template: cdktf.stringToTerraform(struct!.notificationTemplate),
  }
}


export function ddosViolationActionsNotificationToHclTerraform(struct?: DdosViolationActionsNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_template: {
      value: cdktf.stringToHclTerraform(struct!.notificationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosViolationActionsNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DdosViolationActionsNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTemplate = this._notificationTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosViolationActionsNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationTemplate = value.notificationTemplate;
    }
  }

  // notification_template - computed: false, optional: true, required: false
  private _notificationTemplate?: string; 
  public get notificationTemplate() {
    return this.getStringAttribute('notification_template');
  }
  public set notificationTemplate(value: string) {
    this._notificationTemplate = value;
  }
  public resetNotificationTemplate() {
    this._notificationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateInput() {
    return this._notificationTemplate;
  }
}

export class DdosViolationActionsNotificationList extends cdktf.ComplexList {
  public internalValue? : DdosViolationActionsNotification[] | cdktf.IResolvable

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
  public get(index: number): DdosViolationActionsNotificationOutputReference {
    return new DdosViolationActionsNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions thunder_ddos_violation_actions}
*/
export class DdosViolationActions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_violation_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosViolationActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosViolationActions to import
  * @param importFromId The id of the existing DdosViolationActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosViolationActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_violation_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_violation_actions thunder_ddos_violation_actions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosViolationActionsConfig
  */
  public constructor(scope: Construct, id: string, config: DdosViolationActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_violation_actions',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._blackhole = config.blackhole;
    this._blacklistSrc = config.blacklistSrc;
    this._executeScript = config.executeScript;
    this._executeScriptTimeout = config.executeScriptTimeout;
    this._id = config.id;
    this._name = config.name;
    this._sendNotificationOnly = config.sendNotificationOnly;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._notification.internalValue = config.notification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blackhole - computed: false, optional: true, required: false
  private _blackhole?: number; 
  public get blackhole() {
    return this.getNumberAttribute('blackhole');
  }
  public set blackhole(value: number) {
    this._blackhole = value;
  }
  public resetBlackhole() {
    this._blackhole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackholeInput() {
    return this._blackhole;
  }

  // blacklist_src - computed: false, optional: true, required: false
  private _blacklistSrc?: number; 
  public get blacklistSrc() {
    return this.getNumberAttribute('blacklist_src');
  }
  public set blacklistSrc(value: number) {
    this._blacklistSrc = value;
  }
  public resetBlacklistSrc() {
    this._blacklistSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistSrcInput() {
    return this._blacklistSrc;
  }

  // execute_script - computed: false, optional: true, required: false
  private _executeScript?: string; 
  public get executeScript() {
    return this.getStringAttribute('execute_script');
  }
  public set executeScript(value: string) {
    this._executeScript = value;
  }
  public resetExecuteScript() {
    this._executeScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeScriptInput() {
    return this._executeScript;
  }

  // execute_script_timeout - computed: false, optional: true, required: false
  private _executeScriptTimeout?: number; 
  public get executeScriptTimeout() {
    return this.getNumberAttribute('execute_script_timeout');
  }
  public set executeScriptTimeout(value: number) {
    this._executeScriptTimeout = value;
  }
  public resetExecuteScriptTimeout() {
    this._executeScriptTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeScriptTimeoutInput() {
    return this._executeScriptTimeout;
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

  // send_notification_only - computed: false, optional: true, required: false
  private _sendNotificationOnly?: number; 
  public get sendNotificationOnly() {
    return this.getNumberAttribute('send_notification_only');
  }
  public set sendNotificationOnly(value: number) {
    this._sendNotificationOnly = value;
  }
  public resetSendNotificationOnly() {
    this._sendNotificationOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendNotificationOnlyInput() {
    return this._sendNotificationOnly;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new DdosViolationActionsNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: DdosViolationActionsNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blackhole: cdktf.numberToTerraform(this._blackhole),
      blacklist_src: cdktf.numberToTerraform(this._blacklistSrc),
      execute_script: cdktf.stringToTerraform(this._executeScript),
      execute_script_timeout: cdktf.numberToTerraform(this._executeScriptTimeout),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      send_notification_only: cdktf.numberToTerraform(this._sendNotificationOnly),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      notification: cdktf.listMapper(ddosViolationActionsNotificationToTerraform, true)(this._notification.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blackhole: {
        value: cdktf.numberToHclTerraform(this._blackhole),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blacklist_src: {
        value: cdktf.numberToHclTerraform(this._blacklistSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      execute_script: {
        value: cdktf.stringToHclTerraform(this._executeScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_script_timeout: {
        value: cdktf.numberToHclTerraform(this._executeScriptTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      send_notification_only: {
        value: cdktf.numberToHclTerraform(this._sendNotificationOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification: {
        value: cdktf.listMapperHcl(ddosViolationActionsNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosViolationActionsNotificationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
