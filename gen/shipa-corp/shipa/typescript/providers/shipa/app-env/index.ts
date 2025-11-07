// https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEnvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#app AppEnv#app}
  */
  readonly app: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#id AppEnv#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * app_env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#app_env AppEnv#app_env}
  */
  readonly appEnv: AppEnvAppEnv;
}
export interface AppEnvAppEnvEnvs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#name AppEnv#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#value AppEnv#value}
  */
  readonly value: string;
}

export function appEnvAppEnvEnvsToTerraform(struct?: AppEnvAppEnvEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function appEnvAppEnvEnvsToHclTerraform(struct?: AppEnvAppEnvEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppEnvAppEnvEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppEnvAppEnvEnvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEnvAppEnvEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AppEnvAppEnvEnvsList extends cdktf.ComplexList {
  public internalValue? : AppEnvAppEnvEnvs[] | cdktf.IResolvable

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
  public get(index: number): AppEnvAppEnvEnvsOutputReference {
    return new AppEnvAppEnvEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppEnvAppEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#norestart AppEnv#norestart}
  */
  readonly norestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#private AppEnv#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * envs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#envs AppEnv#envs}
  */
  readonly envs: AppEnvAppEnvEnvs[] | cdktf.IResolvable;
}

export function appEnvAppEnvToTerraform(struct?: AppEnvAppEnvOutputReference | AppEnvAppEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    norestart: cdktf.booleanToTerraform(struct!.norestart),
    private: cdktf.booleanToTerraform(struct!.private),
    envs: cdktf.listMapper(appEnvAppEnvEnvsToTerraform, true)(struct!.envs),
  }
}


export function appEnvAppEnvToHclTerraform(struct?: AppEnvAppEnvOutputReference | AppEnvAppEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    norestart: {
      value: cdktf.booleanToHclTerraform(struct!.norestart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private: {
      value: cdktf.booleanToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    envs: {
      value: cdktf.listMapperHcl(appEnvAppEnvEnvsToHclTerraform, true)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "AppEnvAppEnvEnvsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppEnvAppEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppEnvAppEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._norestart !== undefined) {
      hasAnyValues = true;
      internalValueResult.norestart = this._norestart;
    }
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEnvAppEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._norestart = undefined;
      this._private = undefined;
      this._envs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._norestart = value.norestart;
      this._private = value.private;
      this._envs.internalValue = value.envs;
    }
  }

  // norestart - computed: false, optional: true, required: false
  private _norestart?: boolean | cdktf.IResolvable; 
  public get norestart() {
    return this.getBooleanAttribute('norestart');
  }
  public set norestart(value: boolean | cdktf.IResolvable) {
    this._norestart = value;
  }
  public resetNorestart() {
    this._norestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norestartInput() {
    return this._norestart;
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // envs - computed: false, optional: false, required: true
  private _envs = new AppEnvAppEnvEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: AppEnvAppEnvEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env shipa_app_env}
*/
export class AppEnv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shipa_app_env";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppEnv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppEnv to import
  * @param importFromId The id of the existing AppEnv that should be imported. Refer to the {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppEnv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shipa_app_env", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/app_env shipa_app_env} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEnvConfig
  */
  public constructor(scope: Construct, id: string, config: AppEnvConfig) {
    super(scope, id, {
      terraformResourceType: 'shipa_app_env',
      terraformGeneratorMetadata: {
        providerName: 'shipa',
        providerVersion: '0.0.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._id = config.id;
    this._appEnv.internalValue = config.appEnv;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
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

  // app_env - computed: false, optional: false, required: true
  private _appEnv = new AppEnvAppEnvOutputReference(this, "app_env");
  public get appEnv() {
    return this._appEnv;
  }
  public putAppEnv(value: AppEnvAppEnv) {
    this._appEnv.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appEnvInput() {
    return this._appEnv.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      id: cdktf.stringToTerraform(this._id),
      app_env: appEnvAppEnvToTerraform(this._appEnv.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
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
      app_env: {
        value: appEnvAppEnvToHclTerraform(this._appEnv.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppEnvAppEnvList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
