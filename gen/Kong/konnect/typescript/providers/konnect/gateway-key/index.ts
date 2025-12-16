// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#control_plane_id GatewayKey#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#created_at GatewayKey#created_at}
  */
  readonly createdAt?: number;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#id GatewayKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A JSON Web Key represented as a string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#jwk GatewayKey#jwk}
  */
  readonly jwk?: string;
  /**
  * A unique identifier for a key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#kid GatewayKey#kid}
  */
  readonly kid: string;
  /**
  * The name to associate with the given keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#name GatewayKey#name}
  */
  readonly name?: string;
  /**
  * A keypair in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#pem GatewayKey#pem}
  */
  readonly pem?: GatewayKeyPem;
  /**
  * The id (an UUID) of the key-set with which to associate the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#set GatewayKey#set}
  */
  readonly set?: GatewayKeySet;
  /**
  * An optional set of strings associated with the Key for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#tags GatewayKey#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#updated_at GatewayKey#updated_at}
  */
  readonly updatedAt?: number;
  /**
  * X.509 certificate SHA-1 thumbprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#x5t GatewayKey#x5t}
  */
  readonly x5T?: string;
}
export interface GatewayKeyPem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#private_key GatewayKey#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#public_key GatewayKey#public_key}
  */
  readonly publicKey?: string;
}

export function gatewayKeyPemToTerraform(struct?: GatewayKeyPem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function gatewayKeyPemToHclTerraform(struct?: GatewayKeyPem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayKeyPemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayKeyPem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayKeyPem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privateKey = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privateKey = value.privateKey;
      this._publicKey = value.publicKey;
    }
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}
export interface GatewayKeySet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#id GatewayKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayKeySetToTerraform(struct?: GatewayKeySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayKeySetToHclTerraform(struct?: GatewayKeySet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayKeySetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayKeySet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayKeySet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key konnect_gateway_key}
*/
export class GatewayKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayKey to import
  * @param importFromId The id of the existing GatewayKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_key konnect_gateway_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_key',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._id = config.id;
    this._jwk = config.jwk;
    this._kid = config.kid;
    this._name = config.name;
    this._pem.internalValue = config.pem;
    this._set.internalValue = config.set;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
    this._x5T = config.x5T;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // jwk - computed: false, optional: true, required: false
  private _jwk?: string; 
  public get jwk() {
    return this.getStringAttribute('jwk');
  }
  public set jwk(value: string) {
    this._jwk = value;
  }
  public resetJwk() {
    this._jwk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwkInput() {
    return this._jwk;
  }

  // kid - computed: false, optional: false, required: true
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
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

  // pem - computed: true, optional: true, required: false
  private _pem = new GatewayKeyPemOutputReference(this, "pem");
  public get pem() {
    return this._pem;
  }
  public putPem(value: GatewayKeyPem) {
    this._pem.internalValue = value;
  }
  public resetPem() {
    this._pem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemInput() {
    return this._pem.internalValue;
  }

  // set - computed: true, optional: true, required: false
  private _set = new GatewayKeySetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: GatewayKeySet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // x5t - computed: false, optional: true, required: false
  private _x5T?: string; 
  public get x5T() {
    return this.getStringAttribute('x5t');
  }
  public set x5T(value: string) {
    this._x5T = value;
  }
  public resetX5T() {
    this._x5T = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x5TInput() {
    return this._x5T;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      id: cdktf.stringToTerraform(this._id),
      jwk: cdktf.stringToTerraform(this._jwk),
      kid: cdktf.stringToTerraform(this._kid),
      name: cdktf.stringToTerraform(this._name),
      pem: gatewayKeyPemToTerraform(this._pem.internalValue),
      set: gatewayKeySetToTerraform(this._set.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
      x5t: cdktf.stringToTerraform(this._x5T),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwk: {
        value: cdktf.stringToHclTerraform(this._jwk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kid: {
        value: cdktf.stringToHclTerraform(this._kid),
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
      pem: {
        value: gatewayKeyPemToHclTerraform(this._pem.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayKeyPem",
      },
      set: {
        value: gatewayKeySetToHclTerraform(this._set.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayKeySet",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      x5t: {
        value: cdktf.stringToHclTerraform(this._x5T),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
