// https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcrRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Credentials to authenticate with the ECR registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry#credentials_auth EcrRegistry#credentials_auth}
  */
  readonly credentialsAuth: EcrRegistryCredentialsAuth;
  /**
  * Name for the ECR registry, used to reference it in Prodvana configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry#name EcrRegistry#name}
  */
  readonly name: string;
  /**
  * AWS region where the ECR registry is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry#region EcrRegistry#region}
  */
  readonly region: string;
}
export interface EcrRegistryCredentialsAuth {
  /**
  * AWS Access Key ID with permissions to the ECR registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry#access_key_id EcrRegistry#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * AWS Secret Access Key with permissions to the ECR registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry#secret_access_key EcrRegistry#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function ecrRegistryCredentialsAuthToTerraform(struct?: EcrRegistryCredentialsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function ecrRegistryCredentialsAuthToHclTerraform(struct?: EcrRegistryCredentialsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcrRegistryCredentialsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcrRegistryCredentialsAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcrRegistryCredentialsAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry prodvana_ecr_registry}
*/
export class EcrRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prodvana_ecr_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcrRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcrRegistry to import
  * @param importFromId The id of the existing EcrRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcrRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prodvana_ecr_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/ecr_registry prodvana_ecr_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcrRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: EcrRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'prodvana_ecr_registry',
      terraformGeneratorMetadata: {
        providerName: 'prodvana',
        providerVersion: '0.1.25',
        providerVersionConstraint: '0.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._credentialsAuth.internalValue = config.credentialsAuth;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credentials_auth - computed: false, optional: false, required: true
  private _credentialsAuth = new EcrRegistryCredentialsAuthOutputReference(this, "credentials_auth");
  public get credentialsAuth() {
    return this._credentialsAuth;
  }
  public putCredentialsAuth(value: EcrRegistryCredentialsAuth) {
    this._credentialsAuth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsAuthInput() {
    return this._credentialsAuth.internalValue;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credentials_auth: ecrRegistryCredentialsAuthToTerraform(this._credentialsAuth.internalValue),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credentials_auth: {
        value: ecrRegistryCredentialsAuthToHclTerraform(this._credentialsAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcrRegistryCredentialsAuth",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
