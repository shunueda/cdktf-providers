// https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Credential attributes accordingly to the cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#attributes Credential#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Credential authorization type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#auth_type Credential#auth_type}
  */
  readonly authType: string;
  /**
  * Add credentials to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#client_credential Credential#client_credential}
  */
  readonly clientCredential?: boolean | cdktf.IResolvable;
  /**
  * Add credentials to the controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#controller_credential Credential#controller_credential}
  */
  readonly controllerCredential?: boolean | cdktf.IResolvable;
  /**
  * The name to be assigned to the credential. Changing this value will cause the credential to be destroyed and recreated by terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#name Credential#name}
  */
  readonly name: string;
  /**
  * cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#cloud Credential#cloud}
  */
  readonly cloud?: CredentialCloud[] | cdktf.IResolvable;
}
export interface CredentialCloud {
  /**
  * The name of the cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#name Credential#name}
  */
  readonly name: string;
}

export function credentialCloudToTerraform(struct?: CredentialCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function credentialCloudToHclTerraform(struct?: CredentialCloud | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class CredentialCloudList extends cdktf.ComplexList {
  public internalValue? : CredentialCloud[] | cdktf.IResolvable

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
  public get(index: number): CredentialCloudOutputReference {
    return new CredentialCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential juju_credential}
*/
export class Credential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "juju_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Credential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Credential to import
  * @param importFromId The id of the existing Credential that should be imported. Refer to the {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Credential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "juju_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juju/juju/0.23.2/docs/resources/credential juju_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'juju_credential',
      terraformGeneratorMetadata: {
        providerName: 'juju',
        providerVersion: '0.23.2',
        providerVersionConstraint: '0.23.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._authType = config.authType;
    this._clientCredential = config.clientCredential;
    this._controllerCredential = config.controllerCredential;
    this._name = config.name;
    this._cloud.internalValue = config.cloud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // client_credential - computed: true, optional: true, required: false
  private _clientCredential?: boolean | cdktf.IResolvable; 
  public get clientCredential() {
    return this.getBooleanAttribute('client_credential');
  }
  public set clientCredential(value: boolean | cdktf.IResolvable) {
    this._clientCredential = value;
  }
  public resetClientCredential() {
    this._clientCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialInput() {
    return this._clientCredential;
  }

  // controller_credential - computed: true, optional: true, required: false
  private _controllerCredential?: boolean | cdktf.IResolvable; 
  public get controllerCredential() {
    return this.getBooleanAttribute('controller_credential');
  }
  public set controllerCredential(value: boolean | cdktf.IResolvable) {
    this._controllerCredential = value;
  }
  public resetControllerCredential() {
    this._controllerCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerCredentialInput() {
    return this._controllerCredential;
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

  // cloud - computed: false, optional: true, required: false
  private _cloud = new CredentialCloudList(this, "cloud", false);
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: CredentialCloud[] | cdktf.IResolvable) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      auth_type: cdktf.stringToTerraform(this._authType),
      client_credential: cdktf.booleanToTerraform(this._clientCredential),
      controller_credential: cdktf.booleanToTerraform(this._controllerCredential),
      name: cdktf.stringToTerraform(this._name),
      cloud: cdktf.listMapper(credentialCloudToTerraform, true)(this._cloud.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_credential: {
        value: cdktf.booleanToHclTerraform(this._clientCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      controller_credential: {
        value: cdktf.booleanToHclTerraform(this._controllerCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.listMapperHcl(credentialCloudToHclTerraform, true)(this._cloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialCloudList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
