// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatedSecretCloudflareTokensConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#config RotatedSecretCloudflareTokens#config}
  */
  readonly config: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#id RotatedSecretCloudflareTokens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this rotated secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#integration RotatedSecretCloudflareTokens#integration}
  */
  readonly integration: string;
  /**
  * The name of the rotated secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#name RotatedSecretCloudflareTokens#name}
  */
  readonly name: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#project RotatedSecretCloudflareTokens#project}
  */
  readonly project: string;
  /**
  * How frequently to rotate the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#rotation_period_sec RotatedSecretCloudflareTokens#rotation_period_sec}
  */
  readonly rotationPeriodSec: number;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#credentials RotatedSecretCloudflareTokens#credentials}
  */
  readonly credentials: RotatedSecretCloudflareTokensCredentials[] | cdktf.IResolvable;
}
export interface RotatedSecretCloudflareTokensCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#value RotatedSecretCloudflareTokens#value}
  */
  readonly value: string;
}

export function rotatedSecretCloudflareTokensCredentialsToTerraform(struct?: RotatedSecretCloudflareTokensCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function rotatedSecretCloudflareTokensCredentialsToHclTerraform(struct?: RotatedSecretCloudflareTokensCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class RotatedSecretCloudflareTokensCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RotatedSecretCloudflareTokensCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RotatedSecretCloudflareTokensCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
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

export class RotatedSecretCloudflareTokensCredentialsList extends cdktf.ComplexList {
  public internalValue? : RotatedSecretCloudflareTokensCredentials[] | cdktf.IResolvable

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
  public get(index: number): RotatedSecretCloudflareTokensCredentialsOutputReference {
    return new RotatedSecretCloudflareTokensCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens doppler_rotated_secret_cloudflare_tokens}
*/
export class RotatedSecretCloudflareTokens extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_rotated_secret_cloudflare_tokens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RotatedSecretCloudflareTokens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RotatedSecretCloudflareTokens to import
  * @param importFromId The id of the existing RotatedSecretCloudflareTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RotatedSecretCloudflareTokens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_rotated_secret_cloudflare_tokens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/rotated_secret_cloudflare_tokens doppler_rotated_secret_cloudflare_tokens} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatedSecretCloudflareTokensConfig
  */
  public constructor(scope: Construct, id: string, config: RotatedSecretCloudflareTokensConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_rotated_secret_cloudflare_tokens',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._id = config.id;
    this._integration = config.integration;
    this._name = config.name;
    this._project = config.project;
    this._rotationPeriodSec = config.rotationPeriodSec;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
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

  // rotation_period_sec - computed: false, optional: false, required: true
  private _rotationPeriodSec?: number; 
  public get rotationPeriodSec() {
    return this.getNumberAttribute('rotation_period_sec');
  }
  public set rotationPeriodSec(value: number) {
    this._rotationPeriodSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodSecInput() {
    return this._rotationPeriodSec;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new RotatedSecretCloudflareTokensCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: RotatedSecretCloudflareTokensCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      rotation_period_sec: cdktf.numberToTerraform(this._rotationPeriodSec),
      credentials: cdktf.listMapper(rotatedSecretCloudflareTokensCredentialsToTerraform, true)(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
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
      integration: {
        value: cdktf.stringToHclTerraform(this._integration),
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
      rotation_period_sec: {
        value: cdktf.numberToHclTerraform(this._rotationPeriodSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      credentials: {
        value: cdktf.listMapperHcl(rotatedSecretCloudflareTokensCredentialsToHclTerraform, true)(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RotatedSecretCloudflareTokensCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
