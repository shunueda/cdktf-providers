// https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertMethodPagerdutyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#description AlertMethodPagerduty#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#display_name AlertMethodPagerduty#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#id AlertMethodPagerduty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PagerDuty Integration Key. For more details, check [Services and integrations](https://support.pagerduty.com/docs/services-and-integrations).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#integration_key AlertMethodPagerduty#integration_key}
  */
  readonly integrationKey?: string;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#name AlertMethodPagerduty#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#project AlertMethodPagerduty#project}
  */
  readonly project: string;
  /**
  * send_resolution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#send_resolution AlertMethodPagerduty#send_resolution}
  */
  readonly sendResolution?: AlertMethodPagerdutySendResolution;
}
export interface AlertMethodPagerdutySendResolution {
  /**
  * A message that will be attached to your 'all clear' notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#message AlertMethodPagerduty#message}
  */
  readonly message?: string;
}

export function alertMethodPagerdutySendResolutionToTerraform(struct?: AlertMethodPagerdutySendResolutionOutputReference | AlertMethodPagerdutySendResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
  }
}


export function alertMethodPagerdutySendResolutionToHclTerraform(struct?: AlertMethodPagerdutySendResolutionOutputReference | AlertMethodPagerdutySendResolution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertMethodPagerdutySendResolutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertMethodPagerdutySendResolution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertMethodPagerdutySendResolution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._message = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._message = value.message;
    }
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty nobl9_alert_method_pagerduty}
*/
export class AlertMethodPagerduty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_alert_method_pagerduty";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertMethodPagerduty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertMethodPagerduty to import
  * @param importFromId The id of the existing AlertMethodPagerduty that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertMethodPagerduty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_alert_method_pagerduty", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/alert_method_pagerduty nobl9_alert_method_pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertMethodPagerdutyConfig
  */
  public constructor(scope: Construct, id: string, config: AlertMethodPagerdutyConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_alert_method_pagerduty',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.45.0',
        providerVersionConstraint: '0.45.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._integrationKey = config.integrationKey;
    this._name = config.name;
    this._project = config.project;
    this._sendResolution.internalValue = config.sendResolution;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // integration_key - computed: true, optional: true, required: false
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  public resetIntegrationKey() {
    this._integrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // send_resolution - computed: false, optional: true, required: false
  private _sendResolution = new AlertMethodPagerdutySendResolutionOutputReference(this, "send_resolution");
  public get sendResolution() {
    return this._sendResolution;
  }
  public putSendResolution(value: AlertMethodPagerdutySendResolution) {
    this._sendResolution.internalValue = value;
  }
  public resetSendResolution() {
    this._sendResolution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendResolutionInput() {
    return this._sendResolution.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      send_resolution: alertMethodPagerdutySendResolutionToTerraform(this._sendResolution.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_resolution: {
        value: alertMethodPagerdutySendResolutionToHclTerraform(this._sendResolution.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertMethodPagerdutySendResolutionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
