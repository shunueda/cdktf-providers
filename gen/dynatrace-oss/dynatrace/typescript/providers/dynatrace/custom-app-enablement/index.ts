// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomAppEnablementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement#id CustomAppEnablement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The scope of this setting (CUSTOM_APPLICATION). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement#scope CustomAppEnablement#scope}
  */
  readonly scope?: string;
  /**
  * rum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement#rum CustomAppEnablement#rum}
  */
  readonly rum: CustomAppEnablementRum;
}
export interface CustomAppEnablementRum {
  /**
  * (Field has overlap with `dynatrace_mobile_application`) Percentage of user sessions captured and analyzed. By default, Dynatrace captures all user actions and user sessions for analysis. This approach ensures complete insight into your application’s performance and customer experience. You can optionally reduce the granularity of user-action and user-session analysis by capturing a lower percentage of user sessions. While this approach can reduce monitoring costs, it also results in lower visibility into how your customers are using your applications. For example, a setting of 10% results in Dynatrace analyzing only every tenth user session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement#cost_and_traffic_control CustomAppEnablement#cost_and_traffic_control}
  */
  readonly costAndTrafficControl: number;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement#enabled CustomAppEnablement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function customAppEnablementRumToTerraform(struct?: CustomAppEnablementRumOutputReference | CustomAppEnablementRum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_and_traffic_control: cdktf.numberToTerraform(struct!.costAndTrafficControl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function customAppEnablementRumToHclTerraform(struct?: CustomAppEnablementRumOutputReference | CustomAppEnablementRum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_and_traffic_control: {
      value: cdktf.numberToHclTerraform(struct!.costAndTrafficControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomAppEnablementRumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CustomAppEnablementRum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costAndTrafficControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAndTrafficControl = this._costAndTrafficControl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomAppEnablementRum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costAndTrafficControl = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costAndTrafficControl = value.costAndTrafficControl;
      this._enabled = value.enabled;
    }
  }

  // cost_and_traffic_control - computed: false, optional: false, required: true
  private _costAndTrafficControl?: number; 
  public get costAndTrafficControl() {
    return this.getNumberAttribute('cost_and_traffic_control');
  }
  public set costAndTrafficControl(value: number) {
    this._costAndTrafficControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAndTrafficControlInput() {
    return this._costAndTrafficControl;
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement dynatrace_custom_app_enablement}
*/
export class CustomAppEnablement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_custom_app_enablement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomAppEnablement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomAppEnablement to import
  * @param importFromId The id of the existing CustomAppEnablement that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomAppEnablement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_custom_app_enablement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/custom_app_enablement dynatrace_custom_app_enablement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomAppEnablementConfig
  */
  public constructor(scope: Construct, id: string, config: CustomAppEnablementConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_custom_app_enablement',
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
    this._id = config.id;
    this._scope = config.scope;
    this._rum.internalValue = config.rum;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // rum - computed: false, optional: false, required: true
  private _rum = new CustomAppEnablementRumOutputReference(this, "rum");
  public get rum() {
    return this._rum;
  }
  public putRum(value: CustomAppEnablementRum) {
    this._rum.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rumInput() {
    return this._rum.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      scope: cdktf.stringToTerraform(this._scope),
      rum: customAppEnablementRumToTerraform(this._rum.internalValue),
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
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rum: {
        value: customAppEnablementRumToHclTerraform(this._rum.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CustomAppEnablementRumList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
