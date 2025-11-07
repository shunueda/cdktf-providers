// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNotificationTemplateCommonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common#id DdosNotificationTemplateCommon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common#on_box_gui_notification DdosNotificationTemplateCommon#on_box_gui_notification}
  */
  readonly onBoxGuiNotification?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common#uuid DdosNotificationTemplateCommon#uuid}
  */
  readonly uuid?: string;
  /**
  * default_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common#default_template DdosNotificationTemplateCommon#default_template}
  */
  readonly defaultTemplate?: DdosNotificationTemplateCommonDefaultTemplate[] | cdktf.IResolvable;
}
export interface DdosNotificationTemplateCommonDefaultTemplate {
  /**
  * Specify the notification template name (Default notification template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common#default_notification_template DdosNotificationTemplateCommon#default_notification_template}
  */
  readonly defaultNotificationTemplate?: string;
}

export function ddosNotificationTemplateCommonDefaultTemplateToTerraform(struct?: DdosNotificationTemplateCommonDefaultTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_notification_template: cdktf.stringToTerraform(struct!.defaultNotificationTemplate),
  }
}


export function ddosNotificationTemplateCommonDefaultTemplateToHclTerraform(struct?: DdosNotificationTemplateCommonDefaultTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_notification_template: {
      value: cdktf.stringToHclTerraform(struct!.defaultNotificationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNotificationTemplateCommonDefaultTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNotificationTemplateCommonDefaultTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultNotificationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNotificationTemplate = this._defaultNotificationTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNotificationTemplateCommonDefaultTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultNotificationTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultNotificationTemplate = value.defaultNotificationTemplate;
    }
  }

  // default_notification_template - computed: false, optional: true, required: false
  private _defaultNotificationTemplate?: string; 
  public get defaultNotificationTemplate() {
    return this.getStringAttribute('default_notification_template');
  }
  public set defaultNotificationTemplate(value: string) {
    this._defaultNotificationTemplate = value;
  }
  public resetDefaultNotificationTemplate() {
    this._defaultNotificationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNotificationTemplateInput() {
    return this._defaultNotificationTemplate;
  }
}

export class DdosNotificationTemplateCommonDefaultTemplateList extends cdktf.ComplexList {
  public internalValue? : DdosNotificationTemplateCommonDefaultTemplate[] | cdktf.IResolvable

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
  public get(index: number): DdosNotificationTemplateCommonDefaultTemplateOutputReference {
    return new DdosNotificationTemplateCommonDefaultTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common thunder_ddos_notification_template_common}
*/
export class DdosNotificationTemplateCommon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_notification_template_common";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNotificationTemplateCommon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNotificationTemplateCommon to import
  * @param importFromId The id of the existing DdosNotificationTemplateCommon that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNotificationTemplateCommon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_notification_template_common", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template_common thunder_ddos_notification_template_common} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNotificationTemplateCommonConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosNotificationTemplateCommonConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_notification_template_common',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._onBoxGuiNotification = config.onBoxGuiNotification;
    this._uuid = config.uuid;
    this._defaultTemplate.internalValue = config.defaultTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // on_box_gui_notification - computed: false, optional: true, required: false
  private _onBoxGuiNotification?: string; 
  public get onBoxGuiNotification() {
    return this.getStringAttribute('on_box_gui_notification');
  }
  public set onBoxGuiNotification(value: string) {
    this._onBoxGuiNotification = value;
  }
  public resetOnBoxGuiNotification() {
    this._onBoxGuiNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onBoxGuiNotificationInput() {
    return this._onBoxGuiNotification;
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

  // default_template - computed: false, optional: true, required: false
  private _defaultTemplate = new DdosNotificationTemplateCommonDefaultTemplateList(this, "default_template", false);
  public get defaultTemplate() {
    return this._defaultTemplate;
  }
  public putDefaultTemplate(value: DdosNotificationTemplateCommonDefaultTemplate[] | cdktf.IResolvable) {
    this._defaultTemplate.internalValue = value;
  }
  public resetDefaultTemplate() {
    this._defaultTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemplateInput() {
    return this._defaultTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      on_box_gui_notification: cdktf.stringToTerraform(this._onBoxGuiNotification),
      uuid: cdktf.stringToTerraform(this._uuid),
      default_template: cdktf.listMapper(ddosNotificationTemplateCommonDefaultTemplateToTerraform, true)(this._defaultTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_box_gui_notification: {
        value: cdktf.stringToHclTerraform(this._onBoxGuiNotification),
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
      default_template: {
        value: cdktf.listMapperHcl(ddosNotificationTemplateCommonDefaultTemplateToHclTerraform, true)(this._defaultTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNotificationTemplateCommonDefaultTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
