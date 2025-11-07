// https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of environment variable names to their values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#env_vars EnvGroup#env_vars}
  */
  readonly envVars?: { [key: string]: EnvGroupEnvVars } | cdktf.IResolvable;
  /**
  * ID of the [project environment](https://render.com/docs/projects) that the resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#environment_id EnvGroup#environment_id}
  */
  readonly environmentId?: string;
  /**
  * Descriptive name for this environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#name EnvGroup#name}
  */
  readonly name: string;
  /**
  * A map of secret file paths to their contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#secret_files EnvGroup#secret_files}
  */
  readonly secretFiles?: { [key: string]: EnvGroupSecretFiles } | cdktf.IResolvable;
}
export interface EnvGroupEnvVars {
  /**
  * If true, Render will generate the variable value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#generate_value EnvGroup#generate_value}
  */
  readonly generateValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#value EnvGroup#value}
  */
  readonly value?: string;
}

export function envGroupEnvVarsToTerraform(struct?: EnvGroupEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generate_value: cdktf.booleanToTerraform(struct!.generateValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function envGroupEnvVarsToHclTerraform(struct?: EnvGroupEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generate_value: {
      value: cdktf.booleanToHclTerraform(struct!.generateValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class EnvGroupEnvVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): EnvGroupEnvVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generateValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateValue = this._generateValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvGroupEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generateValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generateValue = value.generateValue;
      this._value = value.value;
    }
  }

  // generate_value - computed: true, optional: true, required: false
  private _generateValue?: boolean | cdktf.IResolvable; 
  public get generateValue() {
    return this.getBooleanAttribute('generate_value');
  }
  public set generateValue(value: boolean | cdktf.IResolvable) {
    this._generateValue = value;
  }
  public resetGenerateValue() {
    this._generateValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateValueInput() {
    return this._generateValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EnvGroupEnvVarsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: EnvGroupEnvVars } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): EnvGroupEnvVarsOutputReference {
    return new EnvGroupEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface EnvGroupSecretFiles {
  /**
  * The content of the secret file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#content EnvGroup#content}
  */
  readonly content: string;
}

export function envGroupSecretFilesToTerraform(struct?: EnvGroupSecretFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
  }
}


export function envGroupSecretFilesToHclTerraform(struct?: EnvGroupSecretFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvGroupSecretFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): EnvGroupSecretFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvGroupSecretFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }
}

export class EnvGroupSecretFilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: EnvGroupSecretFiles } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): EnvGroupSecretFilesOutputReference {
    return new EnvGroupSecretFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group render_env_group}
*/
export class EnvGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "render_env_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvGroup to import
  * @param importFromId The id of the existing EnvGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "render_env_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/render-oss/render/1.7.5/docs/resources/env_group render_env_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EnvGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'render_env_group',
      terraformGeneratorMetadata: {
        providerName: 'render',
        providerVersion: '1.7.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._envVars.internalValue = config.envVars;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._secretFiles.internalValue = config.secretFiles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new EnvGroupEnvVarsMap(this, "env_vars");
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: { [key: string]: EnvGroupEnvVars } | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // secret_files - computed: false, optional: true, required: false
  private _secretFiles = new EnvGroupSecretFilesMap(this, "secret_files");
  public get secretFiles() {
    return this._secretFiles;
  }
  public putSecretFiles(value: { [key: string]: EnvGroupSecretFiles } | cdktf.IResolvable) {
    this._secretFiles.internalValue = value;
  }
  public resetSecretFiles() {
    this._secretFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFilesInput() {
    return this._secretFiles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      env_vars: cdktf.hashMapper(envGroupEnvVarsToTerraform)(this._envVars.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      secret_files: cdktf.hashMapper(envGroupSecretFilesToTerraform)(this._secretFiles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      env_vars: {
        value: cdktf.hashMapperHcl(envGroupEnvVarsToHclTerraform)(this._envVars.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "EnvGroupEnvVarsMap",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      secret_files: {
        value: cdktf.hashMapperHcl(envGroupSecretFilesToHclTerraform)(this._secretFiles.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "EnvGroupSecretFilesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
