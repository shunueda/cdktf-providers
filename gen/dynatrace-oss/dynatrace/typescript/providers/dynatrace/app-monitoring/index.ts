// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible Values: `debug`, `error`, `info`, `off`, `warn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#default_log_level AppMonitoring#default_log_level}
  */
  readonly defaultLogLevel: string;
  /**
  * Possible Values: `off`, `on`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#default_trace_level AppMonitoring#default_trace_level}
  */
  readonly defaultTraceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#id AppMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * app_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#app_monitoring AppMonitoring#app_monitoring}
  */
  readonly appMonitoring?: AppMonitoringAppMonitoring;
}
export interface AppMonitoringAppMonitoringAppMonitoring {
  /**
  * App ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#app_id AppMonitoring#app_id}
  */
  readonly appId: string;
  /**
  * Possible Values: `debug`, `error`, `info`, `off`, `useDefault`, `warn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#custom_log_level AppMonitoring#custom_log_level}
  */
  readonly customLogLevel: string;
  /**
  * Possible Values: `off`, `on`, `useDefault`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#custom_trace_level AppMonitoring#custom_trace_level}
  */
  readonly customTraceLevel?: string;
}

export function appMonitoringAppMonitoringAppMonitoringToTerraform(struct?: AppMonitoringAppMonitoringAppMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    custom_log_level: cdktf.stringToTerraform(struct!.customLogLevel),
    custom_trace_level: cdktf.stringToTerraform(struct!.customTraceLevel),
  }
}


export function appMonitoringAppMonitoringAppMonitoringToHclTerraform(struct?: AppMonitoringAppMonitoringAppMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_log_level: {
      value: cdktf.stringToHclTerraform(struct!.customLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_trace_level: {
      value: cdktf.stringToHclTerraform(struct!.customTraceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppMonitoringAppMonitoringAppMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppMonitoringAppMonitoringAppMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._customLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLogLevel = this._customLogLevel;
    }
    if (this._customTraceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTraceLevel = this._customTraceLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppMonitoringAppMonitoringAppMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._customLogLevel = undefined;
      this._customTraceLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._customLogLevel = value.customLogLevel;
      this._customTraceLevel = value.customTraceLevel;
    }
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // custom_log_level - computed: false, optional: false, required: true
  private _customLogLevel?: string; 
  public get customLogLevel() {
    return this.getStringAttribute('custom_log_level');
  }
  public set customLogLevel(value: string) {
    this._customLogLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogLevelInput() {
    return this._customLogLevel;
  }

  // custom_trace_level - computed: false, optional: true, required: false
  private _customTraceLevel?: string; 
  public get customTraceLevel() {
    return this.getStringAttribute('custom_trace_level');
  }
  public set customTraceLevel(value: string) {
    this._customTraceLevel = value;
  }
  public resetCustomTraceLevel() {
    this._customTraceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTraceLevelInput() {
    return this._customTraceLevel;
  }
}

export class AppMonitoringAppMonitoringAppMonitoringList extends cdktf.ComplexList {
  public internalValue? : AppMonitoringAppMonitoringAppMonitoring[] | cdktf.IResolvable

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
  public get(index: number): AppMonitoringAppMonitoringAppMonitoringOutputReference {
    return new AppMonitoringAppMonitoringAppMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppMonitoringAppMonitoring {
  /**
  * app_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#app_monitoring AppMonitoring#app_monitoring}
  */
  readonly appMonitoring: AppMonitoringAppMonitoringAppMonitoring[] | cdktf.IResolvable;
}

export function appMonitoringAppMonitoringToTerraform(struct?: AppMonitoringAppMonitoringOutputReference | AppMonitoringAppMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_monitoring: cdktf.listMapper(appMonitoringAppMonitoringAppMonitoringToTerraform, true)(struct!.appMonitoring),
  }
}


export function appMonitoringAppMonitoringToHclTerraform(struct?: AppMonitoringAppMonitoringOutputReference | AppMonitoringAppMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_monitoring: {
      value: cdktf.listMapperHcl(appMonitoringAppMonitoringAppMonitoringToHclTerraform, true)(struct!.appMonitoring),
      isBlock: true,
      type: "set",
      storageClassType: "AppMonitoringAppMonitoringAppMonitoringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppMonitoringAppMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppMonitoringAppMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appMonitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appMonitoring = this._appMonitoring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppMonitoringAppMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appMonitoring.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appMonitoring.internalValue = value.appMonitoring;
    }
  }

  // app_monitoring - computed: false, optional: false, required: true
  private _appMonitoring = new AppMonitoringAppMonitoringAppMonitoringList(this, "app_monitoring", true);
  public get appMonitoring() {
    return this._appMonitoring;
  }
  public putAppMonitoring(value: AppMonitoringAppMonitoringAppMonitoring[] | cdktf.IResolvable) {
    this._appMonitoring.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appMonitoringInput() {
    return this._appMonitoring.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring dynatrace_app_monitoring}
*/
export class AppMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_app_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppMonitoring to import
  * @param importFromId The id of the existing AppMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_app_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/app_monitoring dynatrace_app_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppMonitoringConfig
  */
  public constructor(scope: Construct, id: string, config: AppMonitoringConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_app_monitoring',
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
    this._defaultLogLevel = config.defaultLogLevel;
    this._defaultTraceLevel = config.defaultTraceLevel;
    this._id = config.id;
    this._appMonitoring.internalValue = config.appMonitoring;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_log_level - computed: false, optional: false, required: true
  private _defaultLogLevel?: string; 
  public get defaultLogLevel() {
    return this.getStringAttribute('default_log_level');
  }
  public set defaultLogLevel(value: string) {
    this._defaultLogLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLogLevelInput() {
    return this._defaultLogLevel;
  }

  // default_trace_level - computed: false, optional: true, required: false
  private _defaultTraceLevel?: string; 
  public get defaultTraceLevel() {
    return this.getStringAttribute('default_trace_level');
  }
  public set defaultTraceLevel(value: string) {
    this._defaultTraceLevel = value;
  }
  public resetDefaultTraceLevel() {
    this._defaultTraceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTraceLevelInput() {
    return this._defaultTraceLevel;
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

  // app_monitoring - computed: false, optional: true, required: false
  private _appMonitoring = new AppMonitoringAppMonitoringOutputReference(this, "app_monitoring");
  public get appMonitoring() {
    return this._appMonitoring;
  }
  public putAppMonitoring(value: AppMonitoringAppMonitoring) {
    this._appMonitoring.internalValue = value;
  }
  public resetAppMonitoring() {
    this._appMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appMonitoringInput() {
    return this._appMonitoring.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_log_level: cdktf.stringToTerraform(this._defaultLogLevel),
      default_trace_level: cdktf.stringToTerraform(this._defaultTraceLevel),
      id: cdktf.stringToTerraform(this._id),
      app_monitoring: appMonitoringAppMonitoringToTerraform(this._appMonitoring.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_log_level: {
        value: cdktf.stringToHclTerraform(this._defaultLogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_trace_level: {
        value: cdktf.stringToHclTerraform(this._defaultTraceLevel),
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
      app_monitoring: {
        value: appMonitoringAppMonitoringToHclTerraform(this._appMonitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppMonitoringAppMonitoringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
