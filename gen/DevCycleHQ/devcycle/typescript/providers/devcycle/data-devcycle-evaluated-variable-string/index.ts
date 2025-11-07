// https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDevcycleEvaluatedVariableStringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default value of the Variable. Used as a fallback in case there is no variation value set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#default_value DataDevcycleEvaluatedVariableString#default_value}
  */
  readonly defaultValue: string;
  /**
  * Variable ID or key. Recommended to use the key when not managing an entire project in Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#id DataDevcycleEvaluatedVariableString#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * User data to drive bucketing into variations for feature flag evaluations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#user DataDevcycleEvaluatedVariableString#user}
  */
  readonly user: DataDevcycleEvaluatedVariableStringUser;
}
export interface DataDevcycleEvaluatedVariableStringUser {
  /**
  * User app build
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#app_build DataDevcycleEvaluatedVariableString#app_build}
  */
  readonly appBuild?: string;
  /**
  * User app version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#app_version DataDevcycleEvaluatedVariableString#app_version}
  */
  readonly appVersion?: string;
  /**
  * User email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#email DataDevcycleEvaluatedVariableString#email}
  */
  readonly email?: string;
  /**
  * User ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#id DataDevcycleEvaluatedVariableString#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * User name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#name DataDevcycleEvaluatedVariableString#name}
  */
  readonly name?: string;
}

export function dataDevcycleEvaluatedVariableStringUserToTerraform(struct?: DataDevcycleEvaluatedVariableStringUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_build: cdktf.stringToTerraform(struct!.appBuild),
    app_version: cdktf.stringToTerraform(struct!.appVersion),
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDevcycleEvaluatedVariableStringUserToHclTerraform(struct?: DataDevcycleEvaluatedVariableStringUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_build: {
      value: cdktf.stringToHclTerraform(struct!.appBuild),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_version: {
      value: cdktf.stringToHclTerraform(struct!.appVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDevcycleEvaluatedVariableStringUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDevcycleEvaluatedVariableStringUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.appBuild = this._appBuild;
    }
    if (this._appVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.appVersion = this._appVersion;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDevcycleEvaluatedVariableStringUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appBuild = undefined;
      this._appVersion = undefined;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appBuild = value.appBuild;
      this._appVersion = value.appVersion;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // app_build - computed: false, optional: true, required: false
  private _appBuild?: string; 
  public get appBuild() {
    return this.getStringAttribute('app_build');
  }
  public set appBuild(value: string) {
    this._appBuild = value;
  }
  public resetAppBuild() {
    this._appBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appBuildInput() {
    return this._appBuild;
  }

  // app_version - computed: false, optional: true, required: false
  private _appVersion?: string; 
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }
  public set appVersion(value: string) {
    this._appVersion = value;
  }
  public resetAppVersion() {
    this._appVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appVersionInput() {
    return this._appVersion;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string devcycle_evaluated_variable_string}
*/
export class DataDevcycleEvaluatedVariableString extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "devcycle_evaluated_variable_string";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDevcycleEvaluatedVariableString resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDevcycleEvaluatedVariableString to import
  * @param importFromId The id of the existing DataDevcycleEvaluatedVariableString that should be imported. Refer to the {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDevcycleEvaluatedVariableString to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "devcycle_evaluated_variable_string", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/evaluated_variable_string devcycle_evaluated_variable_string} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDevcycleEvaluatedVariableStringConfig
  */
  public constructor(scope: Construct, id: string, config: DataDevcycleEvaluatedVariableStringConfig) {
    super(scope, id, {
      terraformResourceType: 'devcycle_evaluated_variable_string',
      terraformGeneratorMetadata: {
        providerName: 'devcycle',
        providerVersion: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultValue = config.defaultValue;
    this._id = config.id;
    this._user.internalValue = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // user - computed: false, optional: false, required: true
  private _user = new DataDevcycleEvaluatedVariableStringUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: DataDevcycleEvaluatedVariableStringUser) {
    this._user.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_value: cdktf.stringToTerraform(this._defaultValue),
      id: cdktf.stringToTerraform(this._id),
      user: dataDevcycleEvaluatedVariableStringUserToTerraform(this._user.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
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
      user: {
        value: dataDevcycleEvaluatedVariableStringUserToHclTerraform(this._user.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataDevcycleEvaluatedVariableStringUser",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
